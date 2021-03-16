import React from "react";
import styled from "styled-components";
import brickBg from "../images/movieFinder/bg_mainbanner.png";
import MovieChart from "./MovieChart";

const MFContainer = styled.div`
  width: 100%;
  height: 450px;
  background-image: url(${brickBg});
`;

const MovieFinderBox = styled.div`
  width: 980px;
  height: 450px;
  background: #29353d;
  margin: 0 auto;
`;

const MFHeaderH3 = styled.h3`
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  padding: 15px 0 10px;
  border-bottom: 1px solid #333e46;
`;

const MFTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;

const MovieFinder = () => {
  return (
    <>
      <MFContainer>
        <MovieFinderBox>
          <MFHeaderH3>
            좋아하는 영화, 찾고싶은 영화를 CGV에서 찾아드립니다!
          </MFHeaderH3>
          <form id="">
            <MFTable>
              <tr></tr>
            </MFTable>
          </form>
        </MovieFinderBox>
      </MFContainer>
      <MovieChart />
    </>
  );
};

export default MovieFinder;
