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

  right: calc(50% - 650px);
  top: 200px;
`;

const FBBox = styled.div`
  border: 3.5px solid #e71b0e;
  background-color: #fdfcf0;
  border-radius: 10px;
  padding-left: 5px;
`;

const FBBtnBox = styled(Link)`
  display: block;
  text-decoration: none;
`;

const FBBtn = styled.img``;

const FBScrollTop = styled.img``;

const FloatingBanner = () => {
  return (
    <>
      <FBCon>
        <FBBox>
          <FBBtnBox to="/theater">
            <FBBtn src={btnCGV} />
          </FBBtnBox>
          <FBBtnBox to="/user/mycgv/reserve">
            <FBBtn src={btnTicket} />
          </FBBtnBox>
        </FBBox>
        <FBBtnBox>
          <FBScrollTop
            src={btnTop}
            onClick={() => {
              window[`scrollTo`]({ top: 0, behavior: `smooth` });
            }}
          />
        </FBBtnBox>
      </FBCon>
    </>
  );
};

export default FloatingBanner;
