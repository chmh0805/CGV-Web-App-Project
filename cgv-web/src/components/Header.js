import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logoCGV from "../images/cgv_logo.png";
import iconCGV from "../images/cgv_icon.png";
import iconFB from "../images/facebook_icon.png";
import iconIG from "../images/instagram_icon.png";
import bgHeader from "../images/header_bg.jpg";
import { Dropdown } from "semantic-ui-react";
import HeaderTopRightLinkBox from "./HeaderTopRightLinkBox";

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

const HeaderTopLeftLink = styled.a`
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

const HeaderBottomCenterBottomItem = styled.div`
  width: auto;
  text-decoration: none;
  font-size: 17px;
  font-weight: 1000;
`;

const MyDropdownItem = styled.div``;

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
  font-weight: normal;
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
              <HeaderTopLeftLink href="https://www.facebook.com/CJCGV">
                Like
              </HeaderTopLeftLink>
            </HeaderTopLeftDivItem>
            <HeaderTopLeftDivItem>
              <HeaderTopLeftImg src={iconIG} />
              <HeaderTopLeftLink href="https://www.instagram.com/cgv_korea/">
                Follow
              </HeaderTopLeftLink>
            </HeaderTopLeftDivItem>
          </HeaderTopLeftDiv>
          <HeaderTopRightLinkBox />
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
              <HeaderBottomCenterBottomItem>
                <Dropdown text="영화" simple item>
                  <Dropdown.Menu>
                    <MyDropdownItem>
                      <DropdownBox>
                        <DropdownBoxDiv>
                          <DropdownDivLink to="/movies">
                            무비차트
                          </DropdownDivLink>
                          <DropdownDivLink to="/movies/trailler">
                            HD 트레일러
                          </DropdownDivLink>
                          <DropdownDivLink to="/movies/finder">
                            무비파인더
                          </DropdownDivLink>
                        </DropdownBoxDiv>
                      </DropdownBox>
                    </MyDropdownItem>
                  </Dropdown.Menu>
                </Dropdown>
              </HeaderBottomCenterBottomItem>
              <HeaderBottomCenterBottomItem>
                <Dropdown text="예매" simple item>
                  <Dropdown.Menu>
                    <MyDropdownItem>
                      <DropdownBox>
                        <DropdownBoxDiv>
                          <DropdownDivLink to="/ticket">
                            빠른예매
                          </DropdownDivLink>
                          <DropdownDivLink to="/theater">
                            상영시간표
                          </DropdownDivLink>
                        </DropdownBoxDiv>
                      </DropdownBox>
                    </MyDropdownItem>
                  </Dropdown.Menu>
                </Dropdown>
              </HeaderBottomCenterBottomItem>
              <HeaderBottomCenterBottomItem>
                <Dropdown text="극장" simple item>
                  <Dropdown.Menu>
                    <MyDropdownItem>
                      <DropdownBox>
                        <DropdownBoxDiv>
                          <DropdownDivLink to="/theater">
                            CGV 극장
                          </DropdownDivLink>
                        </DropdownBoxDiv>
                      </DropdownBox>
                    </MyDropdownItem>
                  </Dropdown.Menu>
                </Dropdown>
              </HeaderBottomCenterBottomItem>
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
