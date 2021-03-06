import React, { useEffect, useState } from "react";
import styled from "styled-components";
import kingEgg from "../images/movieChart/king_egg.png";
import ticketBtn from "../images/movieDetail/ticket_btn.png";
import addBtn from "../images/movieDetail/add_btn.png";
import playBtn from "../images/movieDetail/play_icon.png";
import { Link } from "react-router-dom";
import MovieDetailReply from "../components/MovieDetailReply";
import HomeIcon from "@material-ui/icons/Home";
import { deleteCookie, getCookie, isLogined } from "../utils/JWT";
import Slider from "react-slick";
import BoardPagingBox from "../components/support/BoardPagingBox";

const MDCon = styled.div`
  width: 100%;
  background-color: #fdfcf0;
  padding-bottom: 50px;
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

const MDContentCon = styled.div`
  width: 980px;
  margin: 0 auto;
`;

const MDContentBox = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

const MDHeadBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 30px;
  border-bottom: 3px solid #241d1e;
`;

const MDHeadTitle = styled.h3`
  font-weight: 600;
  font-size: 36px;
  margin: 0;
`;

const MDMovieBox = styled.div`
  display: flex;
  margin-top: 40px;
`;

const MDMoviePoster = styled.img`
  margin-right: 30px;
  width: 185px;
  height: 260px;
`;

const MDMovieInfoBox = styled.div`
  width: 765px;
`;

const MDTitle = styled.p`
  margin: 0;
  font-size: 25px;
  font-weight: 700;
`;

const MDSubTitle = styled.p`
  margin: 0;
  color: #666666;
  font-size: 12px;
`;

const MDStoryBox = styled.div`
  margin-top: 40px;
  color: #333333;
  line-height: 1.8;
  font-size: 13px;
`;

const MDStoryP = styled.p`
  margin: 0;
`;

const MCMovieInfo = styled.div`
  margin-top: 25px;
  padding-bottom: 10px;
  border-bottom: 1px solid #d9d6c8;
`;

const MDTitleBox = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
`;

const MCInfoText = styled.span`
  font-size: 15px;
  color: #444444;
  font-weight: 500;
  margin-right: 5px;
`;

const MCInfoNum = styled.span`
  font-size: 12px;
  color: #444444;
  font-weight: 400;
  margin-left: 2px;
`;

const MCInfoSep = styled.span`
  font-size: 11px;
  color: #444444;
  font-weight: 300;
  margin-left: 5px;
  margin-right: 5px;
`;

const MCEggImg = styled.img`
  width: 15px;
  height: 27px;
  vertical-align: middle;
  margin-right: 3px;
  margin-top: -10px;
`;

const MDMovieInfo = styled.div`
  padding-top: 15px;
  color: #333333;
  font-size: 13px;
`;

const MDMovieDiv = styled.div`
  display: flex;
  text-overflow: clip;
  overflow: visible;
  margin-top: 5px;
`;

const MDMovieP = styled.p`
  font-weight: 600;
  margin: 0;
`;

const MDMovieSpan = styled.span`
  margin: 0;
  font-weight: 800;
  margin-left: 2px;
  margin-right: 4px;
`;

const MDMovieSep = styled.p`
  margin: 0;
  font-weight: 800;
  margin-left: 5px;
  margin-right: 5px;
`;

const MDBtnBox = styled.div`
  display: flex;
  margin-top: 26px;
`;

const MDExpectBtn = styled.button`
  width: 90px;
  height: 33px;
  border: 1px solid #222222;
  text-align: center;
  border-radius: 4px;
  margin-right: 5px;
  color: #222222;
  font-size: 13px;
  font-weight: 500;
  background-color: #fdfcf0;
  &:focus {
    background-color: #ffedec;
    color: #e71a0f;
    border-color: #e1817c;
    font-weight: bold;
  }
`;

const MDMovieBtn = styled(Link)``;

const MDMovieBtnImg = styled.img`
  width: 91px;
  height: 35px;
`;

const MDMovieContentDiv = styled.div`
  width: 800px;
