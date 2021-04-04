import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TimeTableMovieListItem = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 10px 10px 10px;
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
`;

const TimeTableImg = styled.img`
  width: 15%;
  height: 150px;
`;

const TimeTableDetail = styled.div`
  width: 83%;
  height: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const MovieTitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MovieTitleSpan = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

const MovieSubTitleI = styled.i`
  font-style: normal;
  color: #666;
  font-size: 16px;
  line-height: 1.2;
`;

const MovieI = styled.i`
  font-style: normal;
  color: #666;
  line-height: 1.2;
  font-weight: 300;
`;

const MovieSubTitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const HallBox = styled.div`
  width: 100%;
  height: 40px;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const HallItem = styled.div`
  width: 80px;
  height: 100%;
  border: 1px solid #cbcabe;
  border-radius: 5px;
  margin-right: 10px;
  text-align: center;
`;

const HallTimeDiv = styled.div`
  width: 100%;
  text-align: center;
  height: auto;
  font-weight: 1000;
`;

const HallNameDiv = styled.div`
  width: 100%;
  text-align: center;
  height: auto;
  color: #2275ac;
  font-weight: 1000;
`;

const TimeTableMovieListBox = ({ timeTableList }) => {
  let tmpMovieIdList = [];
  let movieList = [];

  timeTableList.forEach((timeTable) => {
    if (tmpMovieIdList.length === 0) {
      tmpMovieIdList.push(timeTable.movie.docId);
      movieList.push(timeTable.movie);
    } else {
      if (tmpMovieIdList.indexOf(timeTable.movie.docId) === -1) {
        tmpMovieIdList.push(timeTable.movie.docId);
        movieList.push(timeTable.movie);
      }
    }
  });
  return (
    <>
      {movieList.map((movie) => {
        let tmpOpenDt = movie.releaseDate;
        let prettyOpenDt =
          tmpOpenDt.substring(0, 4) +
          "." +
          tmpOpenDt.substring(4, 6) +
          "." +
          tmpOpenDt.substring(6);
        return (
          <TimeTableMovieListItem>
            <TimeTableImg src={movie.posterImgSrc} />
            <TimeTableDetail>
              <MovieTitleDiv>
                <span>[{movie.age}]</span>&nbsp;
                <MovieTitleSpan>{movie.title}</MovieTitleSpan>
                <MovieI style={{ marginLeft: "5px" }}>{movie.genre}</MovieI>
                &nbsp;/&nbsp;
                <MovieI>{movie.runningTime}분</MovieI>&nbsp;/&nbsp;
                <MovieI>{prettyOpenDt} 개봉</MovieI>
              </MovieTitleDiv>
              <MovieSubTitleDiv>
                <MovieSubTitleI>{movie.subTitle}</MovieSubTitleI>
              </MovieSubTitleDiv>
              <HallBox>
                {timeTableList.map((timeTable) => {
                  if (movie.docId === timeTable.movie.docId) {
                    return (
                      <>
                        <Link
                          to={{
                            pathname: "/ticket",
                          }}
                        >
                          <HallItem>
                            <HallNameDiv>{timeTable.hall.name}</HallNameDiv>
                            <HallTimeDiv>{timeTable.startTime}</HallTimeDiv>
                          </HallItem>
                        </Link>
                      </>
                    );
                  }
                })}
              </HallBox>
            </TimeTableDetail>
          </TimeTableMovieListItem>
        );
      })}
    </>
  );
};

export default TimeTableMovieListBox;
