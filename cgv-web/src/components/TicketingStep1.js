import React from "react";
import styled from "styled-components";
import topButtons from "../images/button/top_buttons.png";

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

const TicketingMovieBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10%;
  padding-left: 10%;
`;

const TicketingMovieSection = styled.div`
  width: 100%;
  overflow: auto;
  margin-top: 3px;
  height: 100%;
`;

const TicketingMovieItem = styled.div`
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
`;

const TicketingTheaterBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
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
`;

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
  height: 35px;
  padding-left: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333;
  font-family: "Tahoma", "돋움", dotum, Nanum Gothic, sans-serif;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
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

const BlackBoxSection = styled.div`
  width: 100%;
  height: 128px;
  background-color: #1d1d1c;
`;

const TicketingStep1 = () => {
  return (
    <>
      <TicketingTopButtonBox>
        <TicketingTopButton />
      </TicketingTopButtonBox>
      <TicketingStepsSection>
        <TicketingStepBox>
          <TicketingBoxTitle>영화</TicketingBoxTitle>
          <TicketingMovieBox>
            <TicketingMovieSection>
              <TicketingMovieItem>반지의제왕-왕의귀환</TicketingMovieItem>
              <TicketingMovieItem>반지의제왕-두개의탑</TicketingMovieItem>
              <TicketingMovieItem>미나리</TicketingMovieItem>
            </TicketingMovieSection>
          </TicketingMovieBox>
        </TicketingStepBox>
        <TicketingStepBox>
          <TicketingBoxTitle>극장</TicketingBoxTitle>
          <TicketingTheaterSection>
            <TicketingTheaterBox>
              <TicketingTheaterItem>CGV서면삼정타워</TicketingTheaterItem>
            </TicketingTheaterBox>
          </TicketingTheaterSection>
        </TicketingStepBox>
        <TicketingDateBox>
          <TicketingBoxTitle>날짜</TicketingBoxTitle>
          <TicketingDateSection>
            <div>
              <YearDiv>2021</YearDiv>
              <MonthDiv>3</MonthDiv>
              <DayDiv>목 18</DayDiv>
              <DayDiv>금 19</DayDiv>
              <DayDiv>토 20</DayDiv>
              <DayDiv>일 21</DayDiv>
              <DayDiv>월 22</DayDiv>
              <DayDiv>화 23</DayDiv>
              <DayDiv>수 24</DayDiv>
              <DayDiv>목 25</DayDiv>
              <DayDiv>금 26</DayDiv>
            </div>
          </TicketingDateSection>
        </TicketingDateBox>
        <TicketingStepBox>
          <TicketingBoxTitle>시간</TicketingBoxTitle>
          <TicketingTimeBox>
            <TicketingTimeSection>
              <TicketingTimeItem>
                <TimeItemTitle>2D 6관[리클라이너] 13층 (총124석)</TimeItemTitle>
                <TimeItemContentBox>
                  <TimeItemContentItem>11:55</TimeItemContentItem>
                  <TimeItemContentItem>16:35</TimeItemContentItem>
                </TimeItemContentBox>
              </TicketingTimeItem>
            </TicketingTimeSection>
          </TicketingTimeBox>
        </TicketingStepBox>
      </TicketingStepsSection>
      <BlackBoxSection></BlackBoxSection>
    </>
  );
};

export default TicketingStep1;