`;

const MDTrailerBox = styled.div`
  margin-top: 40px;
  height: auto;
`;

const MDContentTitleDiv = styled.div`
  margin-bottom: 20px;
  width: 100%;
  height: 39px;
  background: #e2e0d2;
`;

const MDContentTitleH4 = styled.h4`
  float: left;
  margin-left: 16px;
  margin-top: 0;
  margin-bottom: 0;
  color: #333333;
  font-size: 14px;
  font-weight: 700;
  line-height: 39px;
`;

const MDContentCountSpan = styled.span`
  display: inline-block;
  margin-left: 5px;
  font-weight: 300;
  line-height: 39px;
  font-size: 12px;
`;

const MDContentAddBtn = styled.img`
  margin-left: 9px;
  vertical-align: middle;
`;

const MDReplyInfoBox = styled.div`
  width: 100%;
  padding: 20px 30px;
  background: #ebede3;
  box-sizing: border-box;
  border-radius: 5px;
  position: relative;
  margin-top: 10px;
`;

const MDReplyInfoText = styled.p`
  font-size: 16px;
  color: #212224;
  font-weight: 700;
  margin: 0;
`;

const MDReplyInfoSubText = styled.p`
  font-size: 14px;
  color: #212224;
  font-weight: 600;
  margin-top: 10px;
`;

const MDReplyBox = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
`;

const MDReplyUl = styled.ul`
  list-style: none;
  color: #333333;
  padding: 0 25px;
  height: auto;
  margin-bottom: 10px;
`;

const AsidesBannerImg = styled.img`
  width: 160px;
  aspect-ratio: auto 160 / 300;
  height: 300px;
  margin-top: 20px;
`;

const MDAdBox = styled.div`
  position: absolute;
  left: calc(50% - 690px);
  top: 550px;
`;

const MDAdBox2 = styled.div`
  position: absolute;
  left: calc(50% - 690px);
  top: 860px;
`;

const MDReplyInfoBtnBox = styled.div`
  position: absolute;
  top: 30px;
  right: 40px;
`;

const MDReplyBtn = styled.span`
  background-color: #bf2c1c;
  width: 76px;
  padding: 10px;
  color: #ffffff;
  text-align: center;
  line-height: 50px;
  border-radius: 3px;
`;

const MDMyReplyBtn = styled.span`
  background-color: #666666;
  width: 76px;
  padding: 10px 15px;
  color: #ffffff;
  text-align: center;
  line-height: 50px;
  border-radius: 3px;
  margin-left: 10px;
`;

const PagingBoxSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
`;

const ItemOl = styled.ol`
  list-style: none;
  padding-left: 0;
  margin-left: -10px;
`;

const ItemLi = styled.li`
  width: 260px;
  margin: 0 0 15px 10px;
  display: inline-block;
`;

const TrailerImgBox = styled.div`
  width: 260px;
  height: 142px;
  position: relative;
`;

const TrailerImg = styled.img`
  width: 260px;
  height: 142px;
`;

const PlayButton = styled.img`
  position: absolute;
  right: 5px;
  bottom: 6px;
  width: 44px;
  height: 44px;
`;

const StillCutBox = styled.div`
  width: 700px;
  height: 480px;
  margin: 0 auto;
`;

const Wrap = styled.div`
  margin: 0 auto;
  width: 100%;
  display: inline-block;
  .slick-prev:before {
    opacity: 1; // ????????? ???????????? ????????? ????????? ?????????
    color: black; // ?????? ?????? ???????????????
    left: 0;
  }
  .slick-next:before {
    opacity: 1;
    color: black;
  }
