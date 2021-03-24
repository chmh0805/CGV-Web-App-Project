import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

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

const SupportAsidesBox = (props) => {
  const { nowSpace } = props;
  if (nowSpace === "support-faq") {
    return (
      <MainAsidesBox>
        <AsidesBoxLink to="/support/default">
          <AsidesHeadItem>고객센터 메인</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/support/faq/default">
          <AsidesHeadSpecialItem>자주찾는 질문</AsidesHeadSpecialItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/support/news/default">
          <AsidesHeadItem>공지/뉴스</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/support/qna/default">
          <AsidesHeadItem>이메일 문의</AsidesHeadItem>
        </AsidesBoxLink>
      </MainAsidesBox>
    );
  } else if (nowSpace === "support-news") {
    return (
      <MainAsidesBox>
        <AsidesBoxLink to="/support/default">
          <AsidesHeadItem>고객센터 메인</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/support/faq/default">
          <AsidesHeadItem>자주찾는 질문</AsidesHeadItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/support/news/default">
          <AsidesHeadSpecialItem>공지/뉴스</AsidesHeadSpecialItem>
        </AsidesBoxLink>
        <AsidesBoxLink to="/support/qna/default">
          <AsidesHeadItem>이메일 문의</AsidesHeadItem>
        </AsidesBoxLink>
      </MainAsidesBox>
    );
  } else if (nowSpace === "support-qna") {
    return (
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
    );
  } else {
    return (
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
    );
  }
};

export default SupportAsidesBox;
