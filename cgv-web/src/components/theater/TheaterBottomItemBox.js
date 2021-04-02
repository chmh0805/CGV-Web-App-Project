import React from "react";
import styled from "styled-components";

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
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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

const TheaterImgBox = styled.div`
  opacity: 0.9;
  position: relative;
`;

const TheaterDetailBox = styled.div`
  width: 100%;
  height: 95px;
  background-color: black;
  position: absolute;
  top: 325px;
  color: white;

  padding-top: 15px;
  padding-left: 10px;
`;

const TheaterDetailTitle = styled.h3`
  height: 20px;
  font-weight: bold;
  line-height: 20px;
`;

const TheaterDetailContent = styled.em`
  font-style: normal;
  font-size: 12px;
  line-height: 12px;
  display: block;
  margin-bottom: 5px;
`;

const TheaterBottomItemBox = ({ theaterDetail }) => {
  let theaterImgSrc = "http://localhost:8080/theater/image/" + theaterDetail.id;

  return (
    <TheaterInfoSection>
      <TheaterTitleDiv>
        <span>{theaterDetail.name}</span>
      </TheaterTitleDiv>
      <TheaterImgBox>
        <TheaterImg src={theaterImgSrc} />
        <TheaterDetailBox>
          <TheaterDetailTitle>극장정보</TheaterDetailTitle>
          <TheaterDetailContent>
            위치: {theaterDetail.location}
          </TheaterDetailContent>
          <TheaterDetailContent>
            연락처: {theaterDetail.phone}
          </TheaterDetailContent>
        </TheaterDetailBox>
      </TheaterImgBox>
      <BannerImg src="https://adimg.cgv.co.kr/images/202103/GodzillaKong/0315_980x90_02.jpg" />
    </TheaterInfoSection>
  );
};

export default TheaterBottomItemBox;
