import React from "react";
import styled from "styled-components";

const QnaTableBox = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-top: 30px;
  line-height: 1.2;
  color: #666;
  border-top: 1px solid #b8b6aa;
`;

const QnaTableRowBox = styled.div`
  width: 100%;
  height: 57px;
  display: flex;
  border-bottom: 1px solid #d6d4ca;
`;

const QnaTableContentTitle = styled.div`
  width: 80px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 27px;
  color: #666;
  font-size: 14px;
  padding-left: 10px;
`;

const QnaTableContentLongBody = styled.div`
  width: 720px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 27px;
  color: #666;
  font-size: 14px;
  font-weight: 600;
  padding-left: 5px;
`;

const QnaTableContentDiv = styled.div`
  width: 672px;
  margin: 0;
  vertical-align: middle;
  height: 25px;
  line-height: 22px;
  padding-left: 10px;
`;

const QnaTableContentBox = styled.div`
  min-height: 400px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding: 10px;
  width: 672px;
  resize: vertical;
  line-height: 1.7;
  font-size: 13px;
  color: #666;
  vertical-align: top;
`;

const MyCGVQnaDetailBox = ({ qna }) => {
  return (
    <>
      <QnaTableBox>
        <QnaTableRowBox>
          <QnaTableContentTitle>제목</QnaTableContentTitle>
          <QnaTableContentLongBody>
            <QnaTableContentDiv>{qna.title}</QnaTableContentDiv>
          </QnaTableContentLongBody>
        </QnaTableRowBox>
        <QnaTableRowBox
          style={{
            height: "auto",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <QnaTableContentTitle>내용</QnaTableContentTitle>
          <QnaTableContentLongBody>
            <QnaTableContentBox>{qna.content}</QnaTableContentBox>
          </QnaTableContentLongBody>
        </QnaTableRowBox>
      </QnaTableBox>
    </>
  );
};

export default MyCGVQnaDetailBox;
