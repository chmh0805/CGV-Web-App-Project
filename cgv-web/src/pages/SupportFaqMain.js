import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import btnPaging from "../images/button/btn_paging.gif";

const SupportMainContainer = styled.div`
  background-color: #fdfcf0;
  width: auto;
  height: auto;
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

const MainCustomerTop = styled.div`
  width: 100%;
  height: auto;
`;

const MainCustomerTopH2 = styled.h2`
  font-size: 16px;
  line-height: 1.2;
  color: #666;
  font-weight: 600;
  margin-bottom: 0px;
`;

const MainCustomerTopP = styled.p`
  margin-top: 5px;
  font-size: 14px;
  line-height: 1.2;
  color: #666;
`;

const MainCustomerInputBox = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
  line-height: 1.2;
  color: #666;
`;

const MainCustomerInput = styled.input`
  width: 275px;
  height: 25px;
  line-height: 22px;
  padding-left: 10px;
  font-size: 12px;
  border: 1px solid #b5b5b5;
`;

const MainCustomerInputButton = styled.button`
  padding: 0 12px;
  border: 1px solid #5b5b58;
  display: inline-block;
  position: relative;
  color: #ffffff;
  line-height: 21px;
  font-weight: 600;
  text-align: center;
  background-color: #222222;
  margin-left: 3px;
  border-radius: 3px;
`;

const SearchResultBox = styled.div`
  width: 100%;
  height: 15px;
  margin: 30px 0px 10px 0px;
  line-height: 1.2;
  font-size: 14px;
  color: #666;
`;

const SearchTableBox = styled.div`
  width: 100%;
  height: auto;
  padding-top: 10px;
  overflow: hidden;
  padding-top: 10px;
  line-height: 1.2;
  color: #666;
`;

const SearchTableTitle = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  align-items: center;
  background-color: #edebe1;
  border-top: 1px solid #d6d4ca;
  border-bottom: 1px solid #e1dfd5;
`;

const SearchTableTitleNo = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SearchTableTitleType = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SearchTableTitleTitle = styled.div`
  width: 540px;
  display: flex;
  justify-content: flex-start;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SearchTableTitleReadCount = styled.div`
  width: 70px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SearchTableContent = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  align-items: center;
`;

const SearchTableContentNo = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SearchTableContentType = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SearchTableContentTitle = styled(Link)`
  width: 540px;
  display: block;
  font-size: 14px;
  color: #666;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    color: #666;
    font-style: bold;
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const SearchTableContentReadCount = styled.div`
  width: 70px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const PagingBoxSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  border-top: 1px solid #b8b6aa;
`;

const PagingBox = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const PagingLink = styled(Link)`
  color: #333333;
  font-weight: bold;
  line-height: 28px;
  text-decoration: none;

  &:hover {
    color: #993333;
    text-decoration: underline;
  }
`;

const NextPageButton = styled.button`
  padding: 0 24px 0 10px;
  background: #faf9ed url(${btnPaging}) no-repeat;
  background-position: right -52px;
  display: inline-block;
  min-width: 56px;
  height: 28px;
  margin: 0 2px;
  border: 1px solid #cacac1;
  color: #333333;
  font-size: 11px;
  font-weight: 600;
  line-height: 28px;
  vertical-align: middle;
  overflow: visible;
