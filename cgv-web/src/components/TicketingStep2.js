import React, { useEffect, useState } from "react";
import styled from "styled-components";
import BackMovieButton from "../images/button/backMovie_btn.png";
import PayNextBtn from "../images/button/payment_next_btn.png";
import RightBorder from "../images/ticketing/ticket_right_border.png";
import { ToggleButton, ToggleButtonGroup } from "react-bootstrap";
import TicketingStep2SeatsBox from "./TicketingStep2SeatsBox";
import TicketingStep2PriceBox from "./TicketingStep2PriceBox";
import TicketingStep2SeatNameBox from "./TicketingStep2SeatNameBox";

const TicketingStepsSection = styled.div`
  width: 100%;
  height: 620px;
  display: block;
  justify-content: space-between;
  background-color: #f2f0e5;
`;

const TicketPaymentTitle = styled.h4`
  width: 100%;
  display: block;
  position: relative;
  height: 33px;
  line-height: 33px;
  background-color: #333;
  color: #e0e0e0;
  clear: both;
  margin-bottom: 3px;
  text-align: center;
`;

const TicketStepHeader = styled.span`
  display: block;
  font-size: 15px;
  height: 100%;
  margin-left: 16px;
  font-weight: bold;
  letter-spacing: 0 !important;
  text-indent: 0 !important;
`;

const TicketConfigBox = styled.div`
  border-bottom: 2px solid #d4d3c9;
  display: flex;
  padding: 17px 0 3px 0;
  width: 100%;
`;

const TicketPeopleNumBox = styled.div`
  width: 460px;
  height: 100%;
  margin-left: 2px;
  position: relative;
`;

const PeopleNumSelectBox = styled.div`
  margin-left: 15px;
  padding-right: 18px;
  border-right: 1px solid #d4d3c9;
  display: block;
`;

const GroupBox = styled.div`
  margin-bottom: 8px;
  display: flex;
`;

const GroupName = styled.span`
  width: 55px;
  height: 22px;
  line-height: 22px;
  color: #666;
  font-size: 12px;
`;

const ButtonGroup = styled.div``;

const TicketTheaterInfoBox = styled.div`
  width: 500px;
  height: 100%;
  margin-left: 20px;
  position: relative;
`;

const TheaterText = styled.span`
  padding-left: 0;
  max-width: 150px;
  padding: 0 11px 0 10px;
  border-right: 1px solid #ccc;
  height: 16px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

const TheaterSeatNumText = styled.span`
  padding-left: 0;
  max-width: 150px;
  padding: 0 11px 0 10px;
  height: 16px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;

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

const BackSeatBtn = styled.button`
  background: url(${BackMovieButton}) no-repeat;
  width: 110px;
  height: 110px;
  border-style: none;
  margin-left: 10px;
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
  background: url(${PayNextBtn}) no-repeat;
  width: 110px;
  height: 110px;
  border-style: none;
  margin-left: 10px;
`;

const MDAdBox = styled.div`
  position: absolute;
  left: calc(50% - 690px);
  top: 200px;
`;

const AsidesBannerImg = styled.img`
  width: 160px;
  aspect-ratio: auto 160 / 300;
  height: 300px;
  margin-top: 20px;
`;

const TicketSaleBtn = styled.button`
  width: 96px;
  height: 19px;
  border: 1px solid #745447;
  background-color: #926f60;
  border-radius: 3px;
  text-align: center;
  color: white;
  font-size: 12px;
  position: absolute;
  bottom: 10px;
  right: 12px;

  &:hover {
    text-decoration: underline;
  }
`;

const ChangeTimeBtn = styled.button`
  width: 110px;
  height: 19px;
  border: 1px solid #745447;
  background-color: #926f60;
  border-radius: 3px;
  text-align: center;
  color: white;
  font-size: 11px;
  position: absolute;
  bottom: -20px;
  right: 12px;

  &:hover {
    text-decoration: underline;
  }
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
  white-space: nowrap;
  padding-left: 10px;
  font-weight: bolder;
`;

const Mbutton = styled(ToggleButton)`
  width: 21px;
  height: 21px;
  line-height: 20px;
  margin-right: 6px;
  border: 1px solid #d6d3ce;
  background: #f2f0e5;
  padding: 0;
  font-weight: bold;
  color: black;
  font-size: 12px;
`;

