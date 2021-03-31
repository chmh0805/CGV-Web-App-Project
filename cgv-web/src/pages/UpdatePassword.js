import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
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

const UpdatePassword = (props) => {
  const userId = props.location.state.userId;
  const [updatePasswordReqDto, setUpdatePasswordReqDto] = useState({
    userId: "",
    password: "",
  });

  const handleForm = (e) => {
    setUpdatePasswordReqDto({
      ...updatePasswordReqDto,
      [e.target.name]: e.target.value,
    });
  };

  const update = () => {
    if (
      updatePasswordReqDto.password === "" ||
      updatePasswordReqDto.password === null ||
      updatePasswordReqDto.password === undefined
    ) {
      alert("비밀번호를 입력하세요.");
      return;
    }

    let password = updatePasswordReqDto.password.trim();

    axios
      .put(
        "http://localhost:8080/changePassword",
        {
          userId: userId,
          password: password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      )
      .then((res) => {
        if (res.data.statusCode === 1) {
          alert("비밀번호 변경에 성공하였습니다.");
          props.history.push({
            pathname: "/",
          });
        } else {
          alert("비밀번호 변경에 실패하였습니다.");
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
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            비밀번호 찾기
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <JoinSection>
        <JoinSectionItemBox>
          <Span666666>
            변경할 비밀번호를 입력하신 후, 비밀번호 변경 버튼을 클릭해 주세요.
          </Span666666>
          <JoinSectionInput
            type="password"
            placeholder="비밀번호"
            value={updatePasswordReqDto.password}
            onChange={handleForm}
            name="password"
          />
          <JoinButton onClick={() => update()}>비밀번호 변경</JoinButton>
        </JoinSectionItemBox>
      </JoinSection>
    </JoinContainer>
  );
};

export default UpdatePassword;
