import React, { useState } from "react";
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

const ReplyFavIcon = styled.img`
  cursor: pointer;
`;

const ReplyFavCount = styled.span`
  margin-left: 5px;
`;

const MovieDetailReply = ({ reviews }) => {
  return (
    <div style={{ height: "auto", display: "inline-block" }}>
      {reviews.map((review) => (
        <MovieReplyBox>
          <ReplyUserImgBox>
            <ReplyUserImg src={userImg} />
          </ReplyUserImgBox>
          <MovieReplyContent>
            <span>{review.user.nickname}</span>
            <p>{review.content}</p>
            <ReplyDate>
              <span>{review.createDate}</span>
              <ReplySep>|</ReplySep>
              <div style={{ display: "inline-block" }}>
                <ReplyFavIcon src="http://img.cgv.co.kr/R2014/images/point/ico_point_default.png" />
              </div>
              <ReplyFavCount>{review.isLike}</ReplyFavCount>
            </ReplyDate>
          </MovieReplyContent>
        </MovieReplyBox>
      ))}
    </div>
  );
};

export default MovieDetailReply;
