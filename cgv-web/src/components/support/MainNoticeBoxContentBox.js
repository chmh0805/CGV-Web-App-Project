import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NoticeBoxContentBox = styled.div`
  width: 100%;
  height: 130px;
`;

const NoticeBoxContentItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  line-height: 1.2;
  font-size: 13px;
  margin-top: 18px;
  margin-bottom: 18px;
`;

const NoticeBoxLink = styled(Link)`
  overflow: hidden;
  display: inline-block;
  width: 400px;
  color: #222;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: left;

  &:hover {
    color: #222;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 15px;
  }
`;

const NoticeBoxDate = styled.span`
  color: #222;
  font-size: 11px;
  text-align: right;
`;

const MainNoticeBoxContentBox = ({ fivenotices }) => {
  return (
    <NoticeBoxContentBox>
      {fivenotices.map((notice) => (
        <NoticeBoxContentItem>
          {/* id 들고 있으니까 상세보기 화면 구현하고 나서 링크 연결 !! */}
          <NoticeBoxLink>{notice.title}</NoticeBoxLink>
          <NoticeBoxDate>{notice.createDate}</NoticeBoxDate>
        </NoticeBoxContentItem>
      ))}
    </NoticeBoxContentBox>
  );
};

export default MainNoticeBoxContentBox;
