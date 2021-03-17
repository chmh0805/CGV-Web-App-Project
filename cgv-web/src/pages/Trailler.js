import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import brickImg from "../images/brick_bg.jpg";
import ReactPlayer from "react-player";
import spritePreegg from "../images/sprite_preegg.png";
import { Modal } from "semantic-ui-react";

const TrailerContainer = styled.div`
  background-color: #fdfcf0;
  width: auto;
  height: 1000px;
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

const BigMovieSection = styled.section`
  width: auto;
  height: auto;
  background-image: url("${brickImg}");
  display: flex;
  justify-content: center;
`;

const BigMovieBox = styled.div`
  width: 980px;
  height: 450px;
  padding: 30px 32px 30px 41px;
  background: #1d1b1c;
  zoom: 1;
  line-height: 1.2;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
`;

const BigMovieH3 = styled.h3`
  height: auto;
  margin: 0;
  background: none;
  line-height: 1.2;
  text-align: left;
  color: #ffffff;
  font-size: 16px;
  margin-bottom: 10px;
`;

const BigMovieSpan = styled.span`
  color: #2a6fb6;
  display: inline-block;
  height: 15px;
  margin-right: 5px;
  padding: 0 3px;
  border: 1px solid #2a6fb6;
  font-size: 10px;
  font-family: Dotum, "돋움";
  text-align: center;
  font-weight: bold;
  line-height: 13px;
`;

const BigMovieMainBox = styled.div`
  width: 910px;
  height: 360px;
  display: flex;
  justify-content: space-between;
`;

const BigMovieMainDescBox = styled.div`
  width: 250px;
  height: 340px;
`;

const DescBoxImg = styled.img`
  width: 90px;
  height: 127px;
`;

const DescBoxMovieInfoBox = styled.div`
  width: 150px;
  height: 100px;
  float: left;
  margin-bottom: 33px;
  line-height: 1.2;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
`;

const DescBoxStrong = styled.strong`
  color: #cccccc;
  font-size: 14px;
  display: block;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 600;
`;

const DescBoxSpan = styled.span`
  display: block;
  color: #999999;
  font-size: 12px;
  margin-top: 5px;
`;

const DescBoxLike = styled(Link)`
  margin-top: 10px;
  display: inline-block;
  width: 97px;
  height: 25px;
  border: 0 none;
  line-height: 25px;
  border-radius: 6px;
  font-size: 12px;
  text-align: center;
  font-weight: 400;
  background-color: #fdfcf0;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: none;
    background-color: #fdfcf0;
    color: black;
  }
`;

const DescBoxLikeEggImg = styled.i`
  background-position: -90px 0px;
  width: 14px;
  height: 16px;
  margin-top: 0 !important;
  margin-right: 3px;
  background: url(${spritePreegg}) no-repeat 0 0;
  background-size: 200px;
  display: inline-block;
  vertical-align: middle;
`;

const DescBoxContentBox = styled.div`
  width: 228px;
  height: 158px;
  margin-top: 12px;
  border: 1px solid #161415;
  background: #161415;
  color: #999999;
  line-height: 1.7;
  font-size: 13px;
  padding: 10px;
`;

const TitleSectionBox = styled.section`
  padding-top: 30px;
`;

const TitleH3 = styled.h3`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 30px;
`;

const TitleSectionImg = styled.img`
  margin-left: 3px;
  margin-right: 3px;
`;

const RecommendSection = styled.section`
  margin: 0 auto;
  margin-top: 10px;
  width: 980px;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const RecommendItemBox = styled.div`
  margin: 40px 0px 40px 6px;
  width: 240px;
  cursor: pointer;
`;

const RecommendItemImg = styled.img`
  width: 240px;
  height: 135px;
`;

const RecommendItemStrong = styled.strong`
  margin-top: 13px;
  font-size: 14px;
  line-height: 16px;
  display: block;
  color: #333333;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 500;
`;

const RecommendItemSpan = styled.span`
  margin-top: 7px;
  color: #666666;
  display: block;
  font-size: 12px;
  word-break: break-all;
  font-weight: 300;
`;

const BannerSection = styled.section`
  border-top: 3px solid black;
  width: 980px;
  height: auto;
  margin: 0 auto;
  padding-top: 40px;
`;

const BannerSectionImg = styled.img`
  width: 980px;
  height: 90px;
`;

