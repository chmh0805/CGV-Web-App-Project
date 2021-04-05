import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainAsidesBox = styled.div`
  width: 160px;
  line-height: 1.2;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
`;

const AsidesItemDiv = styled.div`
  width: 100%;
  height: 80px;
  line-height: 1.2;
  padding: 18px 0;
  border: 1px solid #cacac0;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
`;

const AsidesItemDiv1 = styled(AsidesItemDiv)`
  color: white;
  background-color: #e71a0f;
`;

const AsidesItemDiv2 = styled(AsidesItemDiv)`
  color: #222;
`;

const AsidesItemEm = styled.em`
  display: block;
  font-style: normal;
  font-size: 26px;
  line-height: 26px;
  font-weight: 600;
`;

const AsidesItemStrong = styled.strong`
  margin-top: 5px;
  font-size: 13px;
  line-height: 13px;
  font-weight: 600;
`;

const MovieLogAsidesBox = ({
  nowSpace,
  expectMovieCount,
  watchedMovieCount,
}) => {
  if (nowSpace === "movielog-expected") {
    return (
      <MainAsidesBox>
        <Link to="/user/movielog/expected">
          <AsidesItemDiv1>
            <AsidesItemEm>{expectMovieCount}</AsidesItemEm>
            <AsidesItemStrong>기대되는 영화</AsidesItemStrong>
          </AsidesItemDiv1>
        </Link>
        <Link to="/user/movielog/watched">
          <AsidesItemDiv2 style={{ marginTop: "10px" }}>
            <AsidesItemEm>{watchedMovieCount}</AsidesItemEm>
            <AsidesItemStrong>내가 본 영화</AsidesItemStrong>
          </AsidesItemDiv2>
        </Link>
      </MainAsidesBox>
    );
  } else {
    return (
      <MainAsidesBox>
        <Link to="/user/movielog/expected">
          <AsidesItemDiv2>
            <AsidesItemEm>{expectMovieCount}</AsidesItemEm>
            <AsidesItemStrong>기대되는 영화</AsidesItemStrong>
          </AsidesItemDiv2>
        </Link>
        <Link to="/user/movielog/watched">
          <AsidesItemDiv1 style={{ marginTop: "10px" }}>
            <AsidesItemEm>{watchedMovieCount}</AsidesItemEm>
            <AsidesItemStrong>내가 본 영화</AsidesItemStrong>
          </AsidesItemDiv1>
        </Link>
      </MainAsidesBox>
    );
  }
};

export default MovieLogAsidesBox;
