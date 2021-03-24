import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import bgServiceBoxItem from "../images/bg_c_main.png";
import SupportMainServiceBox from "../components/SupportMainServiceBox";
import { getCookie, setCookie } from "../utils/JWT";
import SupportAsidesBox from "../components/SupportAsidesBox";
import SupportMainBigSquareBox from "../components/SupportMainBigSquareBox";

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

const NoticeBoxContentBox = styled.div`
  width: 100%;
  height: 130px;
`;

const NoticeBoxContentItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 1.2;
  font-size: 13px;
  margin-top: 18px;
  margin-bottom: 18px;
`;

const NoticeBoxLink = styled(Link)`
  overflow: hidden;
  display: inline-block;
  width: 400px;
  color: #222;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;

  &:hover {
    color: #222;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 15px;
  }
`;

const NoticeBoxDate = styled.span`
  color: #222;
  font-size: 11px;
  text-align: right;
`;

const SupportMain = () => {
  setCookie("now-space", "support-main");

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
              <NoticeBoxContentBox>
                <NoticeBoxContentItem>
                  <NoticeBoxLink>
                    [극장] 연말연시 특별 방역조치에 따른 극장 운영 시간 조정
                    안내
                  </NoticeBoxLink>
                  <NoticeBoxDate>2020.12.04</NoticeBoxDate>
                </NoticeBoxContentItem>
                <NoticeBoxContentItem>
                  <NoticeBoxLink>
                    [기타] 포토플레이 서비스 개선 안내
                  </NoticeBoxLink>
                  <NoticeBoxDate>2020.09.15</NoticeBoxDate>
                </NoticeBoxContentItem>
                <NoticeBoxContentItem>
                  <NoticeBoxLink>
                    [기타] 영진위 지원사업-“모든요일 6천원 할인”이벤트 조기 종료
                    안내 (8/16 종료)
                  </NoticeBoxLink>
                  <NoticeBoxDate>2020.08.16</NoticeBoxDate>
                </NoticeBoxContentItem>
                <NoticeBoxContentItem>
                  <NoticeBoxLink>
                    [기타] 영화&lt;국제수사&gt; 개봉연기에 따른 예매취소 안내 건
                  </NoticeBoxLink>
                  <NoticeBoxDate>2020.08.16</NoticeBoxDate>
                </NoticeBoxContentItem>
                <NoticeBoxContentItem>
                  <NoticeBoxLink>
                    [기타] &lt;테넷&gt; 용산아이파크몰점 IMAX관 상영 시 화면비율
                    안내
                  </NoticeBoxLink>
                  <NoticeBoxDate>2020.08.11</NoticeBoxDate>
                </NoticeBoxContentItem>
              </NoticeBoxContentBox>
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
