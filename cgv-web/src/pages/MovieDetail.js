import React from "react";
import styled from "styled-components";
import posterEx from "../images/movieChart/MoviePosterEx.jpg";
import kingEgg from "../images/movieChart/king_egg.png";
import ticketBtn from "../images/movieDetail/ticket_btn.png";
import addBtn from "../images/movieDetail/add_btn.png";
import { Link } from "react-router-dom";
import MovieDetailReply from "../components/MovieDetailReply";
import HomeIcon from "@material-ui/icons/Home";

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

const MDMovieBox = styled.div`
  display: flex;
  margin-top: 40px;
`;

const MDMoviePoster = styled.img`
  margin-right: 30px;
  width: 185px;
  height: 260px;
`;

const MDMovieInfoBox = styled.div`
  width: 765px;
`;

const MDTitle = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: 700;
`;

const MDSubTitle = styled.p`
  margin: 0;
  color: #666666;
  font-size: 12px;
`;

const MDStoryBox = styled.div`
  margin-top: 40px;
  color: #333333;
  line-height: 1.8;
  font-size: 13px;
`;

const MDStoryP = styled.p`
  margin: 0;
`;

const MCMovieInfo = styled.div`
  margin-top: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d9d6c8;
`;

const MDTitleBox = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
`;

const MCInfoText = styled.span`
  font-size: 15px;
  color: #444444;
  font-weight: 500;
  margin-right: 5px;
`;

const MCInfoNum = styled.span`
  font-size: 12px;
  color: #444444;
  font-weight: 400;
  margin-left: 2px;
`;

const MCInfoSep = styled.span`
  font-size: 11px;
  color: #444444;
  font-weight: 300;
  margin-left: 5px;
  margin-right: 5px;
`;

const MCEggImg = styled.img`
  width: 15px;
  height: 27px;
  vertical-align: middle;
  margin-right: 3px;
  margin-top: -10px;
`;

const MDMovieInfo = styled.div`
  padding-top: 15px;
  color: #333333;
  font-size: 13px;
`;

const MDMovieDiv = styled.div`
  display: flex;
  text-overflow: clip;
  overflow: visible;
  margin-top: 5px;
`;

const MDMovieP = styled.p`
  font-weight: 600;
  margin: 0;
`;

const MDMovieSep = styled.p`
  margin: 0;
  font-weight: 800;
  margin-left: 5px;
  margin-right: 5px;
`;

const MDMovieBtn = styled(Link)``;

const MDMovieBtnImg = styled.img`
  margin-top: 26px;
  width: 91px;
  height: 35px;
`;

const MDMovieContentDiv = styled.div`
  width: 800px;
`;

const MDTrailerBox = styled.div`
  margin-top: 40px;
`;

const MDContentTitleDiv = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 39px;
  background: #e2e0d2;
`;

const MDContentTitleH4 = styled.h4`
  float: left;
  margin-left: 16px;
  margin-top: 0;
  margin-bottom: 0;
  color: #333333;
  font-size: 14px;
  font-weight: 700;
  line-height: 39px;
`;

const MDContentCountSpan = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-weight: 300;
  line-height: 39px;
  font-size: 12px;
`;

const MDContentAddBtn = styled.img`
  margin-left: 9px;
  vertical-align: middle;
`;

const MDReplyInfoBox = styled.div`
  width: 100%;
  padding: 20px 30px;
  background: #ebede3;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
`;

const MDReplyInfoText = styled.p`
  font-size: 16px;
  color: #212224;
  font-weight: 700;
  margin: 0;
`;

const MDReplyInfoSubText = styled.p`
  font-size: 14px;
  color: #212224;
  font-weight: 600;
  margin-top: 10px;
`;

const MDReplyTitleBox = styled.div`
  text-align: left;
  margin: 20px 0 10px;
`;

