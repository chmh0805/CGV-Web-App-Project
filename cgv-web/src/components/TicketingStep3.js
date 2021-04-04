import React, { useEffect } from "react";
import styled from "styled-components";
import topButtons from "../images/button/top_buttons.png";
import BackSeatButton from "../images/button/backSeat_btn.png";
import PayButton from "../images/button/pay_btn.png";
import { ticketNormal, ticketOld, ticketYoung } from "../utils/Ticketing";

const TicketingTopButtonBox = styled.div`
  width: 100%;
  height: 70px;
  padding-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const TicketingTopButton = styled.div`
  position: relative;
  display: block;
  float: left;
  margin-left: 5px;
  width: 81px;
  height: 30px;
  overflow: hidden;
  text-overflow: ellipsis;
  background: white url(${topButtons}) no-repeat;
  background-position: 0 -30px;
  cursor: pointer;
`;

const TicketingStepsSection = styled.div`
  width: 100%;
  height: 620px;
  display: flex;
  justify-content: space-between;
`;

const TicketingStepBox = styled.div`
  width: 744px;
  height: 620px;
  background-color: #f2f0e4;
`;

const TicketingCalBox = styled.div`
  background-color: #fff;
  padding-bottom: 15px;
  padding-top: 19px;
  width: 216px;
`;

const TicketingTotalBox = styled.div`
  width: 187px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: #202020;
  margin-top: 0;
  margin-bottom: 15px;
  padding: 2px;
`;

const TicketingTotalTop = styled.div`
  height: 32px;
  line-height: 32px;
  background-color: #fff;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  border-radius: 3px 3px 0 0;
`;

const TicketingTotalBottom = styled.div`
  background-color: #474747;
  color: #fff;
  box-shadow: inset 0 0 10px #202020;
  height: 40px;
  line-height: 40px;
  border-radius: 0 0 3px 3px;
  padding: 0 7px;
  text-align: right;
  font-size: 15px;
  font-weight: bold;
  position: relative;
`;

const TicketingPayTop = styled.div`
  height: 32px;
  line-height: 32px;
  background-color: #f0ebd2;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  border-radius: 3px 3px 0 0;
`;

const TicketingPayMiddle = styled.div`
  background-color: #f9f8f6;
`;

const TicketPayInfo = styled.dl`
  list-style: none;
  display: block;
  position: relative;
  margin: 0;
  padding: 0;
  height: 35px;
  line-height: 35px;
  border-top: 1px solid #dde2e3;
  font-size: 12px;
`;

const TicketPayInfoTitle = styled.dt`
  position: relative;
  top: 11px;
  display: block;
  width: 95px;
  min-height: 14px;
  max-height: 28px;
  padding-left: 5px;
  line-height: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TicketPayInfoPrice = styled.dd`
  display: block;
  width: 60px;
  position: absolute;
  top: 8px;
  text-align: right;
  color: #333;
  padding-right: 0px;
  right: 7px;
`;

const TicketingPayBottom = styled.div`
  background-color: #443128;
  color: #ffe56b;
  box-shadow: inset 0 0 10px #202020;
  height: 40px;
  line-height: 40px;
  border-radius: 0 0 3px 3px;
  padding: 0 7px;
  text-align: right;
  font-size: 19px;
  font-weight: bold;
  position: relative;
`;

const TicketPaymentTitle = styled.h4`
  width: 100%;
  display: block;
  position: relative;
  height: 33px;
  line-height: 33px;
  background-color: #333;
  color: #e0e0e0;
  clear: both;
  margin-bottom: 3px;
`;

const TicketStepHeader = styled.span`
  display: block;
  float: left;
  font-size: 20px;
  height: 100%;
  margin-left: 16px;
  font-weight: bold;
  letter-spacing: 0 !important;
  text-indent: 0 !important;
`;

const TicketStepTitle = styled.span`
  display: block;
  float: left;
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
  padding-top: 1px;
  letter-spacing: -2px;
`;

const TicketPaymentContainer = styled.div`
  background-color: #f2f0e5;
`;

const TicketSelectBox = styled.div`
  position: relative;
  width: 709px;
  line-height: 41px;
  margin: 0 auto;
  border-bottom: 2px solid #d7d6cf;
`;

const PaySelectSpan = styled.span`
  position: relative;
  line-height: 41px;
  text-align: left;
`;

const PaySelectLabel = styled.label`
  margin-left: 3px;
  margin-right: 15px;
  color: #333;
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
`;

const PaymentBox = styled.div`
  position: relative;
  text-align: left;
`;

