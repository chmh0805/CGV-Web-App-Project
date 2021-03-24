import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import axios from "axios";
import { Link } from "react-router-dom";

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
  margin-bottom: 100px;
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

const FindUsername = () => {
  window.scrollTo(0, 0);

  const [findUsernameReqDto, setFindUsernameReqDto] = useState({
    name: "",
    email: "",
  });

  const handleForm = (e) => {
    setFindUsernameReqDto({
      ...findUsernameReqDto,
      [e.target.name]: e.target.value,
    });
  };

  const findUsername = () => {
    let name = findUsernameReqDto.name.trim();
    let email = findUsernameReqDto.email.trim();

    if (name === "") {
      alert("이름을 입력해주세요.");
      return;
    }

    if (email === "") {
      alert("이메일을 입력해주세요.");
      return;
    }

    axios
      .post(
        "http://localhost:8080/findUsername",
        {
          name: name,
          email: email,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.statusCode === 1) {
          alert("고객님의 아이디는 " + res.data.data + "입니다.");
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
            아이디 찾기
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <MyCGVMainContainer>
        <MainContentsBox>
          <RegisterBox>
            <RegisterBoxStrong>아이디 찾기</RegisterBoxStrong>
          </RegisterBox>
          <SubTitleDiv>
            <SubTitleLink to="/findPassword">비밀번호 찾기</SubTitleLink>
          </SubTitleDiv>
          <PasswordDIv>
            <InputItemBox>
              <span>이름&nbsp;</span>
              <PasswordInput
                type="text"
                onChange={handleForm}
                name="name"
                value={findUsernameReqDto.name}
              />
            </InputItemBox>
            <InputItemBox>
              <span>이메일&nbsp;</span>
              <PasswordInput
                type="email"
                onChange={handleForm}
                name="email"
                value={findUsernameReqDto.email}
                style={{ marginRight: "24px" }}
              />
            </InputItemBox>
            <ButtonBox>
              <PasswordButton onClick={() => findUsername()}>
                아이디 찾기
              </PasswordButton>
            </ButtonBox>
          </PasswordDIv>
        </MainContentsBox>
      </MyCGVMainContainer>
    </MyCgvReserveContainer>
  );
};

export default FindUsername;