const MDReplyNewText = styled.span`
  padding-left: 0;
  border-left: none;
  padding: 0 8px 0 9px;
  font-weight: 600;
  color: #ef5549;
  font-size: 13px;
`;

const MDReplyRecommendText = styled.span`
  display: inline-block;
  padding: 0 8px 0 9px;
  border-left: 1px solid #d7d3c8;
  font-weight: 600;
  color: #666666;
  font-size: 13px;
`;

const MDReplyBox = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

const MDReplyUl = styled.ul`
  list-style: none;
  border-top: 1px solid #999999;
  color: #333333;
  padding: 0 25px;
  height: 370px;
`;

const AsidesBannerImg = styled.img`
  width: 160px;
  aspect-ratio: auto 160 / 300;
  height: 300px;
  margin-top: 20px;
`;

const MDAdBox = styled.div`
  position: absolute;
  left: 1080px;
  top: 550px;
`;

const MDAdBox2 = styled.div`
  position: absolute;
  left: 1080px;
  top: 860px;
`;

const MDReplyInfoBtnBox = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
`;

const MDReplyBtn = styled.span`
  background-color: #bf2c1c;
  width: 76px;
  padding: 10px;
  color: #ffffff;
  text-align: center;
  line-height: 50px;
  border-radius: 3px;
`;

const MDMyReplyBtn = styled.span`
  background-color: #666666;
  width: 76px;
  padding: 10px 15px;
  color: #ffffff;
  text-align: center;
  line-height: 50px;
  border-radius: 3px;
  margin-left: 10px;
`;

const ReplyPagingBox = styled.div`
  text-align: center;
  margin-top: 25px;
  padding-right: 15px;
`;

const ReplyPreviousBtn = styled.button`
  border-radius: 2px;
  margin-right: 3px;
  background-color: #faf9ed;
  color: #787877;
  border: 1px solid #cacac1;
`;
const ReplyNextBtn = styled.button`
  border-radius: 2px;
  margin-left: 3px;
  background-color: #faf9ed;
  color: #787877;
  border: 1px solid #cacac1;
