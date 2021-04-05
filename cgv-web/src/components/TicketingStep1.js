import React, { useEffect, useState } from "react";
import styled from "styled-components";
import topButtons from "../images/button/top_buttons.png";
import { getDefaultDates } from "../utils/Date";
import TicketingStep1DateBox from "./TicketingStep1DateBox";
import TicketingStep1MovieBox from "./TicketingStep1MovieBox";
import TicketingStep1TheaterBox from "./TicketingStep1TheaterBox";
import TicketingStep1TimeBox from "./TicketingStep1TimeBox";
import TicketingStep1BlackBox from "./TicketingStep1BlackBox";

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
  display: flex;
  justify-content: space-between;
`;

const TicketingStepBox = styled.div`
  width: 300px;
  height: 100%;
  background-color: #f2f0e5;
  overflow: hidden;
  color: #333;
  font-size: 12px;
  font-weight: normal;
  border-left: 1px solid #d4d3c9;
  border-right: 1px solid #d4d3c9;
  border-bottom: 1px solid #d4d3c9;
`;

const TicketingDateBox = styled.div`
  width: 100px;
  height: 100%;
  background-color: #f2f0e5;
  overflow: hidden;
  font-size: 12px;
  font-weight: normal;
  border-left: 1px solid #d4d3c9;
  border-right: 1px solid #d4d3c9;
  border-bottom: 1px solid #d4d3c9;
`;

const TicketingBoxTitle = styled.div`
  width: 100%;
  height: 33px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #333333;
  color: #d6d6d6;
  font-size: 17px;
  font-weight: 500;
`;

const TicketingTimeBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10%;
  padding-left: 5%;
  padding-right: 5%;
`;

const TicketingStep1 = (props) => {
  const {
    movie, // 바로예매 누르면 받아서 오기 !!
    setNowStep,
    setMovie,
    setTheater,
    setSelectedDate,
    setSelectedTimeTable,
    setPrettyDate,
  } = props;
  const [selectedMovie, setSelectedMovie] = useState({}); // 고른 영화
  const [selectedTheater, setSelectedTheater] = useState({}); // 고른 극장
  const [movieList, setMoiveList] = useState([]); // 영화리스트
  const [timeTableList, setTimeTableList] = useState([]); // 영화가 열리는 타임테이블 리스트
  const [dateList, setDateList] = useState(getDefaultDates()); // 날짜 리스트
  const [selecDate, setSelecDate] = useState(""); // 고른 날짜
  const [lastTimeTable, setLastTimeTable] = useState([]); // 고른 영화,극장,날짜의 타임테이블 리스트
  const [selecTimeTable, setSelecTimeTable] = useState({}); // 고른 타임테이블

  useEffect(() => {
    fetch("http://localhost:8080/timetable")
      .then((res) => res.json())
      .then((res) => {
        setMoiveList(res.data.movie);
      });
  }, []);

  useEffect(() => {
    setTimeTableList([]);
    setTheater();
    setTimeTableList([]);
    setSelectedTheater({});
    setDateList([]);
    setLastTimeTable([]);
    setSelecDate("");
    setSelecTimeTable({});
    if (selectedMovie !== undefined) {
      fetch("http://localhost:8080/timetable/movie/" + selectedMovie.docId)
        .then((res) => res.json())
        .then((res) => {
          if (res.statusCode === 1) {
            if (res.data.length !== 0) {
              setTimeTableList(res.data);
            }
            setMovie(selectedMovie);
          }
        });
    }
  }, [selectedMovie]);

  useEffect(() => {
    setTheater(selectedTheater.id);
    setLastTimeTable([]);
    setSelecDate("");
    setSelecTimeTable({});

    fetch(
      "http://localhost:8080/timetable/movie/" +
        selectedMovie.docId +
        "/theater/" +
        selectedTheater.id
    )
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 1) {
          let datas = res.data;
          let dates = [];
          let isNotExist = true;

          if (datas !== undefined && datas.length !== 0) {
            datas.forEach((data) => {
              if (!dates.length) {
                dates.push(data.date);
              } else {
                dates.forEach((date) => {
                  if (date === data.date) {
                    isNotExist = false;
                  }
                });
                if (isNotExist) {
                  dates.push(data.date);
                }
              }
            });
            dates = dates.map((date) => new Date(date));
          }
          setDateList(dates);
        }
      });
  }, [selectedTheater]);

  useEffect(() => {
    if (selecDate !== "" && selecDate !== undefined) {
      fetch(
        "http://localhost:8080/timetable/movie/" +
          selectedMovie.docId +
          "/theater/" +
          selectedTheater.id +
          "/month/" +
          (selecDate.getMonth() + 1) +
          "/day/" +
          selecDate.getDate()
      )
        .then((res) => res.json())
        .then((res) => {
          if (res.statusCode === 1) {
            if (res.data.length !== 0) {
              setSelectedDate(selecDate);
              setLastTimeTable(res.data);
            }
          }
        });
    }
  }, [selecDate]);

  useEffect(() => {
    setSelectedTimeTable(selecTimeTable);
  }, [selecTimeTable]);

  return (
    <>
      <TicketingTopButtonBox>
        <TicketingTopButton />
      </TicketingTopButtonBox>
      <TicketingStepsSection>
        <TicketingStepBox>
          <TicketingBoxTitle>영화</TicketingBoxTitle>
          <TicketingStep1MovieBox
            movieList={movieList}
            setSelectedMovie={setSelectedMovie}
          />
        </TicketingStepBox>
        <TicketingStepBox>
          <TicketingBoxTitle>극장</TicketingBoxTitle>
          <TicketingStep1TheaterBox
            timeTableList={timeTableList}
            setSelectedTheater={setSelectedTheater}
          />
        </TicketingStepBox>
        <TicketingDateBox>
          <TicketingBoxTitle>날짜</TicketingBoxTitle>
          <TicketingStep1DateBox
            dateList={dateList}
            setSelecDate={setSelecDate}
          />
        </TicketingDateBox>
        <TicketingStepBox>
          <TicketingBoxTitle>시간</TicketingBoxTitle>
          <TicketingTimeBox>
            <TicketingStep1TimeBox
              lastTimeTable={lastTimeTable}
              setSelecTimeTable={setSelecTimeTable}
            />
          </TicketingTimeBox>
        </TicketingStepBox>
      </TicketingStepsSection>
      <TicketingStep1BlackBox
        selectedMovie={selectedMovie}
        selectedTheater={selectedTheater}
        selecDate={selecDate}
        selecTimeTable={selecTimeTable}
        setNowStep={setNowStep}
        setPrettyDate={setPrettyDate}
      />
    </>
  );
};

export default TicketingStep1;
