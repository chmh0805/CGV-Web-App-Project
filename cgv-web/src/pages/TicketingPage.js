import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import TicketingStep1 from "../components/TicketingStep1";
import TicketingStep2 from "../components/TicketingStep2";
import TicketingStep3 from "../components/TicketingStep3";
import { deleteCookie, getCookie } from "../utils/JWT";

const TicketingMainContainer = styled.div`
  background-color: white;
  width: auto;
  height: auto;
  min-height: 899px;
  padding-bottom: 100px;
`;

const NavSection = styled.div`
  background-color: #f1f0e5;
  width: auto;
  height: 30px;
  border-bottom: 1px solid #cacac0;
`;

const NavSectionItemBox = styled.div`
  width: 980px;
  padding-top: 5px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavSectionHome = styled(Link)`
  color: black;

  &:hover {
    color: black;
  }
`;

const NavSectionArrow = styled.span`
  color: #999999;
  font-size: 16px;
  font-weight: 1000;
  margin-left: 15px;
  margin-right: 15px;
`;

const NavSectionSpan = styled.span`
  font-size: 13px;
`;

const TicketingSubContainer = styled.div`
  width: 980px;
  height: auto;
  margin: 0 auto;
  margin-top: 25px;
`;

const TicketingPage = ({ getMovie }) => {
  const [nowStep, setNowStep] = useState(1);
  const [movie, setMovie] = useState(0); // 고른 영화
  const [theater, setTheater] = useState(0); // 고른 극장
  const [selectedDate, setSelectedDate] = useState(""); // 고른 날짜, Date() 객체
  const [selectedTimeTable, setSelectedTimeTable] = useState({}); // 고른 timetable
  const [prettyDate, setPrettyDate] = useState(""); // 정제된 날짜 yyyy.MM.dd (day) time의 형태
  const [totalPrice, setTotalPrice] = useState(0); // 전체금액
  const [userInfo, setUserInfo] = useState({}); // 유저 정보
  const [selectedSeatNums, setSelectedSeatNums] = useState([]); // 선택한 좌석들
  const [normalPeopleCount, setNormalPeopleCount] = useState(0); // 일반
  const [youngPeopleCount, setYoungPeopleCount] = useState(0); // 청소년
  const [oldPeopleCount, setOldPeopleCount] = useState(0); // 우대

  useEffect(() => {
    fetch("http://localhost:8080/user", {
      headers: new Headers({
        Authorization: getCookie("cgvJWT"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 1) {
          setUserInfo(res.data);
        } else {
          fetch("http://localhost:8080/logout").then(() => {
            deleteCookie("cgvJWT");
            deleteCookie("userId");
            deleteCookie("role");
          });
          alert("회원정보 조회 실패. 재로그인해주세요.");
          window.location.replace("/login");
          return;
        }
      });
  }, []);

  if (nowStep === 1) {
    return (
      <TicketingMainContainer>
        <NavSection>
          <NavSectionItemBox>
            <NavSectionHome to="/">
              <HomeIcon />
            </NavSectionHome>
            <NavSectionArrow>〉</NavSectionArrow>
            <NavSectionSpan>예매</NavSectionSpan>
            <NavSectionArrow>〉</NavSectionArrow>
            <NavSectionSpan
              style={{ textDecoration: "underline", fontWeight: "700" }}
            >
              빠른예매
            </NavSectionSpan>
          </NavSectionItemBox>
        </NavSection>
        <TicketingSubContainer>
          <TicketingStep1
            movie={movie}
            setNowStep={setNowStep}
            setMovie={setMovie}
            setTheater={setTheater}
            setSelectedDate={setSelectedDate}
            setSelectedTimeTable={setSelectedTimeTable}
            setPrettyDate={setPrettyDate}
          />
        </TicketingSubContainer>
      </TicketingMainContainer>
    );
  } else if (nowStep === 2) {
    return (
      <TicketingMainContainer>
        <NavSection>
          <NavSectionItemBox>
            <NavSectionHome to="/">
              <HomeIcon />
            </NavSectionHome>
            <NavSectionArrow>〉</NavSectionArrow>
            <NavSectionSpan>예매</NavSectionSpan>
            <NavSectionArrow>〉</NavSectionArrow>
            <NavSectionSpan
              style={{ textDecoration: "underline", fontWeight: "700" }}
            >
              빠른예매
            </NavSectionSpan>
          </NavSectionItemBox>
        </NavSection>
        <TicketingSubContainer>
          <TicketingStep2
            setNowStep={setNowStep}
            movie={movie}
            selectedTimeTable={selectedTimeTable}
            prettyDate={prettyDate}
            setTotalPrice={setTotalPrice}
            totalPrice={totalPrice}
            selectedSeatNums={selectedSeatNums}
            setSelectedSeatNums={setSelectedSeatNums}
            normalPeopleCount={normalPeopleCount}
            setNormalPeopleCount={setNormalPeopleCount}
            youngPeopleCount={youngPeopleCount}
            setYoungPeopleCount={setYoungPeopleCount}
            oldPeopleCount={oldPeopleCount}
            setOldPeopleCount={setOldPeopleCount}
          />
        </TicketingSubContainer>
      </TicketingMainContainer>
    );
  } else {
    return (
      <TicketingMainContainer>
        <NavSection>
          <NavSectionItemBox>
            <NavSectionHome to="/">
              <HomeIcon />
            </NavSectionHome>
            <NavSectionArrow>〉</NavSectionArrow>
            <NavSectionSpan>예매</NavSectionSpan>
            <NavSectionArrow>〉</NavSectionArrow>
            <NavSectionSpan
              style={{ textDecoration: "underline", fontWeight: "700" }}
            >
              빠른예매
            </NavSectionSpan>
          </NavSectionItemBox>
        </NavSection>
        <TicketingSubContainer>
          <TicketingStep3
            setNowStep={setNowStep}
            totalPrice={totalPrice}
            userInfo={userInfo}
            selectedTimeTable={selectedTimeTable}
            normalPeopleCount={normalPeopleCount}
            youngPeopleCount={youngPeopleCount}
            oldPeopleCount={oldPeopleCount}
            selectedSeatNums={selectedSeatNums}
            setNormalPeopleCount={setNormalPeopleCount}
            setYoungPeopleCount={setYoungPeopleCount}
            setOldPeopleCount={setOldPeopleCount}
          />
        </TicketingSubContainer>
      </TicketingMainContainer>
    );
  }
};

export default TicketingPage;
