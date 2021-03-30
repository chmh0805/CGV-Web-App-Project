import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import MyCgvAsidesBox from "../components/MyCgvAsidesBox";
import { getCookie, setCookie } from "../utils/JWT";
import MyCGVInfoBox from "../components/MyCGVInfoBox";

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
  display: block;
  width: 100%;
  padding: 25px 0 8px;
  font-size: 14px;
  color: #000;
  line-height: 1.2;
  font-weight: 500;
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
  width: 400px;
`;

const TableCreateDateTitle = styled(TableTitle)`
  width: 150px;
`;

const TableStateTitle = styled(TableTitle)`
  width: 100px;
`;

const TableContentSec = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
`;

const TableContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  line-height: 34px;
  color: #666;
`;

const TableNoContent = styled(TableContent)`
  width: 150px;
`;

const TableNameContent = styled(TableContent)`
  width: 400px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TableCreateDateContent = styled(TableContent)`
  width: 150px;
`;

const TableStateContent = styled(TableContent)`
  width: 100px;
`;

const MyCgvMyQna = () => {
  setCookie("now-space", "mycgv-myqna");
  window.scrollTo(0, 0);

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
          <NavSectionSpan>기프트샵</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            내 기프트콘
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
          <GiftconInfoSectionTitle>1:1문의</GiftconInfoSectionTitle>
          <GiftconInfoSection>
            <GiftconInfoTable>
              <TableTitleSec>
                <TableNoTitle>번호</TableNoTitle>
                <TableNameTitle>제목</TableNameTitle>
                <TableCreateDateTitle>등록일</TableCreateDateTitle>
                <TableStateTitle>상태</TableStateTitle>
              </TableTitleSec>
              <TableContentSec>
                <TableNoContent>번호</TableNoContent>
                <TableNameContent>제목</TableNameContent>
                <TableCreateDateContent>2021.03.21</TableCreateDateContent>
                <TableStateContent>상태</TableStateContent>
              </TableContentSec>
            </GiftconInfoTable>
          </GiftconInfoSection>
        </MainContentsBox>
      </MyCGVMainContainer>
    </MyCgvReserveContainer>
  );
};

export default MyCgvMyQna;