const PayCreditBox = styled.div`
  display: block;
  position: relative;
`;

const PayCreditContent = styled.div`
  width: auto;
  min-height: 210px;
  padding: 15px;
  padding-top: 0;
`;

const PayCreditInfoBox = styled.div`
  position: relative;
  padding: 20px 30px;
  background-color: #ebe9df;
  color: #666;
  line-height: 1.5em;
  font-size: 12px;
`;

const CreditCardBox = styled.div`
  display: flex;
  height: 40px;
  border-bottom: 1px solid #d6d4ca;
`;

const CreditName = styled.div`
  width: 10%;
  text-align: right;
  padding-top: 10px;
  font-size: 12px;
`;

const CreditSelect = styled.div`
  padding-left: 7px;
  padding-top: 5px;
`;

const BlackBoxSection = styled.div`
  width: 100%;
  height: 128px;
  background-color: #1d1d1c;
  display: flex;
  padding: 10px 0;
`;

const BackSeatBtnBox = styled.div`
  width: 10%;
`;

const BackSeatBtn = styled.button`
  background: url(${BackSeatButton}) no-repeat;
  width: 110px;
  height: 110px;
  border-style: none;
  margin-left: 10px;
`;

const TicketInfoBox = styled.div`
  width: 65%;
  padding: 0 10px;
`;

const PaymentBtnBox = styled.div`
  width: 20%;
`;

const PaymentBtn = styled.button`
  background: url(${PayButton}) no-repeat;
  width: 220px;
  height: 108px;
  border-style: none;
  margin-left: 10px;
`;

const MDAdBox = styled.div`
  position: absolute;
  left: calc(50% - 690px);
  top: 200px;
`;

const AsidesBannerImg = styled.img`
  width: 160px;
  aspect-ratio: auto 160 / 300;
  height: 300px;
  margin-top: 20px;
`;

