import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import MovieLogAsidesBox from "../components/MovieLogAsidesBox";
import { getCookie, setCookie } from "../utils/JWT";

const WatchedLogMainContainer = styled.div`
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

const WatchedLogSubContainer = styled.div`
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

const WatchedMovieInfoP = styled.p`
  margin-bottom: 9px;
  color: #222;
  font-weight: 500;
  font-size: 13px;
  line-height: 14px;
`;

const MovieLogWatched = () => {
  setCookie("now-space", "movielog-watched");
  window.scrollTo(0, 0);

  const [watchedMovies, setWatchedMovies] = useState([]);
  const [expectMovies, setExpectMovies] = useState([]);
  let dayList = ["???", "???", "???", "???", "???", "???", "???"];

  useEffect(() => {
    fetch("http://localhost:8080/expectMovie", {
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
          setExpectMovies(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    fetch(
      "http://localhost:8080/ticketing/user/" + getCookie("userId") + "/watched"
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.statusCode === 1) {
          setWatchedMovies(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <WatchedLogMainContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>???</NavSectionArrow>
          <NavSectionSpan>????????????</NavSectionSpan>
          <NavSectionArrow>???</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            ?????? ??? ??????
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <WatchedLogSubContainer>
        <MovieLogAsidesBox
          nowSpace={getCookie("now-space")}
          expectMovieCount={expectMovies.length}
          watchedMovieCount={watchedMovies.length}
        />
        <MainContentsBox>
          <MainContentsTitleBox>
            <MainContentsTitleH3>?????? ??? ??????</MainContentsTitleH3>
            <MainContentsTitleP>{watchedMovies.length}</MainContentsTitleP>
          </MainContentsTitleBox>
          <WatchedMovieListBox>
            {watchedMovies.map((watchedMovie) => {
              return (
                <WatchedMovieListItem>
                  <WatchedMovieImg
                    src={watchedMovie.timeTable.movie.posterImgSrc}
                  />
                  <WatchedMovieInfo>
                    <WatchedMovieInfoTitle>
                      <WatchedMovieInfoStrong>
                        {watchedMovie.timeTable.movie.title}
                      </WatchedMovieInfoStrong>
                    </WatchedMovieInfoTitle>
                    <WatchedMovieInfoP>
                      {watchedMovie.timeTable.date}&nbsp;(
                      {dayList[new Date(watchedMovie.timeTable.date).getDay()]}
                      )&nbsp;
                      {watchedMovie.timeTable.startTime}&nbsp;
                    </WatchedMovieInfoP>
                    <WatchedMovieInfoP>
                      {watchedMovie.timeTable.theater.name}&nbsp;
                      {watchedMovie.timeTable.hall.name} / 1???
                    </WatchedMovieInfoP>
                  </WatchedMovieInfo>
                </WatchedMovieListItem>
              );
            })}
          </WatchedMovieListBox>
        </MainContentsBox>
      </WatchedLogSubContainer>
    </WatchedLogMainContainer>
  );
};

export default MovieLogWatched;
