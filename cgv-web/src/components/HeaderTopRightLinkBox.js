import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
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
  const logout = () => {
    fetch("http://localhost:8080/logout").then(() => {
      deleteCookie("cgvJWT");
      deleteCookie("userId");
      window.location.replace("/");
    });
  };

  if (isLogined()) {
    return (
      <HeaderTopRightDiv>
        <HeaderTopRightLink onClick={() => logout()}>
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
