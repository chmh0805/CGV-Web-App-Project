import React from "react";
import styled from "styled-components";

const TicketingDateSection = styled.div`
  width: 100%;
  height: 100%;
  padding: 10% 5% 5% 0px;
  overflow: auto;
`;

const YearDiv = styled.div`
  width: 100%;
  margin-top: 12px;
  margin-top: 12px;
  color: #666;
  font-size: 11px;
  font-family: Verdana;
  font-weight: bold;
  line-height: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MonthDiv = styled.div`
  width: 100%;
  text-align: center;
  color: #666;
  font-size: 30px;
  font-family: Verdana;
  font-weight: bold;
  line-height: 30px;
  margin-top: 3px;
`;

const DayDiv = styled.div`
  width: 60px;
  height: 20px;
  padding-left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-family: "Tahoma", "돋움", dotum, Nanum Gothic, sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const TicketingStep1DateBox = ({ dateList, setSelecDate }) => {
  let dayString = ["일", "월", "화", "수", "목", "금", "토"];

  const selectOne = (date) => {
    setSelecDate(date);
  };

  return (
    <TicketingDateSection>
      <YearDiv>{new Date().getFullYear()}</YearDiv>
      <MonthDiv>{new Date().getMonth() + 1}</MonthDiv>
      {dateList.map((date) => (
        <DayDiv
          onClick={() => {
            selectOne(date);
          }}
        >
          {dayString[date.getDay()]}
          &nbsp;{date.getDate()}
        </DayDiv>
      ))}
    </TicketingDateSection>
  );
};

export default TicketingStep1DateBox;
