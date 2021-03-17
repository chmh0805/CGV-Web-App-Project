import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import bgSquareItemBox from "../images/bg_c_check.png";
import bgServiceBoxItem from "../images/bg_c_main.png";

const TrailerContainer = styled.div`
  background-color: #fdfcf0;
  width: auto;
  height: 1000px;
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

const MyCGVMainContainer = styled.div`
  width: 980px;
  height: 1000px;
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

const SearchBoxInputBox = styled.div`
  position: relative;
  margin: 15px 0px 12px 0px;
  display: inline-block;
  width: 214px;
  height: 36px;
  background-color: #fdfcf0;
  text-align: left;
  line-height: 1.2;
  color: #666;
  font-weight: 300;
`;

const SearchBoxInput = styled.input`
  margin-top: 10px;
  width: 160px;
  height: 15px;
  line-height: 13px;
  border: 0px;
  border-right: solid 1px #999;
  background-color: #fdfcf0;
  font-size: 12px;
  color: #666;
  padding-left: 10px;
`;

const SearchBoxButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  display: inline-block;
  width: 43px;
  height: 36px;
  line-height: 36px;
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  outline: none;
  border: 0px;
  background-color: #fdfcf0;
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
`;

const ServiceBox = styled.div`
  width: 267px;
  height: 287px;
  line-height: 1.2;
  color: #666;
`;

const NoticeBox = styled.div`
  width: 473px;
  height: 287px;
  position: relative;
  line-height: 1.2;
  color: #666;
  border: 1px solid black;
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
`;

const TestBox = styled.div`
  top: 0;
  left: 75px;
  display: inline-block;
  width: 20px;
  height: 19px;
  background: url(${bgServiceBoxItem}) no-repeat -159px -287px;
  border: 1px solid black;
  text-indent: -999px;
`;

const SupportMain = () => {
  return (
    <TrailerContainer>
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
      <MyCGVMainContainer>
        <MainAsidesBox>
          <AsidesBoxLink>
            <AsidesHeadSpecialItem>고객센터 메인</AsidesHeadSpecialItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesHeadItem>자주찾는 질문</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesHeadItem>공지/뉴스</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesHeadItem>이메일 문의</AsidesHeadItem>
          </AsidesBoxLink>
        </MainAsidesBox>
        <MainContentsBox>
          <BigSquareItemBox>
            <BigSquareItemSearchBox>
              <SearchBoxStrong>자주찾는 질문 빠른검색</SearchBoxStrong>
              <SearchBoxInputBox>
                <SearchBoxInput placeholder="검색어를 입력해 주세요." />
                <SearchBoxButton>검색</SearchBoxButton>
              </SearchBoxInputBox>
            </BigSquareItemSearchBox>
            <Link to="/">
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
              <TitleSpan>공지/뉴스</TitleSpan>
              <TestBox></TestBox>
            </NoticeBox>
          </CustomerNoticeBox>
        </MainContentsBox>
      </MyCGVMainContainer>
    </TrailerContainer>
  );
};

export default SupportMain;
