import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../App.css";
import MovieChartOlItem from "../components/MovieChartOlItem";

const MCCon = styled.div`
  width: 100%;
  background-color: #fdfcf0;
  padding-bottom: 50px;
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
  height: 51px;
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
  margin-left: 15px;
  color: #737373;
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
      <MCContentCon>
        <MCContentBox>
          <MCHeadBox>
            <MCHeadTitle>무비차트</MCHeadTitle>
            <MCSubMenu>
              <MCSubNow>▶ 무비차트</MCSubNow>
              <MCSub>상영예정작</MCSub>
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
