import React from "react";
import styled from "styled-components";
import ScreenBg from "../images/ticketing/screen_bg.png";
import SeatInfo from "../images/ticketing/seat_info.jpg";

const TheaterSeatBox = styled.div`
  position: absolute;
  display: block;
  left: 16px;
`;

const TheaterSeatNum = styled.div`
  display: flex;
`;

const SeatNumBtn = styled.button`
  width: 16px;
  height: 14px;
  line-height: 14px;
  background-color: #74501c;
  color: white;
  align-items: 0;
  vertical-align: middle;
  font-size: 11px;
  text-align: center;
  padding: 0;
  border-style: none;
  border-radius: 2px;
  margin-right: 1px;
  margin-top: 1px;

  &:hover {
    background-color: red;
  }

  &:focus {
    background-color: red;
  }
`;

const SuccessBtnBox = styled.div`
  padding-top: 250px;
`;

const SuccessBtn = styled.button`
  width: 30px;
  height: 80px;
  background-color: rgb(200, 130, 0);
  color: white;
  font-weight: bold;
  border: 1px solid white;
`;

const TheaterMapBox = styled.div`
  display: flex;
  padding-top: 40px;
`;

const TheaterMapSmallBox = styled.div`
  position: relative;
  width: 826px;
  height: 355px;
  margin-left: 20px;
`;

const Screen = styled.div`
  width: 652px;
  height: 25px;
  margin: 0 auto;
  line-height: 25px;
  text-align: center;
  background: url(${ScreenBg}) repeat-x left;
  font-weight: bold;
`;

const TheaterSeatInfoBox = styled.div``;

const TheaterMap = styled.div`
  position: relative;
  width: 240px;
  height: 176px;
  margin: 56px auto 40px auto;
`;
const TheaterRowHeadBox = styled.div`
  width: 15px;
  position: absolute;
  left: 0;
`;

const TheaterRowHead = styled.div`
  width: 15px;
  height: 14px;
  line-height: 14px;
  border-top: 1px solid #d4d3c9;
  margin-bottom: 1px;
  font-size: 11px;
  font-family: Verdana;
  font-weight: bold;
  text-align: center;
`;

const TheaterNoticeInfo = styled.div`
  width: 520px;
  height: 25px;
  padding: 2px;
  background-color: #1d1d1c;
  position: absolute;
  left: 150px;
  text-align: center;
  vertical-align: middle;
  color: white;
`;

const TicketingStep2SeatsBox = ({
  totalPeopleCount,
  selectedSeatNums,
  setSelectedSeatNums,
  useableSeats,
  allSeats,
  setIsAll,
}) => {
  const tmpList = [];

  const colorChange = (e) => {
    if (totalPeopleCount === 0) {
      alert("인원을 설정하세요.");
      return;
    }
    if (e.target.style.backgroundColor === "rgb(116, 80, 28)") {
      if (tmpList.length >= totalPeopleCount) {
        alert("최대 인원을 초과했습니다.");
        return;
      }
      e.target.style = "background-color: red";
      tmpList.push(e.target.id);
    } else {
      e.target.style = "background-color: rgb(116, 80, 28)";
      tmpList.splice(tmpList.indexOf(e.target.id), 1);
    }
  };

  let allSeatsOne = allSeats.slice(0, 5);
  let allSeatsTwo = allSeats.slice(5, 10);
  let allSeatsThree = allSeats.slice(10, 15);
  let allSeatsFour = allSeats.slice(15, 20);

  const initSeats = () => {
    let seats = document.getElementsByName("seatBtn");
    seats.forEach((seat) => {
      seat.disabled = true;
      seat.style = "background-color: gray";
    });
    useableSeats.forEach((seat) => {
      let useableSeat = document.getElementById(seat.id);
      useableSeat.style = "background-color: #74501c";
      useableSeat.disabled = false;
    });
  };

  if (selectedSeatNums.length === 0) {
    initSeats();
  }

  const successBtnClick = () => {
    if (tmpList.length !== totalPeopleCount) {
      alert("인원에 맞게 좌석을 선택해주세요.");
      return;
    }
    if (totalPeopleCount === 0) {
      alert("인원을 선택해주세요.");
      return;
    }
    setIsAll(true);
    setSelectedSeatNums(tmpList);

    let seats = document.getElementsByName("seatBtn");
    seats.forEach((seat) => {
      seat.disabled = true;
      seat.style = "background-color: gray";
    });
  };

  return (
    <TheaterMapBox>
      <TheaterMapSmallBox>
        <blockBox />
        <Screen>SCREEN</Screen>
        <TheaterMap>
          <TheaterRowHeadBox>
            <TheaterRowHead>A</TheaterRowHead>
            <TheaterRowHead>B</TheaterRowHead>
            <TheaterRowHead>C</TheaterRowHead>
            <TheaterRowHead>D</TheaterRowHead>
          </TheaterRowHeadBox>
          <TheaterSeatBox>
            <TheaterSeatNum>
              {allSeatsOne.map((seat) => (
                <SeatNumBtn onClick={colorChange} id={seat.id} name="seatBtn">
                  {seat.name.substring(1)}
                </SeatNumBtn>
              ))}
            </TheaterSeatNum>
            <TheaterSeatNum>
              {allSeatsTwo.map((seat) => (
                <SeatNumBtn onClick={colorChange} id={seat.id} name="seatBtn">
                  {seat.name.substring(1)}
                </SeatNumBtn>
              ))}
            </TheaterSeatNum>
            <TheaterSeatNum>
              {allSeatsThree.map((seat) => (
                <SeatNumBtn onClick={colorChange} id={seat.id} name="seatBtn">
                  {seat.name.substring(1)}
                </SeatNumBtn>
              ))}
            </TheaterSeatNum>
            <TheaterSeatNum>
              {allSeatsFour.map((seat) => (
                <SeatNumBtn onClick={colorChange} id={seat.id} name="seatBtn">
                  {seat.name.substring(1)}
                </SeatNumBtn>
              ))}
            </TheaterSeatNum>
          </TheaterSeatBox>
        </TheaterMap>
        <TheaterNoticeInfo>
          [안내] 극장 이용 시 마스크 착용은 필수입니다. (미착용 시 입장제한)
        </TheaterNoticeInfo>
      </TheaterMapSmallBox>
      <SuccessBtnBox>
        <SuccessBtn onClick={successBtnClick}>선택완료</SuccessBtn>
      </SuccessBtnBox>
      <TheaterSeatInfoBox>
        <img
          src={SeatInfo}
          style={{ width: "110px", height: "140px" }}
          alt="좌석안내표"
        />
      </TheaterSeatInfoBox>
    </TheaterMapBox>
  );
};

export default TicketingStep2SeatsBox;
