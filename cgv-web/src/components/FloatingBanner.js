import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import btnCGV from "../images/floatingBanner/btn_theater.gif";
import btnTicket from "../images/floatingBanner/btn_ticket.gif";
import btnTop from "../images/floatingBanner/btn_top.png";

const FBCon = styled.div`
  width: 119px;
  padding: 0px;
  margin: 0px;
  position: fixed;

  left: 1272px;
  top: 200px;
`;

const FBBox = styled.div`
  border: 3.5px solid #e71b0e;
  border-radius: 10px;
  padding-left: 5px;
`;

const FBBtnBox = styled(Link)`
  display: block;
  text-decoration: none;
`;

const FBBtn = styled.img``;

const FBScrollTop = styled.img``;

const handleClick = () => {
  window[`scrollTo`]({ top: 0, behavior: `smooth` });
};

const FloatingBanner = () => {
  return (
    <>
      <FBCon>
        <FBBox>
          <FBBtnBox>
            <FBBtn src={btnCGV} />
          </FBBtnBox>
          <FBBtnBox>
            <FBBtn src={btnTicket} />
          </FBBtnBox>
        </FBBox>
        <FBBtnBox>
          <FBScrollTop src={btnTop} onclick={handleClick} />
        </FBBtnBox>
      </FBCon>
    </>
  );
};

export default FloatingBanner;
