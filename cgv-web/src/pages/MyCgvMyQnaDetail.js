import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import MyCgvAsidesBox from "../components/MyCgvAsidesBox";
import { getCookie, setCookie } from "../utils/JWT";
import MyCGVInfoBox from "../components/MyCGVInfoBox";
import MyCgvQnaDetailBox from "../components/mycgv/myqna/MyCgvQnaDetailBox";

const MyCgvReserveContainer = styled.div`
  background-color: #fdfcf0;
  width: auto;
  height: auto;
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

const MyCGVMainContainer = styled.div`
  width: 980px;
  height: 2100px;
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
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid #222222;
`;

const MainContentsTitleH3 = styled.h3`
  height: 30px;
  margin: 0;
  color: #222;
  font-weight: 600;
  font-size: 17px;
  line-height: 30px;
`;

const MyCgvMyQnaDetail = (props) => {
  setCookie("now-space", "mycgv-myqna");
  window.scrollTo(0, 0);

  let qnaId = props.location.state.qnaId;
  const [isLoaded, setIsLoaded] = useState(true);
  const [qna, setQna] = useState({});

  const loadQnas = async () => {
    if (isLoaded) {
      setIsLoaded(false);

      await fetch("http://localhost:8080/qna/" + qnaId, {
        method: "GET",
        headers: new Headers({
          Authorization: getCookie("cgvJWT"),
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.statusCode === 1) {
            setQna(res.data);
          }
        })
        .catch((err) => {
          // logout();
          // alert("회원정보 조회 실패. 재로그인해주세요.");
          // window.location.replace("/login");
        });
    }
  };

  loadQnas();

  return (
    <MyCgvReserveContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>My CGV</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>나의 문의내역</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            1:1문의
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <MyCGVInfoBox />
      <MyCGVMainContainer>
        <MyCgvAsidesBox nowSpace={getCookie("now-space")} />
        <MainContentsBox>
          <MainContentsTitleBox>
            <MainContentsTitleH3>나의 문의내역</MainContentsTitleH3>
          </MainContentsTitleBox>
          <MyCgvQnaDetailBox qna={qna} />
        </MainContentsBox>
      </MyCGVMainContainer>
    </MyCgvReserveContainer>
  );
};

export default MyCgvMyQnaDetail;
