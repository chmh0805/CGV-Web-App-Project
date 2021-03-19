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

const MainContentsTitleP = styled.p`
  line-height: 30px;
  color: #666;
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

const BookingNoticeDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0 10px;
  line-height: 1.2;
  color: #666;
`;

const BookingNoticeStrong = styled.strong`
  width: 100%;
  margin-bottom: 5px;
  display: block;
  color: #222;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const BookingNoticeSpan = styled.span`
  width: 100%;
  display: block;
  color: #666666;
  font-size: 13px;
  text-align: center;
`;

const ReservedItemBox = styled.div`
  width: 800px;
  padding: 30px;
  border-bottom: 1px solid #d6d4ca;
`;

const ReservedItemBookingNoBox = styled.div`
  width: 100%;
  display: flex;
  text-align: left;
  margin-bottom: 20px;
  line-height: 1.2;
  color: #666;
`;

const ReservedItemBookingNo = styled.div`
  color: #000;
  line-height: 1.2;
  font-weight: 600;
  font-size: 14px;
  margin-left: 15px;
`;

const ReservedItemBookingInfoBox = styled.div`
  width: 100%;
  height: 140px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ReservedItemBookingImg = styled.img`
  width: 90px;
  height: 100%;
`;

const ReservedItemBookingDetail = styled.div`
  width: 620px;
  height: 100%;
`;

const BookingDetailTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #222;
  font-size: 15px;
  overflow: hidden;
  line-height: 1.6;
  padding-bottom: 10px;
  border-bottom: 1px solid #bbb9b1;
  margin-bottom: 8px;
`;

const BookingBlueSpan = styled.span`
  font-size: 14px;
  color: #0077a8;
  font-weight: bold;
  padding-right: 30px;
  line-height: 1.6;
`;

const BookingDetailContentBox = styled.div`
  width: 100%;
  height: 60px;
  display: grid;
  grid-template-rows: 16px 16px 16px;
  row-gap: 6px;
  grid-template-columns: 300px 300px;
  column-gap: 10px;
  overflow: hidden;
  margin-top: 8px;
`;

const BookingDetailItemBox = styled.div`
  display: flex;
`;

const BookingDetailItemTitle = styled.div`
  width: 60px;
  text-align: left;
  color: #222;
`;

const BookingDetailItemContent = styled.div`
  width: 240px;
  text-align: left;
  color: #666;
  line-height: 1.3;
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

