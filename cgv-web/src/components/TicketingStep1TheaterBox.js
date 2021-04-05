import React from "react";
import styled from "styled-components";

const TicketingTheaterBox = styled.div`
  width: 100%;
  height: 100%;
  padding-top: 10%;
  padding-left: 10%;
`;

const TicketingTheaterSection = styled.div`
  width: 100%;
  overflow: auto;
  margin-top: 3px;
  height: 100%;
`;

const TicketingTheaterItem = styled.div`
  width: 100%;
  height: 35px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #333;
  font-size: 15px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const TicketingStep1TheaterBox = ({ timeTableList, setSelectedTheater }) => {
  let timeTables = timeTableList;
  let theaters = [];

  timeTables.forEach((timeTable) => {
    let theater = timeTable.theater;
    let isNotExist = true;

    if (!theaters.length) {
      theaters.push(theater);
    } else {
      theaters.forEach((t) => {
        if (t.id === theater.id) {
          isNotExist = false;
        }
      });
      if (isNotExist) {
        theaters.push(theater);
      }
    }
  });

  const selectOne = (theater) => {
    setSelectedTheater(theater);
  };

  if (theaters.length) {
    return (
      <TicketingTheaterSection>
        <TicketingTheaterBox>
          {theaters.map((theater) => (
            <TicketingTheaterItem onClick={(e) => selectOne(theater)}>
              {theater.name}
            </TicketingTheaterItem>
          ))}
        </TicketingTheaterBox>
      </TicketingTheaterSection>
    );
  } else {
    return (
      <TicketingTheaterSection>
        <TicketingTheaterBox>
          <div>상영정보가 없습니다.</div>
        </TicketingTheaterBox>
      </TicketingTheaterSection>
    );
  }
};

export default TicketingStep1TheaterBox;