`;

const MovieDetail = (props) => {
  window.scrollTo(0, 0);

  const settings = {
    dots: false, // ???????????? ?????? ????????? ?????????
    infinite: true, // ????????? ??? ????????? ???????????? ????????? ??? ?????????
    speed: 500, // ???????????? ????????? ????????? ??? ?????????
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  let movieDocId = props.location.state.movieDocId;
  const [isLoaded, setIsLoaded] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);

  const [movie, setMovie] = useState({});
  const [poster, setPoster] = useState();
  const [directors, setDirectors] = useState([]);
  const [actors, setActors] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [stillCuts, setStillCuts] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/movie/" + movieDocId)
      .then((res) => res.json())
      .then((res) => {
        setMovie(res.data);
        setPoster(res.data.posterImgSrc);
        setDirectors(res.data.directors);
        setActors(res.data.actors);
        setTrailers(res.data.trailers);
        setStillCuts(res.data.stillCuts);
      });
  }, []);

  const loadReviews = async () => {
    if (isLoaded) {
      setIsLoaded(false);

      await fetch("http://localhost:8080/review/" + movieDocId, {
        method: "GET",
        headers: new Headers({
          Authorization: getCookie("cgvJWT"),
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.statusCode === 1) {
            setReviews(res.data);
          }
        })
        .catch((err) => {
          // logout();
          // alert("???????????? ?????? ??????. ????????????????????????.");
          // window.location.replace("/login");
        });
    }
  };

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  loadReviews();

  const goToLogin = () => {
    props.history.push("/login");
  };

  const ExpectMovie = () => {
    if (!isLogined()) {
      goToLogin();
    }

    fetch("http://localhost:8080/expectMovie/" + movieDocId + "/expect", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
        Authorization: getCookie("cgvJWT"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.statusCode === 1) {
          alert("???????????? ????????? ?????? ??????");
        } else if (res.statusCode === -1) {
          alert("?????? ???????????? ????????? ???????????????.");
        }
      })
      .catch((err) => {
        console.log(err);
        fetch("http://localhost:8080/logout").then(() => {
          deleteCookie("cgvJWT");
          deleteCookie("userId");
          deleteCookie("role");
        });
        alert("???????????? ?????? ??????. ????????????????????????.");
        window.location.replace("/login");
      });
  };

  return (
    <MDCon>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>???</NavSectionArrow>
          <NavSectionSpan>??????</NavSectionSpan>
          <NavSectionArrow>???</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            ????????????
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <MDContentCon>
        <MDContentBox>
          <MDHeadBox>
            <MDHeadTitle>????????????</MDHeadTitle>
          </MDHeadBox>
          <MDMovieBox>
            <MDMoviePoster src={poster} />
            <MDMovieInfoBox>
              <MDTitleBox>
                <MDTitle>{movie.title}</MDTitle>
                <MDSubTitle>{movie.subTitle}</MDSubTitle>
              </MDTitleBox>
              <MCMovieInfo>
                <MCInfoText>?????????</MCInfoText>
                <MCInfoNum>1.9%</MCInfoNum>
                <MCInfoSep>|</MCInfoSep>
                <MCEggImg src={kingEgg} />
                <MCInfoNum>92%</MCInfoNum>
              </MCMovieInfo>
              <MDMovieInfo>
                <MDMovieDiv
                  style={{
                    overflow: "hidden",
                    width: "760px",
                    height: "20px",
                    textOverflow: "ellipsis",
                  }}
                >
                  <MDMovieP>?????? : </MDMovieP>

                  {directors.map((director) => (
                    <MDMovieSpan>{director.name}</MDMovieSpan>
                  ))}

                  <MDMovieSep>|</MDMovieSep>
                  <MDMovieP>?????? : </MDMovieP>
                  {actors.map((actor) => (
                    <MDMovieSpan>{actor.name}</MDMovieSpan>
                  ))}
                </MDMovieDiv>
                <MDMovieDiv>
                  <MDMovieP>?????? : </MDMovieP>
                  <MDMovieP>{movie.genre}</MDMovieP>
                  <MDMovieSep>|</MDMovieSep>
                  <MDMovieP>?????? : </MDMovieP>
                  <MDMovieP>
                    {movie.age}, {movie.runningTime}???, {movie.country}
                  </MDMovieP>
                </MDMovieDiv>
                <MDMovieDiv>
                  <MDMovieP>?????? : </MDMovieP>
                  <MDMovieP>{movie.releaseDate}</MDMovieP>
                </MDMovieDiv>
              </MDMovieInfo>

              <MDBtnBox>
                <MDExpectBtn onClick={ExpectMovie}>????????????</MDExpectBtn>
                <MDMovieBtn to="/ticket">
                  <MDMovieBtnImg src={ticketBtn} />
                </MDMovieBtn>
              </MDBtnBox>
            </MDMovieInfoBox>
          </MDMovieBox>

          <MDAdBox>
            <Link>
              <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202103/GodzillaKong/0315_160x300_02.jpg" />
            </Link>
          </MDAdBox>

          <MDAdBox2>
            <Link>
              <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202001/cgvgift/1204_160x300.jpg" />
            </Link>
          </MDAdBox2>

          <MDMovieContentDiv>
            <MDStoryBox>
              <MDStoryP>{movie.summary}</MDStoryP>
            </MDStoryBox>

            <MDTrailerBox>
              <MDContentTitleDiv>
                <MDContentTitleH4>????????????</MDContentTitleH4>
                <MDContentCountSpan>{trailers.length}???</MDContentCountSpan>
                <MDMovieBtn to="/movies/trailler">
                  <MDContentAddBtn src={addBtn} />
                </MDMovieBtn>
              </MDContentTitleDiv>
              <ItemOl>
                {trailers.map((trailer) => (
                  <ItemLi>
                    <TrailerImgBox>
                      <a href={trailer.trailerUrl}>
                        <TrailerImg src={trailer.thumbImageUrl}></TrailerImg>
                        <PlayButton src={playBtn} />
                      </a>
                    </TrailerImgBox>
                  </ItemLi>
                ))}
              </ItemOl>
            </MDTrailerBox>

            <MDTrailerBox style={{ height: "500px" }}>
              <MDContentTitleDiv>
                <MDContentTitleH4>?????????</MDContentTitleH4>
                <MDContentCountSpan>{stillCuts.length}???</MDContentCountSpan>
              </MDContentTitleDiv>
              <Wrap>
                <StillCutBox>
                  <Slider {...settings}>
                    {stillCuts.map((stillCut) => (
                      <div
                        style={{
                          display: "flex",
                          height: "auto",
                        }}
                      >
                        <img
                          src={stillCut.imageUrl}
                          style={{
                            width: "90%",
                            height: "90%",
                            margin: "0 auto",
                          }}
                          alt="?????????"
                        />
                      </div>
                    ))}
                  </Slider>
                </StillCutBox>
              </Wrap>
            </MDTrailerBox>

            <MDReplyInfoBox>
              <MDReplyInfoText>
                ????????? ?????? 7??? ?????? ???????????? ???????????? CJ ONE 20P??? ???????????????.
              </MDReplyInfoText>
              <MDReplyInfoSubText>
                {reviews.length}?????? ??????????????? ????????????????????????.
              </MDReplyInfoSubText>
              <MDReplyInfoBtnBox>
                <Link>
                  <MDReplyBtn>????????????</MDReplyBtn>
                </Link>
                <Link to="/user/myReview">
                  <MDMyReplyBtn>??? ??????</MDMyReplyBtn>
                </Link>
              </MDReplyInfoBtnBox>
            </MDReplyInfoBox>

            <MDContentTitleDiv style={{ marginBottom: "0", marginTop: "20px" }}>
              <MDContentTitleH4>????????????</MDContentTitleH4>
              <MDContentCountSpan>{reviews.length}???</MDContentCountSpan>
            </MDContentTitleDiv>

            <MDReplyBox>
              <MDReplyUl>
                <MovieDetailReply reviews={currentPosts(reviews)} />
              </MDReplyUl>
              <PagingBoxSection>
                <BoardPagingBox
                  currentPage={currentPage}
                  postsPerPage={postsPerPage}
                  totalPosts={reviews.length}
                  paginate={setCurrentPage}
                />
              </PagingBoxSection>
            </MDReplyBox>
          </MDMovieContentDiv>
        </MDContentBox>
      </MDContentCon>
    </MDCon>
  );
};

export default MovieDetail;