const TicketingStep3 = (props) => {
  const {
    setNowStep,
    totalPrice,
    userInfo,
    selectedTimeTable,
    normalPeopleCount,
    youngPeopleCount,
    oldPeopleCount,
    selectedSeatNums,
    setNormalPeopleCount,
    setYoungPeopleCount,
    setOldPeopleCount,
  } = props;

  const goToBack = () => {
    setNormalPeopleCount(0);
    setYoungPeopleCount(0);
    setOldPeopleCount(0);
    setNowStep(2);
  };

  const payClick = () => {
    onClickPayment();
  };

  var IMP = window.IMP;
  IMP.init("imp59232554");

  function onClickPayment() {
    IMP.request_pay(
      {
        pg: "inicis", // version 1.1.0부터 지원.
        pay_method: "card",
        merchant_uid: `2조CGV_${new Date().getTime()}`,
        amount: totalPrice, // 결제금액
        name: "영화관에선나초조 CGV 웹결제", // 주문명
        buyer_name: userInfo.name, // 구매자 이름
        buyer_tel: userInfo.phone, // 구매자 전화번호
        buyer_email: userInfo.email, // 구매자 이메일
      },
      function (rsp) {
        console.log(selectedSeatNums);
        for (var j = 0; j < normalPeopleCount; j++) {
          ticketNormal(
            selectedSeatNums.pop(),
            selectedTimeTable.id,
            userInfo.id
          );
        }
        for (var k = 0; k < youngPeopleCount; k++) {
          ticketYoung(
            selectedSeatNums.pop(),
            selectedTimeTable.id,
            userInfo.id
          );
        }
        for (var l = 0; l < oldPeopleCount; l++) {
          ticketOld(selectedSeatNums.pop(), selectedTimeTable.id, userInfo.id);
        }
        if (rsp.success) {
          var msg = "결제가 완료되었습니다.\n";
          msg += "결제 금액 : " + rsp.paid_amount;
        } else {
          var msg = rsp.error_msg;
        }
        alert(msg);
        window.location.replace("/user/mycgv/reserve");
      }
    );
  }

  return (
    <>
      <TicketingTopButtonBox>
        <TicketingTopButton />
      </TicketingTopButtonBox>

      <MDAdBox>
        <AsidesBannerImg src="https://adimg.cgv.co.kr/images/202003/house/A_skin_160x300.png" />
      </MDAdBox>

      <TicketingStepsSection>
        <TicketingStepBox>
          <div>
            <TicketPaymentTitle>
              <TicketStepHeader>STEP 1.</TicketStepHeader>
              <TicketStepTitle>최종결제 수단</TicketStepTitle>
            </TicketPaymentTitle>
            <TicketPaymentContainer>
              <TicketSelectBox>
                <PaySelectSpan>
                  <input
                    type="radio"
                    id="last_pay_radio0"
                    name="last_pay_radio"
                    value="0"
                  />
                  <PaySelectLabel>신용카드</PaySelectLabel>
                </PaySelectSpan>
                <PaySelectSpan>
                  <input
                    type="radio"
                    id="last_pay_radio0"
                    name="last_pay_radio"
                    value="0"
                  />
                  <PaySelectLabel>휴대폰 결제</PaySelectLabel>
                </PaySelectSpan>
                <PaySelectSpan>
                  <input
                    type="radio"
                    id="last_pay_radio0"
                    name="last_pay_radio"
                    value="0"
                  />
                  <PaySelectLabel>계좌이체</PaySelectLabel>
                </PaySelectSpan>
                <PaySelectSpan>
                  <input
                    type="radio"
                    id="last_pay_radio0"
                    name="last_pay_radio"
                    value="0"
                  />
                  <PaySelectLabel>간편결제</PaySelectLabel>
                </PaySelectSpan>
                <PaySelectSpan>
                  <input
                    type="radio"
                    id="last_pay_radio0"
                    name="last_pay_radio"
                    value="0"
                  />
                  <PaySelectLabel>내통장결제</PaySelectLabel>
                </PaySelectSpan>
              </TicketSelectBox>
              <PaymentBox>
                <PayCreditBox>
                  <PayCreditContent>
                    <CreditCardBox>
                      <CreditName>카드종류</CreditName>
                      <CreditSelect>
                        <select id="card_type" className="CreditSelect">
                          <option>카드를 선택하세요</option>
                          <option>BC카드</option>
                          <option>현대카드</option>
                          <option>KEB하나카드(구,외환)</option>
                          <option>삼성카드</option>
                          <option>신한카드</option>
                          <option>KB국민카드</option>
                          <option>카카오뱅크카드</option>
                          <option>NH카드</option>
                          <option>스탠다드차타드은행카드</option>
                          <option>씨티카드</option>
                          <option>롯데/아멕스카드</option>
                          <option>K뱅크</option>
                          <option>우리카드</option>
                          <option>신세계카드</option>
                          <option>하나카드(구,하나SK)</option>
                          <option>광주은행카드</option>
                          <option>산은캐피탈</option>
                          <option>수협카드</option>
                          <option>KDB산업은행카드</option>
                          <option>전북은행카드</option>
                          <option>제주은행카드</option>
                          <option>우체국카드</option>
                          <option>MG체크카드</option>
                          <option>KB증권카드(구,현대증권)</option>
                          <option>기업은행카드</option>
                          <option>SSG카드</option>
                        </select>
                      </CreditSelect>
                    </CreditCardBox>
                  </PayCreditContent>
                  <PayCreditInfoBox>
                    <span>
                      ※ 신용카드 결제 가능 최소 금액은 1,000원 이상입니다.
                    </span>
                  </PayCreditInfoBox>
                </PayCreditBox>
              </PaymentBox>
            </TicketPaymentContainer>
          </div>
        </TicketingStepBox>

        <TicketingCalBox>
          <TicketingTotalBox>
            <TicketingTotalTop>결제하실 금액</TicketingTotalTop>
            <TicketingTotalBottom>
              <span>{totalPrice}</span>원
            </TicketingTotalBottom>
          </TicketingTotalBox>

          <TicketingTotalBox>
            <TicketingPayTop>결제내역</TicketingPayTop>
            <TicketingPayMiddle>
              <TicketPayInfo>
                <TicketPayInfoTitle>신용카드</TicketPayInfoTitle>
                <TicketPayInfoPrice>
                  <span>{totalPrice}</span>원
                </TicketPayInfoPrice>
              </TicketPayInfo>
            </TicketingPayMiddle>
            <TicketingPayBottom>
              <span>{totalPrice}</span>원
            </TicketingPayBottom>
          </TicketingTotalBox>
        </TicketingCalBox>
      </TicketingStepsSection>

      <BlackBoxSection>
        <BackSeatBtnBox>
          <BackSeatBtn onClick={() => goToBack()} />
        </BackSeatBtnBox>
        <TicketInfoBox></TicketInfoBox>
        <PaymentBtnBox>
          <PaymentBtn onClick={() => payClick()} />
        </PaymentBtnBox>
      </BlackBoxSection>
    </>
  );
};

export default TicketingStep3;
