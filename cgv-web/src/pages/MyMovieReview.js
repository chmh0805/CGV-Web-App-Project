import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import { deleteCookie, getCookie } from "../utils/JWT";

const MDCon = styled.div`
  width: 100%;
  background-color: #fdfcf0;
  padding-bottom: 50px;
`;

const NavSection = styled.div`
  background-color: #f1f0e5;
  width: auto;
  height: 30px;
  border-bottom: 1px solid #cacac0;
`;

const NavSectionItemBox = styled.div`
  width: 980px;
  padding-top: 5px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavSectionHome = styled(Link)`
  color: black;

  &:hover {
    color: black;
  }
`;

const NavSectionArrow = styled.span`
  color: #999999;
  font-size: 16px;
  font-weight: 1000;
  margin-left: 15px;
  margin-right: 15px;
`;

const NavSectionSpan = styled.span`
  font-size: 13px;
`;

const MDContentCon = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const MDContentBox = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

const MDHeadBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  border-bottom: 3px solid #241d1e;
`;

const MDHeadTitle = styled.h3`
  font-weight: 600;
  font-size: 36px;
  margin: 0;
`;

const ReviewListBox = styled.div`
  margin-top: 30px;
  width: 800px;
  min-height: 300px;
`;

const WatchedMovieListItem = styled.div`
  width: 100%;
  height: 170px;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d6d4ca;
  line-height: 1.2;
  color: #666;
  display: flex;
  justify-content: space-between;
`;

const WatchedMovieImg = styled.img`
  width: 110px;
  height: 150px;
`;

const WatchedMovieInfo = styled.div`
  width: 660px;
  position: relative;
`;

const WatchedMovieInfoTitle = styled.div`
  width: 100%;
  height: 35px;
  margin: 0;
  margin-left: 10px;
`;

const WatchedMovieInfoStrong = styled.strong`
  margin-bottom: 8px;
  color: #222;
  font-weight: 600;
  font-size: 22px;
  white-space: nowrap;
`;

const DeleteButton = styled.button`
  position: absolute;
  top: 0px;
  right: 12px;
  width: 20px;
  height: 20px;
  padding: 0;
  background-color: #fdfcf0;
  border-style: none;
`;

const MovieReplyContent = styled.div`
  padding-left: 10px;
`;

const ReplyDate = styled.div`
  position: absolute;
  left: 10;
  bottom: 10px;
  padding: 0 !important;
`;

const ReplySep = styled.span`
  display: inline-block;
  font-size: 11px;
  vertical-align: middle;
  margin: 0 6px;
  padding-bottom: 4px;
`;

const ReplyFavIcon = styled.img`
  cursor: pointer;
`;

const ReplyFavCount = styled.span`
  margin-left: 5px;
`;

const UpdateReviewBtn = styled.button`
  position: absolute;
  border-style: none;
  background-color: #fdfcf0;
  font-size: 12px;
  color: black;
  right: 12px;
  bottom: 4px;
`;

const MDAdBox = styled.div`
  position: absolute;
  left: 1090px;
  top: 250px;
`;

const AsidesBannerImg = styled.img`
  width: 160px;
  aspect-ratio: auto 160 / 300;
  height: 300px;
  margin-top: 20px;
`;

const MyMovieReview = () => {
  window.scrollTo(0, 0);

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/review", {
      method: "GET",
      headers: new Headers({
        Authorization: getCookie("cgvJWT"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 1) {
          setReviews(res.data);
        } else {
          fetch("http://localhost:8080/logout").then(() => {
            deleteCookie("cgvJWT");
            deleteCookie("userId");
            deleteCookie("role");
          });
          alert("회원정보 조회 실패. 재로그인해주세요.");
          window.location.replace("/login");
          return;
        }
      })
      .catch((err) => {
        fetch("http://localhost:8080/logout").then(() => {
          deleteCookie("cgvJWT");
          deleteCookie("userId");
          deleteCookie("role");
        });
        alert("회원정보 조회 실패. 재로그인해주세요.");
        window.location.replace("/login");
        return;
      });
  }, []);

  return (
    <MDCon>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>영화</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            내가 쓴 평점
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <MDContentCon>
        <MDContentBox>
          <MDHeadBox>
            <MDHeadTitle>내가 쓴 평점</MDHeadTitle>
          </MDHeadBox>

          <ReviewListBox>
            <MDAdBox>
              <Link>
                <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202001/cgvgift/1204_160x300.jpg" />
              </Link>
            </MDAdBox>

            {reviews.map((review) => (
              <WatchedMovieListItem>
                <WatchedMovieImg src={review.movie.posterImgSrc} />
                <WatchedMovieInfo>
                  <DeleteButton>X</DeleteButton>
                  <Link>
                    <UpdateReviewBtn>수정하기</UpdateReviewBtn>
                  </Link>
                  <WatchedMovieInfoTitle>
                    <WatchedMovieInfoStrong>
                      {review.movie.title}
                    </WatchedMovieInfoStrong>
                  </WatchedMovieInfoTitle>
                  <MovieReplyContent>
                    <span>{review.user.nickname}</span>
                    <p>{review.content}</p>
                    <ReplyDate>
                      <span>{review.createDate}</span>
                      <ReplySep>|</ReplySep>
                      <div style={{ display: "inline-block" }}>
                        <ReplyFavIcon src="http://img.cgv.co.kr/R2014/images/point/ico_point_default.png" />
                      </div>
                      <ReplyFavCount>{review.isLike}</ReplyFavCount>
                    </ReplyDate>
                  </MovieReplyContent>
                </WatchedMovieInfo>
              </WatchedMovieListItem>
            ))}
          </ReviewListBox>
        </MDContentBox>
      </MDContentCon>
    </MDCon>
  );
};

export default MyMovieReview;
