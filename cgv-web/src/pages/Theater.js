import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import brickImg from "../images/brick_bg.jpg";
import btnPlus from "../images/button/btn_plus.gif";

const MyCgvHomeContainer = styled.div`
  background-color: #fdfcf0;
  width: auto;
  height: auto;
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

const InfoSection = styled.section`
  width: auto;
  height: 450px;
  background-image: url("${brickImg}");
  display: flex;
  justify-content: center;
`;

const InfoSectionContainer = styled.div`
  width: 980px;
  height: 450px;
  padding: 60px 53px 0;
  background-image: url("https://img.cgv.co.kr/R2014/images/common/bg/bg_showtimes_favorite.gif");
`;

const InfoSecFavCgv = styled.div`
  width: 874px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FavCgvImg = styled.img`
  width: 145px;
  height: 22px;
`;

const FavCgvListBox = styled.div`
  width: 676px;
  height: 49px;
  line-height: 1.2;
  color: #666;
  display: flex;
  justify-content: space-between;
`;

const InfoBottomItem1 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const InfoBottomItem1ItemBox = styled.div`
  border: 2px solid #6e6c6d;
  padding: 2px;
  margin-right: 2px;
`;

const InfoBottomItem1Item = styled.div`
  width: 109px;
  height: 41px;
  border: 1px solid #6e6c6d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  cursor: pointer;
  word-break: break-all;
  color: white;
  font-weight: 600;
  font-size: 11px;
  line-height: 39px;
`;

const InfoBottomItemButton = styled.button`
  width: 49px;
  height: 49px;
  background: #636162 url(${btnPlus}) 0 0 no-repeat;
  border: 2px solid #6e6c6d;
  outline: 0px;
  border: 0px;
  text-indent: 100%;
  white-space: nowrap;
  text-align: center;
  text-decoration: none;
`;

const TheaterAreaBox = styled.div`
  width: 100%;
  height: 42px;
  margin-top: 20px;
  border-top: 2px solid #727171;
  border-bottom: 2px solid #727171;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const TheaterAreaItem = styled.div`
  width: 65px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dbdbdb;
  font-size: 14px;
  line-height: 42px;
  cursor: pointer;
`;

const HomeMiddleToBottomContainer = styled.div`
  width: auto;
  height: 700px;
  background-color: #fdfcf0;
`;

const TitleSection = styled.section`
  padding-top: 30px;
`;

const HomeH3 = styled.h3`
  width: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  font-size: 30px;
`;

const MovieSectionImg = styled.img`
  margin-left: 3px;
  margin-right: 3px;
`;

const TheaterInfoSection = styled.section`
  width: 980px;
  height: auto;
  margin: 0 auto;
  margin-top: 10px;
`;

const TheaterTitleDiv = styled.div`
  width: 100%;
  height: 34px;
  color: #333333;
  font-size: 29px;
  font-weight: 600;
`;

const TheaterImg = styled.img`
  width: 980px;
  height: 420px;
  margin-bottom: 20px;
`;

const BannerImg = styled.img`
  width: 980px;
  height: 90px;
  margin-bottom: 30px;
`;

const Theater = () => {
  window.scrollTo(0, 0);

  return (
    <MyCgvHomeContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>극장</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            CGV극장
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <InfoSection>
        <InfoSectionContainer>
          <InfoSecFavCgv>
            <div style={{ width: "180px", paddingLeft: "30px" }}>
              <FavCgvImg src="https://img.cgv.co.kr/R2014/images/title/h4_favorite_cgv.png" />
            </div>
            <FavCgvListBox>
              <InfoBottomItem1>
                <InfoBottomItem1ItemBox>
                  <InfoBottomItem1Item>CGV서면삼정타워</InfoBottomItem1Item>
                </InfoBottomItem1ItemBox>
                <InfoBottomItem1ItemBox>
                  <InfoBottomItem1Item></InfoBottomItem1Item>
                </InfoBottomItem1ItemBox>
                <InfoBottomItem1ItemBox>
                  <InfoBottomItem1Item></InfoBottomItem1Item>
                </InfoBottomItem1ItemBox>
                <InfoBottomItem1ItemBox>
                  <InfoBottomItem1Item></InfoBottomItem1Item>
                </InfoBottomItem1ItemBox>
                <InfoBottomItem1ItemBox>
                  <InfoBottomItem1Item></InfoBottomItem1Item>
                </InfoBottomItem1ItemBox>
                <InfoBottomItem1ItemBox
                  style={{ border: "0px", padding: "0px" }}
                >
                  <InfoBottomItemButton />
                </InfoBottomItem1ItemBox>
              </InfoBottomItem1>
            </FavCgvListBox>
          </InfoSecFavCgv>
          <TheaterAreaBox>
            <TheaterAreaItem>서울</TheaterAreaItem>
            <TheaterAreaItem>경기</TheaterAreaItem>
            <TheaterAreaItem>인천</TheaterAreaItem>
            <TheaterAreaItem>강원</TheaterAreaItem>
            <TheaterAreaItem>대전/충청</TheaterAreaItem>
            <TheaterAreaItem>대구</TheaterAreaItem>
            <TheaterAreaItem>부산/울산</TheaterAreaItem>
            <TheaterAreaItem>경상</TheaterAreaItem>
          </TheaterAreaBox>
        </InfoSectionContainer>
      </InfoSection>
      <HomeMiddleToBottomContainer>
        <TitleSection>
          <HomeH3>
            <span>〓〓〓〓〓〓〓〓〓〓〓〓〓</span>
            <MovieSectionImg
              src="https://img.cgv.co.kr/R2014/images/title/h3_theater.gif"
              alt="movie section"
            />
            <span>〓〓〓〓〓〓〓〓〓〓〓〓〓</span>
          </HomeH3>
        </TitleSection>
        <TheaterInfoSection>
          <TheaterTitleDiv>CGV센텀시티</TheaterTitleDiv>
          <TheaterImg src="https://img.cgv.co.kr/Theater/Theater/2014/1211/CGVcentumcity.jpg" />
          <BannerImg src="https://adimg.cgv.co.kr/images/202103/GodzillaKong/0315_980x90_02.jpg" />
        </TheaterInfoSection>
      </HomeMiddleToBottomContainer>
    </MyCgvHomeContainer>
  );
};

export default Theater;
