import React from "react";
import styled from "styled-components";
import topButtons from "../images/button/top_buttons.png";
import BackMovieButton from "../images/button/backMovie_btn.png";
import PayNextBtn from "../images/button/payment_next_btn.png";
import ScreenBg from "../images/ticketing/screen_bg.png";
import SeatInfo from "../images/ticketing/seat_info.jpg";
import RightBorder from "../images/ticketing/ticket_right_border.png";
import posterEx from "../images/movieChart/MoviePosterEx.jpg";

const TicketingTopButtonBox = styled.div`
  width: 100%;
  height: 70px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TicketingTopButton = styled.div`
  position: relative;
  display: block;
  float: left;
  margin-left: 5px;
  width: 81px;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  background: white url(${topButtons}) no-repeat;
  background-position: 0 -30px;
  cursor: pointer;
`;

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

const PeopleNumButton = styled.button`
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin-right: 6px;
  border: 1px solid #d6d3ce;
  background-color: #f2f0e5;
  padding: 0;
  font-weight: bold;

  &:focus {
    background-color: #333;
    color: white;
  }
`;

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
  padding-left: 10px;
  font-weight: bolder;
`;

const TicketingStep2 = (props) => {
  const {
    setNowStep,
    movie,
    theater,
    selectedDate,
    selectedTimeTable,
    prettyDate,
  } = props;
  console.log(selectedTimeTable);

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

  const goToBack = () => {
    setNowStep(1);
  };

  const goToFront = () => {
    setNowStep(3);
  };

  return (
    <>
      <MDAdBox>
        <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202003/house/A_skin_160x300.png" />
      </MDAdBox>

      <TicketingStepsSection>
        <TicketPaymentTitle>
          <TicketStepHeader>인원/좌석</TicketStepHeader>
        </TicketPaymentTitle>

        <TicketConfigBox>
          <TicketPeopleNumBox>
            <TicketSaleBtn>관람 할인 안내</TicketSaleBtn>
            <PeopleNumSelectBox>
              <GroupBox>
                <GroupName>일반</GroupName>
                <ButtonGroup>
                  <PeopleNumButton>0</PeopleNumButton>
                  <PeopleNumButton>1</PeopleNumButton>
                  <PeopleNumButton>2</PeopleNumButton>
                  <PeopleNumButton>3</PeopleNumButton>
                  <PeopleNumButton>4</PeopleNumButton>
                </ButtonGroup>
              </GroupBox>

              <GroupBox>
                <GroupName>청소년</GroupName>
                <ButtonGroup>
                  <PeopleNumButton>0</PeopleNumButton>
                  <PeopleNumButton>1</PeopleNumButton>
                  <PeopleNumButton>2</PeopleNumButton>
                  <PeopleNumButton>3</PeopleNumButton>
                  <PeopleNumButton>4</PeopleNumButton>
                </ButtonGroup>
              </GroupBox>

              <GroupBox>
                <GroupName>우대</GroupName>
                <ButtonGroup>
                  <PeopleNumButton>0</PeopleNumButton>
                  <PeopleNumButton>1</PeopleNumButton>
                  <PeopleNumButton>2</PeopleNumButton>
                  <PeopleNumButton>3</PeopleNumButton>
                  <PeopleNumButton>4</PeopleNumButton>
                </ButtonGroup>
              </GroupBox>
            </PeopleNumSelectBox>
          </TicketPeopleNumBox>

          <TicketTheaterInfoBox>
            <ChangeTimeBtn>상영시간 변경하기</ChangeTimeBtn>
            <p>
              <TheaterText>CGV 등촌</TheaterText>
              <TheaterText>4관 7층</TheaterText>
              <TheaterSeatNumText>
                남은좌석&nbsp;
                <b class="restNum" style={{ color: "#CA4D10" }}>
                  111
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

        <TheaterMapBox>
          <TheaterMapSmallBox>
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
                  <SeatNumBtn>1</SeatNumBtn>
                  <SeatNumBtn>2</SeatNumBtn>
                  <SeatNumBtn>3</SeatNumBtn>
                  <SeatNumBtn>4</SeatNumBtn>
                  <SeatNumBtn>5</SeatNumBtn>
                </TheaterSeatNum>
                <TheaterSeatNum>
                  <SeatNumBtn>1</SeatNumBtn>
                  <SeatNumBtn>2</SeatNumBtn>
                  <SeatNumBtn>3</SeatNumBtn>
                  <SeatNumBtn>4</SeatNumBtn>
                  <SeatNumBtn>5</SeatNumBtn>
                </TheaterSeatNum>
                <TheaterSeatNum>
                  <SeatNumBtn>1</SeatNumBtn>
                  <SeatNumBtn>2</SeatNumBtn>
                  <SeatNumBtn>3</SeatNumBtn>
                  <SeatNumBtn>4</SeatNumBtn>
                  <SeatNumBtn>5</SeatNumBtn>
                </TheaterSeatNum>
                <TheaterSeatNum>
                  <SeatNumBtn>1</SeatNumBtn>
                  <SeatNumBtn>2</SeatNumBtn>
                  <SeatNumBtn>3</SeatNumBtn>
                  <SeatNumBtn>4</SeatNumBtn>
                  <SeatNumBtn>5</SeatNumBtn>
                </TheaterSeatNum>
              </TheaterSeatBox>
            </TheaterMap>
            <TheaterNoticeInfo>
              [안내] 극장 이용 시 마스크 착용은 필수입니다. (미착용 시 입장제한)
            </TheaterNoticeInfo>
          </TheaterMapSmallBox>
          <TheaterSeatInfoBox>
            <img
              src={SeatInfo}
              style={{ width: "110px", height: "140px" }}
              alt="좌석안내표"
            />
          </TheaterSeatInfoBox>
        </TheaterMapBox>
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
              <TheaterInfoHead>극장</TheaterInfoHead>
              <TheaterInfoContent>{theaterName}</TheaterInfoContent>
            </TheaterInfoRow>
            <TheaterInfoRow style={{ marginTop: "0" }}>
              <TheaterInfoHead>일시</TheaterInfoHead>
              <TheaterInfoContent>{prettyDate}</TheaterInfoContent>
            </TheaterInfoRow>
            <TheaterInfoRow style={{ marginTop: "0" }}>
              <TheaterInfoHead>상영관</TheaterInfoHead>
              <TheaterInfoContent>{hallName}</TheaterInfoContent>
            </TheaterInfoRow>
            <TheaterInfoRow style={{ marginTop: "0" }}>
              <TheaterInfoHead>인원</TheaterInfoHead>
              <TheaterInfoContent>청소년 1명</TheaterInfoContent>
            </TheaterInfoRow>
          </TicketMovieInfo>
          <TicketMovieInfo style={{ width: "171px", display: "block" }}>
            <TheaterInfoRow>
              <TheaterInfoHead>좌석명</TheaterInfoHead>
              <TheaterInfoContent>좌석번호</TheaterInfoContent>
            </TheaterInfoRow>
          </TicketMovieInfo>
          <TicketMovieInfo
            style={{ width: "171px", display: "block", background: "none" }}
          >
            <TheaterInfoRow>
              <TheaterInfoHead>청소년</TheaterInfoHead>
              <TheaterInfoContent>10,000원 x1</TheaterInfoContent>
            </TheaterInfoRow>
            <TheaterInfoRow style={{ marginTop: "0" }}>
              <TheaterInfoHead>총금액</TheaterInfoHead>
              <TheaterInfoContent style={{ color: "red" }}>
                10,000원
              </TheaterInfoContent>
            </TheaterInfoRow>
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