const TicketingStep2 = (props) => {
  const {
    setNowStep,
    movie,
    selectedTimeTable,
    prettyDate,
    setTotalPrice,
    selectedSeatNums,
    setSelectedSeatNums,
    normalPeopleCount,
    youngPeopleCount,
    oldPeopleCount,
    setNormalPeopleCount,
    setYoungPeopleCount,
    setOldPeopleCount,
  } = props;

  let toDate = new Date(prettyDate);
  let endDate = new Date(
    toDate.setMinutes(toDate.getMinutes() + (movie.runningTime + 10))
  );
  let endHour = endDate.getHours() + "";
  let endMinutes = endDate.getMinutes() + "";
  if (endMinutes.length === 1) {
    endMinutes = "0" + endMinutes;
  }
  let totalSeats = selectedTimeTable.hall.seats.length;
  let posterImg = selectedTimeTable.movie.posterImgSrc;
  let movieName = selectedTimeTable.movie.title;
  let age = selectedTimeTable.movie.age;
  let theaterName = selectedTimeTable.theater.name;
  let hallName = selectedTimeTable.hall.name;
  let useableSeatsCount = 20;

  const [totalPeopleCount, setTotalPeopleCount] = useState(0);
  const [useableSeats, setUseableSeats] = useState([]); // ?????? ?????? ?????? ?????????
  const [allSeats, setAllseats] = useState(selectedTimeTable.hall.seats);
  const [isAll, setIsAll] = useState(false); // ????????????
  const [seatNames, SetSeatNames] = useState([]); // ?????? ????????? ???????????? ??????, ????????????
  let peopleInfo = ""; // ?????? ????????? ???????????? ?????? ????????? (ex) ????????? 1???
  if (normalPeopleCount !== 0) {
    peopleInfo += `?????? ${normalPeopleCount}??? `;
  }
  if (youngPeopleCount !== 0) {
    peopleInfo += `????????? ${youngPeopleCount}??? `;
  }
  if (oldPeopleCount !== 0) {
    peopleInfo += `?????? ${oldPeopleCount}??? `;
  }

  const goToBack = () => {
    setNowStep(1);
  };

  const goToFront = () => {
    if (!isAll) {
      alert("?????? ?????? ???, ?????? ??????????????? ??????????????????.");
      return;
    }
    setNowStep(3);
  };

  const handleNormalRadio = (val) => {
    setNormalPeopleCount(val);
  };
  const handleYoungRadio = (val) => {
    setYoungPeopleCount(val);
  };
  const handleOldRadio = (val) => {
    setOldPeopleCount(val);
  };

  useEffect(() => {
    setTotalPeopleCount(normalPeopleCount + youngPeopleCount + oldPeopleCount);
    setSelectedSeatNums([]);
    setIsAll(false);
  }, [normalPeopleCount, youngPeopleCount, oldPeopleCount]);

  useEffect(() => {
    let hallId = selectedTimeTable.hall.id;
    let timeTableId = selectedTimeTable.id;
    fetch(
      "http://localhost:8080/seat/hall/" + hallId + "/timetable/" + timeTableId
    )
      .then((res) => res.json())
      .then((res) => {
        setUseableSeats(res.data);
        useableSeatsCount = res.data.length;
      });
  }, []);

  useEffect(() => {
    console.log(selectedSeatNums);
    let tmpNameList = [];
    allSeats.forEach((seat) => {
      selectedSeatNums.forEach((seatId) => {
        if (Number(seat.id) === Number(seatId)) {
          tmpNameList.push(seat.name);
        }
      });
    });
    SetSeatNames(tmpNameList);
  }, [selectedSeatNums]);

  return (
    <>
      <MDAdBox>
        <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202003/house/A_skin_160x300.png" />
      </MDAdBox>

      <TicketingStepsSection>
        <TicketPaymentTitle>
          <TicketStepHeader>??????/??????</TicketStepHeader>
        </TicketPaymentTitle>

        <TicketConfigBox>
          <TicketPeopleNumBox>
            <TicketSaleBtn>?????? ?????? ??????</TicketSaleBtn>
            <PeopleNumSelectBox>
              <GroupBox>
                <GroupName>??????</GroupName>
                <ButtonGroup>
                  <ToggleButtonGroup
                    type="radio"
                    name="normalPersonCount"
                    onChange={handleNormalRadio}
                  >
                    <Mbutton value={0}>0</Mbutton>
                    <Mbutton value={1}>1</Mbutton>
                    <Mbutton value={2}>2</Mbutton>
                    <Mbutton value={3}>3</Mbutton>
                    <Mbutton value={4}>4</Mbutton>
                    <Mbutton value={5}>5</Mbutton>
                  </ToggleButtonGroup>
                </ButtonGroup>
              </GroupBox>
              <GroupBox>
                <GroupName>?????????</GroupName>
                <ToggleButtonGroup
                  type="radio"
                  name="youngPersonCount"
                  onChange={handleYoungRadio}
                >
                  <Mbutton value={0}>0</Mbutton>
                  <Mbutton value={1}>1</Mbutton>
                  <Mbutton value={2}>2</Mbutton>
                  <Mbutton value={3}>3</Mbutton>
                  <Mbutton value={4}>4</Mbutton>
                  <Mbutton value={5}>5</Mbutton>
                </ToggleButtonGroup>
              </GroupBox>

              <GroupBox>
                <GroupName>??????</GroupName>
                <ButtonGroup>
                  <ToggleButtonGroup
                    type="radio"
                    name="oldPersonCount"
                    onChange={handleOldRadio}
                  >
                    <Mbutton value={0}>0</Mbutton>
                    <Mbutton value={1}>1</Mbutton>
                    <Mbutton value={2}>2</Mbutton>
                    <Mbutton value={3}>3</Mbutton>
                    <Mbutton value={4}>4</Mbutton>
                    <Mbutton value={5}>5</Mbutton>
                  </ToggleButtonGroup>
                </ButtonGroup>
              </GroupBox>
            </PeopleNumSelectBox>
          </TicketPeopleNumBox>

          <TicketTheaterInfoBox>
            <ChangeTimeBtn>???????????? ????????????</ChangeTimeBtn>
            <p>
              <TheaterText>{theaterName}</TheaterText>
              <TheaterText>{hallName}</TheaterText>
              <TheaterSeatNumText>
                ????????????&nbsp;
                <b class="restNum" style={{ color: "#CA4D10" }}>
                  {useableSeatsCount}
                </b>
                /<b class="totalNum">{totalSeats}</b>
              </TheaterSeatNumText>
            </p>
            <p style={{ fontSize: "20px", paddingLeft: "10px" }}>
              <b>{prettyDate} ~</b>
              <b>
                &nbsp;
                {endHour}:{endMinutes}
              </b>
            </p>
          </TicketTheaterInfoBox>
        </TicketConfigBox>

        <TicketingStep2SeatsBox
          totalPeopleCount={totalPeopleCount}
          setSelectedSeatNums={setSelectedSeatNums}
          selectedSeatNums={selectedSeatNums}
          useableSeats={useableSeats}
          allSeats={allSeats}
          setIsAll={setIsAll}
        />
      </TicketingStepsSection>

      <BlackBoxSection>
        <BackSeatBtnBox>
          <BackSeatBtn onClick={() => goToBack()} />
        </BackSeatBtnBox>
        <TicketInfoBox>
          <TicketMovieInfo>
            <TicketMovieImg src={posterImg} />
            <TicketInfo>
              <TicketMovieTitle>{movieName}</TicketMovieTitle>
              <TicketMovieTitle>{age}</TicketMovieTitle>
            </TicketInfo>
          </TicketMovieInfo>
          <TicketMovieInfo style={{ width: "185px", display: "block" }}>
            <TheaterInfoRow>
              <TheaterInfoHead>??????</TheaterInfoHead>
              <TheaterInfoContent>{theaterName}</TheaterInfoContent>
            </TheaterInfoRow>
            <TheaterInfoRow style={{ marginTop: "0" }}>
              <TheaterInfoHead>??????</TheaterInfoHead>
              <TheaterInfoContent>{prettyDate}</TheaterInfoContent>
            </TheaterInfoRow>
            <TheaterInfoRow style={{ marginTop: "0" }}>
              <TheaterInfoHead>?????????</TheaterInfoHead>
              <TheaterInfoContent>{hallName}</TheaterInfoContent>
            </TheaterInfoRow>
            <TheaterInfoRow style={{ marginTop: "0" }}>
              <TheaterInfoHead>??????</TheaterInfoHead>
              <TheaterInfoContent>{peopleInfo}</TheaterInfoContent>
            </TheaterInfoRow>
          </TicketMovieInfo>
          <TicketMovieInfo style={{ width: "171px", display: "block" }}>
            <TicketingStep2SeatNameBox seatNames={seatNames} />
          </TicketMovieInfo>
          <TicketMovieInfo
            style={{ width: "171px", display: "block", background: "none" }}
          >
            <TicketingStep2PriceBox
              normalPeopleCount={normalPeopleCount}
              youngPeopleCount={youngPeopleCount}
              oldPeopleCount={oldPeopleCount}
              setTotalPrice={setTotalPrice}
            />
          </TicketMovieInfo>
        </TicketInfoBox>
        <PaymentBtnBox>
          <PaymentBtn onClick={() => goToFront()} />
        </PaymentBtnBox>
      </BlackBoxSection>
    </>
  );
};

export default TicketingStep2;