`;

const SupportFaqMain = () => {
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
            자주 찾는 질문
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <SupportSubContainer>
        <MainAsidesBox>
          <AsidesBoxLink to="/support/default">
            <AsidesHeadItem>고객센터 메인</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/support/faq/default">
            <AsidesHeadSpecialItem>자주찾는 질문</AsidesHeadSpecialItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesHeadItem>공지/뉴스</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesHeadItem>이메일 문의</AsidesHeadItem>
          </AsidesBoxLink>
        </MainAsidesBox>
        <MainContentsBox>
          <MainCustomerTop>
            <MainCustomerTopH2>자주 찾는 질문</MainCustomerTopH2>
            <MainCustomerTopP>
              회원님들께서 가장 자주하시는 질문을 모았습니다.
              <br />
              궁금하신 내용에 대해 검색해보세요.
            </MainCustomerTopP>
            <MainCustomerInputBox>
              <MainCustomerInput placeholder="검색어를 입력해 주세요" />
              <MainCustomerInputButton>검색하기</MainCustomerInputButton>
            </MainCustomerInputBox>
          </MainCustomerTop>
          <SearchResultBox>
            총 <span style={{ fontStyle: "bold" }}>172건</span>이
            검색되었습니다.
          </SearchResultBox>
          <SearchTableBox>
            <SearchTableTitle>
              <SearchTableTitleNo>번호</SearchTableTitleNo>
              <SearchTableTitleType>구분</SearchTableTitleType>
              <SearchTableTitleTitle>제목</SearchTableTitleTitle>
              <SearchTableTitleReadCount>조회수</SearchTableTitleReadCount>
            </SearchTableTitle>
            <SearchTableContent>
              <SearchTableContentNo>172</SearchTableContentNo>
              <SearchTableContentType>[홈페이지/모바일]</SearchTableContentType>
              <SearchTableContentTitle>
                예매대행업체(맥스무비, 인터파크, YES24) 예매 시 적립/내가 본
                영화 등록/포토플레이 제작은 어떻게 하나요?
              </SearchTableContentTitle>
              <SearchTableContentReadCount>16</SearchTableContentReadCount>
            </SearchTableContent>
            <SearchTableContent>
              <SearchTableContentNo>172</SearchTableContentNo>
              <SearchTableContentType>[홈페이지/모바일]</SearchTableContentType>
              <SearchTableContentTitle>
                예매대행업체(맥스무비, 인터파크, YES24) 예매 시 적립/내가 본
                영화 등록/포토플레이 제작은 어떻게 하나요?
              </SearchTableContentTitle>
              <SearchTableContentReadCount>16</SearchTableContentReadCount>
            </SearchTableContent>
            <SearchTableContent>
              <SearchTableContentNo>172</SearchTableContentNo>
              <SearchTableContentType>[홈페이지/모바일]</SearchTableContentType>
              <SearchTableContentTitle>
                예매대행업체(맥스무비, 인터파크, YES24) 예매 시 적립/내가 본
                영화 등록/포토플레이 제작은 어떻게 하나요?
              </SearchTableContentTitle>
              <SearchTableContentReadCount>16</SearchTableContentReadCount>
            </SearchTableContent>
            <SearchTableContent>
              <SearchTableContentNo>172</SearchTableContentNo>
              <SearchTableContentType>[홈페이지/모바일]</SearchTableContentType>
              <SearchTableContentTitle>
                예매대행업체(맥스무비, 인터파크, YES24) 예매 시 적립/내가 본
                영화 등록/포토플레이 제작은 어떻게 하나요?
              </SearchTableContentTitle>
              <SearchTableContentReadCount>16</SearchTableContentReadCount>
            </SearchTableContent>
            <SearchTableContent>
              <SearchTableContentNo>172</SearchTableContentNo>
              <SearchTableContentType>[홈페이지/모바일]</SearchTableContentType>
              <SearchTableContentTitle>
                예매대행업체(맥스무비, 인터파크, YES24) 예매 시 적립/내가 본
                영화 등록/포토플레이 제작은 어떻게 하나요?
              </SearchTableContentTitle>
              <SearchTableContentReadCount>16</SearchTableContentReadCount>
            </SearchTableContent>
            <SearchTableContent>
              <SearchTableContentNo>172</SearchTableContentNo>
              <SearchTableContentType>[홈페이지/모바일]</SearchTableContentType>
              <SearchTableContentTitle>
                예매대행업체(맥스무비, 인터파크, YES24) 예매 시 적립/내가 본
                영화 등록/포토플레이 제작은 어떻게 하나요?
              </SearchTableContentTitle>
              <SearchTableContentReadCount>16</SearchTableContentReadCount>
            </SearchTableContent>
            <SearchTableContent>
              <SearchTableContentNo>172</SearchTableContentNo>
              <SearchTableContentType>[홈페이지/모바일]</SearchTableContentType>
              <SearchTableContentTitle>
                예매대행업체(맥스무비, 인터파크, YES24) 예매 시 적립/내가 본
                영화 등록/포토플레이 제작은 어떻게 하나요?
              </SearchTableContentTitle>
              <SearchTableContentReadCount>16</SearchTableContentReadCount>
            </SearchTableContent>
            <SearchTableContent>
              <SearchTableContentNo>172</SearchTableContentNo>
              <SearchTableContentType>[홈페이지/모바일]</SearchTableContentType>
              <SearchTableContentTitle>
                예매대행업체(맥스무비, 인터파크, YES24) 예매 시 적립/내가 본
                영화 등록/포토플레이 제작은 어떻게 하나요?
              </SearchTableContentTitle>
              <SearchTableContentReadCount>16</SearchTableContentReadCount>
            </SearchTableContent>
            <SearchTableContent>
              <SearchTableContentNo>172</SearchTableContentNo>
              <SearchTableContentType>[홈페이지/모바일]</SearchTableContentType>
              <SearchTableContentTitle>
                예매대행업체(맥스무비, 인터파크, YES24) 예매 시 적립/내가 본
                영화 등록/포토플레이 제작은 어떻게 하나요?
              </SearchTableContentTitle>
              <SearchTableContentReadCount>16</SearchTableContentReadCount>
            </SearchTableContent>
            <SearchTableContent>
              <SearchTableContentNo>172</SearchTableContentNo>
              <SearchTableContentType>[홈페이지/모바일]</SearchTableContentType>
              <SearchTableContentTitle>
                예매대행업체(맥스무비, 인터파크, YES24) 예매 시 적립/내가 본
                영화 등록/포토플레이 제작은 어떻게 하나요?
              </SearchTableContentTitle>
              <SearchTableContentReadCount>16</SearchTableContentReadCount>
            </SearchTableContent>
          </SearchTableBox>
          <PagingBoxSection>
            <PagingBox>
              <PagingLink to="?1">1</PagingLink>
              <PagingLink to="?1">2</PagingLink>
              <PagingLink to="?1">3</PagingLink>
              <PagingLink to="?1">4</PagingLink>
              <PagingLink to="?1">5</PagingLink>
              <PagingLink to="?1">6</PagingLink>
              <PagingLink to="?1">7</PagingLink>
              <PagingLink to="?1">8</PagingLink>
              <PagingLink to="?1">9</PagingLink>
              <NextPageButton>다음</NextPageButton>
            </PagingBox>
          </PagingBoxSection>
        </MainContentsBox>
      </SupportSubContainer>
    </SupportMainContainer>
  );
};

export default SupportFaqMain;