`;

const MovieDetail = () => {
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
            영화상세
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <MDContentCon>
        <MDContentBox>
          <MDHeadBox>
            <MDHeadTitle>영화상세</MDHeadTitle>
          </MDHeadBox>
          <MDMovieBox>
            <MDMoviePoster src={posterEx} />
            <MDMovieInfoBox>
              <MDTitleBox>
                <MDTitle>소울</MDTitle>
                <MDSubTitle>SOUL</MDSubTitle>
              </MDTitleBox>
              <MCMovieInfo>
                <MCInfoText>예매율</MCInfoText>
                <MCInfoNum>1.9%</MCInfoNum>
                <MCInfoSep>|</MCInfoSep>
                <MCEggImg src={kingEgg} />
                <MCInfoNum>92%</MCInfoNum>
              </MCMovieInfo>
              <MDMovieInfo>
                <MDMovieDiv>
                  <MDMovieP>감독 : </MDMovieP>
                  <MDMovieP>피트 닥터</MDMovieP>
                  <MDMovieSep>|</MDMovieSep>
                  <MDMovieP>배우 : </MDMovieP>
                  <MDMovieP>제이미 폭스, 티나 페이, 다비드 딕스</MDMovieP>
                </MDMovieDiv>
                <MDMovieDiv>
                  <MDMovieP>장르 : </MDMovieP>
                  <MDMovieP>애니메이션</MDMovieP>
                  <MDMovieSep>|</MDMovieSep>
                  <MDMovieP>기본 : </MDMovieP>
                  <MDMovieP>전체, 107분, 미국</MDMovieP>
                </MDMovieDiv>
                <MDMovieDiv>
                  <MDMovieP>개봉 : </MDMovieP>
                  <MDMovieP>2021.01.20</MDMovieP>
                </MDMovieDiv>
              </MDMovieInfo>

              <MDMovieBtn>
                <MDMovieBtnImg src={ticketBtn} />
              </MDMovieBtn>
            </MDMovieInfoBox>
          </MDMovieBox>

          <MDAdBox>
            <Link>
              <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202103/GodzillaKong/0315_160x300_02.jpg" />
            </Link>
          </MDAdBox>

          <MDAdBox2>
            <Link>
              <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202001/cgvgift/1204_160x300.jpg" />
            </Link>
          </MDAdBox2>

          <MDMovieContentDiv>
            <MDStoryBox>
              <MDStoryP>나는 어떻게 ‘나’로 태어나게 되었을까?</MDStoryP>
              <MDStoryP>
                지구에 오기 전 영혼들이 머무는 ‘태어나기 전 세상’이 있다면?
              </MDStoryP>
              <br />
              <MDStoryP>뉴욕에서 음악 선생님으로 일하던 ‘조’는</MDStoryP>
              <MDStoryP>
                꿈에 그리던 최고의 밴드와 재즈 클럽에서 연주하게된 그 날,
              </MDStoryP>
              <MDStoryP>
                예기치 못한 사고로 영혼이 되어 ‘태어나기 전 세상’에 떨어진다.
              </MDStoryP>
              <br />
              <MDStoryP>
                탄생 전 영혼들이 멘토와 함께 자신의 관심사를 발견하면 지구
                통행증을 발급하는 ‘태어나기 전 세상’
              </MDStoryP>
              <MDStoryP>
                ‘조’는 그 곳에서 유일하게 지구에 가고 싶어하지 않는 시니컬한
                영혼 ‘22’의 멘토가 된다.
              </MDStoryP>
              <br />
              <MDStoryP>
                링컨, 간디, 테레사 수녀도 멘토되길 포기한 영혼 ‘22’
              </MDStoryP>
              <MDStoryP>
                꿈의 무대에 서려면 ‘22’의 지구 통행증이 필요한 ‘조’
              </MDStoryP>
              <MDStoryP>
                그는 다시 지구로 돌아가 꿈의 무대에 설 수 있을까?
              </MDStoryP>
            </MDStoryBox>

            <MDTrailerBox>
              <MDContentTitleDiv>
                <MDContentTitleH4>트레일러</MDContentTitleH4>
                <MDContentCountSpan>15건</MDContentCountSpan>
                <MDMovieBtn>
                  <MDContentAddBtn src={addBtn} />
                </MDMovieBtn>
              </MDContentTitleDiv>
            </MDTrailerBox>

            <MDReplyInfoBox>
              <MDReplyInfoText>
                관람일 포함 7일 이내 관람평을 남기시면 CJ ONE 20P가 적립됩니다.
              </MDReplyInfoText>
              <MDReplyInfoSubText>
                28,885 명의 실관람객이 평가해주셨습니다.
              </MDReplyInfoSubText>
              <MDReplyInfoBtnBox>
                <Link>
                  <MDReplyBtn>평점작성</MDReplyBtn>
                </Link>
                <Link>
                  <MDMyReplyBtn>내 평점</MDMyReplyBtn>
                </Link>
              </MDReplyInfoBtnBox>
            </MDReplyInfoBox>

            <MDReplyTitleBox>
              <MDReplyNewText>최신순▼</MDReplyNewText>
              <MDReplyRecommendText>추천순</MDReplyRecommendText>
            </MDReplyTitleBox>

            <MDReplyBox>
              <MDReplyUl>
                <MovieDetailReply />
                <MovieDetailReply />
                <MovieDetailReply />
                <MovieDetailReply />
              </MDReplyUl>
              <ReplyPagingBox>
                <ReplyPreviousBtn>◀</ReplyPreviousBtn>
                <ReplyNextBtn>▶</ReplyNextBtn>
              </ReplyPagingBox>
            </MDReplyBox>
          </MDMovieContentDiv>
        </MDContentBox>
      </MDContentCon>
    </MDCon>
  );
};

export default MovieDetail;
