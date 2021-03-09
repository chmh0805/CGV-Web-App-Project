import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgFooter from "../images/bg_footer.gif";
import cjLogo from "../images/cj_logo.png";
import facebook from "../images/facebook_circle_icon.png";
import twitter from "../images/twitter_circle_icon.png";
import instagram from "../images/insta_circle_icon.png";

const FooterContainer = styled.div`
  width: 100%;
  height: 270px;
  background-color: #fdfcf0;
  background-image: url(${bgFooter});
`;

const FooterInfoDiv = styled.div`
  text-align: center;
  align-items: center;
  height: auto;
  padding: 20px 0;
  margin: 0 auto;
`;

const FooterInfoLink = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  color: #444444;
  font-weight: 600;
`;

const FooterImpLink = styled(Link)`
  font-size: 13px;
  text-decoration: none;
  color: #e96736;
  font-weight: bold;
`;

const FooterSep = styled.span`
  font-size: 11px;
  color: #dddddd;
  font-weight: 600;
  margin-left: 2px;
  margin-right: 2px;
`;

const FooterAdressDiv = styled.div`
  display: flex;
  justify-content: center;
  height: auto;
  margin: 0 auto;
`;

const FooterCjImg = styled.img`
  width: 100px;
  height: 50px;
  margin-right: 3px;
`;

const FooterSnsImg = styled.img`
  width: 35px;
  height: 35px;
`;

const FooterPDiv = styled.div`
  margin-top: -15px;
  margin-left: 20px;
`;

const FooterAdressP = styled.p`
  font-size: 11px;
  color: #555555;
`;

const FooterRightP = styled.p`
  font-size: 10px;
  font-weight: 500;
  margin-top: 45px;
  margin-left: -30px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterInfoDiv>
        <FooterInfoLink>회사소개</FooterInfoLink>
        <FooterSep>|</FooterSep>
        <FooterInfoLink>IR</FooterInfoLink>
        <FooterSep>|</FooterSep>
        <FooterInfoLink>채용정보</FooterInfoLink>
        <FooterSep>|</FooterSep>
        <FooterInfoLink>광고/프로모션문의</FooterInfoLink>
        <FooterSep>|</FooterSep>
        <FooterInfoLink>제휴문의</FooterInfoLink>
        <FooterSep>|</FooterSep>
        <FooterInfoLink>출점문의</FooterInfoLink>
        <FooterSep>|</FooterSep>
        <FooterInfoLink>이용약관</FooterInfoLink>
        <FooterSep>|</FooterSep>
        <FooterInfoLink>편성기준</FooterInfoLink>
        <FooterSep>|</FooterSep>
        <FooterImpLink>개인정보처리방침</FooterImpLink>
        <FooterSep>|</FooterSep>
        <FooterInfoLink>법적고지</FooterInfoLink>
        <FooterSep>|</FooterSep>
        <FooterInfoLink>이메일주소무단수집거부</FooterInfoLink>
        <FooterSep>|</FooterSep>
        <FooterInfoLink>윤리경영</FooterInfoLink>
        <FooterSep>|</FooterSep>
        <FooterInfoLink>사이트맵</FooterInfoLink>
      </FooterInfoDiv>

      <FooterAdressDiv>
        <FooterCjImg src={cjLogo} />
        <FooterPDiv>
          <FooterAdressP>
            (04377)서울특별시 용산구 한강대로 23길 55, 아이파크몰 6층(한강로동)
          </FooterAdressP>
          <FooterAdressP>
            대표이사 : 최병환사업자등록번호 : 104-81-45690통신판매업신고번호 :
            2017-서울용산-0662
          </FooterAdressP>
          <FooterAdressP>
            호스팅사업자 : CJ올리브네트웍스개인정보보호 책임자 :
            이동현대표이메일 : cjcgvmaster@cj.netCGV고객센터 : 1544-1122
          </FooterAdressP>
        </FooterPDiv>
        <FooterSnsImg src={facebook} />
        <FooterSnsImg src={twitter} />
        <FooterSnsImg src={instagram} />
        <FooterRightP>© CJ CGV. All Rights Reserved</FooterRightP>
      </FooterAdressDiv>
    </FooterContainer>
  );
};

export default Footer;
