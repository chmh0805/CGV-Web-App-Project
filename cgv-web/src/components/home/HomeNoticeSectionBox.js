import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const HomeNoticeSectionContentBox = styled.div`
  width: 730px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-bottom: 5px;
`;

const HomeNoticeSectionContent = styled(Link)`
  color: #666;

  &:hover {
      color: #666;
  }
`;

const HomeNoticeSectionDateBox = styled.div`
  width: 150px;
  display: flex;
  justify-content: flex-end;
  padding-right: 5px;
  font-size: 14px;
`;

const HomeNoticeSectionDate = styled.span``;

const HomeNoticeSectionBox = () => {
  const [noticeOne, setNoticeOne] = useState({});

  useEffect(() => {
    fetch("http://localhost:8080/notice/limit/1")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        if (res.statusCode === 1) {
          setNoticeOne(res.data[0]);
        }
      });
  }, []);

  if (noticeOne !== undefined) {
  return (
      <>
    <HomeNoticeSectionContentBox>
            <HomeNoticeSectionContent to={{
                pathname: "/support/news/detail",
                state: {noticeId : noticeOne.id},
            }}>
              {noticeOne.title}
            </HomeNoticeSectionContent>
          </HomeNoticeSectionContentBox>
          <HomeNoticeSectionDateBox>
            <HomeNoticeSectionDate>{noticeOne.createDate}</HomeNoticeSectionDate>
          </HomeNoticeSectionDateBox>
          </>
  )
    } else {
        return (
         <>
    <HomeNoticeSectionContentBox>
            <HomeNoticeSectionContent>
              
            </HomeNoticeSectionContent>
          </HomeNoticeSectionContentBox>
          <HomeNoticeSectionDateBox>
            <HomeNoticeSectionDate></HomeNoticeSectionDate>
          </HomeNoticeSectionDateBox>
          </>
  )
    }
};

export default HomeNoticeSectionBox;
