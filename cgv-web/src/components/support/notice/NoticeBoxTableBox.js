import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SearchTableBox = styled.div`
  width: 100%;
  height: auto;
  padding-top: 10px;
  overflow: hidden;
  padding-top: 10px;
  line-height: 1.2;
  color: #666;
`;

const SearchTableTitle = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  align-items: center;
  background-color: #edebe1;
  border-top: 1px solid #d6d4ca;
  border-bottom: 1px solid #e1dfd5;
`;

const SearchTableTitleNo = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SearchTableTitleType = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SearchTableTitleTitle = styled.div`
  width: 540px;
  display: flex;
  justify-content: flex-start;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SearchTableTitleReadCount = styled.div`
  width: 70px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SearchTableContent = styled.div`
  width: 100%;
  height: 37px;
  display: flex;
  align-items: center;
`;

const SearchTableContentNo = styled.div`
  width: 40px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SearchTableContentType = styled.div`
  width: 120px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const SearchTableContentTitle = styled.span`
  width: 540px;
  display: block;
  font-size: 14px;
  color: #666;
  font-weight: 500;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    color: #666;
    font-style: bold;
    font-size: 15px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
`;

const SearchTableContentReadCount = styled.div`
  width: 70px;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

const NoticeBoxTableBox = ({ notices }) => {
  console.log(notices);
  return (
    <SearchTableBox>
      <SearchTableTitle>
        <SearchTableTitleNo>번호</SearchTableTitleNo>
        <SearchTableTitleType>구분</SearchTableTitleType>
        <SearchTableTitleTitle>제목</SearchTableTitleTitle>
        <SearchTableTitleReadCount>조회수</SearchTableTitleReadCount>
      </SearchTableTitle>
      {notices.map((notice) => (
        <SearchTableContent>
          <SearchTableContentNo>{notice.id}</SearchTableContentNo>
          <SearchTableContentType>{notice.sort}</SearchTableContentType>
          <Link
            to={{
              pathname: "/support/news/detail",
              state: {
                noticeId: notice.id,
              },
            }}
          >
            <SearchTableContentTitle>{notice.title}</SearchTableContentTitle>
          </Link>
          <SearchTableContentReadCount>
            {notice.readCount}
          </SearchTableContentReadCount>
        </SearchTableContent>
      ))}
    </SearchTableBox>
  );
};

export default NoticeBoxTableBox;
