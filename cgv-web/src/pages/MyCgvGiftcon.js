import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import { getCookie, setCookie } from "../utils/JWT";
import MyCgvAsidesBox from "../components/MyCgvAsidesBox";
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

const MainContentsLinkBox = styled.div`
  width: 90px;
  height: 30px;
  display: flex;
  line-height: 21px;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  border: 1px solid white;
  background-color: #222222;
  border-radius: 5px;
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
  width: 122px;
`;

const TableProductNameTitle = styled(TableTitle)`
  width: 296px;
`;

const TableSentNameTitle = styled(TableTitle)`
  width: 90px;
`;

const TableCreateDateTitle = styled(TableTitle)`
  width: 104px;
`;

const TableValidDateTitle = styled(TableTitle)`
  width: 98px;
`;

const TableStateTitle = styled(TableTitle)`
  width: 90px;
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
  width: 122px;
`;

const TableProductNameContent = styled(TableContent)`
  width: 296px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TableSentNameContent = styled(TableContent)`
  width: 90px;
`;

const TableCreateDateContent = styled(TableContent)`
  width: 104px;
`;

const TableValidDateContent = styled(TableContent)`
  width: 98px;
`;

const TableStateContent = styled(TableContent)`
  width: 90px;
`;

const MyCgvGiftcon = () => {
  setCookie("now-space", "mycgv-giftcon");
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
            <div>
              <MainContentsTitleH3>내 기프트콘</MainContentsTitleH3>
            </div>
            <Link to="/user/mycgv/giftcon/register">
              <MainContentsLinkBox>기프트콘 등록</MainContentsLinkBox>
            </Link>
          </MainContentsTitleBox>
          <GiftconInfoSection>
            <GiftconInfoSectionTitle>총 1개</GiftconInfoSectionTitle>
            <GiftconInfoTable>
              <TableTitleSec>
                <TableNoTitle>기프트콘 NO.</TableNoTitle>
                <TableProductNameTitle>상품명</TableProductNameTitle>
                <TableSentNameTitle>보내신분</TableSentNameTitle>
                <TableCreateDateTitle>선물수신일</TableCreateDateTitle>
                <TableValidDateTitle>유효기간</TableValidDateTitle>
                <TableStateTitle>상태</TableStateTitle>
              </TableTitleSec>
              <TableContentSec>
                <TableNoContent>기프트콘 NO.</TableNoContent>
                <TableProductNameContent>상품명</TableProductNameContent>
                <TableSentNameContent>보내신분</TableSentNameContent>
                <TableCreateDateContent>선물수신일</TableCreateDateContent>
                <TableValidDateContent>유효기간</TableValidDateContent>
                <TableStateContent>상태</TableStateContent>
              </TableContentSec>
            </GiftconInfoTable>
          </GiftconInfoSection>
        </MainContentsBox>
      </MyCGVMainContainer>
    </MyCgvReserveContainer>
  );
};

export default MyCgvGiftcon;
