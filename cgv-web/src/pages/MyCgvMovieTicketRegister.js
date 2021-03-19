import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import brickImg from "../images/brick_bg.jpg";
import bgMyCGVInfo from "../images/bg_mycgv_info.gif";
import defaultProfileImg from "../images/default_profile.gif";
import iconSetting from "../images/icon_setting.png";
import iconNewWindow from "../images/icon_newwindow.gif";
import imgTicket from "../images/ticketregister/bg_ticket_info.gif";

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

const ReservationNoticeBox = styled.div`
  width: 100%;
  height: auto;
  padding-top: 9px;
  border: 2px solid #d5d5ce;
`;

const ReservationNoticeItem = styled.div`
  display: flex;
  border-bottom: 1px dashed #d5d5ce;
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

const TicketImg = styled.div`
  width: 100%;
  height: 310px;
  margin-top: 70px;
  margin-bottom: 50px;
  background: url(${imgTicket}) no-repeat 163px 0;
`;

const MyCgvMovieTicketRegister = () => {
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
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            나의 예매내역
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
            <AsidesHeadSpecialItem style={{ fontSize: "15px" }}>
              관람권/할인쿠폰 관리
            </AsidesHeadSpecialItem>
          </AsidesBoxLink>
          <AsidesBoxLink to="/user/mycgv/coupon/movie-ticket/register">
            <AsidesBodyItem style={{ color: "#e71a0f" }}>
              CGV 영화관람권
            </AsidesBodyItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesBodyItem>CGV 기프트카드</AsidesBodyItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesHeadItem>기프트샵</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesBodyItem>내 기프트콘</AsidesBodyItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesBodyItem>결제내역</AsidesBodyItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesHeadItem>회원정보</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesBodyItem>개인정보 변경</AsidesBodyItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesBodyItem>회원탈퇴</AsidesBodyItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesHeadItem>프로필 관리</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesHeadItem>나의 문의내역</AsidesHeadItem>
          </AsidesBoxLink>
          <AsidesBoxLink>
            <AsidesBodyItem>1:1 문의</AsidesBodyItem>
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
            <MainContentsTitleH3>관람권/할인쿠폰 관리</MainContentsTitleH3>
          </MainContentsTitleBox>
          <RegisterBox>
            <RegisterBoxStrong>
              소지하신 CGV 영화관람권 등록하기
            </RegisterBoxStrong>
            <RegisterBoxSpan>
              CGV 영화관람권 비밀번호를 입력해 주세요.
            </RegisterBoxSpan>
          </RegisterBox>
          <PasswordDIv>
            <span>비밀번호&nbsp;</span>
            <PasswordInput type="password" />
            <PasswordButton>등록하기</PasswordButton>
          </PasswordDIv>
          <TicketImg />
          <ReservationNoticeBox>
            <ReservationNoticeItem>
              <ReservationNoticeItemTitle>이용안내</ReservationNoticeItemTitle>
              <ReservationNoticeItemContent>
                <ReservationP>
                  CGV 영화관람권 비밀번호를 입력해주세요.
                </ReservationP>
                <ReservationP>
                  CGV GOLD CLASS 이용권 비밀번호를 등록해주세요.
                </ReservationP>
                <ReservationP>
                  CGV온라인(홈페이지/모바일)에서 등록하신 관람권은
                  홈페이지/모바일예매에 한하여 사용할 수 있으며, CGV 현장
                  매표소에서는 사용할 수 없습니다.
                </ReservationP>
                <ReservationP>
                  CGV 영화 관람권은 일반 인터넷 사이트를 포함한 시중에서 임의로
                  매매될 수 없으며 반드시 CGV를 통해서만 구입하실 수 있습니다.
                </ReservationP>
              </ReservationNoticeItemContent>
            </ReservationNoticeItem>
          </ReservationNoticeBox>
        </MainContentsBox>
      </MyCGVMainContainer>
    </MyCgvReserveContainer>
  );
};

export default MyCgvMovieTicketRegister;
