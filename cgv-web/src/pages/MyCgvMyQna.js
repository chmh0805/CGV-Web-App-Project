import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import brickImg from "../images/brick_bg.jpg";
import bgMyCGVInfo from "../images/bg_mycgv_info.gif";
import defaultProfileImg from "../images/default_profile.gif";
import iconSetting from "../images/icon_setting.png";
import iconNewWindow from "../images/icon_newwindow.gif";

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

const InfoSection = styled.section`
  width: auto;
  height: 450px;
  background-image: url("${brickImg}");
  display: flex;
  justify-content: center;
`;

const InfoSectionContainer = styled.div`
  width: 980px;
  height: auto;
  background-image: url("${bgMyCGVInfo}");
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 30px 40px 30px 58px;
`;

const InfoSectionTopItemBox = styled.div`
  display: flex;
  align-items: center;
`;

const InfoTopImg = styled.img`
  width: 135px;
  height: 135px;
  border-radius: 50%;
  border: 4px solid #7b6746;
`;

const InfoTopItemBox = styled.div`
  width: 400px;
  height: auto;
  margin-left: 30px;
`;

const InfoTopItem1 = styled.div`
  width: auto;
  height: auto;
  padding-bottom: 20px;
  border-bottom: 1px solid #8c7651;
  margin-bottom: 15px;
`;

const InfoTopStrong = styled.strong`
  font-size: 29px;
  line-height: 32px;
  margin-right: 8px;
  color: #342929;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 600;
`;

const InfoTopItemEm = styled.em`
  font-size: 14px;
  line-height: 14px;
  display: inline-block;
  margin-right: 8px;
  color: #342929;
  font-family: verdana, sans-serif;
  font-style: normal;
  font-weight: 500;
`;

const InfoTopItem2 = styled.div`
  width: auto;
  height: 53px;
`;

const InfoSectionBottomItemBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
`;

const InfoBottomItem1 = styled.div`
  width: 250px;
  height: 155px;
  padding-right: 30px;
  border-right: 1px solid #8c7651;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  row-gap: 2px;
  column-gap: 2px;
`;

const InfoBottomItem1ItemBox = styled.div`
  border: 2px solid #7b6746;
  padding: 2px;
`;

const InfoBottomItem1Item = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #7b6746;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  cursor: pointer;
  word-break: break-all;
  color: #342929;
  font-weight: 600;
  font-size: 11px;
  line-height: 39px;
`;

const InfoBottomItemButton = styled.button`
  width: 100%;
  height: 100%;
  background: #3b3425 url(${iconSetting}) no-repeat 86px 14px;
  padding-left: 9px;
  border: 2px solid #7b6746;
  outline: 0px;
  line-height: 1.2;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
  color: #dac190;
  font-size: 11px;
  text-align: left;
`;

const MyCGVMainContainer = styled.div`
  width: 980px;
  height: 2100px;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

const MainAsidesBox = styled.div`
  width: 160px;
  line-height: 1.2;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
`;

const AsidesBoxLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
    color: inherit;
  }
`;

const AsidesHeadSpecialItem = styled.div`
  width: auto;
  height: 34px;
  padding-left: 5px;
  color: #fdfcf0;
  background-color: #e71a0f;
  font-weight: 600;
  font-size: 16px;
  line-height: 34px;
`;

const AsidesHeadItem = styled.div`
  width: auto;
  height: 34px;
  padding-left: 5px;
  color: #222;
  font-weight: 600;
  font-size: 15px;
  line-height: 34px;
  border-top: 1px solid #bbb9b1;

  &:hover {
    color: #fdfcf0;
    background-color: #e71a0f;
  }
`;

const AsidesBodyItem = styled.div`
  width: auto;
  padding: 15px 0px 15px 30px;
  font-size: 100%;
  vertical-align: baseline;
  word-break: break-all;
  line-height: 1.2;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
  font-size: 12px;

  &:hover {
    color: #e71a0f;
  }
`;

