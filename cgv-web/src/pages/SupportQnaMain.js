import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import imgMiso from "../images/desc_miso.png";
import { Form } from "react-bootstrap";

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

const QnaTableBox = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-top: 30px;
  line-height: 1.2;
  color: #666;
  border-top: 1px solid #b8b6aa;
`;

const QnaTableTitleBox = styled.div`
  width: 100%;
  padding: 0 10px 0 10px;
  height: 30px;
  background-color: #edebe1;
  color: #666;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const RedStarEm = styled.em`
  font-style: normal;
  font-weight: 1000;
  color: red;
  font-size: 16px;
  padding-top: 10px;
`;

const QnaTableRowBox = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  border-bottom: 1px solid #d6d4ca;
`;

const QnaTableContentTitle = styled.div`
  width: 80px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 27px;
  color: #666;
  font-size: 14px;
  padding-left: 10px;
`;

const QnaTableContentLongBody = styled.div`
  width: 720px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 27px;
  color: #666;
  font-size: 14px;
  font-weight: 600;
  padding-left: 5px;
`;

const QnaTableContentShortBody = styled.div`
  width: 320px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 27px;
  color: #666;
  font-size: 14px;
  font-weight: 600;
  padding-left: 5px;
`;

const MisoBox = styled.div`
  width: 100%;
  height: 84px;
  background: url(${imgMiso}) no-repeat 0 0 #f6f1dc;
  margin: 24px 0 0 0;
  padding: 0 0 0 118px;
  color: #666;
`;

const MisoBoxText1 = styled.p`
  width: 682px;
  color: #000;
  font-weight: 600;
  font-size: 14px;
  padding: 14px 0 4px 0;
  margin-bottom: 5px;
`;

const MisoBoxEm = styled.em`
  color: #bc3c3c;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
`;

const MisoBoxText2 = styled.p`
  width: 682px;
  height: 36px;
  font-size: 13px;
  color: #7f7b6b;
  line-height: 1.4;
  font-weight: 400;
`;

const QnaTableContentInput = styled.input`
  width: 672px;
  margin: 0;
  vertical-align: middle;
  height: 25px;
  line-height: 22px;
  padding-left: 10px;
  border: 1px solid #b5b5b5;
  background-color: #fdfcf0;
`;

const QnaTableContentTextarea = styled.textarea`
  height: 198px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 10px;
  width: 672px;
  border: 1px solid #b5b5b5;
  background-color: #fdfcf0;
  resize: vertical;
  line-height: 1.7;
  font-size: 13px;
  color: #666;
  overflow: auto;
  overflow-x: hidden;
  vertical-align: top;
`;

const BottomButtonBox = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: flex-end;
`;

const SubmitButton = styled.button`
  width: 80px;
  height: 27px;
  background: #e71a0f;
  border: 2px solid #e71a0f;
  border-radius: 5px;
  color: #ffffff;
  line-height: 21px;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  position: relative;
`;

const SupportQnaMain = () => {
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
            이메일 문의
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <SupportSubContainer>
        <MainAsidesBox>
          <AsidesBoxLink to="/support/default">
            <AsidesHeadItem>고객센터 메인</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/support/faq/default">
            <AsidesHeadItem>자주찾는 질문</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/support/news/default">
            <AsidesHeadItem>공지/뉴스</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/support/qna/default">
            <AsidesHeadSpecialItem>이메일 문의</AsidesHeadSpecialItem>
          </AsidesBoxLink>
        </MainAsidesBox>
        <MainContentsBox>
          <MainCustomerTop>
            <MainCustomerTopH2>이메일 문의</MainCustomerTopH2>
            <MainCustomerTopP>
              자주찾는 질문에서 원하는 답변을 찾지 못하셨군요.
              <br />
              불편사항이나 문의사항을 남겨주시면 최대한 신속하게 답변
              드리겠습니다.
            </MainCustomerTopP>
          </MainCustomerTop>
          <QnaTableBox>
            <QnaTableTitleBox>
              체크된(<RedStarEm>*</RedStarEm>) 항목은 필수 입력 사항입니다.
            </QnaTableTitleBox>
            <QnaTableRowBox>
              <QnaTableContentTitle>이름</QnaTableContentTitle>
              <QnaTableContentLongBody>정민혁</QnaTableContentLongBody>
            </QnaTableRowBox>
            <QnaTableRowBox>
              <QnaTableContentTitle>휴대전화</QnaTableContentTitle>
              <QnaTableContentShortBody>010-6518-****</QnaTableContentShortBody>
              <QnaTableContentTitle>이메일</QnaTableContentTitle>
              <QnaTableContentShortBody>
                chmh08**@naver.com
              </QnaTableContentShortBody>
            </QnaTableRowBox>
            <div style={{ height: "100px" }}>
              <MisoBox>
                <MisoBoxText1>
                  고객님의 문의에 답변하는 직원은
                  <MisoBoxEm>&nbsp;고객 여러분의 가족 중 한 사람</MisoBoxEm>일
                  수 있습니다.
                </MisoBoxText1>
                <MisoBoxText2>
                  CJ는 고객의 언어폭력(비하, 욕설, 반말, 성희롱 등)으로부터
                  고객상담직원을 보호하기 위해
                  <br />
                  관련 법에 따라 수사기관에 필요한 조치를요구할 수 있으며,
                  형법에 의해 처벌 대상이 될 수 있습니다.
                </MisoBoxText2>
              </MisoBox>
            </div>
            <QnaTableRowBox>
              <QnaTableContentTitle>
                제목&nbsp;<RedStarEm>*</RedStarEm>
              </QnaTableContentTitle>
              <QnaTableContentLongBody>
                <QnaTableContentInput />
              </QnaTableContentLongBody>
            </QnaTableRowBox>
            <QnaTableRowBox
              style={{
                height: "auto",
                paddingTop: "10px",
                paddingBottom: "10px",
              }}
            >
              <QnaTableContentTitle>
                내용&nbsp;<RedStarEm>*</RedStarEm>
              </QnaTableContentTitle>
              <QnaTableContentLongBody>
                <QnaTableContentTextarea />
              </QnaTableContentLongBody>
            </QnaTableRowBox>
            <QnaTableRowBox>
              <QnaTableContentTitle>첨부파일</QnaTableContentTitle>
              <QnaTableContentLongBody>
                <Form.File
                  id="exampleFormControlFile1"
                  style={{ fontWeight: 500 }}
                />
              </QnaTableContentLongBody>
            </QnaTableRowBox>
          </QnaTableBox>
          <BottomButtonBox>
            <SubmitButton>등록하기</SubmitButton>
          </BottomButtonBox>
        </MainContentsBox>
      </SupportSubContainer>
    </SupportMainContainer>
  );
};

export default SupportQnaMain;
