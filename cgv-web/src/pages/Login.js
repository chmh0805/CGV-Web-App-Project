import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { Checkbox } from "semantic-ui-react";
import axios from "axios";
import { getCookie, setCookie } from "../utils/JWT";

const LoginContainer = styled.div`
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

const TabSection = styled.div`
  width: 920px;
  height: 39px;
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  margin-top: 30px;
  border-bottom: 2px solid #898987;
`;

const TabSectionItem1 = styled.div`
  width: 100px;
  height: 39px;
  background-color: #e71a0f;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-right: 1px;
`;

const TabSectionItem2 = styled.div`
  width: 100px;
  height: 39px;
  background-color: #898987;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const LoginSection = styled.div`
  width: 920px;
  height: 290px;
  margin: 0 auto;
  padding-top: 40px;
  border-bottom: 2px solid #898987;
`;

const LoginSectionItemBox = styled.div`
  width: 600px;
  height: 200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Span666666 = styled.span`
  color: #666666;
`;

const LoginSectionInput = styled.input`
  width: 350px;
  height: 39px;
  border: 2px solid #b5b5b5;
  margin-top: 5px;
  background-color: #fdfcf0;
  color: #666666;
`;

const LoginButton = styled.div`
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
  cursor: pointer;
`;

const LoginSectionFooter = styled.div`
  width: 270px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 3px;
`;

const LoginSectionFooterLeftBox = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  align-items: center;
`;

const LoginSectionFooterRightBox = styled.div`
  width: auto;
  height: 30px;
  display: flex;
  align-items: center;
`;

const LoginSectionFooterRightLink = styled(Link)`
  text-decoration: underline;
  color: #666666;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
    color: #666666;
  }
`;

const Login = (props) => {
  const [loginReqDto, setLoginReqDto] = useState({
    username: "",
    password: "",
  });

  const handleForm = (e) => {
    setLoginReqDto({ ...loginReqDto, [e.target.name]: e.target.value });
  };

  const login = () => {
    let username = loginReqDto.username.trim();
    let password = loginReqDto.password.trim();

    if (username === "") {
      alert("아이디를 입력해주세요.");
      return;
    }

    if (password === "") {
      alert("비밀번호를 입력해주세요.");
      return;
    }

    axios
      .post(
        "http://localhost:8080/login",
        {
          username: username,
          password: password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        if (
          res.headers.authorization === null ||
          res.headers.authorization === ""
        ) {
          alert("알 수 없는 오류입니다.");
        } else {
          setCookie("cgvJWT", res.headers.authorization, { "max-age": 10800 });
          props.history.push("/");
        }
      })
      .catch((res) => {
        alert("아이디 또는 비밀번호를 확인해주세요.");
      });
  };

  return (
    <LoginContainer>
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
            로그인
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <TabSection>
        <TabSectionItem1>로그인</TabSectionItem1>
        <Link to="/guest/login" style={{ textDecoration: "none" }}>
          <TabSectionItem2>비회원 예매확인</TabSectionItem2>
        </Link>
      </TabSection>
      <LoginSection>
        <LoginSectionItemBox>
          <Span666666>
            아이디 비밀번호를 입력하신 후, 로그인 버튼을 클릭해 주세요.
          </Span666666>
          <LoginSectionInput
            placeholder="아이디"
            type="text"
            onChange={handleForm}
            name="username"
            value={loginReqDto.username}
          />
          <LoginSectionInput
            placeholder="비밀번호"
            type="password"
            onChange={handleForm}
            name="password"
            value={loginReqDto.password}
          />
          <LoginButton onClick={() => login()}>로그인</LoginButton>
          <LoginSectionFooter>
            <LoginSectionFooterLeftBox>
              <Checkbox style={{ margin: "0 3px 0 0" }} id="checkbox" />
              <Span666666>아이디 저장</Span666666>
            </LoginSectionFooterLeftBox>
            <LoginSectionFooterRightBox>
              <LoginSectionFooterRightLink style={{ marginRight: "10px" }}>
                아이디 찾기
              </LoginSectionFooterRightLink>
              <LoginSectionFooterRightLink>
                비밀번호 찾기
              </LoginSectionFooterRightLink>
            </LoginSectionFooterRightBox>
          </LoginSectionFooter>
        </LoginSectionItemBox>
      </LoginSection>
    </LoginContainer>
  );
};

export default Login;
