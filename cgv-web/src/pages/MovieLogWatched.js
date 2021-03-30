import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import MovieLogAsidesBox from "../components/MovieLogAsidesBox";
import { getCookie, setCookie } from "../utils/JWT";

const WatchedLogMainContainer = styled.div`
  background-color: #fdfcf0;
  width: auto;
  height: auto;
  min-height: 899px;
  padding-bottom: 100px;
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

const WatchedLogSubContainer = styled.div`
  width: 980px;
  height: auto;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

const MainAsidesBox = styled.div`
  width: 160px;
  line-height: 1.2;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
`;

const AsidesItemDiv = styled.div`
  width: 100%;
  height: 80px;
  line-height: 1.2;
  padding: 18px 0;
  border: 1px solid #cacac0;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`;

const AsidesItemDiv1 = styled(AsidesItemDiv)`
  color: ${(props) => (props.watched ? "white" : "#222")};
  background-color: ${(props) => (props.watched ? "#E71A0F" : "inherit")};
`;

const AsidesItemDiv2 = styled(AsidesItemDiv)`
  color: ${(props) => (props.watched ? "#222" : "white")};
  background-color: ${(props) => (props.watched ? "inherit" : "#E71A0F")};
`;

const AsidesItemEm = styled.em`
  display: block;
  font-style: normal;
  font-size: 26px;
  line-height: 26px;
  font-weight: 600;
`;

const AsidesItemStrong = styled.strong`
  margin-top: 5px;
  font-size: 13px;
  line-height: 13px;
  font-weight: 600;
`;

const MainContentsBox = styled.div`
  width: 800px;
`;

const MainContentsTitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MainContentsTitleH3 = styled.h3`
  height: 30px;
  margin: 0;
  color: #222;
  font-weight: 600;
  font-size: 17px;
  line-height: 30px;
`;

const MainContentsTitleP = styled.p`
  margin-left: 5px;
  line-height: 30px;
  color: #666;
`;

const WatchedMovieListBox = styled.div`
  width: 100%;
  height: auto;
  margin-top: 25px;
  line-height: 1.2;
  color: #666;
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
`;

const WatchedMovieInfoTitle = styled.div`
  width: 100%;
  height: 45px;
  margin: 14px 0;
`;

const WatchedMovieInfoStrong = styled.strong`
  margin-bottom: 8px;
  color: #222;
  font-weight: 600;
  font-size: 22px;
  white-space: nowrap;
`;

const WatchedMovieInfoP = styled.p`
  margin-bottom: 9px;
  color: #222;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
`;

const MovieLogWatched = () => {
  setCookie("now-space", "movielog-watched");
  window.scrollTo(0, 0);

  const [isLoaded, setIsLoaded] = useState(true);
  const [watchedMovies, setWatchedMovies] = useState([]);

  const [expectMovies, setExpectMovies] = useState([]);

  const loadExpectedData = async () => {
    if (isLoaded) {
      setIsLoaded(false);

      await fetch("http://localhost:8080/expectMovie/" + getCookie("userId"))
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.statusCode === 1) {
            console.log(res.data);
            setExpectMovies(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // const loadData = async () => {
  //   if (isLoaded) {
  //     setIsLoaded(false);
  // timetable에서 시간들고와야 해서 보류
  //     await fetch("http://localhost:8080/watchedMovie/" + getCookie("userId"))
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .then((res) => {
  //         if (res.statusCode === 1) {
  //           console.log(res.data);
  //           setWatchedMovies(res.data);
  //         }
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  loadExpectedData();

  return (
    <WatchedLogMainContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>무비로그</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            내가 본 영화
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <WatchedLogSubContainer>
        <MovieLogAsidesBox
          nowSpace={getCookie("now-space")}
          expectMovieCount={expectMovies.length}
        />
        <MainContentsBox>
          <MainContentsTitleBox>
            <MainContentsTitleH3>내가 본 영화</MainContentsTitleH3>
            <MainContentsTitleP>{watchedMovies.length}</MainContentsTitleP>
          </MainContentsTitleBox>
          <WatchedMovieListBox>
            {watchedMovies.map((watchedMovie) => (
              <WatchedMovieListItem>
                <WatchedMovieImg src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82481/82481_185.jpg" />
                <WatchedMovieInfo>
                  <WatchedMovieInfoTitle>
                    <WatchedMovieInfoStrong>제목</WatchedMovieInfoStrong>
                  </WatchedMovieInfoTitle>
                  <WatchedMovieInfoP>
                    2019.11.18 (월) 18:20 ~ 20:23
                  </WatchedMovieInfoP>
                  <WatchedMovieInfoP>CGV대연 6층 3관 / 2명</WatchedMovieInfoP>
                </WatchedMovieInfo>
              </WatchedMovieListItem>
            ))}
            <WatchedMovieListItem>
              <WatchedMovieImg src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82481/82481_185.jpg" />
              <WatchedMovieInfo>
                <WatchedMovieInfoTitle>
                  <WatchedMovieInfoStrong>블랙머니</WatchedMovieInfoStrong>
                </WatchedMovieInfoTitle>
                <WatchedMovieInfoP>
                  2019.11.18 (월) 18:20 ~ 20:23
                </WatchedMovieInfoP>
                <WatchedMovieInfoP>CGV대연 6층 3관 / 2명</WatchedMovieInfoP>
              </WatchedMovieInfo>
            </WatchedMovieListItem>
            <WatchedMovieListItem>
              <WatchedMovieImg src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82481/82481_185.jpg" />
              <WatchedMovieInfo>
                <WatchedMovieInfoTitle>
                  <WatchedMovieInfoStrong>블랙머니</WatchedMovieInfoStrong>
                </WatchedMovieInfoTitle>
                <WatchedMovieInfoP>
                  2019.11.18 (월) 18:20 ~ 20:23
                </WatchedMovieInfoP>
                <WatchedMovieInfoP>CGV대연 6층 3관 / 2명</WatchedMovieInfoP>
              </WatchedMovieInfo>
            </WatchedMovieListItem>
            <WatchedMovieListItem>
              <WatchedMovieImg src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82481/82481_185.jpg" />
              <WatchedMovieInfo>
                <WatchedMovieInfoTitle>
                  <WatchedMovieInfoStrong>블랙머니</WatchedMovieInfoStrong>
                </WatchedMovieInfoTitle>
                <WatchedMovieInfoP>
                  2019.11.18 (월) 18:20 ~ 20:23
                </WatchedMovieInfoP>
                <WatchedMovieInfoP>CGV대연 6층 3관 / 2명</WatchedMovieInfoP>
              </WatchedMovieInfo>
            </WatchedMovieListItem>
          </WatchedMovieListBox>
        </MainContentsBox>
      </WatchedLogSubContainer>
    </WatchedLogMainContainer>
  );
};

export default MovieLogWatched;
