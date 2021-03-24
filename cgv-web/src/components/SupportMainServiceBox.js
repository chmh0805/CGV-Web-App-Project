import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import bgServiceBoxItem from "../images/bg_c_main.png";
import { isLogined } from "../utils/JWT";

const ServiceBox = styled.div`
  width: 267px;
  height: 258px;
  line-height: 1.2;
  color: #666;
`;

const TitleSpan = styled.span`
  color: #222;
  font-size: 19px;
  font-weight: 500;
  line-height: 1.2;
`;

const ServiceBoxItemBox = styled.div`
  width: 272px;
  height: 258px;
  padding-top: 15px;
  line-height: 1.2;
  color: #666;
`;

const ServiceBoxItem = styled.div`
  padding: 24px 20px 25px 17px;
  display: flex;
  align-items: center;
  width: 131px;
  height: 81px;
  color: #222;
  line-height: 150%;
  font-size: 14px;
  font-weight: 500;
  background: url(${bgServiceBoxItem}) no-repeat 0 -287px;
  cursor: pointer;
`;

const DisabledServiceBoxItem = styled.div`
  padding: 24px 20px 25px 17px;
  display: flex;
  align-items: center;
  width: 131px;
  height: 81px;
  color: #cec1b2;
  line-height: 150%;
  font-size: 14px;
  font-weight: 500;
  background: #e4e2d4 url(${bgServiceBoxItem}) no-repeat 0 -287px;
`;

const SupportMainServiceBox = () => {
  if (isLogined()) {
    return (
      <ServiceBox>
        <TitleSpan>자주 찾는 서비스</TitleSpan>
        <ServiceBoxItemBox>
          <div style={{ display: "flex", marginBottom: "5px" }}>
            <DisabledServiceBoxItem style={{ marginLeft: "5px" }}>
              아이디/
              <br />
              비밀번호 찾기
            </DisabledServiceBoxItem>
            <Link to="/user/mycgv/reserve">
              <ServiceBoxItem style={{ marginLeft: "5px" }}>
                예매/
                <br />
                취소내역 확인
              </ServiceBoxItem>
            </Link>
          </div>
        </ServiceBoxItemBox>
      </ServiceBox>
    );
  } else {
    return (
      <ServiceBox>
        <TitleSpan>자주 찾는 서비스</TitleSpan>
        <ServiceBoxItemBox>
          <div style={{ display: "flex", marginBottom: "5px" }}>
            <Link to="/findId">
              <ServiceBoxItem>
                아이디/
                <br />
                비밀번호 찾기
              </ServiceBoxItem>
            </Link>
            <DisabledServiceBoxItem style={{ marginLeft: "5px" }}>
              예매/
              <br />
              취소내역 확인
            </DisabledServiceBoxItem>
          </div>
        </ServiceBoxItemBox>
      </ServiceBox>
    );
  }
};

export default SupportMainServiceBox;
