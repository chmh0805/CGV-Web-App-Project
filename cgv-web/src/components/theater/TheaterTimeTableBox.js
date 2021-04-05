import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { getDefaultDates } from "../../utils/Date";
import TimeTableMovieListBox from "./TimeTableMovieListBox";

const AllBox = styled.div`
  width: 980px;
  height: auto;
  margin: 0 auto;
  margin-top: 20px;
  padding-bottom: 30px;
`;

const DateListBox = styled.div`
  width: 100%;
  height: 90px;
  border-top: 3px solid black;
  border-bottom: 2px solid black;
  padding: 10px 30px 20px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  column-gap: 15px;
`;

const DateListItem = styled.div`
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const DateSpan = styled.span`
  font-size: 36px;
  font-weight: 800;
`;

const DaySpan = styled.span`
  padding-top: 20px;
  font-weight: 600;
  color: blue;
`;

const TheaterTimeTableBox = ({ theaterDetail }) => {
  let dayString = ["일", "월", "화", "수", "목", "금", "토"];
  let dateList = getDefaultDates();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [timeTableList, setTimeTableList] = useState([]);

  const selectDate = (date) => {
    setSelectedDate(date);
  };

  useEffect(() => {
    let theaterId = theaterDetail.id;
    if (theaterId === undefined) {
      return;
    }
    let year = selectedDate.getFullYear();
    let month = selectedDate.getMonth() + 1 + "";
    if (month.length === 1) {
      month = "0" + month;
    }
    let date = selectedDate.getDate() + "";
    if (date.length === 1) {
      date = "0" + date;
    }
    let requestDate = year + "-" + month + "-" + date;

    fetch(
      "http://localhost:8080/theater/timetable/date/" +
        requestDate +
        "/theaterId/" +
        theaterId
    )
      .then((res) => res.json())
      .then((res) => {
        setTimeTableList(res.data);
      });
  }, [selectedDate]);

  return (
    <AllBox>
      <DateListBox>
        {dateList.map((date) => (
          <DateListItem onClick={() => selectDate(date)}>
            <DateSpan>{date.getDate()}</DateSpan>&nbsp;&nbsp;
            <DaySpan>{dayString[date.getDay()]}</DaySpan>
          </DateListItem>
        ))}
      </DateListBox>
      <TimeTableMovieListBox timeTableList={timeTableList} />
    </AllBox>
  );
};

export default TheaterTimeTableBox;
