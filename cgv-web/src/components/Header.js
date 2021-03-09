import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoCGV from "../images/cgv_logo.png";
import iconCGV from "../images/cgv_icon.png";
import iconFB from "../images/facebook_icon.png";
import iconIG from "../images/instagram_icon.png";
import bgHeader from "../images/header_bg.jpg";
import { Dropdown, Menu } from 'semantic-ui-react';

const HeaderContainer = styled.div`
  width: auto;
  height: auto;
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  height: 25px;
`;

const HeaderBottomRightButton = styled.button`
  width: 28px;
  height: 25px;
  font-size: 11px;
  background-color: red;
  color: white;
  font-weight: 600;
  border: 0px;
  padding: 0px;
`;

const HeaderBottomCenterBottomItemBox = styled.div`
  width: auto;
  height: 50px;
  display: flex;
  justify-content: space-around;
`;

const headerBottomCenterBottomItem = styled(Menu)`
  width: auto;
`;

const myDropdownItem = styled(Dropdown.Item)`
`;

const DropdownBox = styled.div`
  width: 130px;
  height: 140px;
  background-color: #393939;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DropdownBoxDiv = styled.div`
  width: 125px;
  height: 135px;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  border: 2px solid #828282;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const DropdownDivLink = styled(Link)`
  font-size: 14px;
  color: white;

  &:hover {
    color: red;
  }
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
            <HeaderBottomCenterBottomItemBox>
              <headerBottomCenterBottomItem>
                <Dropdown text='영화' simple item>
                  <Dropdown.Menu>
                    <myDropdownItem>
                      <DropdownBox>
                        <DropdownBoxDiv>
                          <DropdownDivLink to="/">무비차트</DropdownDivLink>
                          <DropdownDivLink to="/">HD 트레일러</DropdownDivLink>
                          <DropdownDivLink to="/">무비파인더</DropdownDivLink>
                        </DropdownBoxDiv>
                      </DropdownBox>
                    </myDropdownItem>
                  </Dropdown.Menu>
                </Dropdown>
              </headerBottomCenterBottomItem>
              <headerBottomCenterBottomItem>
                <Dropdown text='예매' simple item>
                  <Dropdown.Menu>
                    <myDropdownItem>
                      <DropdownBox>
                        <DropdownBoxDiv>
                          <DropdownDivLink to="/">빠른예매</DropdownDivLink>
                          <DropdownDivLink to="/">상영시간표</DropdownDivLink>
                        </DropdownBoxDiv>
                      </DropdownBox>
                    </myDropdownItem>
                  </Dropdown.Menu>
                </Dropdown>
              </headerBottomCenterBottomItem>
              <headerBottomCenterBottomItem>
                <Dropdown text='극장' simple item>
                  <Dropdown.Menu>
                    <myDropdownItem>
                      <DropdownBox>
                        <DropdownBoxDiv>
                          <DropdownDivLink to="/">CGV 극장</DropdownDivLink>
                        </DropdownBoxDiv>
                      </DropdownBox>
                    </myDropdownItem>
                  </Dropdown.Menu>
                </Dropdown>
              </headerBottomCenterBottomItem>
            </HeaderBottomCenterBottomItemBox>
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
