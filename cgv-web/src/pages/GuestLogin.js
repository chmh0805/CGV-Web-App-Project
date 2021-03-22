import React from "react";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
const LoginContainer = styled.div`
  background-color: #fdfcf0;
  width: auto;
  height: 1150px;
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

const TabSection = styled.div`
  width: 920px;
  height: 39px;
  display: flex;
  justify-content: flex-start;
  margin: 0 auto;
  margin-top: 30px;
  border-bottom: 2px solid #898987;
`;

const TabSectionItem1 = styled.div`
  width: 100px;
  height: 39px;
  background-color: #898987;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-right: 1px;
`;

const TabSectionItem2 = styled.div`
  width: 100px;
  height: 39px;
  background-color: #e71a0f;
  color: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const CheckSection = styled.div`
  width: 920px;
  height: auto;
  margin: 0 auto;
  margin-top: 40px;
`;

const CheckSectionH3 = styled.h3`
  font-size: 15px;
`;

const CheckSectionSpan = styled.span`
  font-size: 14px;
  color: #666;
`;

const CheckSectionItemBox = styled.div`
  width: 100%;
  height: auto;
  margin-top: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 45px 510px;
  justify-items: stretch;
`;

const CheckSectionItemHeader = styled.div`
  background-color: #e8e8dd;
  font-size: 17px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 40px;
`;

const CheckSectionItemBody = styled.div`
  border: 1px solid #e8e8dd;
  padding: 40px 30px;
  color: #666;
  line-height: 1.2;
  font-weight: 300;
  align-items: center;
`;

const CheckSectionDivLine = styled.div`
  width: auto;
  height: 2px;
  background-color: #999999;
`;

const CheckSectionItemTable = styled.div`
  width: auto;
  height: 190px;
  font-size: 12px;
  display: grid;
  grid-template-columns: 100px 300px;
  grid-template-rows: 68px 60px 60px;
`;

const CheckSectionItem = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom: 1px solid #dfded7;
`;

const CheckSectionItemInput = styled.input`
  height: 27px;
  border: 1px solid #b5b5b5;
  padding-left: 10px;
`;

const CheckSectionPhoneDivider = styled.span`
  font-size: 18px;
  color: #666;
  font-weight: "600";
`;

const CheckSectionItem1Button = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  background-color: #e71a0f;
  color: white;
  width: 130px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  font-size: 13px;
`;

const CheckSectionItem2Button = styled.div`
  margin-top: 20px;
  width: 190px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 13px;
`;

const NoticeSection = styled.div`
  margin: 0 auto;
  margin-top: 50px;
  width: 920px;
  height: 220px;
  border: 2px solid #d5d4cd;
  padding: 30px;
  background-color: #f9f7ec;
  line-height: 1.8;
  color: #666;
  display: flex;
`;

const NoticeSectionLeftBox = styled.div`
  width: 80px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  border-right: 1px solid #c5c4bf;
  color: black;
`;

const NoticeSectionRightBox = styled.div`
  width: 770px;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  color: #666;
  font-size: 13px;
  padding-left: 30px;
`;