const MyCgvReserve = () => {
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
            <AsidesHeadSpecialItem>나의 예매내역</AsidesHeadSpecialItem>
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
            <div>
              <MainContentsTitleH3>나의 예매내역</MainContentsTitleH3>
              <MainContentsTitleP>
                지난 1개월까지의 예매내역을 확인하실 수 있습니다.
              </MainContentsTitleP>
            </div>
            <Link to="/user/movielog/watched">
              <MainContentsLinkBox>내가 본 영화</MainContentsLinkBox>
            </Link>
          </MainContentsTitleBox>
          <BookingNoticeDiv>
            <BookingNoticeStrong>
              현장에서 발권하실 경우 꼭 예매번호를 확인하세요.
            </BookingNoticeStrong>
            <BookingNoticeSpan>
              티켓판매기에서 예매번호를 입력하면 티켓을 발급받을 수 있습니다.
            </BookingNoticeSpan>
          </BookingNoticeDiv>
          <ReservedItemBox>
            <ReservedItemBookingNoBox>
              <span>예매번호</span>
              <ReservedItemBookingNo>0285-0319-3729-696</ReservedItemBookingNo>
            </ReservedItemBookingNoBox>
            <ReservedItemBookingInfoBox>
              <ReservedItemBookingImg src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000084/84273/84273_126.jpg" />
              <ReservedItemBookingDetail>
                <BookingDetailTitle>
                  <span>미나리</span>
                  <BookingBlueSpan>12,000원</BookingBlueSpan>
                </BookingDetailTitle>
                <BookingDetailContentBox>
                  <BookingDetailItemBox>
                    <BookingDetailItemTitle>관람극장</BookingDetailItemTitle>
                    <BookingDetailItemContent>
                      CGV 서면삼정타워
                    </BookingDetailItemContent>
                  </BookingDetailItemBox>
                  <BookingDetailItemBox>
                    <BookingDetailItemTitle>관람인원</BookingDetailItemTitle>
                    <BookingDetailItemContent>일반 1</BookingDetailItemContent>
                  </BookingDetailItemBox>
                  <BookingDetailItemBox>
                    <BookingDetailItemTitle>관람일시</BookingDetailItemTitle>
                    <BookingDetailItemContent>
                      2021.03.24(수) 18:55
                    </BookingDetailItemContent>
                  </BookingDetailItemBox>
                  <BookingDetailItemBox>
                    <BookingDetailItemTitle>관람좌석</BookingDetailItemTitle>
                    <BookingDetailItemContent>E 12</BookingDetailItemContent>
                  </BookingDetailItemBox>
                  <BookingDetailItemBox>
                    <BookingDetailItemTitle>상영관</BookingDetailItemTitle>
                    <BookingDetailItemContent>5관</BookingDetailItemContent>
                  </BookingDetailItemBox>
                  <BookingDetailItemBox>
                    <BookingDetailItemTitle>매수</BookingDetailItemTitle>
                    <BookingDetailItemContent>1매</BookingDetailItemContent>
                  </BookingDetailItemBox>
                </BookingDetailContentBox>
              </ReservedItemBookingDetail>
            </ReservedItemBookingInfoBox>
          </ReservedItemBox>
          <ReservationNoticeBox>
            <ReservationNoticeItem>
              <ReservationNoticeItemTitle>이용안내</ReservationNoticeItemTitle>
              <ReservationNoticeItemContent>
                <ReservationP>
                  예매 변경은 불가능하며, 취소 후 재 예매를 하셔야만 합니다.
                </ReservationP>
                <ReservationP>
                  영수증은 상영 시간 전까지 My CGV 에서 출력하실 수 있습니다.
                  단, 신용카드로 예매하신 경우만 한합니다.
                </ReservationP>
                <ReservationP>
                  상영 시간 이후 관람하신 영화의 영수증 출력을 원하실 경우,
                  1544-1122로 문의 주시기 바랍니다.
                </ReservationP>
                <ReservationP>
                  취소하신 내역이 나타나지 않거나 궁금하신 사항이 있으시면,
                  고객센터로 문의해 주시기 바랍니다.
                </ReservationP>
              </ReservationNoticeItemContent>
            </ReservationNoticeItem>
            <ReservationNoticeItem>
              <ReservationNoticeItemTitle>
                티켓 교환방법
              </ReservationNoticeItemTitle>
              <ReservationNoticeItemContent>
                <ReservationP>
                  <b>티켓판매기(ATM)에서 발권하실 경우</b>
                </ReservationP>
                <ReservationP>
                  예매번호 또는 고객인증번호 (법정생년월일 6자리 + 휴대폰번호 뒷
                  7~8자리)를 입력하시면 티켓을 편하게 발권하실 수 있습니다.
                </ReservationP>
                <br />
                <ReservationP>
                  <b>매표소에서 발권하실 경우</b>
                </ReservationP>
                <ReservationP>
                  티켓교환권을 출력하여 매표소에 방문하시면 티켓으로 교환하실 수
                  있습니다.
                </ReservationP>
                <ReservationP>
                  (티켓교환권 출력이 어려운 경우, 예매번호와 신분증을 지참하시면
                  매표소에서 티켓을 수령하실 수 있습니다.)
                </ReservationP>
              </ReservationNoticeItemContent>
            </ReservationNoticeItem>
            <ReservationNoticeItem>
              <ReservationNoticeItemTitle>
                예매 취소 안내
              </ReservationNoticeItemTitle>
              <ReservationNoticeItemContent>
                <ReservationP>
                  <b>신용카드</b>
                </ReservationP>
                <ReservationP>
                  결제 후 3일 이내 취소 시 승인 취소 가능. 3일 이후 매입 취소시
                  영업일 기준 3~5일 소요
                </ReservationP>
                <br />
                <ReservationP>
                  <b>체크카드</b>
                </ReservationP>
                <ReservationP>
                  결제 후 3일 이내 취소 시 당일 카드사에서 환불처리. 3일 이후
                  매입 취소 시 카드사에 따라 3~10일 이내 카드사에서 환불
                </ReservationP>
                <br />
                <ReservationP>
                  <b>휴대폰 결제</b>
                </ReservationP>
                <ReservationP>
                  결제 일자 기준 당월(1~말일)취소만 가능. 익월 취소 관련 문의는
                  CGV고객센터(1544-1122) 연락 요망
                </ReservationP>
                <ReservationP>
                  예매취소 후 당일 환불이 원칙이나 현장 취소 시 경우에 따라 익일
                  처리 될 수 있음.
                </ReservationP>
                <br />
                <ReservationP>
                  <b>카카오페이</b>
                </ReservationP>
                <ReservationP>
                  카카오페이머니나 카카오포인트를 사용하신 경우 각각의 잔액으로
                  원복되며, 카드 결제를 하신 경우는 카드사 정책에 따라
                  승인취소가 진행되며 3일 이후 매입 취소시 영업일 기준 3~10일
                  소요됩니다.
                </ReservationP>
                <br />
                <ReservationP>
                  <b>PAYCO</b>
                </ReservationP>
                <ReservationP>
                  PAYCO 쿠폰/포인트를 사용하신 경우 각각의 쿠폰/포인트로
                  원복되며 쿠폰의 경우 조건에 따라 재사용이 불가 할 수 있습니다.
                  카드 결제금액은 카드사 정책에 따라 승인취소가 진행되며 3일
                  이후 매입 취소시 영업일 기준 3~10일 소요됩니다.
                </ReservationP>
                <br />
                <ReservationP>
                  <b>스마일페이</b>
                </ReservationP>
                <ReservationP>
                  스마일캐시를 사용하신 경우 스마일캐시로 원복되며, 카드
                  결제금액은 카드사 정책에 따라 승인취소가 진행되며 3일 이후
                  매입취소 시 영업일 기준 3~10일 소요됩니다.
                </ReservationP>
                <br />
                <ReservationP>
                  <b>NAVER PAY</b>
                </ReservationP>
                <ReservationP>
                  NAVER Pay 포인트를 사용하신 경우 NAVER Pay 포인트로 원복되며,
                  카드사 결제를 하신 경우는 카드사 정책에 따라 승인취소가
                  진행되며 3일 이후 매입 취소시 영업일 기준 3~10일 소요됩니다.
                </ReservationP>
                <br />
                <ReservationP>
                  <b>카카오톡 선물하기 복합상품</b>
                </ReservationP>
                <ReservationP>
                  카카오톡 선물하기 복합상품 (2인 PKG / 1인 PKG)은 매점쿠폰 사용
                  시, 예매 티켓 환불 불가.
                  <br />※ 단, 매점 쿠폰 미 사용 시, 예매 티켓 환불 가능하며 재
                  예매 시, 새로운 매점 쿠폰 발급.
                </ReservationP>
                <br />
                <ReservationP>
                  <b>계좌이체</b>
                </ReservationP>
                <ReservationP>
                  1. 예매일 이후 7일 이내 취소 시<br />
                  - 자동 환불 은행: 취소 후 즉시 처리가능
                  <br />
                  - 조흥, 신한, 외한, 한미, 우리, 우체국, 전북, 경남, 광주,
                  대구, 새마을, 제주
                  <br />
                  - 우리은행의 경우 당일 취소분만 즉시 처리 가능
                  <br />
                  - 수동 환불 은행: 농협(취소 후 2~3일 이내 입금),
                  부산/제일/우리(취소 후 3~5일 이내 입금)
                  <br />
                  <br />
                  2. 예매 7일 이후~상영시간 30분 전 취소 시(단, 일부 당일 취소
                  불가 행사의 경우 전일 취소 시)
                  <br />
                  - 환불은 환불 요청일로부터 7일 이상 소요됨
                  <br />※ 기타 환불 관련 문의는 CGV고객센터 1544-1122로
                  연락바랍니다.
                </ReservationP>
              </ReservationNoticeItemContent>
            </ReservationNoticeItem>
            <ReservationNoticeItem style={{ borderBottom: "0px" }}>
              <ReservationNoticeItemTitle>
                환불 규정 안내
              </ReservationNoticeItemTitle>
              <ReservationNoticeItemContent>
                <ReservationP>
                  <b>현장 취소를 하는 경우</b>
                  <br />
                  상영시간 이전까지만 가능하며, 상영시간 이후 취소나 환불은 되지
                  않습니다.
                </ReservationP>
                <br />
                <ReservationP>
                  <b>홈페이지에서 예매 취소할 경우</b>
                  <br />
                  부분 취소는 불가능합니다. (ex. 4장을 인터넷으로 예매한 경우
                  4장 모두 취소만 가능)
                  <br />
                  홈페이지 예매 취소는 상영시간 20분전까지 가능합니다.
                  <br />
                  (단, 씨네&amp;포레관, 씨네&amp;리빙룸 제외)
                  <br />
                  상영시간 이후 취소나 환불은 되지 않습니다.
                  <br />
                </ReservationP>
                <br />
                <ReservationP>
                  <b>모바일 앱/웹(m.cgv.co.kr)에서 예매 취소할 경우</b>
                  <br />
                  부분 취소는 불가합니다.(ex. 4장을 인터넷으로 예매한 경우 4장
                  모두 취소만 가능)
                  <br />
                  모바일 앱/웹 예매 취소는 상영시간 15분전까지 가능합니다.
                  <br />
                  (단, 씨네&amp;포레관, 씨네&amp;리빙룸 제외)
                  <br />
                  상영시간 이후 취소나 환불은 되지 않습니다.
                  <br />
                </ReservationP>
                <br />
                <ReservationP>
                  <b>단, 일부 행사의 경우 행사 당일 취소, 변경 불가 합니다.</b>
                </ReservationP>
              </ReservationNoticeItemContent>
            </ReservationNoticeItem>
          </ReservationNoticeBox>
        </MainContentsBox>
      </MyCGVMainContainer>
    </MyCgvReserveContainer>
  );
};

export default MyCgvReserve;
