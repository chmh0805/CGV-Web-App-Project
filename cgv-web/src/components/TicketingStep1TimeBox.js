import React from "react";
import styled from "styled-components";

const TicketingTimeSection = styled.div`
  width: 100%;
  overflow: auto;
  margin-top: 3px;
  height: 100%;
`;

const TicketingTimeItem = styled.div`
  width: 306px;
  border-bottom: solid 2px #cfcdc3;
  margin-top: 16px;
  overflow: hidden;
  color: #333;
  font-size: 12px;
  font-weight: normal;
`;

const TimeItemTitle = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #333;
  font-size: 12px;
  font-weight: 600;
`;

const TimeItemContentBox = styled.div`
  width: 309px;
  margin-top: 10px;
  margin-bottom: 6px;
  overflow: hidden;
  color: #333;
  font-size: 12px;
  display: flex;
`;

const TimeItemContentItem = styled.div`
  width: auto;
  height: 25px;
  line-height: 25px;
  padding: 5px;
  border: 1px solid #d6d3ce;
  margin-left: 5px;
  margin-right: 5px;
  color: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  cursor: pointer;
`;

const TicketingStep1TimeBox = ({ lastTimeTable, setSelecTimeTable }) => {
  let timeTables = lastTimeTable;
  let tmpHallIdList = [];
  let hallList = [];

  timeTables.forEach((timeTable) => {
    if (tmpHallIdList.length === 0) {
      tmpHallIdList.push(timeTable.hall.id);
      hallList.push(timeTable.hall);
    } else {
      if (tmpHallIdList.indexOf(timeTable.hall.id) === -1) {
        tmpHallIdList.push(timeTable.hall.id);
        hallList.push(timeTable.hall);
      }
    }
  });

  const selectOne = (timeTable) => {
    setSelecTimeTable(timeTable);
  };

  return (
    <TicketingTimeSection>
      {hallList.map((hall) => (
        <TicketingTimeItem>
          <TimeItemTitle>
            {hall.name}&nbsp;(총{hall.seats.length}석)
          </TimeItemTitle>
          <TimeItemContentBox>
            {timeTables.map((timeTable) => {
              if (hall.id === timeTable.hall.id) {
                return (
                  <TimeItemContentItem onClick={() => selectOne(timeTable)}>
                    {timeTable.startTime}
                  </TimeItemContentItem>
                );
              }
            })}
          </TimeItemContentBox>
        </TicketingTimeItem>
      ))}
    </TicketingTimeSection>
  );
};

export default TicketingStep1TimeBox;
