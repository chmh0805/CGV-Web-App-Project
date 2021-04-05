import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import MyCgvAsidesBox from "../components/MyCgvAsidesBox";
import { deleteCookie, getCookie, setCookie } from "../utils/JWT";
import MyCGVInfoBox from "../components/MyCGVInfoBox";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setFrequentlyCgvs, setInfo, setQnas, setTicketings } from "../store";
import { useSelector } from "react-redux";
import MyCgvReservedBox from "../components/mycgv/reserve/MyCgvReservedBox";

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
  setCookie("now-space", "mycgv-reserve");
  window.scrollTo(0, 0);

  const dispatcher = useDispatch();
  const { ticketings } = useSelector((store) => store);

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
          dispatcher(setFrequentlyCgvs(data.frequentlyCgvs));
          dispatcher(setTicketings(data.ticketings));
          dispatcher(setQnas(data.qnas));
        }
      })
      .catch((err) => {
        console.log(err);
        deleteCookie("cgvJWT");
        deleteCookie("userId");
        deleteCookie("role");
        alert("회원정보 조회 실패. 재로그인해주세요.");
        window.location.replace("/login");
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
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            나의 예매내역
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <MyCGVInfoBox />
      <MyCGVMainContainer>
        <MyCgvAsidesBox nowSpace={getCookie("now-space")} />
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
          <MyCgvReservedBox ticketings={ticketings} />
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
