import React, { useState } from "react";
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

const TheaterBottomItemBox = ({ theaterDetail }) => {
  console.log(theaterDetail);
  const [imageLoad, setImageLoad] = useState(true);

  // 진행중
  //   if (imageLoad) {
  //     setImageLoad(false);

  //     fetch("http://localhost/8080/theater/image/" + theaterDetail.id)
  //       .then((res) => res.json())
  //       .then((res) => console.log(res));
  //   }

  return (
    <TheaterInfoSection>
      <TheaterTitleDiv>{theaterDetail.name}</TheaterTitleDiv>
      <TheaterImg src={theaterDetail.theaterImageUrl} />
      <BannerImg src="https://adimg.cgv.co.kr/images/202103/GodzillaKong/0315_980x90_02.jpg" />
    </TheaterInfoSection>
  );
};

export default TheaterBottomItemBox;
