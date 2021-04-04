import React, { useState } from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import SupportAsidesBox from "../components/SupportAsidesBox";
import { getCookie, setCookie } from "../utils/JWT";
import NoticeDetailBox from "../components/support/notice/NoticeDetailBox";

const SupportMainContainer = styled.div`
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

const MyCGVMainContainer = styled.div`
  width: 980px;
  height: 2100px;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

const SupportNewsDetail = (props) => {
  setCookie("now-space", "support-news");

  let noticeId = props.location.state.noticeId;
  const [isLoaded, setIsLoaded] = useState(true);
  const [notice, setNotice] = useState({});

  const loadNotices = async () => {
    if (isLoaded) {
      setIsLoaded(false);

      await fetch("http://localhost:8080/notice/" + noticeId, {
        method: "GET",
        headers: new Headers({
          Authorization: getCookie("cgvJWT"),
        }),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.statusCode === 1) {
            setNotice(res.data);
          }
        })
        .catch((err) => {
          // logout();
          // alert("회원정보 조회 실패. 재로그인해주세요.");
          // window.location.replace("/login");
        });
    }
  };

  loadNotices();

  return (
    <SupportMainContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>고객센터</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            공지/뉴스
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>

      <MyCGVMainContainer>
        <SupportAsidesBox nowSpace={getCookie("now-space")} />

        <MainContentsBox>
          <MainContentsTitleBox>
            <MainContentsTitleH3>공지/뉴스</MainContentsTitleH3>
          </MainContentsTitleBox>
          <NoticeDetailBox notice={notice} />
        </MainContentsBox>
      </MyCGVMainContainer>
    </SupportMainContainer>
  );
};

export default SupportNewsDetail;
