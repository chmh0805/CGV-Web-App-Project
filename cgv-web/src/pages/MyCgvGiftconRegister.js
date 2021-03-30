import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import MyCgvAsidesBox from "../components/MyCgvAsidesBox";
import { getCookie, setCookie } from "../utils/JWT";
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
      <MyCGVInfoBox />
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
