import React, { useState } from "react";
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
  cursor: pointer;
`;

const Join = (props) => {
  const [joinReqDto, setJoinReqDto] = useState({
    username: "",
    name: "",
    nickname: "",
    password: "",
    email: "",
    phone: "",
  });

  const handleForm = (e) => {
    setJoinReqDto({ ...joinReqDto, [e.target.name]: e.target.value });
  };

  const isPhone = (phoneNum) => {
    var regExp = /^\d{3}-\d{3,4}-\d{4}$/;
    if (regExp.test(phoneNum)) {
      return true;
    } else {
      return false;
    }
  };

  const join = () => {
    joinReqDto.username = joinReqDto.username.trim();
    joinReqDto.name = joinReqDto.name.trim();
    joinReqDto.nickname = joinReqDto.nickname.trim();
    joinReqDto.password = joinReqDto.password.trim();
    joinReqDto.email = joinReqDto.email.trim();
    joinReqDto.phone = joinReqDto.phone.trim();

    if (joinReqDto.username === "") {
      alert("???????????? ???????????????.");
      return;
    }
    if (joinReqDto.name === "") {
      alert("????????? ???????????????.");
      return;
    }
    if (joinReqDto.nickname === "") {
      alert("???????????? ???????????????.");
      return;
    }
    if (joinReqDto.password === "") {
      alert("??????????????? ???????????????.");
      return;
    }
    if (joinReqDto.email === "") {
      alert("???????????? ???????????????.");
      return;
    }
    if (joinReqDto.phone === "") {
      alert("??????????????? ???????????????.");
      return;
    }

    if (!isPhone(joinReqDto.phone)) {
      alert("??????????????? ***-****-**** ????????? ?????? ??????????????????.");
      return;
    }

    fetch("http://localhost:8080/auth/join", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(joinReqDto),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 1) {
          alert("??????????????? ?????????????????????.");
          props.history.push({
            pathname: "/login",
          });
        } else {
          alert("??????????????? ?????????????????????.");
        }
      });
  };

  return (
    <JoinContainer>
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
            ????????????
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <JoinSection>
        <JoinSectionItemBox>
          <Span666666>
            ????????? ?????? ????????? ???????????? ???, ???????????? ????????? ????????? ?????????.
          </Span666666>
          <JoinSectionInput
            type="text"
            placeholder="?????????"
            value={joinReqDto.username}
            onChange={handleForm}
            name="username"
          />
          <JoinSectionInput
            type="text"
            placeholder="??????"
            value={joinReqDto.name}
            onChange={handleForm}
            name="name"
          />
          <JoinSectionInput
            type="text"
            placeholder="?????????"
            value={joinReqDto.nickname}
            onChange={handleForm}
            name="nickname"
          />
          <JoinSectionInput
            type="password"
            placeholder="????????????"
            value={joinReqDto.password}
            onChange={handleForm}
            name="password"
          />
          <JoinSectionInput
            type="email"
            placeholder="?????????"
            value={joinReqDto.email}
            onChange={handleForm}
            name="email"
          />
          <JoinSectionInput
            type="text"
            placeholder="????????????(***-****-****)??? ????????? ???????????????."
            value={joinReqDto.phone}
            onChange={handleForm}
            name="phone"
          />
          <JoinButton onClick={() => join()}>????????????</JoinButton>
        </JoinSectionItemBox>
      </JoinSection>
    </JoinContainer>
  );
};

export default Join;
