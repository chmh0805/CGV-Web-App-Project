import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import brickImg from "../images/brick_bg.jpg";
import bgMyCGVInfo from "../images/bg_mycgv_info.gif";
import defaultProfileImg from "../images/default_profile.gif";
import iconSetting from "../images/icon_setting.png";
import MyCgvAsidesBox from "../components/MyCgvAsidesBox";
import { getCookie, setCookie } from "../utils/JWT";

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

const RegisterBox = styled.div`
  width: 100%;
  margin-top: 50px;
  text-align: center;
  line-height: 1.2;
  color: #666;
`;

const RegisterBoxStrong = styled.strong`
  display: block;
  margin-bottom: 15px;
  color: #222;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.2;
`;

const RegisterBoxSpan = styled.span`
  color: #222;
  font-size: 13px;
  line-height: 1.2;
`;
const PasswordDIv = styled.div`
  width: 100%;
  margin-top: 15px;
  border: 1px solid #cbcac4;
  padding: 30px 0 30px 0;
  background-color: white;
  display: flex;
  justify-content: center;
`;

const PasswordInput = styled.input`
  display: inline-block;
  height: 25px;
  line-height: 22px;
  border: 1px solid #b5b5b5;
  font-size: 13px;
  color: #666;
  padding-left: 10px;
  margin-left: 10px;
  margin-right: 10px;
`;

const PasswordButton = styled.button`
  background: #e71a0f;
  border: 2px solid #e71a0f;
  color: #ffffff;
  line-height: 21px;
  font-weight: 600;
  font-size: 12px;
  text-align: center;
  display: inline-block;
  border-radius: 5px;
`;

const ReservationNoticeBox = styled.div`
  width: 100%;
  height: auto;
  margin-top: 50px;
  padding-top: 9px;
  border: 2px solid #d5d5ce;
`;

const ReservationNoticeItem = styled.div`
  display: flex;
  padding-left: 27px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const ReservationNoticeItemTitle = styled.div`
  width: 116px;
  font-weight: 500;
  font-size: 13px;
  line-height: 1.5;
`;

const ReservationNoticeItemContent = styled.div`
  width: 626px;
  height: auto;
  padding-left: 25px;
  padding-right: 2px;
  border-left: 1px solid #d7d6ce;
  line-height: 1.2;
  font-size: 12px;
  color: #666;
`;

const ReservationP = styled.p`
  margin-top: 5px;
  margin-bottom: 5px;
`;

const MyCgvGiftconRegister = () => {
  setCookie("now-space", "mycgv-giftcon-register");
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
            기프트콘 등록
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
            <Link to="/user/mycgv/giftcon">
              <MainContentsLinkBox>기프트콘 조회</MainContentsLinkBox>
            </Link>
          </MainContentsTitleBox>
          <RegisterBox>
            <RegisterBoxStrong>
              CGV 기프트샵 기프트콘 등록하기
            </RegisterBoxStrong>
            <RegisterBoxSpan>
              소지하신 CGV 기프트샵 기프트콘 12자리를 입력해주세요.
            </RegisterBoxSpan>
          </RegisterBox>
          <PasswordDIv>
            <span>기프트콘 번호&nbsp;</span>
            <PasswordInput type="password" />
            <PasswordButton>등록하기</PasswordButton>
          </PasswordDIv>
          <ReservationNoticeBox>
            <ReservationNoticeItem>
              <ReservationNoticeItemTitle>이용안내</ReservationNoticeItemTitle>
              <ReservationNoticeItemContent>
                <ReservationP>
                  CGV 기프트샵에서 구매 또는 선물받은 기프트콘만 등록이
                  가능합니다.
                </ReservationP>
                <ReservationP>
                  다른 쿠폰의 경우 결제 시 관람권/할인쿠폰에서 등록하여 사용하실
                  수 있습니다.
                </ReservationP>
              </ReservationNoticeItemContent>
            </ReservationNoticeItem>
          </ReservationNoticeBox>
        </MainContentsBox>
      </MyCGVMainContainer>
    </MyCgvReserveContainer>
  );
};

export default MyCgvGiftconRegister;
