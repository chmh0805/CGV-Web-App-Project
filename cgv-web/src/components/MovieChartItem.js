import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import posterEx from "../images/movieChart/MoviePosterEx.jpg";
import kingEgg from "../images/movieChart/king_egg.png";
import ticketingBtn from "../images/movieChart/ticketing_btn.png";

const MCItemContainer = styled.div`
  width: 200px;
  height: 420px;
  margin-left: 61px;
  padding-bottom: 30px;
  float: left;
`;

const MCRankBox = styled.div`
  border: 6px solid #000000;
  height: 33px;
  margin-bottom: 3px;
  background-color: #e71b0e;
  color: #ffffff;
  font-size: 19px;
  font-weight: bold;
  text-align: center;
`;

const MCItemImgBox = styled.div`
  margin-bottom: 10px;
  border: 6px solid #000000;
`;

const MCItemImg = styled.img`
  width: 100%;
  height: 260px;
`;

const MCItemInfoBox = styled.div`
  height: 93px;
`;

const MCMovieTitle = styled(Link)`
  display: block;
  overflow: hidden;
  width: 90%;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: bolder;
  color: #333333;
`;

const MCMovieInfo = styled.div``;

const MCInfoText = styled.span`
  font-size: 12px;
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

const MCTicketImg = styled.img`
  display: block;
  margin-top: 8px;
`;

const MovieChartItem = () => {
  return (
    <MCItemContainer>
      <MCRankBox>No.1</MCRankBox>
      <MCItemImgBox>
        <MCItemImg src={posterEx} />
      </MCItemImgBox>
      <MCItemInfoBox>
        <MCMovieTitle to="/movies/detail/">소울</MCMovieTitle>
        <MCMovieInfo>
          <MCInfoText>예매율</MCInfoText>
          <MCInfoNum>1.9%</MCInfoNum>
          <MCInfoSep>|</MCInfoSep>
          <MCEggImg src={kingEgg} />
          <MCInfoNum>92%</MCInfoNum>
        </MCMovieInfo>
        <MCInfoText>2021.01.20</MCInfoText>
        <MCInfoText>개봉</MCInfoText>
        <Link to="/ticket">
          <MCTicketImg src={ticketingBtn} />
        </Link>
      </MCItemInfoBox>
    </MCItemContainer>
  );
};

export default MovieChartItem;