const AsidesWatchedMovieBox = styled.div`
  width: auto;
  padding-left: 14px;
  color: #fff;
  background: black url(${iconNewWindow}) no-repeat 145px 6px;
  font-weight: 600;
  font-size: 15px;
  line-height: 34px;
`;

const AsidesBannerImg = styled.img`
  width: 160px;
  aspect-ratio: auto 160 / 300;
  height: 300px;
  margin-top: 20px;
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
      <InfoSection>
        <InfoSectionContainer>
          <InfoSectionTopItemBox>
            <InfoTopImg src={defaultProfileImg} />
            <InfoTopItemBox>
              <InfoTopItem1>
                <InfoTopStrong>접속용님</InfoTopStrong>
                <InfoTopItemEm>username</InfoTopItemEm>
                <InfoTopItemEm style={{ marginRight: "0px" }}>
                  닉네임 :{" "}
                </InfoTopItemEm>
                <InfoTopItemEm>닉네임1</InfoTopItemEm>
              </InfoTopItem1>
              <InfoTopItem2></InfoTopItem2>
            </InfoTopItemBox>
          </InfoSectionTopItemBox>
          <InfoSectionBottomItemBox>
            <InfoBottomItem1>
              <InfoBottomItem1ItemBox>
                <InfoBottomItem1Item>CGV서면삼정타워</InfoBottomItem1Item>
              </InfoBottomItem1ItemBox>
              <InfoBottomItem1ItemBox>
                <InfoBottomItem1Item></InfoBottomItem1Item>
              </InfoBottomItem1ItemBox>
              <InfoBottomItem1ItemBox>
                <InfoBottomItem1Item></InfoBottomItem1Item>
              </InfoBottomItem1ItemBox>
              <InfoBottomItem1ItemBox>
                <InfoBottomItem1Item></InfoBottomItem1Item>
              </InfoBottomItem1ItemBox>
              <InfoBottomItem1ItemBox>
                <InfoBottomItem1Item></InfoBottomItem1Item>
              </InfoBottomItem1ItemBox>
              <InfoBottomItem1ItemBox style={{ border: "0px", padding: "0px" }}>
                <InfoBottomItemButton>
                  자주가는 CGV
                  <br />
                  설정하기
                </InfoBottomItemButton>
              </InfoBottomItem1ItemBox>
            </InfoBottomItem1>
          </InfoSectionBottomItemBox>
        </InfoSectionContainer>
      </InfoSection>
      <MyCGVMainContainer>
        <MainAsidesBox>
          <AsidesBoxLink to="/user/mycgv">
            <AsidesHeadItem>MY CGV HOME</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/user/mycgv/reserve">
            <AsidesHeadItem>나의 예매내역</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
            <AsidesHeadItem>관람권/할인쿠폰 관리</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
            <AsidesBodyItem>CGV 영화관람권</AsidesBodyItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesBodyItem>CGV 기프트카드</AsidesBodyItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/user/mycgv/giftcon">
            <AsidesHeadItem>기프트샵</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/user/mycgv/giftcon">
            <AsidesBodyItem>내 기프트콘</AsidesBodyItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesBodyItem>결제내역</AsidesBodyItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/user/info">
            <AsidesHeadItem>회원정보</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/user/info">
            <AsidesBodyItem>개인정보 변경</AsidesBodyItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesBodyItem>회원탈퇴</AsidesBodyItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/user/mycgv/myqna">
            <AsidesHeadSpecialItem>나의 문의내역</AsidesHeadSpecialItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/user/mycgv/myqna">
            <AsidesBodyItem style={{ color: "red" }}>1:1 문의</AsidesBodyItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/user/movielog/watched">
            <AsidesWatchedMovieBox>내가 본 영화</AsidesWatchedMovieBox>
          </AsidesBoxLink>
          <Link>
            <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202103/FIRE/0309_160x300.jpg" />
          </Link>
        </MainAsidesBox>
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
