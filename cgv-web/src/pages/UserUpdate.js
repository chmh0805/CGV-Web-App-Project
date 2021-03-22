import React from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";

const JoinContainer = styled.div`
  background-color: #fdfcf0;
  width: auto;
  height: 500px;
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

const JoinSection = styled.div`
  width: 920px;
  height: 600px;
  margin: 0 auto;
  padding-top: 40px;
  border-bottom: 2px solid #898987;
`;

const JoinSectionItemBox = styled.div`
  width: 600px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Span666666 = styled.span`
  color: #666666;
`;

const JoinSectionInput = styled.input`
  width: 350px;
  height: 39px;
  border: 2px solid #b5b5b5;
  margin-top: 5px;
  background-color: #fdfcf0;
  color: #666666;
`;

const PhoneInputBox = styled.div`
  width: 350px;
  height: 39px;
  border: 2px solid #b5b5b5;
  margin-top: 5px;
  background-color: #fdfcf0;
  color: #666666;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PhoneInput = styled.input`
  width: 100px;
  line-height: 1.8;
  height: 27px;
  margin-right: 3px;
  border: 0px;
  border-bottom: 1px solid #333;
  background-color: #fdfcf0;

  &:active {
    border: none;
    outline: none;
  }
`;

const PhoneDivider = styled.p`
  font-size: 18px;
  display: inline-block;
  margin: auto 0;
  margin-right: 3px;
  font-weight: 800;
`;

const JoinButton = styled.div`
  background-color: #e71a0f;
  color: white;
  width: 350px;
  height: 45px;
  border: 1px solid orangered;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
`;

const UserUpdate = () => {
  return (
    <JoinContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>회원서비스</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            회원정보 수정
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <JoinSection>
        <JoinSectionItemBox>
          <Span666666>
            필요한 모든 정보를 입력하신 후, 회원정보 수정 버튼을 클릭해 주세요.
          </Span666666>
          <JoinSectionInput type="text" placeholder="아이디" />
          <JoinSectionInput type="text" placeholder="실명" />
          <JoinSectionInput type="text" placeholder="닉네임" />
          <JoinSectionInput type="password" placeholder="비밀번호" />
          <JoinSectionInput type="email" placeholder="이메일" />
          <PhoneInputBox>
            <select
              name="phone-header"
              style={{
                width: "60px",
                height: "27px",
                border: "1px solid #b5b5b5",
                marginRight: "3px",
              }}
            >
              <option value="010" selected>
                010
              </option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </select>
            <PhoneDivider>-</PhoneDivider>
            <PhoneInput />
            <PhoneDivider>-</PhoneDivider>
            <PhoneInput />
          </PhoneInputBox>

          <JoinButton>회원정보 수정</JoinButton>
        </JoinSectionItemBox>
      </JoinSection>
    </JoinContainer>
  );
};

export default UserUpdate;
