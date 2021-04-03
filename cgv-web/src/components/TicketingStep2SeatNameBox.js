import React from "react";
import styled from "styled-components";

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
  display: block;
  width: 135px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding-left: 10px;
  font-weight: bolder;
`;

const TicketingStep2SeatNameBox = ({ seatNames }) => {
  let nameList = [];
  seatNames.forEach((name) => {
    nameList.push(name + " ");
  });

  return (
    <TheaterInfoRow>
      <TheaterInfoHead>좌석번호</TheaterInfoHead>
      <TheaterInfoContent>{nameList}</TheaterInfoContent>
    </TheaterInfoRow>
  );
};

export default TicketingStep2SeatNameBox;
