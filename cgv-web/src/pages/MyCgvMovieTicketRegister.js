import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import imgTicket from "../images/ticketregister/bg_ticket_info.gif";
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
  setCookie("now-space", "mycgv-movieticket-register");

  return (
    <MyCgvReserveContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>???</NavSectionArrow>
          <NavSectionSpan>My CGV</NavSectionSpan>
          <NavSectionArrow>???</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            ?????? ????????????
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <MyCGVInfoBox />
      <MyCGVMainContainer>
        <MyCgvAsidesBox nowSpace={getCookie("now-space")} />
        <MainContentsBox>
          <MainContentsTitleBox>
            <MainContentsTitleH3>?????????/???????????? ??????</MainContentsTitleH3>
          </MainContentsTitleBox>
          <RegisterBox>
            <RegisterBoxStrong>
              ???????????? CGV ??????????????? ????????????
            </RegisterBoxStrong>
            <RegisterBoxSpan>
              CGV ??????????????? ??????????????? ????????? ?????????.
            </RegisterBoxSpan>
          </RegisterBox>
          <PasswordDIv>
            <span>????????????&nbsp;</span>
            <PasswordInput type="password" />
            <PasswordButton>????????????</PasswordButton>
          </PasswordDIv>
          <TicketImg />
          <ReservationNoticeBox>
            <ReservationNoticeItem>
              <ReservationNoticeItemTitle>????????????</ReservationNoticeItemTitle>
              <ReservationNoticeItemContent>
                <ReservationP>
                  CGV ??????????????? ??????????????? ??????????????????.
                </ReservationP>
                <ReservationP>
                  CGV GOLD CLASS ????????? ??????????????? ??????????????????.
                </ReservationP>
                <ReservationP>
                  CGV?????????(????????????/?????????)?????? ???????????? ????????????
                  ????????????/?????????????????? ????????? ????????? ??? ?????????, CGV ??????
                  ?????????????????? ????????? ??? ????????????.
                </ReservationP>
                <ReservationP>
                  CGV ?????? ???????????? ?????? ????????? ???????????? ????????? ???????????? ?????????
                  ????????? ??? ????????? ????????? CGV??? ???????????? ???????????? ??? ????????????.
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
