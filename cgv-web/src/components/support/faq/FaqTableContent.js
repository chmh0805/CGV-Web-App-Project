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

const FaqTableContent = ({ faqs }) => {
  return (
    <>
      {faqs.map((faq) => (
        <SearchTableContent>
          <SearchTableContentNo>{faq.id}</SearchTableContentNo>
          <SearchTableContentType>{faq.sort}</SearchTableContentType>
          <Link
            to={{
              pathname: "/support/faq/detail",
              state: {
                faqId: faq.id,
              },
            }}
          >
            <SearchTableContentTitle>{faq.title}</SearchTableContentTitle>
          </Link>
          <SearchTableContentReadCount>
            {faq.readCount}
          </SearchTableContentReadCount>
        </SearchTableContent>
      ))}
    </>
  );
};

export default FaqTableContent;
