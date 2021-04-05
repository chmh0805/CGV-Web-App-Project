import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import MyCgvAsidesBox from "../components/MyCgvAsidesBox";
import { deleteCookie, getCookie, setCookie } from "../utils/JWT";
import MyCGVInfoBox from "../components/MyCGVInfoBox";
import TableContentSection from "../components/mycgv/myqna/TableContentSection";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setInfo } from "../store";

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

const GiftconInfoSection = styled.section`
  width: 100%;
  height: auto;
  margin-top: 30px;
`;

const GiftconInfoSectionTitle = styled.strong`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  height: 40px;
  padding-top: 10px;
  padding-right: 30px;
  font-size: 14px;
  color: #000;
  line-height: 1.2;
  font-weight: 500;
`;

const GoToWriteBtn = styled.button`
  width: 100px;
  height: 30px;
  background-color: inherit;
  color: black;
  border: 1px solid black;
  border-radius: 5px;
`;

const GiftconInfoTable = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid #b8b6aa;
  border-bottom: 1px solid #b8b6aa;
`;

const TableTitleSec = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
  background-color: #e2e2e0;
`;

const TableTitle = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  line-height: 34px;
  color: #666;
`;

const TableNoTitle = styled(TableTitle)`
  width: 150px;
`;

const TableNameTitle = styled(TableTitle)`
  width: 350px;
`;

const TableCreateDateTitle = styled(TableTitle)`
  width: 200px;
`;

const TableStateTitle = styled(TableTitle)`
  width: 100px;
`;

const MyCgvMyQna = () => {
  setCookie("now-space", "mycgv-myqna");

  const [qnas, setQnas] = useState([]);
  const dispatcher = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:8080/user", {
        headers: {
          Authorization: getCookie("cgvJWT"),
        },
      })
      .then((res) => {
        let statusCode = res.data.statusCode;
        let data = res.data.data;
        if (statusCode === 1) {
          const names = {
            name: data.name,
            username: data.username,
            nickname: data.nickname,
          };
          dispatcher(setInfo(names));
        } else {
          fetch("http://localhost:8080/logout").then(() => {
            deleteCookie("cgvJWT");
            deleteCookie("userId");
            deleteCookie("role");
          });
          alert("회원정보 조회 실패. 재로그인해주세요.");
          window.location.replace("/login");
          return;
        }
      })
      .catch((err) => {
        console.log(err);
        fetch("http://localhost:8080/logout").then(() => {
          deleteCookie("cgvJWT");
          deleteCookie("userId");
          deleteCookie("role");
        });
        alert("회원정보 조회 실패. 재로그인해주세요.");
        window.location.replace("/login");
        return;
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8080/qna", {
      method: "GET",
      headers: new Headers({
        Authorization: getCookie("cgvJWT"),
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 1) {
          setQnas(res.data);
        } else {
          fetch("http://localhost:8080/logout").then(() => {
            deleteCookie("cgvJWT");
            deleteCookie("userId");
            deleteCookie("role");
          });
          alert("회원정보 조회 실패. 재로그인해주세요.");
          window.location.replace("/login");
          return;
        }
      })
      .catch((err) => {
        fetch("http://localhost:8080/logout").then(() => {
          deleteCookie("cgvJWT");
          deleteCookie("userId");
          deleteCookie("role");
        });
        alert("회원정보 조회 실패. 재로그인해주세요.");
        window.location.replace("/login");
        return;
      });
  }, []);

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
          <GiftconInfoSectionTitle>
            <Link to="/support/qna/default">
              <GoToWriteBtn>1:1문의하기</GoToWriteBtn>
            </Link>
          </GiftconInfoSectionTitle>
          <GiftconInfoSection>
            <GiftconInfoTable>
              <TableTitleSec>
                <TableNoTitle>번호</TableNoTitle>
                <TableNameTitle>제목</TableNameTitle>
                <TableCreateDateTitle>등록일</TableCreateDateTitle>
                <TableStateTitle>상태</TableStateTitle>
              </TableTitleSec>
              <TableContentSection qnas={qnas} />
            </GiftconInfoTable>
          </GiftconInfoSection>
        </MainContentsBox>
      </MyCGVMainContainer>
    </MyCgvReserveContainer>
  );
};

export default MyCgvMyQna;
