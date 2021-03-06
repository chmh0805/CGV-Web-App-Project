import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgSquareItemBox from "../images/bg_c_check.png";
import { isLogined } from "../utils/JWT";

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

const SupportMainBigSquareBox = () => {
  if (isLogined()) {
    return (
      <BigSquareItemBox>
        <Link to="/support/faq/default">
          <BigSquareItemSearchBox>
            <SearchBoxStrong>???????????? ??????</SearchBoxStrong>
            <SearchBoxSpan>????????? ???????????????????</SearchBoxSpan>
          </BigSquareItemSearchBox>
        </Link>
        <Link to="/support/qna/default">
          <BigSquareItemEmailBox>
            <EmailBoxStrong>????????? ??????</EmailBoxStrong>
            <EmailBoxSpan>24?????? 365??? ???????????? ??????????????????.</EmailBoxSpan>
          </BigSquareItemEmailBox>
        </Link>
        <Link to="/user/mycgv/myqna">
          <BigSquareItemMyBox>
            <MyBoxStrong>??? ?????? ?????? ??????</MyBoxStrong>
            <MyBoxSpan>???????????? ????????? ???????????? ??? ????????????.</MyBoxSpan>
          </BigSquareItemMyBox>
        </Link>
      </BigSquareItemBox>
    );
  } else {
    return (
      <BigSquareItemBox>
        <Link to="/support/faq/default">
          <BigSquareItemSearchBox>
            <SearchBoxStrong>???????????? ??????</SearchBoxStrong>
            <SearchBoxSpan>????????? ???????????????????</SearchBoxSpan>
          </BigSquareItemSearchBox>
        </Link>
        <Link to="/login">
          <BigSquareItemEmailBox>
            <EmailBoxStrong>????????? ??????</EmailBoxStrong>
            <EmailBoxSpan>24?????? 365??? ???????????? ??????????????????.</EmailBoxSpan>
          </BigSquareItemEmailBox>
        </Link>
        <Link to="/login">
          <BigSquareItemMyBox>
            <MyBoxStrong>??? ?????? ?????? ??????</MyBoxStrong>
            <MyBoxSpan>???????????? ????????? ???????????? ??? ????????????.</MyBoxSpan>
          </BigSquareItemMyBox>
        </Link>
      </BigSquareItemBox>
    );
  }
};

export default SupportMainBigSquareBox;
