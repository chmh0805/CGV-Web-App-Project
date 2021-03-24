import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import brickImg from "../images/brick_bg.jpg";
import bgMyCGVInfo from "../images/bg_mycgv_info.gif";
import defaultProfileImg from "../images/default_profile.gif";
import iconSetting from "../images/icon_setting.png";
import { getCookie, setCookie } from "../utils/JWT";
import MyCgvAsidesBox from "../components/MyCgvAsidesBox";

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
