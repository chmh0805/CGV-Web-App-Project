import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import brickImg from "../images/brick_bg.jpg";
import TheaterByAreaItemBox from "../components/theater/TheaterByAreaItemBox";
import TheaterBottomItemBox from "../components/theater/TheaterBottomItemBox";

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

const Theater = () => {
  window.scrollTo(0, 0);

  const [isLoaded, setIsLoaded] = useState(true);
  const [theaters, setTheaters] = useState([]); // 극장들
  const [areaList, setAreaList] = useState([]); // 지역들
  const [theatersByArea, setTheatersByArea] = useState([]); // 지역별 극장들
  const [theaterDetail, setTheaterDetail] = useState({}); // 현재 보고 있는 극장 정보

  const loadData = async () => {
    if (isLoaded) {
      setIsLoaded(false);

      await fetch("http://localhost:8080/theater")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.statusCode === 1) {
            setTheaters(res.data);
            setTheaterDetail(res.data[0]);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  loadData();

  theaters.forEach((theater) => {
    if (!areaList.includes(theater.area)) {
      setAreaList([...areaList, theater.area]);
    }
  });

  const findAreaTheaters = (area) => {
    setTheatersByArea([]);
    let tempList = [];
    theaters.forEach((theater) => {
      if (theater.area === area) {
        tempList.push(theater.name);
      }
    });
    setTheatersByArea(tempList);
  };

  const findTheaterDetails = (theaterName) => {
    theaters.forEach((theater) => {
      if (theater.name === theaterName) {
        setTheaterDetail(theater);
      }
    });
  };

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
          <TheaterAreaBox>
            {areaList.map((area) => (
              <TheaterAreaItem
                onClick={() => {
                  findAreaTheaters(area);
                }}
              >
                {area}
              </TheaterAreaItem>
            ))}
          </TheaterAreaBox>
          <TheaterByAreaItemBox
            theatersByArea={theatersByArea}
            findTheaterDetails={findTheaterDetails}
          />
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
        <TheaterBottomItemBox theaterDetail={theaterDetail} />
      </HomeMiddleToBottomContainer>
    </MyCgvHomeContainer>
  );
};

export default Theater;
