import React from "react";
import { Carousel } from "react-bootstrap";
import ReactPlayer from "react-player";
import styled from "styled-components";
import brickImg from "../images/brick_bg.jpg";
import carouselImg01 from "../images/home/home_carousel_img01.jpg"
import carouselImg02 from "../images/home/home_carousel_img02.jpg"
import carouselImg03 from "../images/home/home_carousel_img03.jpg"

const CarouselSection = styled.section`
  width: auto;
  height: auto;
  background-image: url("${brickImg}");
  display: flex;
  justify-content: center;
`;

const CarouselBox = styled.div`
  width: 980px;
  background-color: #FDFCF0;
`;

const HomeMiddleToBottomContainer = styled.div`
  width: auto;
  height: auto;
  background-color: #FDFCF0;
`;

const MovieSectionBox = styled.section`
  padding-top: 30px;
`;

const MovieSectionH3 = styled.h3`
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
  width: 980px;
  height: 390px;
`;

const Home = () => {
  return <div>
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
        <MovieSectionH3>
          <span>〓〓〓〓〓〓〓〓〓</span>
          <MovieSectionImg src="https://img.cgv.co.kr/R2014/images/title/h3_movie_selection.gif" alt="movie section"/>
          <span>〓〓〓〓〓〓〓〓〓</span>
        </MovieSectionH3>
      </MovieSectionBox>
      <MovieSection>
      </MovieSection>

    </HomeMiddleToBottomContainer>
  </div>
};

export default Home;
