import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Button, Form } from "react-bootstrap";
import { deleteCookie, getCookie, setCookie } from "../utils/JWT";
import axios from "axios";

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

const ReviewRegister = (props) => {
  const [reviewSaveReqDto, setReviewSaveReqDto] = useState({
    userId: "",
    movieId: "",
    content: "",
    isLike: "",
  });

  let movieDocId = props.location.state.movieDocId;

  const changeValue = (e) => {
    setReviewSaveReqDto({
      ...reviewSaveReqDto,
      [e.target.name]: e.target.value,
    });
    console.log(props.location.state.movieDocId);
    console.log(e.target.value);
  };

  const handleCatChange = (e) => {
    setReviewSaveReqDto({ isLike: e.target.value });
  };

  const saveReview = (e) => {
    e.preventDefault();
    setReviewSaveReqDto({});
    // console.log(reviewSaveReqDto.movieId)
    fetch("http://localhost:8080/review", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: getCookie("cgvJWT"),
      }),
      body: JSON.stringify(reviewSaveReqDto),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.statusCode === 1) {
          alert("영화평점 등록을 성공하였습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
        alert("영화평점 등록을 실패하였습니다.");
      });
  };

  return (
    <ContainerBox>
      <RegisterContainer>
        <h1>영화 평점 등록</h1>
        <Form onSubmit={saveReview}>
          <Form.Group>
            <Form.Label style={{ marginRight: "5px" }}>구분</Form.Label>
            <input
              type="radio"
              name="ContactMode"
              value="1"
              onChange={handleCatChange}
            />{" "}
            좋아요:)
            <input
              type="radio"
              name="ContactMode"
              value="2"
              onChange={handleCatChange}
              style={{ marginLeft: "5px" }}
            />{" "}
            별로예요:(
          </Form.Group>

          <Form.Group>
            <Form.Label style={{ marginRight: "5px" }}>내용</Form.Label>
            <textarea
              type="text"
              rows="10"
              cols="100"
              class="formControl"
              name="content"
              onChange={changeValue}
              value={reviewSaveReqDto.content}
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

export default ReviewRegister;
