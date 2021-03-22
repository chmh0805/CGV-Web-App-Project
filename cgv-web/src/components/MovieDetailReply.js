import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import userImg from "../images/movieDetail/profile.gif";

const MovieReplyBox = styled.li`
  width: 370px;
  height: 180px;
  border-bottom: 1px solid #ceccc1;
  padding: 30px 0;
  float: left;
  position: relative;
`;

const ReplyUserImgBox = styled.div`
  float: left;
  width: 62px;
  height: 62px;
  padding: 0 20px;
`;

const ReplyUserImg = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 31px;
`;

const MovieReplyContent = styled.div`
  padding-left: 110px;
`;

const ReplyDate = styled.div`
  position: absolute;
  left: 10;
  bottom: 10px;
  padding: 0 !important;
`;

const ReplySep = styled.span`
  display: inline-block;
  font-size: 11px;
  vertical-align: middle;
  margin: 0 6px;
  padding-bottom: 4px;
`;

const ReplyFavIcon = styled.img``;

const ReplyFavCount = styled.span`
  margin-left: 5px;
`;

const MovieDetailReply = () => {
  return (
    <div>
      <MovieReplyBox>
        <ReplyUserImgBox>
          <ReplyUserImg src={userImg} />
        </ReplyUserImgBox>
        <MovieReplyContent>
          <span>user1</span>
          <p>너무 재밌어요!!</p>
          <ReplyDate>
            <span>2021.03.18</span>
            <ReplySep>|</ReplySep>
            <Link>
              <ReplyFavIcon src="http://img.cgv.co.kr/R2014/images/point/ico_point_default.png" />
            </Link>
            <ReplyFavCount>0</ReplyFavCount>
          </ReplyDate>
        </MovieReplyContent>
      </MovieReplyBox>
    </div>
  );
};

export default MovieDetailReply;
