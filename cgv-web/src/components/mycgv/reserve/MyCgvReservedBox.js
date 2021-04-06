import React from "react";
import styled from "styled-components";

const ReservedItemBox = styled.div`
  width: 800px;
  padding: 30px;
  border-bottom: 1px solid #d6d4ca;
`;

const ReservedItemBookingNoBox = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #666;
`;

const ReservedItemBookingNo = styled.div`
  color: #000;
  line-height: 1.2;
  font-weight: 600;
  font-size: 14px;
  margin-left: 15px;
`;

const ReservedItemBookingInfoBox = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReservedItemBookingImg = styled.img`
  width: 90px;
  height: 100%;
`;

const ReservedItemBookingDetail = styled.div`
  width: 620px;
  height: 100%;
`;

const BookingDetailTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #222;
  font-size: 15px;
  overflow: hidden;
  line-height: 1.6;
  padding-bottom: 10px;
  border-bottom: 1px solid #bbb9b1;
  margin-bottom: 8px;
`;

const BookingBlueSpan = styled.span`
  font-size: 14px;
  color: #0077a8;
  font-weight: bold;
  padding-right: 30px;
  line-height: 1.6;
`;

const BookingDetailContentBox = styled.div`
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-rows: 16px 16px 16px;
  row-gap: 6px;
  grid-template-columns: 300px 300px;
  column-gap: 10px;
  overflow: hidden;
  margin-top: 8px;
`;

const BookingDetailItemBox = styled.div`
  display: flex;
`;

const BookingDetailItemTitle = styled.div`
  width: 60px;
  text-align: left;
  color: #222;
`;

const BookingDetailItemContent = styled.div`
  width: 240px;
  text-align: left;
  color: #666;
  line-height: 1.3;
`;

const MyCgvReservedBox = ({ ticketings }) => {
  if (!ticketings.length) {
    return (
      <>
        {ticketings.map((ticketing) => {
          let price = "";
          let person = "";
          let dayList = ["일", "월", "화", "수", "목", "금", "토"];
          if (ticketing.personType === 0) {
            price = "10,000";
            person = "청소년";
          } else if (ticketing.personType === 1) {
            price = "13,000";
            person = "일반";
          } else if (ticketing.personType === 2) {
            price = "5,000";
            person = "우대";
          }
          return (
            <ReservedItemBox>
              <ReservedItemBookingNoBox>
                <span>예매번호</span>
                <ReservedItemBookingNo>
                  {ticketing.ticketNum}
                </ReservedItemBookingNo>
              </ReservedItemBookingNoBox>
              <ReservedItemBookingInfoBox>
                <ReservedItemBookingImg
                  src={ticketing.timeTable.movie.posterImgSrc}
                />
                <ReservedItemBookingDetail>
                  <BookingDetailTitle>
                    <span>{ticketing.timeTable.movie.title}</span>
                    <BookingBlueSpan>{price}원</BookingBlueSpan>
                  </BookingDetailTitle>
                  <BookingDetailContentBox>
                    <BookingDetailItemBox>
                      <BookingDetailItemTitle>관람극장</BookingDetailItemTitle>
                      <BookingDetailItemContent>
                        {ticketing.timeTable.theater.name}
                      </BookingDetailItemContent>
                    </BookingDetailItemBox>
                    <BookingDetailItemBox>
                      <BookingDetailItemTitle>관람인원</BookingDetailItemTitle>
                      <BookingDetailItemContent>
                        {person} 1
                      </BookingDetailItemContent>
                    </BookingDetailItemBox>
                    <BookingDetailItemBox>
                      <BookingDetailItemTitle>관람일시</BookingDetailItemTitle>
                      <BookingDetailItemContent>
                        {ticketing.timeTable.date}(
                        {dayList[new Date(ticketing.timeTable.date).getDay()]}){" "}
                        {ticketing.timeTable.startTime}
                      </BookingDetailItemContent>
                    </BookingDetailItemBox>
                    <BookingDetailItemBox>
                      <BookingDetailItemTitle>관람좌석</BookingDetailItemTitle>
                      <BookingDetailItemContent>
                        {ticketing.seat.name}
                      </BookingDetailItemContent>
                    </BookingDetailItemBox>
                    <BookingDetailItemBox>
                      <BookingDetailItemTitle>상영관</BookingDetailItemTitle>
                      <BookingDetailItemContent>
                        {ticketing.seat.hall.name}
                      </BookingDetailItemContent>
                    </BookingDetailItemBox>
                    <BookingDetailItemBox>
                      <BookingDetailItemTitle>매수</BookingDetailItemTitle>
                      <BookingDetailItemContent>1매</BookingDetailItemContent>
                    </BookingDetailItemBox>
                  </BookingDetailContentBox>
                </ReservedItemBookingDetail>
              </ReservedItemBookingInfoBox>
            </ReservedItemBox>
          );
        })}
      </>
    );
  } else {
    return <></>;
  }
};

export default MyCgvReservedBox;
