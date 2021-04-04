import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import MovieLogAsidesBox from "../components/MovieLogAsidesBox";
import { getCookie, setCookie } from "../utils/JWT";

const ExpectedLogMainContainer = styled.div`
  background-color: #fdfcf0;
  width: auto;
  height: auto;
  min-height: 899px;
  padding-bottom: 100px;
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

const ExpectedLogSubContainer = styled.div`
  width: 980px;
  height: auto;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

const MainContentsBox = styled.div`
  width: 800px;
`;

const MainContentsTitleBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const MainContentsTitleH3 = styled.h3`
  height: 30px;
  margin: 0;
  color: #222;
  font-weight: 600;
  font-size: 17px;
  line-height: 30px;
`;

const MainContentsTitleP = styled.p`
  margin-left: 5px;
  line-height: 30px;
  color: #666;
`;

const WatchedMovieListBox = styled.div`
  width: 100%;
  height: auto;
  margin-top: 25px;
  line-height: 1.2;
  color: #666;
`;

const WatchedMovieListItem = styled.div`
  width: 100%;
  height: 170px;
  margin-top: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d6d4ca;
  line-height: 1.2;
  color: #666;
  display: flex;
  justify-content: space-between;
`;

const WatchedMovieImg = styled.img`
  width: 110px;
  height: 150px;
`;

const WatchedMovieInfo = styled.div`
  width: 660px;
`;

const WatchedMovieInfoTitle = styled.div`
  width: 100%;
  height: 45px;
  margin: 14px 0;
`;

const WatchedMovieInfoStrong = styled.strong`
  margin-bottom: 8px;
  color: #222;
  font-weight: 600;
  font-size: 22px;
  white-space: nowrap;
`;

const MovieLogExpected = () => {
  setCookie("now-space", "movielog-expected");
  window.scrollTo(0, 0);

  const [isLoaded, setIsLoaded] = useState(true);
  const [expectMovies, setExpectMovies] = useState([]);

  const loadData = async () => {
    if (isLoaded) {
      setIsLoaded(false);

      await fetch("http://localhost:8080/expectMovie", {
        method: "GET",
        headers: new Headers({
          Authorization: getCookie("cgvJWT"),
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.statusCode === 1) {
            console.log(res.data);
            setExpectMovies(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  loadData();

  return (
    <ExpectedLogMainContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>무비로그</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            기대되는 영화
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <ExpectedLogSubContainer>
        <MovieLogAsidesBox
          nowSpace={getCookie("now-space")}
          expectMovieCount={expectMovies.length}
        />
        <MainContentsBox>
          <MainContentsTitleBox>
            <MainContentsTitleH3>기대되는 영화</MainContentsTitleH3>
            <MainContentsTitleP>{expectMovies.length}</MainContentsTitleP>
          </MainContentsTitleBox>
          <WatchedMovieListBox id="movieListBox">
            {expectMovies.map((expectMovie) => (
              <WatchedMovieListItem>
                <WatchedMovieImg src={expectMovie.movie.posterImgSrc} />
                <WatchedMovieInfo>
                  <WatchedMovieInfoTitle>
                    <WatchedMovieInfoStrong>
                      {expectMovie.movie.title}
                    </WatchedMovieInfoStrong>
                  </WatchedMovieInfoTitle>
                </WatchedMovieInfo>
              </WatchedMovieListItem>
            ))}
          </WatchedMovieListBox>
        </MainContentsBox>
      </ExpectedLogSubContainer>
    </ExpectedLogMainContainer>
  );
};

export default MovieLogExpected;
