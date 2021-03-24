import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import brickImg from "../images/brick_bg.jpg";
import bgMyCGVInfo from "../images/bg_mycgv_info.gif";
import defaultProfileImg from "../images/default_profile.gif";
import iconSetting from "../images/icon_setting.png";
import iconPreegg from "../images/icon_preegg.png";
import iconWatched from "../images/icon_watched.png";
import spriteBtn from "../images/button/sprite_btn.png";
import iconGiftcon from "../images/icon_giftcon.png";
import iconPlus from "../images/icon_plus.png";
import MyCgvAsidesBox from "../components/MyCgvAsidesBox";
import { getCookie, setCookie } from "../utils/JWT";

const MyCgvHomeContainer = styled.div`
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
  height: 1000px;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

const MainContentsBox = styled.div`
  width: 800px;
`;

const MainContentsItemBox1 = styled.div`
  width: 100%;
  height: 122px;
  margin-bottom: 30px;
  border: 1px solid #333;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: #f2f0e5;
  overflow: hidden;
`;

const PreeggItem = styled.div`
  background: #f2f0e5 url(${iconPreegg}) no-repeat 50% 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
  border-right: 1px dashed #cdc9c0;
`;

const WatchedItem = styled.div`
  background: #f2f0e5 url(${iconWatched}) no-repeat 50% 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
  border-right: 1px dashed #cdc9c0;
`;

const MainContentsItem1Link = styled(Link)`
  width: auto;
  height: auto;
  text-decoration: none;
  color: inherit;
  display: inline-block;
  padding: 50px 0px 16px 0px;
  text-align: center;
  line-height: 16px;
  cursor: pointer;

  &:hover {
    color: inherit;
  }
`;

const MainContentsItem1H3 = styled.h3`
  background: none;
  color: #000;
  font-size: 16px;
  margin: 0 auto 2px;
  line-height: 20px;
  height: auto;
  text-align: center;
  font-weight: 600;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
`;

const MainContentsItemSpan = styled.span`
  width: auto;
  height: auto;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
  text-align: center;
  line-height: 16px;
  font-size: 13px;
`;

const MainContentsItemBoxTitle = styled.div`
  width: auto;
  height: 35px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 35px;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
`;

const MainContentsItemBoxTitleItem1 = styled.div`
  display: flex;
  width: auto;
  height: auto;
`;

const MainContentsItemBoxTitleH3 = styled.h3`
  height: 34px;
  margin: 0;
  color: #222;
  font-weight: 600;
  font-size: 17px;
  line-height: 34px;
  text-align: left;
`;

const MainContentsItemBoxTitleItem2 = styled.span`
  width: auto;
  height: auto;
  color: #666;
  text-align: left;
  line-height: 1.2;
  font-size: 13px;
`;

const MainContentsItemBoxTitleP = styled.div`
  margin-left: 5px;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
  display: flex;
  align-items: center;
`;

const MainContentsItemBoxTitleEm = styled.em`
  font-style: normal;
`;

const MainContentsItemBoxTitleLink = styled(Link)`
  display: inline-block;
  width: 20px;
  height: 19px;
  margin-left: 5px;
  background: url(${spriteBtn}) no-repeat -50px -62px;
  font: 0/0 a;
  vertical-align: middle;
  zoom: 1;
  cursor: pointer;
`;

const MainContentsCommonItemBox = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #656560;
  margin-bottom: 30px;
  line-height: 1.2;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
`;

const MainContentsCommonItemBoxInner = styled.div`
  width: 100%;
  height: auto;
  padding: 26px;
`;

const MainContentsCommonItemBoxListItem = styled.div`
  min-height: 15px;
  line-height: 1.2;
  color: #666;
  font-size: 12px;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
`;

const MyPurchasesBox = styled.div`
  width: 100%;
  height: 150px;
  padding: 15px 30px 15px 30px;
  display: grid;
  grid-template-rows: 35px 85px;
  background-color: #f2f1e4;
`;

const MyPurchaseGiftCon = styled.div`
  width: 170px;
  padding: 13px;
  position: relative;
  border: 1px solid #c9c6b7;
  background: #f4f3ea url(${iconGiftcon});
  background-repeat: no-repeat;
  background-position: 15px 42px;
`;

const MyPurchaseGiftConLink = styled(Link)`
  display: block;
  background: url(${iconPlus}) no-repeat 100% 3px;
  color: #333;
  font-size: 12px;
  line-height: 1.2;
  height: 14px;

  &:hover {
    color: #333;
  }
`;

const MyPurchaseGiftConSpan = styled.span`
  display: inline-block;
  position: absolute;
  top: 50px;
  right: 10px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.2;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
`;

