import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import styled from "styled-components";
import brickImg from "../images/brick_bg.jpg";
import carouselImg01 from "../images/home/home_carousel_img01.jpg";
import carouselImg02 from "../images/home/home_carousel_img02.jpg";
import carouselImg03 from "../images/home/home_carousel_img03.jpg";
import CommentIcon from "@material-ui/icons/Comment";

const CarouselSection = styled.section`
  width: auto;
  height: auto;
  background-image: url("${brickImg}");
  display: flex;
  justify-content: center;
`;

const CarouselBox = styled.div`
  width: 980px;
  background-color: #fdfcf0;
`;

const HomeMiddleToBottomContainer = styled.div`
  width: auto;
  height: 1000px;
  background-color: #fdfcf0;
`;

const MovieSectionBox = styled.section`
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

const MovieSection = styled.section`
  margin: 0 auto;
  margin-top: 10px;
  width: 980px;
  height: 390px;
  display: flex;
  justify-content: space-between;
`;

const MovieSectionPoster = styled.img`
  width: 240px;
  height: 390px;
`;

const HomeBannerSection = styled.div`
  margin: 0 auto;
  margin-top: 30px;
  width: 980px;
  height: 290px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-top: 3px solid black;
`;

const HomeBannerItemBox1 = styled(Link)`
  padding: 3px;
  border: 3px solid black;
  width: 235px;
  height: 260px;
`;

const HomeBannerItem = styled.img`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`;

const HomeBannerItemBox2 = styled(Link)`
  width: 500px;
  height: 260px;
`;

const HomeBannerItemArthouse = styled.img`
  width: 100%;
  height: 100%;
`;

const HomeBannerItemBox3 = styled(Link)`
  padding: 3px;
  border: 3px solid black;
  width: 235px;
  height: 260px;
`;

const HomeNoticeSection = styled.div`
  width: 980px;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  margin: 0 auto;
  margin-top: 10px;
`;

const HomeNoticeSectionTitle = styled.span`
  color: #333;
  font-size: 15px;
  margin-left: 5px;
  font-weight: 600;
`;

const HomeNoticeSectionContentBox = styled.div`
  width: 730px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 5px;
`;

const HomeNoticeSectionContent = styled(Link)`
  color: #666;
`;

const HomeNoticeSectionDateBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
  font-size: 14px;
`;

const HomeNoticeSectionDate = styled.span``;

const Home = () => {
  return (
    <div>
      <CarouselSection>
        <CarouselBox>
          <Carousel fade>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src={carouselImg01}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src={carouselImg02}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src={carouselImg03}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </CarouselBox>
      </CarouselSection>
      <HomeMiddleToBottomContainer>
        <MovieSectionBox>
          <HomeH3>
            <span>〓〓〓〓〓〓〓〓〓</span>
            <MovieSectionImg
              src="https://img.cgv.co.kr/R2014/images/title/h3_movie_selection.gif"
              alt="movie section"
            />
            <span>〓〓〓〓〓〓〓〓〓</span>
          </HomeH3>
        </MovieSectionBox>
        <MovieSection>
          <ReactPlayer
            url="https://youtu.be/7SHPS3H1Lgw"
            width="730px"
            height="390px"
          />
          <MovieSectionPoster src="https://adimg.cgv.co.kr/images/202103/FIRE/0309_240x388.jpg" />
        </MovieSection>
        <HomeBannerSection>
          <HomeBannerItemBox1>
            <HomeBannerItem src="https://img.cgv.co.kr/Front/Main/2020/1130/16067181584930.jpg" />
          </HomeBannerItemBox1>
          <HomeBannerItemBox2>
            <HomeBannerItemArthouse src="https://img.cgv.co.kr/R2014/images/main/main_moviecollage.jpg" />
          </HomeBannerItemBox2>
          <HomeBannerItemBox3>
            <HomeBannerItem src="https://adimg.cgv.co.kr/images/202001/cgvgift/1204_226x259.jpg" />
          </HomeBannerItemBox3>
        </HomeBannerSection>
        <HomeNoticeSection>
          <div>
            <CommentIcon />
            <HomeNoticeSectionTitle>공지사항</HomeNoticeSectionTitle>
          </div>
          <HomeNoticeSectionContentBox>
            <HomeNoticeSectionContent>
              [기타]영화 개봉연기에 따른 예매취소 안내 건
            </HomeNoticeSectionContent>
          </HomeNoticeSectionContentBox>
          <HomeNoticeSectionDateBox>
            <HomeNoticeSectionDate>2020.08.16</HomeNoticeSectionDate>
          </HomeNoticeSectionDateBox>
        </HomeNoticeSection>
      </HomeMiddleToBottomContainer>
    </div>
  );
};

export default Home;
