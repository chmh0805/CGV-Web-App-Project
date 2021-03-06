import React, { useEffect, useState } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import { deleteCookie, getCookie } from "../utils/JWT";
import axios from "axios";

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

const JoinButton = styled.button`
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

const UserUpdate = (props) => {
  const [updateReqDto, setUpdateReqDto] = useState({
    username: "",
    name: "",
    nickname: "",
    password: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    axios
      .get("http://localhost:8080/user", {
        headers: {
          Authorization: getCookie("cgvJWT"),
        },
      })
      .then((res) => {
        let statusCode = res.data.statusCode;
        let data = res.data.data;
        if (statusCode === 1) {
          setUpdateReqDto({
            username: data.username,
            name: data.name,
            nickname: data.nickname,
            password: data.password,
            email: data.email,
            phone: data.phone,
          });
        }
      })
      .catch((err) => {
        deleteCookie("cgvJWT");
        deleteCookie("userId");
        alert("???????????? ?????? ??????. ????????????????????????.");
        window.location.replace("/login");
      });
  }, []);

  const handleForm = (e) => {
    setUpdateReqDto({ ...updateReqDto, [e.target.name]: e.target.value });
  };

  const isPhone = (phoneNum) => {
    var regExp = /^\d{3}-\d{3,4}-\d{4}$/;
    if (regExp.test(phoneNum)) {
      return true;
    } else {
      return false;
    }
  };

  const update = () => {
    if (updateReqDto.username === "") {
      alert("???????????? ???????????????.");
      return;
    }
    if (updateReqDto.name === "") {
      alert("????????? ???????????????.");
      return;
    }
    if (updateReqDto.nickname === "") {
      alert("???????????? ???????????????.");
      return;
    }
    if (
      updateReqDto.password === "" ||
      updateReqDto.password === null ||
      updateReqDto.password === undefined
    ) {
      alert("??????????????? ???????????????.");
      return;
    }
    if (updateReqDto.email === "") {
      alert("???????????? ???????????????.");
      return;
    }
    if (updateReqDto.phone === "") {
      alert("??????????????? ???????????????.");
      return;
    }

    if (!isPhone(updateReqDto.phone)) {
      alert("??????????????? ***-****-**** ????????? ?????? ??????????????????.");
      return;
    }

    let nickname = updateReqDto.nickname.trim();
    let password = updateReqDto.password.trim();
    let email = updateReqDto.email.trim();
    let phone = updateReqDto.phone.trim();

    axios
      .put(
        "http://localhost:8080/user",
        {
          nickname: nickname,
          password: password,
          email: email,
          phone: phone,
        },
        {
          headers: {
            "Content-type": "application/json",
            Authorization: getCookie("cgvJWT"),
          },
        }
      )
      .then((res) => {
        if (res.data.statusCode === 1) {
          alert("???????????? ????????? ?????????????????????.");
          props.history.push({
            pathname: "/",
          });
        } else {
          alert("???????????? ????????? ?????????????????????.");
        }
      })
      .catch((err) => {
        console.log(err);
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
            ???????????? ??????
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <JoinSection>
        <JoinSectionItemBox>
          <Span666666>
            ????????? ?????? ????????? ???????????? ???, ???????????? ?????? ????????? ????????? ?????????.
          </Span666666>
          <JoinSectionInput
            type="text"
            placeholder="?????????"
            value={updateReqDto.username}
            name="username"
            disabled="disabled"
          />
          <JoinSectionInput
            type="text"
            placeholder="??????"
            value={updateReqDto.name}
            name="name"
            disabled="disabled"
          />
          <JoinSectionInput
            type="text"
            placeholder="?????????"
            value={updateReqDto.nickname}
            onChange={handleForm}
            name="nickname"
          />
          <JoinSectionInput
            type="password"
            placeholder="????????????"
            value={updateReqDto.password}
            onChange={handleForm}
            name="password"
          />
          <JoinSectionInput
            type="email"
            placeholder="?????????"
            value={updateReqDto.email}
            onChange={handleForm}
            name="email"
          />
          <JoinSectionInput
            type="text"
            placeholder="????????????(***-****-****)??? ????????? ???????????????."
            value={updateReqDto.phone}
            onChange={handleForm}
            name="phone"
          />
          <JoinButton onClick={() => update()}>???????????? ??????</JoinButton>
        </JoinSectionItemBox>
      </JoinSection>
    </JoinContainer>
  );
};

export default UserUpdate;
