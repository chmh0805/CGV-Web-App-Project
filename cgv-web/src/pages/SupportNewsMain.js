<<<<<<< HEAD
import React, { useState } from "react";
=======
import React, { useEffect, useState } from "react";
>>>>>>> df8b69b39f38e0b557c877e3bdf1364bef5fba8d
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import SupportAsidesBox from "../components/SupportAsidesBox";
import { getCookie, setCookie } from "../utils/JWT";
<<<<<<< HEAD
import SearchTableContentBox from "../components/notice/SearchTableContentBox";
=======
import NoticeBoxTableBox from "../components/support/notice/NoticeBoxTableBox";
import BoardPagingBox from "../components/support/BoardPagingBox";
>>>>>>> df8b69b39f38e0b557c877e3bdf1364bef5fba8d

const SupportMainContainer = styled.div`
  background-color: #fdfcf0;
  width: auto;
  height: auto;
  min-height: 899px;
  padding-bottom: 100px;
`;

const NavSection = styled.div`
  background-color: #f1f0e5;
  width: auto;
  height: 30px;
  border-bottom: 1px solid #cacac0;
`;

const NavSectionItemBox = styled.div`
  width: 980px;
  padding-top: 5px;
  height: auto;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavSectionHome = styled(Link)`
  color: black;

  &:hover {
    color: black;
  }
`;

const NavSectionArrow = styled.span`
  color: #999999;
  font-size: 16px;
  font-weight: 1000;
  margin-left: 15px;
  margin-right: 15px;
`;

const NavSectionSpan = styled.span`
  font-size: 13px;
`;

const SupportSubContainer = styled.div`
  width: 980px;
  height: auto;
  margin: 0 auto;
  margin-top: 25px;
  display: flex;
  justify-content: space-between;
`;

const MainContentsBox = styled.div`
  width: 800px;
`;

const MainCustomerTop = styled.div`
  width: 100%;
  height: auto;
`;

const MainCustomerTopH2 = styled.h2`
  font-size: 16px;
  line-height: 1.2;
  color: #666;
  font-weight: 600;
  margin-bottom: 0px;
`;

const MainCustomerTopP = styled.p`
  margin-top: 5px;
  font-size: 14px;
  line-height: 1.2;
  color: #666;
`;

const MainCustomerInputBox = styled.div`
  width: 100%;
  overflow: hidden;
  margin-top: 20px;
  line-height: 1.2;
  color: #666;
`;

const MainCustomerInput = styled.input`
  width: 275px;
  height: 25px;
  line-height: 22px;
  padding-left: 10px;
  font-size: 12px;
  border: 1px solid #b5b5b5;
`;

const MainCustomerInputButton = styled.button`
  padding: 0 12px;
  border: 1px solid #5b5b58;
  display: inline-block;
  position: relative;
  color: #ffffff;
  line-height: 21px;
  font-weight: 600;
  text-align: center;
  background-color: #222222;
  margin-left: 3px;
  border-radius: 3px;
`;

const SearchResultBox = styled.div`
  width: 100%;
  height: 15px;
  margin: 30px 0px 10px 0px;
  line-height: 1.2;
  font-size: 14px;
  color: #666;
`;

<<<<<<< HEAD
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

=======
>>>>>>> df8b69b39f38e0b557c877e3bdf1364bef5fba8d
const PagingBoxSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  border-top: 1px solid #b8b6aa;
`;

const SupportNewsMain = () => {
  setCookie("now-space", "support-news");
  const [notices, setNotices] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  useEffect(() => {
    fetch("http://localhost:8080/notice")
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 1) {
          setNotices(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;

  function currentPosts(tmp) {
    let currentPosts = 0;
    currentPosts = tmp.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  }

  const [keyword, setKeyword] = useState("");

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  function search() {
    let key = keyword.trim();

    fetch("http://localhost:8080/notice/" + key)
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 1) {
          setNotices(res.data);
        }
      });
  }

  const [isLoaded, setIsLoaded] = useState(true);
  const [notices, setNotices] = useState([]);

  const loadData = async () => {
    if (isLoaded) {
      setIsLoaded(false);

      await fetch("http://localhost:8080/support/news")
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.statusCode === 1) {
            setNotices(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  loadData();

  return (
    <SupportMainContainer>
      <NavSection>
        <NavSectionItemBox>
          <NavSectionHome to="/">
            <HomeIcon />
          </NavSectionHome>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan>고객센터</NavSectionSpan>
          <NavSectionArrow>〉</NavSectionArrow>
          <NavSectionSpan
            style={{ textDecoration: "underline", fontWeight: "700" }}
          >
            공지/뉴스
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <SupportSubContainer>
        <SupportAsidesBox nowSpace={getCookie("now-space")} />
        <MainContentsBox>
          <MainCustomerTop>
            <MainCustomerTopH2>공지/뉴스</MainCustomerTopH2>
            <MainCustomerTopP>
              CGV의 주요한 이슈 및 여러가지 소식들을 확인하실 수 있습니다.
            </MainCustomerTopP>
            <MainCustomerInputBox>
              <form onSubmit={(e) => e.preventDefault()}>
                <MainCustomerInput
                  placeholder="검색어를 입력해 주세요"
                  value={keyword}
                  onChange={handleInput}
                  type="text"
                />
                <MainCustomerInputButton onClick={() => search()}>
                  검색하기
                </MainCustomerInputButton>
              </form>
            </MainCustomerInputBox>
          </MainCustomerTop>
          <SearchResultBox>
            총&nbsp;
            <span style={{ fontStyle: "bold" }}>{notices.length}건</span>이
            검색되었습니다.
          </SearchResultBox>
<<<<<<< HEAD
          <SearchTableBox>
            <SearchTableTitle>
              <SearchTableTitleNo>번호</SearchTableTitleNo>
              <SearchTableTitleType>구분</SearchTableTitleType>
              <SearchTableTitleTitle>제목</SearchTableTitleTitle>
              <SearchTableTitleReadCount>조회수</SearchTableTitleReadCount>
            </SearchTableTitle>
            {notices.map((notice) => (
              <SearchTableContentBox notice={notice} />
            ))}
          </SearchTableBox>
=======
          <NoticeBoxTableBox notices={currentPosts(notices)} />
>>>>>>> df8b69b39f38e0b557c877e3bdf1364bef5fba8d
          <PagingBoxSection>
            <BoardPagingBox
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              totalPosts={notices.length}
              paginate={setCurrentPage}
            />
          </PagingBoxSection>
        </MainContentsBox>
      </SupportSubContainer>
    </SupportMainContainer>
  );
};

export default SupportNewsMain;
