import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import bgServiceBoxItem from "../images/bg_c_main.png";
import SupportMainServiceBox from "../components/SupportMainServiceBox";
import { getCookie, setCookie } from "../utils/JWT";
import SupportAsidesBox from "../components/SupportAsidesBox";
import SupportMainBigSquareBox from "../components/SupportMainBigSquareBox";
import MainNoticeBoxContentBox from "../components/support/MainNoticeBoxContentBox";

const SupportMainContainer = styled.div`
  background-color: #fdfcf0;
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

const SupportSubContainer = styled.div`
  width: 980px;
  height: auto;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

const MainContentsBox = styled.div`
  width: 800px;
`;

const CustomerNoticeBox = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 36px;
  line-height: 1.2;
  color: #666;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #cacac1;
`;

const TitleSpan = styled.span`
  color: #222;
  font-size: 19px;
  font-weight: 500;
  line-height: 1.2;
`;

const NoticeBox = styled.div`
  width: 473px;
  height: auto;
  position: relative;
  line-height: 1.2;
  color: #666;
`;

const NoticeBoxTitleBox = styled.div`
  width: 100%;
  height: auto;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const MoreButtonDiv = styled.div`
  width: 20px;
  height: 19px;
  background: url(${bgServiceBoxItem}) no-repeat -159px -287px;
  margin-left: 10px;
  cursor: pointer;
`;

const SupportMain = () => {
  setCookie("now-space", "support-main");
  const [isLoaded, setIsLoaded] = useState(true);
  const [fivenotices, setFivenotices] = useState([]);

  if (isLoaded) {
    setIsLoaded(false);

    fetch("http://localhost:8080/notice/limit/5")
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 1) {
          setFivenotices(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <SupportMainContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>고객센터</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            메인
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <SupportSubContainer>
        <SupportAsidesBox nowSpace={getCookie("now-space")} />
        <MainContentsBox>
          <SupportMainBigSquareBox />
          <CustomerNoticeBox>
            <SupportMainServiceBox />
            <NoticeBox>
              <Link to="/support/news/default">
                <NoticeBoxTitleBox>
                  <TitleSpan>공지/뉴스</TitleSpan>
                  <MoreButtonDiv />
                </NoticeBoxTitleBox>
              </Link>
              <MainNoticeBoxContentBox fivenotices={fivenotices} />
            </NoticeBox>
          </CustomerNoticeBox>
          <div
            style={{ marginTop: "20px", color: "#222222", fontSize: "12px" }}
          >
            CGV 고객센터 : 1544-1122(상담가능 시간, 월~금 09:00~18:00) *이 외
            시간은 자동 응답 안내 가능
          </div>
        </MainContentsBox>
      </SupportSubContainer>
    </SupportMainContainer>
  );
};

export default SupportMain;
