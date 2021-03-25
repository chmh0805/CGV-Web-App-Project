import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import { setCookie } from "../utils/JWT";

const MyCgvReserveContainer = styled.div`
  background-color: #fdfcf0;
  width: auto;
  height: auto;
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

const MyCGVMainContainer = styled.div`
  width: 980px;
  height: 900px;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

const MainContentsBox = styled.div`
  width: 800px;
`;

const RegisterBox = styled.div`
  width: 100%;
  margin-top: 50px;
  text-align: center;
  line-height: 1.2;
  color: #666;
`;

const RegisterBoxStrong = styled.strong`
  display: block;
  margin-bottom: 15px;
  color: #222;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
`;

const PasswordDIv = styled.div`
  width: 100%;
  margin-top: 15px;
  border: 1px solid #cbcac4;
  padding: 30px 0 30px 0;
  background-color: white;
  margin-bottom: 20px;
`;

const PasswordInput = styled.input`
  display: inline-block;
  height: 25px;
  line-height: 22px;
  border: 1px solid #b5b5b5;
  font-size: 13px;
  color: #666;
  padding-left: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

const PasswordButton = styled.button`
  background: #e71a0f;
  border: 2px solid #e71a0f;
  color: #ffffff;
  line-height: 21px;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  display: inline-block;
  border-radius: 5px;
`;

const InputItemBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SubTitleDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 16px;
`;

const SubTitleLink = styled(Link)`
  color: black;
  text-decoration: none;

  &:hover {
    color: black;
    text-decoration: none;
  }
`;

const BottomNoticeBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  color: red;
  margin-bottom: 10px;
`;

const FindPassword = (props) => {
  window.scrollTo(0, 0);

  const [findPasswordReqDto, setFindPasswordReqDto] = useState({
    username: "",
    phone: "",
  });

  const handleForm = (e) => {
    setFindPasswordReqDto({
      ...findPasswordReqDto,
      [e.target.name]: e.target.value,
    });
  };

  const isPhone = (phoneNum) => {
    var regExp = /^\d{3}-\d{3,4}-\d{4}$/;
    if (regExp.test(phoneNum)) {
      return true;
    } else {
      return false;
    }
  };

  const findPassword = () => {
    let username = findPasswordReqDto.username.trim();
    let phone = findPasswordReqDto.phone.trim();

    if (username === "") {
      alert("아이디를 입력해주세요.");
      return;
    }

    if (phone === "") {
      alert("전화번호를 입력해주세요.");
      return;
    }

    if (!isPhone(phone)) {
      alert("전화번호를 ***-****-**** 양식에 맞게 입력해주세요.");
      return;
    }

    axios
      .post(
        "http://localhost:8080/findPassword",
        {
          username: username,
          phone: phone,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.statusCode === 1) {
          props.history.push({
            pathname: "/updatePw",
            state: {
              'userId': res.data.data.id
            },
          });
        } else {
          alert("입력 정보를 확인해주세요.");
        }
      })
      .catch((res) => {
        alert("입력 정보를 확인해주세요.");
      });
  };

  return (
    <MyCgvReserveContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            비밀번호 찾기
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <MyCGVMainContainer>
        <MainContentsBox>
          <RegisterBox>
            <RegisterBoxStrong>비밀번호 찾기</RegisterBoxStrong>
          </RegisterBox>
          <SubTitleDiv>
            <SubTitleLink to="/findId">아이디 찾기</SubTitleLink>
          </SubTitleDiv>
          <PasswordDIv>
            <InputItemBox>
              <span>아이디&nbsp;</span>
              <PasswordInput
                type="text"
                onChange={handleForm}
                name="username"
                value={findPasswordReqDto.username}
              />
            </InputItemBox>
            <InputItemBox>
              <span>전화번호&nbsp;</span>
              <PasswordInput
                type="text"
                onChange={handleForm}
                name="phone"
                value={findPasswordReqDto.phone}
                style={{ marginRight: "24px" }}
              />
            </InputItemBox>
            <ButtonBox>
              <PasswordButton onClick={() => findPassword()}>
                비밀번호 찾기
              </PasswordButton>
            </ButtonBox>
          </PasswordDIv>
          <BottomNoticeBox>
            <span>전화번호는 ***-****-**** 의 형태로 입력해주세요.</span>
          </BottomNoticeBox>
          <BottomNoticeBox>
            <span>
              찾기 성공 시 이동하는 페이지에서 반드시 비밀번호를 변경해주세요.
            </span>
          </BottomNoticeBox>
        </MainContentsBox>
      </MyCGVMainContainer>
    </MyCgvReserveContainer>
  );
};

export default FindPassword;
