import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { Checkbox } from "semantic-ui-react";
import axios from "axios";
import { deleteCookie, getCookie, parseJwt, setCookie } from "../utils/JWT";

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
  const [isChecked, setIsChecked] = useState(false);
  const [isLoaded, setIsLoaded] = useState(true);

  if (getCookie("cgvUsernameRemember") !== undefined && isLoaded) {
    setIsLoaded(false);
    setIsChecked(true);
    setLoginReqDto({
      ...loginReqDto,
      username: getCookie("cgvUsernameRemember"),
    });
  }

  const handleForm = (e) => {
    setLoginReqDto({ ...loginReqDto, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    setIsChecked(e.target.checked);
  };

  const login = async () => {
    let username = loginReqDto.username.trim();
    let password = loginReqDto.password.trim();

    if (username === "") {
      alert("???????????? ??????????????????.");
      return;
    }

    if (password === "") {
      alert("??????????????? ??????????????????.");
      return;
    }

    await axios
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
          alert("????????? ?????? ??????????????? ??????????????????.");
          return;
        } else {
          if (isChecked) {
            setCookie("cgvUsernameRemember", loginReqDto.username);
          } else {
            deleteCookie("cgvUsernameRemember");
          }
          setCookie("cgvJWT", res.headers.authorization, { "max-age": 10800 });
          setCookie("userId", parseJwt(getCookie("cgvJWT")).userId);
          window.location.replace("/");
        }
      })
      .catch((res) => {
        alert("????????? ?????? ??????????????? ??????????????????.");
        return;
      });
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        login();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  return (
    <LoginContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>???</NavSectionArrow>
          <NavSectionSpan>???????????????</NavSectionSpan>
          <NavSectionArrow>???</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            ?????????
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <TabSection>
        <TabSectionItem1>?????????</TabSectionItem1>
        <Link to="/guest/login" style={{ textDecoration: "none" }}>
          <TabSectionItem2>????????? ????????????</TabSectionItem2>
        </Link>
      </TabSection>
      <LoginSection>
        <LoginSectionItemBox>
          <Span666666>
            ????????? ??????????????? ???????????? ???, ????????? ????????? ????????? ?????????.
          </Span666666>
          <LoginSectionInput
            placeholder="?????????"
            type="text"
            onChange={handleForm}
            name="username"
            value={loginReqDto.username}
          />
          <LoginSectionInput
            placeholder="????????????"
            type="password"
            onChange={handleForm}
            name="password"
            value={loginReqDto.password}
          />
          <LoginButton onClick={() => login()}>?????????</LoginButton>
          <LoginSectionFooter>
            <LoginSectionFooterLeftBox>
              <Checkbox
                style={{ margin: "0 3px 0 0" }}
                id="checkbox"
                onChange={handleCheck}
                checked={isChecked}
              />
              <Span666666>????????? ??????</Span666666>
            </LoginSectionFooterLeftBox>
            <LoginSectionFooterRightBox>
              <LoginSectionFooterRightLink
                to="/findId"
                style={{ marginRight: "10px" }}
              >
                ????????? ??????
              </LoginSectionFooterRightLink>
              <LoginSectionFooterRightLink to="/findPassword">
                ???????????? ??????
              </LoginSectionFooterRightLink>
            </LoginSectionFooterRightBox>
          </LoginSectionFooter>
        </LoginSectionItemBox>
      </LoginSection>
    </LoginContainer>
  );
};

export default Login;
