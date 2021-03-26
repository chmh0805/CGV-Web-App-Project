import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import MovieChartOlItem from "../components/MovieChartOlItem";
import HomeIcon from "@material-ui/icons/Home";

const MCCon = styled.div`
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

const MCContentCon = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const MCContentBox = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

const MCHeadBox = styled.div`
  display: flex;
  justify-content: space-between;

  padding-top: 30px;
  border-bottom: 3px solid #241d1e;
`;

const MCHeadTitle = styled.h3`
  font-weight: 600;
  font-size: 36px;
  margin: 0;
`;

const MCSubMenu = styled.div`
  display: flex;
  padding-top: 20px;
`;

const MCSubNow = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  font-size: 15px;
  color: #e40000;
  display: inline-block;
`;

const MCSub = styled(Link)`
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  margin-left: 20px;
  color: #737373;

  &:hover {
    color: red;
    font-weight: bold;
  }
`;

const MCSortBox = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
`;

const MCCheckBox = styled.div`
  display: flex;
`;

const MCCheckTxt = styled.label`
  font-size: 13px;
  color: #666;
  margin-left: 3px;
`;

const MCSelectBox = styled.div`
  display: flex;
`;

const MCSelectBtn = styled.button`
  border: 2px solid #7b7b7b;
  border-radius: 3px;
  color: #7b7b7b;
  background-color: #fdfcf0;
  margin-left: 5px;
`;

const MCBox = styled.div`
  margin-top: 30px;
`;

const MovieChart = () => {
  return (
    <MCCon>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>영화</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>무비차트</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            무비차트
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <MCContentCon>
        <MCContentBox>
          <MCHeadBox>
            <MCHeadTitle>무비차트</MCHeadTitle>
            <MCSubMenu>
              <MCSubNow>▶ 무비차트</MCSubNow>
              <MCSub to="/movies/schedule">상영예정작</MCSub>
            </MCSubMenu>
          </MCHeadBox>

          <MCSortBox>
            <MCCheckBox>
              <input type="checkbox" id="" />
              <MCCheckTxt>현재 상영작만 보기</MCCheckTxt>
            </MCCheckBox>
            <MCSelectBox>
              <select id="" name="" className="MCselect">
                <option value="1">예매율순</option>
                <option value="2">평점순</option>
                <option value="3">관람객순</option>
              </select>
              <MCSelectBtn>GO</MCSelectBtn>
            </MCSelectBox>
          </MCSortBox>

          <MCBox>
            <MovieChartOlItem />
          </MCBox>
        </MCContentBox>
      </MCContentCon>
    </MCCon>
  );
};

export default MovieChart;
