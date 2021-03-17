import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import bgSquareItemBox from "../images/bg_c_check.png";
import bgServiceBoxItem from "../images/bg_c_main.png";

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

const MainAsidesBox = styled.div`
  width: 160px;
  line-height: 1.2;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
`;

const AsidesBoxLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const AsidesHeadSpecialItem = styled.div`
  width: auto;
  height: 34px;
  padding-left: 5px;
  color: #fdfcf0;
  background-color: #e71a0f;
  font-weight: 600;
  font-size: 16px;
  line-height: 34px;
`;

const AsidesHeadItem = styled.div`
  width: auto;
  height: 34px;
  padding-left: 5px;
  color: #222;
  font-weight: 600;
  font-size: 15px;
  line-height: 34px;
  border-top: 1px solid #bbb9b1;

  &:hover {
    color: #fdfcf0;
    background-color: #e71a0f;
  }
`;

const MainContentsBox = styled.div`
  width: 800px;
`;

const BigSquareItemBox = styled.div`
  width: 800px;
  height: 260px;
  overflow: hidden;
  display: flex;
  justify-content: center;
`;

const BigSquareItemSearchBox = styled.div`
  width: 267px;
  height: 100%;
  background-color: #e71a0f;
  text-align: center;
  color: #fdfcf0;
`;

const SearchBoxStrong = styled.strong`
  background: url(${bgSquareItemBox}) no-repeat;
  background-position: 105px 50px;
  display: block;
  font-size: 24px;
  font-weight: 500;
  padding-top: 122px;
`;

const SearchBoxSpan = styled.span`
  display: inline-block;
  margin: 30px 0px 20px 0px;
  font-size: 14px;
  line-height: 1.2;
  color: #fdfcf0;
  font-weight: 300;
`;

const BigSquareItemEmailBox = styled.div`
  width: 266px;
  height: 100%;
  background-color: #ede9dd;
  text-align: center;
  color: #333;
  font-size: 24px;
  font-weight: 500;
`;

const EmailBoxStrong = styled.strong`
  display: block;
  font-size: 22px;
  padding-top: 122px;
  background: url(${bgSquareItemBox}) no-repeat;
  background-position: -167px 50px;
`;

const EmailBoxSpan = styled.span`
  display: inline-block;
  margin: 30px 0px 20px 0px;
  font-size: 14px;
  line-height: 1.2;
  color: #666;
  font-weight: 300;
`;

const BigSquareItemMyBox = styled.div`
  width: 267px;
  height: 100%;
  background-color: #edf1e9;
  text-align: center;
  color: #333;
`;

const MyBoxStrong = styled.strong`
  display: block;
  font-size: 22px;
  padding-top: 122px;
  background: url(${bgSquareItemBox}) no-repeat;
  background-position: -429px 50px;
`;

const MyBoxSpan = styled.span`
  display: inline-block;
  margin: 30px 0px 20px 0px;
  font-size: 14px;
  line-height: 1.2;
  color: #666;
  font-weight: 300;
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

const ServiceBox = styled.div`
  width: 267px;
  height: 258px;
  line-height: 1.2;
  color: #666;
`;

const TitleSpan = styled.span`
  color: #222;
  font-size: 19px;
  font-weight: 500;
  line-height: 1.2;
`;

const ServiceBoxItemBox = styled.div`
  width: 272px;
  height: 258px;
  padding-top: 15px;
  line-height: 1.2;
  color: #666;
`;

const ServiceBoxItem = styled.div`
  padding: 24px 20px 25px 17px;
  display: flex;
  align-items: center;
  width: 131px;
  height: 81px;
  color: #222;
  line-height: 150%;
  font-size: 14px;
  font-weight: 500;
  background: url(${bgServiceBoxItem}) no-repeat 0 -287px;
  cursor: pointer;
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
        <MainAsidesBox>
          <AsidesBoxLink to="/support/default">
            <AsidesHeadSpecialItem>고객센터 메인</AsidesHeadSpecialItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/support/faq/default">
            <AsidesHeadItem>자주찾는 질문</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/support/news/default">
            <AsidesHeadItem>공지/뉴스</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/support/qna/default">
            <AsidesHeadItem>이메일 문의</AsidesHeadItem>
          </AsidesBoxLink>
        </MainAsidesBox>
        <MainContentsBox>
          <BigSquareItemBox>
            <Link to="/support/faq/default">
              <BigSquareItemSearchBox>
                <SearchBoxStrong>자주찾는 질문</SearchBoxStrong>
                <SearchBoxSpan>도움이 필요하신가요?</SearchBoxSpan>
              </BigSquareItemSearchBox>
            </Link>
            <Link to="/support/qna/default">
              <BigSquareItemEmailBox>
                <EmailBoxStrong>이메일 문의</EmailBoxStrong>
                <EmailBoxSpan>24시간 365일 언제든지 문의해주세요.</EmailBoxSpan>
              </BigSquareItemEmailBox>
            </Link>
            <Link to="/">
              <BigSquareItemMyBox>
                <MyBoxStrong>내 상담 내역 확인</MyBoxStrong>
                <MyBoxSpan>문의하신 내용을 확인하실 수 있습니다.</MyBoxSpan>
              </BigSquareItemMyBox>
            </Link>
          </BigSquareItemBox>
          <CustomerNoticeBox>
            <ServiceBox>
              <TitleSpan>자주 찾는 서비스</TitleSpan>
              <ServiceBoxItemBox>
                <div style={{ display: "flex", marginBottom: "5px" }}>
                  <ServiceBoxItem>
                    신용카드
                    <br />
                    영수증출력
                  </ServiceBoxItem>
                  <ServiceBoxItem style={{ marginLeft: "5px" }}>
                    아이디/
                    <br />
                    비밀번호 찾기
                  </ServiceBoxItem>
                </div>
                <ServiceBoxItem>
                  예매/
                  <br />
                  취소내역 확인
                </ServiceBoxItem>
              </ServiceBoxItemBox>
            </ServiceBox>
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
