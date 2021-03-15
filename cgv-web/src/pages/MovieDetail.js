import React from "react";
import styled from "styled-components";
import posterEx from "../images/movieChart/MoviePosterEx.jpg";
import kingEgg from "../images/movieChart/king_egg.png";
import ticketBtn from "../images/movieDetail/ticket_btn.png";
import { Link } from "react-router-dom";

const MDCon = styled.div`
  width: 100%;
  background-color: #fdfcf0;
  padding-bottom: 50px;
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
  height: 51px;
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
  font-size: 12px;
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

const MovieDetail = () => {
  return (
    <MDCon>
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
                <MDMovieBtnImg src={ticketBtn}></MDMovieBtnImg>
              </MDMovieBtn>
            </MDMovieInfoBox>
          </MDMovieBox>

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
          </MDMovieContentDiv>
        </MDContentBox>
      </MDContentCon>
    </MDCon>
  );
};

export default MovieDetail;