const GuestLogin = () => {
  return (
    <LoginContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>회원서비스</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            비회원예매확인
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <TabSection>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <TabSectionItem1>로그인</TabSectionItem1>
        </Link>
        <TabSectionItem2>비회원 예매확인</TabSectionItem2>
      </TabSection>
      <CheckSection>
        <CheckSectionH3>비회원 예매 확인</CheckSectionH3>
        <CheckSectionSpan>
          비회원으로 예매하신 고객님은 개인정보(법정생년월일, 휴대폰 번호,
          비밀번호(4자리)를 입력해 주세요.
        </CheckSectionSpan>
        <CheckSectionItemBox>
          <CheckSectionItemHeader>비회원 예매확인</CheckSectionItemHeader>
          <CheckSectionItemHeader>
            비회원 예매 비밀번호 찾기
          </CheckSectionItemHeader>
          <CheckSectionItemBody>
            <span>모든 항목은 필수 입력사항입니다.</span>
            <CheckSectionDivLine style={{ marginTop: "5px" }} />
            <CheckSectionItemTable>
              <CheckSectionItem>
                법정생년월일
                <br />
                (8자리)
              </CheckSectionItem>
              <CheckSectionItem>
                <CheckSectionItemInput />
              </CheckSectionItem>
              <CheckSectionItem>휴대폰번호</CheckSectionItem>
              <CheckSectionItem>
                <select
                  name="phone-header"
                  style={{
                    width: "60px",
                    height: "27px",
                    border: "1px solid #b5b5b5",
                    marginRight: "3px",
                  }}
                >
                  <option value="010" selected>
                    010
                  </option>
                  <option value="011">011</option>
                  <option value="016">016</option>
                  <option value="017">017</option>
                  <option value="018">018</option>
                  <option value="019">019</option>
                </select>
                <CheckSectionPhoneDivider>-</CheckSectionPhoneDivider>
                <CheckSectionItemInput
                  style={{
                    width: "100px",
                    marginLeft: "3px",
                    marginRight: "3px",
                  }}
                />
                <CheckSectionPhoneDivider>-</CheckSectionPhoneDivider>
                <CheckSectionItemInput
                  style={{
                    width: "100px",
                    marginLeft: "3px",
                    marginRight: "3px",
                  }}
                />
              </CheckSectionItem>
              <CheckSectionItem style={{ borderBottom: "1px solid #AAA9A2" }}>
                비밀번호(4자리)
              </CheckSectionItem>
              <CheckSectionItem style={{ borderBottom: "1px solid #AAA9A2" }}>
                <CheckSectionItemInput style={{ width: "170px" }} />
              </CheckSectionItem>
            </CheckSectionItemTable>
            <CheckSectionItem1Button>비회원 예매확인</CheckSectionItem1Button>
          </CheckSectionItemBody>
          <CheckSectionItemBody style={{ borderLeft: "none" }}>
            <span>
              비회원 예매 시, 입력한 휴대폰번호로 SMS인증을 하면 비회원 예매
              비밀번호를 찾으실 수 있습니다.
            </span>
            <CheckSectionDivLine
              style={{ marginTop: "20px", marginBottom: "30px" }}
            />
            <CheckSectionItem2Button>
              휴대폰 SMS인증으로 찾기
            </CheckSectionItem2Button>
          </CheckSectionItemBody>
        </CheckSectionItemBox>
      </CheckSection>

      <NoticeSection>
        <NoticeSectionLeftBox>
          <p>
            비회원
            <br />
            예매 시<br />
            참고하세요!
          </p>
        </NoticeSectionLeftBox>
        <NoticeSectionRightBox>
          1. 상기 정보 수집에 동의하지 않을 경우, 비회원 예매 서비스를 이용하실
          수 없습니다.
          <br />
          2. 비회원 예매 시 청소년 관람불가 영화는 예매가 제한됩니다.
          <br />
          3. 비회원 예매 결제수단은 신용카드만 가능하며 모든 제휴상품권, 쿠폰,
          영화예매권 등의 사용은 회원 예매 서비스 이용 시 가능합니다.
          <br />
          4. 모바일과 ARS에서는 취소가 불가능하며, 홈페이지를 이용하여 입력하신
          로그인 정보로 취소 처리하실 수 있습니다.
          <br />
          5. 비회원 예매 및 비회원 예매 확인/취소 메뉴만 이용 가능합니다. 이
          외에 커뮤니티, 댓글, 인정 등의 서비스는 회원 가입 후 이용 가능합니다.
          <br />
          6. 문의사항은 CGV 고객센터(1544-1122)로 문의해 주시기 바랍니다.
          <br />- 운영시간 : 월~금 09:00 ~ 18:00 (이 외 시간은 자동 응답 안내
          가능)
        </NoticeSectionRightBox>
      </NoticeSection>
    </LoginContainer>
  );
};

export default GuestLogin;
