import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { isAdmin } from "../utils/AuthUtil";
import { deleteCookie, isLogined } from "../utils/JWT";

const HeaderTopRightDiv = styled.div`
  text-align: center;
  align-items: center;
  width: fit-content;
  height: auto;
  padding-top: 4px;
  padding-bottom: 2px;
`;

const HeaderTopRightLink = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  color: black;
  font-weight: 600;

  &:hover {
    text-decoration: none;
    color: black;
  }
`;

const HeaderTopRightSep = styled.span`
  font-size: 11px;
  color: #dddddd;
  font-weight: 600;
  margin-left: 5px;
  margin-right: 5px;
`;

const HeaderTopRightLinkBox = () => {
  const logoutHandler = async () => {
    fetch("http://localhost:8080/logout").then(() => {
      deleteCookie("cgvJWT");
      deleteCookie("userId");
      deleteCookie("role");
      window.location.replace("/");
    });
  };

  if (isLogined() && isAdmin()) {
    return (
      <HeaderTopRightDiv>
        <HeaderTopRightLink onClick={() => logoutHandler()}>
          로그아웃
        </HeaderTopRightLink>
        <HeaderTopRightSep>|</HeaderTopRightSep>
        <HeaderTopRightLink to="/user/mycgv">MyCGV</HeaderTopRightLink>
        <HeaderTopRightSep>|</HeaderTopRightSep>
        <HeaderTopRightLink to="/support/default">고객센터</HeaderTopRightLink>
        <HeaderTopRightSep>|</HeaderTopRightSep>
        <HeaderTopRightLink to="/support/news/register">
          공지등록
        </HeaderTopRightLink>
        <HeaderTopRightSep>|</HeaderTopRightSep>
        <HeaderTopRightLink to="/theater/register">극장등록</HeaderTopRightLink>
        <HeaderTopRightSep>|</HeaderTopRightSep>
        <HeaderTopRightLink to="/timetable/register">타임테이블등록</HeaderTopRightLink>
      </HeaderTopRightDiv>
    );
  } else if (isLogined()) {
    return (
      <HeaderTopRightDiv>
        <HeaderTopRightLink onClick={() => logoutHandler()}>
          로그아웃
        </HeaderTopRightLink>
        <HeaderTopRightSep>|</HeaderTopRightSep>
        <HeaderTopRightLink to="/user/mycgv">MyCGV</HeaderTopRightLink>
        <HeaderTopRightSep>|</HeaderTopRightSep>
        <HeaderTopRightLink to="/support/default">고객센터</HeaderTopRightLink>
      </HeaderTopRightDiv>
    );
  } else {
    return (
      <HeaderTopRightDiv>
        <HeaderTopRightLink to="/login">로그인</HeaderTopRightLink>
        <HeaderTopRightSep>|</HeaderTopRightSep>
        <HeaderTopRightLink to="/join">회원가입</HeaderTopRightLink>
        <HeaderTopRightSep>|</HeaderTopRightSep>
        <HeaderTopRightLink to="/support/default">고객센터</HeaderTopRightLink>
      </HeaderTopRightDiv>
    );
  }
};

export default HeaderTopRightLinkBox;
