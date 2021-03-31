import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const SearchTableContentTitle = styled(Link)`
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

const SearchTableContentBox = ({ notice }) => {
  return (
    <SearchTableContent>
      <SearchTableContentNo>{notice.id}</SearchTableContentNo>
      <SearchTableContentType>
        {notice.sort === 1
          ? "[극장]"
          : notice.sort === 2
          ? "[시스템 점검]"
          : "[기타]"}
      </SearchTableContentType>
      <SearchTableContentTitle>{notice.title}</SearchTableContentTitle>
      <SearchTableContentReadCount>
        {notice.readCount}
      </SearchTableContentReadCount>
    </SearchTableContent>
  );
};

export default SearchTableContentBox;