const Trailler = () => {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);

  return (
    <TrailerContainer>
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
            HD 트레일러
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <BigMovieSection>
        <BigMovieBox>
          <BigMovieH3>
            <BigMovieSpan>HD</BigMovieSpan>
            No.1 퍼포먼스 영상
          </BigMovieH3>
          <BigMovieMainBox>
            <ReactPlayer
              url="https://youtu.be/Ny7IEAxxdkw"
              width="640px"
              height="360px"
            />
            <BigMovieMainDescBox>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Link to="/">
                  <DescBoxImg src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000082/82175/82175_185.jpg" />
                </Link>
                <DescBoxMovieInfoBox>
                  <DescBoxStrong>캣츠</DescBoxStrong>
                  <DescBoxSpan>뮤지컬, 드라마</DescBoxSpan>
                  <DescBoxSpan>2019.12.24 개봉</DescBoxSpan>
                  <DescBoxLike>
                    <DescBoxLikeEggImg />
                    프리에그
                  </DescBoxLike>
                </DescBoxMovieInfoBox>
              </div>
              <DescBoxSpan style={{ fontSize: "13px", fontWeight: "600" }}>
                영상설명
              </DescBoxSpan>
              <DescBoxContentBox>컨텐츠 준비 중 입니다.</DescBoxContentBox>
            </BigMovieMainDescBox>
          </BigMovieMainBox>
        </BigMovieBox>
      </BigMovieSection>
      <TitleSectionBox>
        <TitleH3>
          <span>〓〓〓〓〓〓〓〓〓</span>
          <TitleSectionImg
            src="https://img.cgv.co.kr/R2014/images/title/h3_trailer_recommend.gif"
            alt="trailer recommend"
          />
          <span>〓〓〓〓〓〓〓〓〓</span>
        </TitleH3>
      </TitleSectionBox>
      <RecommendSection>
        <Modal
          closeIcon
          open={open1}
          trigger={
            <RecommendItemBox>
              <RecommendItemImg src="https://img.cgv.co.kr/Movie/Thumbnail/Trailer/82175/82175174953_148.jpg" />
              <RecommendItemStrong>
                [캣츠] No.1 퍼포먼스 영상
              </RecommendItemStrong>
              <RecommendItemSpan>2019.12.03</RecommendItemSpan>
            </RecommendItemBox>
          }
          style={{
            backgroundColor: "black",
            width: "980px",
            height: "670px",
            position: "relative",
          }}
          onClose={() => setOpen1(false)}
          onOpen={() => setOpen1(true)}
        >
          <Modal.Content
            style={{
              backgroundColor: "black",
              width: "960px",
              height: "650px",
            }}
          >
            <ReactPlayer
              url="https://youtu.be/Ny7IEAxxdkw"
              width="960px"
              height="650px"
            />
          </Modal.Content>
        </Modal>
        <Modal
          closeIcon
          open={open2}
          trigger={
            <RecommendItemBox>
              <RecommendItemImg src="https://img.cgv.co.kr/Movie/Thumbnail/Trailer/82866/82866175009_148.jpg" />
              <RecommendItemStrong>
                [카운트다운] 장르파괴 영상
              </RecommendItemStrong>
              <RecommendItemSpan>2019.12.03</RecommendItemSpan>
            </RecommendItemBox>
          }
          style={{
            backgroundColor: "black",
            width: "980px",
            height: "670px",
            position: "relative",
          }}
          onClose={() => setOpen2(false)}
          onOpen={() => setOpen2(true)}
        >
          <Modal.Content
            style={{
              backgroundColor: "black",
              width: "960px",
              height: "650px",
            }}
          >
            <ReactPlayer
              url="https://youtu.be/MgmwYXzgh1I"
              width="960px"
              height="650px"
            />
          </Modal.Content>
        </Modal>
        <Modal
          closeIcon
          open={open3}
          trigger={
            <RecommendItemBox>
              <RecommendItemImg src="https://img.cgv.co.kr/Movie/Thumbnail/Trailer/82962/82962175008_148.jpg" />
              <RecommendItemStrong>
                [영화로운 나날] 30초 예고편
              </RecommendItemStrong>
              <RecommendItemSpan>2019.12.03</RecommendItemSpan>
            </RecommendItemBox>
          }
          style={{
            backgroundColor: "black",
            width: "980px",
            height: "670px",
            position: "relative",
          }}
          onClose={() => setOpen3(false)}
          onOpen={() => setOpen3(true)}
        >
          <Modal.Content
            style={{
              backgroundColor: "black",
              width: "960px",
              height: "650px",
            }}
          >
            <ReactPlayer
              url="https://youtu.be/UGge78_vGpI"
              width="960px"
              height="650px"
            />
          </Modal.Content>
        </Modal>
        <Modal
          closeIcon
          open={open4}
          trigger={
            <RecommendItemBox>
              <RecommendItemImg src="https://img.cgv.co.kr/Movie/Thumbnail/Trailer/82640/82640174984_148.jpg" />
              <RecommendItemStrong>
                [러브 앳] 홍쓴 부부 GV 현장 메이킹 영상
              </RecommendItemStrong>
              <RecommendItemSpan>2019.12.03</RecommendItemSpan>
            </RecommendItemBox>
          }
          style={{
            backgroundColor: "black",
            width: "980px",
            height: "670px",
            position: "relative",
          }}
          onClose={() => setOpen4(false)}
          onOpen={() => setOpen4(true)}
        >
          <Modal.Content
            style={{
              backgroundColor: "black",
              width: "960px",
              height: "650px",
            }}
          >
            <ReactPlayer
              url="https://youtu.be/MJPem6cvMtw"
              width="960px"
              height="650px"
            />
          </Modal.Content>
        </Modal>
      </RecommendSection>
      <BannerSection>
        <Link to="/">
          <BannerSectionImg src="https://adimg.cgv.co.kr/images/202103/Nobody/980x90.jpg" />
        </Link>
      </BannerSection>
    </TrailerContainer>
  );
};

export default Trailler;
