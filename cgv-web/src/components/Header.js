import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoCGV from "../images/cgv_logo.png";
import iconCGV from "../images/cgv_icon.png";
import iconFB from "../images/facebook_icon.png";
import iconIG from "../images/instagram_icon.png";
import bgHeader from "../images/header_bg.jpg";

const HeaderContainer = styled.div`
  width: auto;
  height: 180px;
  background-color: #fdfcf0;
`;

const HeaderBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

const HeaderTopDiv = styled.div`
  width: 980px;
  height: 30px;
  float: inherit;
  display: flex;
  justify-content: space-between;
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

const HeaderBottomBox = styled.div`
  width: auto;
  height: 120px;
  display: flex;
  justify-content: center;
  background-image: url(${bgHeader});
`;

const HeaderBottomDiv = styled.div`
  width: 980px;
  height: auto;
  display: flex;
  justify-content: space-between;
`;

const HeaderBottomLeftLink = styled(Link)`
  width: 120px;
  height: auto;
`;

const HeaderBottomLeftImg = styled.img`
  width: 120px;
  height: auto;
`;

const HeaderBottomCenterBox = styled.div`
  width: 430px;
  height: auto;
`;

const HeaderBottomCenterTopItemBox = styled.div`
  width: 430px;
  height: 40px;
  display: flex;
  justify-content: center;
`;

const HeaderBottomCenterTopItem = styled.h2`
  height: 100%;
  margin: 0px;
  padding-top: 15px;
  font-weight: 600;
  font-size: 40px;
  font-family: "Fascinate";
`;

const HeaderBottomRightBox = styled.div`
  width: 150px;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 65px;
`;

const HeaderBottomRightInput = styled.input`
  width: 100px;
  height: 19px;
`;

const HeaderBottomRightButton = styled.button`
  width: 40px;
  height: 25px;
  font-size: 12px;
  background-color: red;
  color: white;
  font-weight: 600;
  border: 0px;
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
      </HeaderBox>
      <HeaderBottomBox>
        <HeaderBottomDiv>
          <HeaderBottomLeftLink to="/">
            <HeaderBottomLeftImg src={logoCGV} />
          </HeaderBottomLeftLink>
          <HeaderBottomCenterBox>
            <HeaderBottomCenterTopItemBox>
              <HeaderBottomCenterTopItem>CULTUREPLEX</HeaderBottomCenterTopItem>
            </HeaderBottomCenterTopItemBox>
          </HeaderBottomCenterBox>
          <HeaderBottomRightBox>
            <HeaderBottomRightInput />
            <HeaderBottomRightButton>검색</HeaderBottomRightButton>
          </HeaderBottomRightBox>
        </HeaderBottomDiv>
      </HeaderBottomBox>
    </HeaderContainer>
  );
};

export default Header;
