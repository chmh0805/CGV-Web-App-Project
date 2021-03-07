import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import iconCGV from "../images/cgv_icon.png";
import iconFB from "../images/facebook_icon.png";
import iconIG from "../images/instagram_icon.png";
import bgHeader from "../images/header_bg.jpg";

const HeaderContainer = styled.div`
  width: auto;
  height: 180px;
  background-color: #fdfcf0;
  display: flex;
  justify-content: center;
`;

const HeaderBox = styled.div`
  width: 100%;
  height: auto;
  align-content: center;
`;

const HeaderTopDiv = styled.div`
  width: 980px;
  height: 30px;
  display: flex;
  justify-content: space-between;
`;

const HeaderBottomDiv = styled.div`
  width: 980px;
  height: 120px;
  background-image: url(${bgHeader});
`;

const HeaderTopLeftDiv = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
`;

const HeaderTopLeftDivItem = styled.div`
  width: fit-content;
  height: auto;
  display: flex;
  align-items: center;
  border-left: 1px solid #dddddd;
  border-right: 1px solid #dddddd;
  padding-left: 8px;
  padding-right: 8px;
`;

const HeaderTopLeftLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 13px;
  font-weight: 600;
`;

const HeaderTopLeftImg = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 3px;
  border: 1px solid #dddddd;
  border-radius: 5px;
`;

const HeaderTopRightDiv = styled.div`
  text-align: center;
  align-items: center;
  width: fit-content;
  height: auto;
  padding-top: 2px;
  padding-bottom: 2px;
`;

const HeaderTopRightLink = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  color: black;
  font-weight: 600;
`;

const HeaderTopRightSep = styled.span`
  font-size: 11px;
  color: #dddddd;
  font-weight: 600;
  margin-left: 5px;
  margin-right: 5px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBox>
        <HeaderTopDiv>
          <HeaderTopLeftDiv>
            <HeaderTopLeftDivItem>
              <HeaderTopLeftImg src={iconCGV} />
              <HeaderTopLeftLink>CGV APP</HeaderTopLeftLink>
            </HeaderTopLeftDivItem>
            <HeaderTopLeftDivItem>
              <HeaderTopLeftImg src={iconFB} />
              <HeaderTopLeftLink>Like</HeaderTopLeftLink>
            </HeaderTopLeftDivItem>
            <HeaderTopLeftDivItem>
              <HeaderTopLeftImg src={iconIG} />
              <HeaderTopLeftLink>Follow</HeaderTopLeftLink>
            </HeaderTopLeftDivItem>
          </HeaderTopLeftDiv>
          <HeaderTopRightDiv>
            <HeaderTopRightLink to="/">로그인</HeaderTopRightLink>
            <HeaderTopRightSep>|</HeaderTopRightSep>
            <HeaderTopRightLink>회원가입</HeaderTopRightLink>
            <HeaderTopRightSep>|</HeaderTopRightSep>
            <HeaderTopRightLink>MyCGV</HeaderTopRightLink>
            <HeaderTopRightSep>|</HeaderTopRightSep>
            <HeaderTopRightLink>VIP LOUNGE</HeaderTopRightLink>
            <HeaderTopRightSep>|</HeaderTopRightSep>
            <HeaderTopRightLink>고객센터</HeaderTopRightLink>
          </HeaderTopRightDiv>
        </HeaderTopDiv>
        <HeaderBottomDiv></HeaderBottomDiv>
      </HeaderBox>
    </HeaderContainer>
  );
};

export default Header;
