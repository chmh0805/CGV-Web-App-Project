import React from "react";
import styled from "styled-components";

const AllSection = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  background-color: #fdfcf0;
`;

const FinderContainer = styled.div`
  width: 1000px;
  height: auto;
  overflow: hidden;
  margin: 0 auto;
  padding-left: 10px;
`;

const ItemOl = styled.ol`
  height: auto;
  overflow: hidden;
  padding-top: 50px;
  list-style: none;
  border-bottom: 3px solid #241d1e;
  min-height: 1400px;
  padding-left: 0;
`;

const ItemLi = styled.li`
  margin-left: -64px;
`;

const MCItemContainer = styled.div`
  width: 200px;
  height: 420px;
  margin-left: 61px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  float: left;
`;

const MCItemImgBox = styled.div`
  margin-bottom: 10px;
  border: 6px solid #000000;
`;

const MCItemImg = styled.img`
  width: 100%;
  height: 260px;
`;

const MCItemInfoBox = styled.div`
  height: 93px;
`;

const MCMovieTitle = styled.div`
  display: block;
  overflow: hidden;
  width: 90%;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 16px;
  font-weight: bolder;
  color: #333333;
`;

const MCInfoText = styled.span`
  font-size: 12px;
  color: #444444;
  font-weight: 500;
  margin-right: 5px;
`;

const NullBox = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: 800;
`;

const MovieFinderItem = ({ movies }) => {
  let searchedMovies = movies;

  if (searchedMovies !== null) {
    searchedMovies.forEach((movie) => {
      if (movie.imgUrl === "") {
        movie.imgUrl =
          "https://www.publicdomainpictures.net/pictures/280000/velka/not-found-image-15383864787lu.jpg";
      }
    });
    return (
      <AllSection>
        <FinderContainer>
          <ItemOl>
            <ItemLi>
              {searchedMovies.map((movie) => (
                <MCItemContainer>
                  <MCItemImgBox>
                    <MCItemImg src={movie.imgUrl} />
                  </MCItemImgBox>
                  <MCItemInfoBox>
                    <MCMovieTitle>{movie.title}</MCMovieTitle>
                    <MCInfoText>{movie.openDt}</MCInfoText>
                    <MCInfoText>개봉</MCInfoText>
                  </MCItemInfoBox>
                </MCItemContainer>
              ))}
            </ItemLi>
          </ItemOl>
        </FinderContainer>
      </AllSection>
    );
  } else {
    return (
      <AllSection>
        <FinderContainer>
          <NullBox>
            <span style={{ fontSize: "28px" }}>
              검색 결과를 찾지 못했어요.&nbsp;&nbsp;😥
            </span>
          </NullBox>
        </FinderContainer>
      </AllSection>
    );
  }
};

export default MovieFinderItem;
