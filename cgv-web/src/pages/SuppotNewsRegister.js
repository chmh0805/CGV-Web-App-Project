import React, { useState } from "react";
import { isAdmin } from "../utils/AuthUtil";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";

const ContainerBox = styled.div`
  background-color: #fdfcf0;
  width: 100%;
`;

const RegisterContainer = styled.div`
  background-color: #fdfcf0;
  width: 980px;
  padding-top: 30px;
  padding-bottom: 30px;
  height: auto;
  margin: 0 auto;
`;

const SuppotNewsRegister = (props) => {
  const [noticeReqDto, setNoticeReqDto] = useState({
    sort: "",
    title: "",
    content: "",
  });

  if (isAdmin() === false) {
    alert("접근 불가");
    return null;
  }

  const changeValue = (e) => {
    setNoticeReqDto({ ...noticeReqDto, [e.target.name]: e.target.value });
  };

  const handleCatChange = (e) => {
    setNoticeReqDto({ sort: e.target.value });
  };

  const saveNotice = (e) => {
    if ((noticeReqDto.sort = "")) {
      alert("구분을 선택하세요.");
      return;
    }

    e.preventDefault();
    fetch("http://localhost:8080/notice", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(noticeReqDto),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.statusCode === 1) {
          alert("공지사항 등록이 성공하였습니다.");
          window.location.replace("/support/news/default/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("공지사항 등록이 실패하였습니다.");
      });
  };

  return (
    <ContainerBox>
      <RegisterContainer>
        <h1> 공지사항 등록</h1>
        <Form onSubmit={saveNotice}>
          <Form.Group>
            <Form.Label>구분</Form.Label>
            <select
              onChange={handleCatChange}
              value={noticeReqDto.sort}
              style={{ marginLeft: "10px" }}
            >
              <option value="">Select</option>
              <option value="1">[극장]</option>
              <option value="2">[시스템 점검]</option>
              <option value="3">[기타]</option>
            </select>
          </Form.Group>

          <Form.Group>
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              name="title"
              onChange={changeValue}
              value={noticeReqDto.title}
              required={true}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>내용</Form.Label>
            <textarea
              type="text"
              rows="10"
              cols="150"
              class="formControl"
              name="content"
              onChange={changeValue}
              value={noticeReqDto.content}
              required={true}
            />
          </Form.Group>
          <Button variant="danger" type="submit">
            등록하기
          </Button>
        </Form>
      </RegisterContainer>
    </ContainerBox>
  );
};

export default SuppotNewsRegister;
