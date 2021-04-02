import React from "react";
import RightBorder from "../images/ticketing/ticket_right_border.png";
import SelectNextBtn from "../images/button/btn_selectSeat.png";
import styled from "styled-components";

const BlackBoxSection = styled.div`
  width: 100%;
  height: 128px;
  background-color: #1d1d1c;
  display: flex;
  padding: 10px 0;
`;

const BackSeatBtnBox = styled.div`
  width: 10%;
`;

const TicketInfoBox = styled.div`
  width: 75%;
  padding: 0 10px;
  margin-left: 20px;
  display: flex;
`;

const PaymentBtnBox = styled.div`
  width: 10%;
`;

const PaymentBtn = styled.button`
  background: url(${SelectNextBtn}) no-repeat;
  width: 110px;
  height: 110px;
  border-style: none;
  margin-left: 10px;
`;

const TicketMovieInfo = styled.div`
  width: 210px;
  height: 108px;
  padding-right: 2px;
  margin-left: 7px;
  display: flex;
  color: #cccccc;
  font-size: 12px;
  background: url(${RightBorder}) no-repeat right;
`;

const TicketMovieImg = styled.img`
  width: 74px;
  vertical-align: middle;
`;

const TicketInfo = styled.div`
  width: 120px;
  margin-top: 14px;
  margin-left: 13px;
`;

const TicketMovieTitle = styled.span`
  display: block;
  max-height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  color: #cccccc;
  font-size: 12px;
  font-weight: bold;
`;

const TheaterInfoRow = styled.div`
  height: 20px;
  color: #cccccc;
  font-size: 12px;
  margin-top: 14px;
`;

const TheaterInfoHead = styled.span`
  width: 40px;
  padding-left: 10px;
`;

const TheaterInfoContent = styled.span`
  width: 135px;
  text-overflow: ellipsis;
  padding-left: 10px;
  font-weight: bolder;
`;

const TicketingStep1BlackBox = ({
  selectedMovie,
  selectedTheater,
  selecDate,
  selecTimeTable,
  setNowStep,
  setPrettyDate,
}) => {
  let movieName = selectedMovie.title;
  let age = selectedMovie.age;
  let theaterName = selectedTheater.name;
  let hall = selecTimeTable.hall;
  let hallName = "";
  if (hall !== undefined) {
    hallName = hall.name;
  }
  let dayString = ["일", "월", "화", "수", "목", "금", "토"];
  let timeInfo = "";

  if (
    selecTimeTable.startTime !== undefined &&
    selecDate !== undefined &&
    selecDate !== ""
  ) {
    timeInfo =
      selecDate.getFullYear() +
      "." +
      (selecDate.getMonth() + 1) +
      "." +
      selecDate.getDate() +
      "(" +
      dayString[selecDate.getDay()] +
      ") " +
      selecTimeTable.startTime;
  }

  const goNext = () => {
    if (
      selectedMovie === {} ||
      selectedTheater === {} ||
      selecDate === "" ||
      JSON.stringify(selecTimeTable) === "{}" ||
      selecTimeTable === undefined
    ) {
      alert("영화 정보를 먼저 선택해주세요.");
      return;
    }
    setPrettyDate(timeInfo);
    setNowStep(2);
  };

  return (
    <BlackBoxSection>
      <BackSeatBtnBox></BackSeatBtnBox>
      <TicketInfoBox>
        <TicketMovieInfo>
          <TicketMovieImg src={selectedMovie.posterImgSrc} />
          <TicketInfo>
            <TicketMovieTitle>{movieName}</TicketMovieTitle>
            <TicketMovieTitle>{age}</TicketMovieTitle>
          </TicketInfo>
        </TicketMovieInfo>
        <TicketMovieInfo style={{ width: "185px", display: "block" }}>
          <TheaterInfoRow>
            <TheaterInfoHead>극장</TheaterInfoHead>
            <TheaterInfoContent>{theaterName}</TheaterInfoContent>
          </TheaterInfoRow>
          <TheaterInfoRow style={{ marginTop: "0" }}>
            <TheaterInfoHead>일시</TheaterInfoHead>
            <TheaterInfoContent>{timeInfo}</TheaterInfoContent>
          </TheaterInfoRow>
          <TheaterInfoRow style={{ marginTop: "0" }}>
            <TheaterInfoHead>상영관</TheaterInfoHead>
            <TheaterInfoContent>{hallName}</TheaterInfoContent>
          </TheaterInfoRow>
        </TicketMovieInfo>
        <TicketMovieInfo
          style={{ width: "171px", display: "block" }}
        ></TicketMovieInfo>
      </TicketInfoBox>
      <PaymentBtnBox>
        <PaymentBtn onClick={() => goNext()} />
      </PaymentBtnBox>
    </BlackBoxSection>
  );
};

export default TicketingStep1BlackBox;