const MyPurchaseGiftConEm = styled.em`
  color: #000;
  line-height: 1.2;
  font-family: verdana, sans-serif;
  font-style: italic;
  font-size: 23px;
  font-weight: bold;
`;

const MyCgvHome = (props) => {
  setCookie("now-space", "mycgv-home");
  window.scrollTo(0, 0);

  return (
    <MyCgvHomeContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>My CGV</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            MY CGV HOME
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
          <MainContentsItemBox1>
            <PreeggItem>
              <MainContentsItem1Link to="/user/movielog/expected">
                <MainContentsItem1H3>기대되는 영화</MainContentsItem1H3>
                <MainContentsItemSpan>
                  보고 싶은 영화들을 미리
                  <br />
                  담아두고 싶다면?
                </MainContentsItemSpan>
              </MainContentsItem1Link>
            </PreeggItem>
            <WatchedItem>
              <MainContentsItem1Link to="/user/movielog/watched">
                <MainContentsItem1H3>내가 본 영화</MainContentsItem1H3>
                <MainContentsItemSpan>
                  관람한 영화들을 한번에
                  <br />
                  모아보고 싶다면?
                </MainContentsItemSpan>
              </MainContentsItem1Link>
            </WatchedItem>
          </MainContentsItemBox1>
          <MainContentsItemBoxTitle>
            <MainContentsItemBoxTitleItem1>
              <MainContentsItemBoxTitleH3>
                MY 예매내역
              </MainContentsItemBoxTitleH3>
              <MainContentsItemBoxTitleP>
                <MainContentsItemBoxTitleEm>0</MainContentsItemBoxTitleEm>
                <MainContentsItemBoxTitleEm>건</MainContentsItemBoxTitleEm>
                <MainContentsItemBoxTitleLink to="/" />
              </MainContentsItemBoxTitleP>
            </MainContentsItemBoxTitleItem1>
            <MainContentsItemBoxTitleItem2>
              예매번호로만 티켓을 찾을 수 있으니 반드시 확인 부탁드립니다.
            </MainContentsItemBoxTitleItem2>
          </MainContentsItemBoxTitle>
          <MainContentsCommonItemBox>
            <MainContentsCommonItemBoxInner>
              <MainContentsCommonItemBoxListItem>
                고객님의 최근 예매내역이 존재하지 않습니다.
              </MainContentsCommonItemBoxListItem>
            </MainContentsCommonItemBoxInner>
          </MainContentsCommonItemBox>
          <MainContentsItemBoxTitle>
            <MainContentsItemBoxTitleItem1>
              <MainContentsItemBoxTitleH3>
                MY Q&amp;A
              </MainContentsItemBoxTitleH3>
              <MainContentsItemBoxTitleP>
                <MainContentsItemBoxTitleEm>0</MainContentsItemBoxTitleEm>
                <MainContentsItemBoxTitleEm>건</MainContentsItemBoxTitleEm>
                <MainContentsItemBoxTitleLink />
              </MainContentsItemBoxTitleP>
            </MainContentsItemBoxTitleItem1>
          </MainContentsItemBoxTitle>
          <MainContentsCommonItemBox>
            <MainContentsCommonItemBoxInner>
              <MainContentsCommonItemBoxListItem>
                고객님의 1:1 문의내역이 존재하지 않습니다.
              </MainContentsCommonItemBoxListItem>
            </MainContentsCommonItemBoxInner>
          </MainContentsCommonItemBox>
          <MyPurchasesBox>
            <MainContentsItemBoxTitle>
              <MainContentsItemBoxTitleH3 style={{ width: "auto" }}>
                MY 구매정보
              </MainContentsItemBoxTitleH3>
              <MainContentsItemBoxTitleItem2 style={{ fontSize: "12px" }}>
                현재 사용하실 수 있는 쿠폰정보입니다. 상품명을 클릭하시면
                내역조회페이지로 이동합니다.
              </MainContentsItemBoxTitleItem2>
            </MainContentsItemBoxTitle>
            <MyPurchaseGiftCon>
              <MyPurchaseGiftConLink>내 기프트콘</MyPurchaseGiftConLink>
              <MyPurchaseGiftConSpan>
                <MyPurchaseGiftConEm>0</MyPurchaseGiftConEm>
                &nbsp;개
              </MyPurchaseGiftConSpan>
            </MyPurchaseGiftCon>
          </MyPurchasesBox>
        </MainContentsBox>
      </MyCGVMainContainer>
    </MyCgvHomeContainer>
  );
};

export default MyCgvHome;
