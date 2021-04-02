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

const SupportFaqRegister = (props) => {
  const [faqReqDto, setFaqReqDto] = useState({
    sort: "",
    title: "",
    content: "",
  });

  if (isAdmin() === false) {
    alert("접근 불가");
    return null;
  }

  const changeValue = (e) => {
    setFaqReqDto({ ...faqReqDto, [e.target.name]: e.target.value });
  };

  const handleCatChange = (e) => {
    setFaqReqDto({ sort: e.target.value });
  };

  const saveFaq = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/faq", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(faqReqDto),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.statusCode === 1) {
          alert("자주찾는질문 등록이 성공하였습니다.");
          window.location.replace("/support/faq/default/");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("자주찾는질문 등록이 실패하였습니다.");
      });
  };
  return (
    <ContainerBox>
      <RegisterContainer>
        <h1> 자주찾는질문 등록</h1>
        <Form onSubmit={saveFaq}>
          <Form.Group>
            <Form.Label>구분</Form.Label>
            <select
              onChange={handleCatChange}
              value={faqReqDto.sort}
              style={{ marginLeft: "10px" }}
            >
              <option value="">Select</option>
              <option value="1">[예매/매표]</option>
              <option value="2">[관람권/결제수단]</option>
            </select>
          </Form.Group>

          <Form.Group>
            <Form.Label>제목</Form.Label>
            <Form.Control
              type="text"
              name="title"
              onChange={changeValue}
              value={faqReqDto.title}
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
              value={faqReqDto.content}
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

export default SupportFaqRegister;
