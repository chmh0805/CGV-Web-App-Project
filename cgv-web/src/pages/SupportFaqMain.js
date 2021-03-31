import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import HomeIcon from "@material-ui/icons/Home";
import btnPaging from "../images/button/btn_paging.gif";
import SupportAsidesBox from "../components/SupportAsidesBox";
import { getCookie, setCookie } from "../utils/JWT";
import FaqTableContent from "../components/faq/FaqTableContent";
import BoardPagingBox from "../components/support/BoardPagingBox";

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

const PagingBoxSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  border-top: 1px solid #b8b6aa;
`;

const SupportFaqMain = () => {
  setCookie("now-space", "support-faq");

  const [faqs, setFaqs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/faq")
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.statusCode === 1) {
          setFaqs(res.data);
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

  const handleInput = (e) => {
    setKeyword(e.target.value);
  };

  function search() {
    let key = keyword.trim();

    fetch("http://localhost:8080/faq/search/" + key)
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 1) {
          setFaqs(res.data);
        }
      });
  }

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
            자주 찾는 질문
          </NavSectionSpan>
        </NavSectionItemBox>
      </NavSection>
      <SupportSubContainer>
        <SupportAsidesBox nowSpace={getCookie("now-space")} />
        <MainContentsBox>
          <MainCustomerTop>
            <MainCustomerTopH2>자주 찾는 질문</MainCustomerTopH2>
            <MainCustomerTopP>
              회원님들께서 가장 자주하시는 질문을 모았습니다.
              <br />
              궁금하신 내용에 대해 검색해보세요.
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
            <span style={{ fontStyle: "bold" }}>{faqs.length}건</span>이
            검색되었습니다.
          </SearchResultBox>
          <SearchTableBox>
            <SearchTableTitle>
              <SearchTableTitleNo>번호</SearchTableTitleNo>
              <SearchTableTitleType>구분</SearchTableTitleType>
              <SearchTableTitleTitle>제목</SearchTableTitleTitle>
              <SearchTableTitleReadCount>조회수</SearchTableTitleReadCount>
            </SearchTableTitle>
            <FaqTableContent faqs={currentPosts(faqs)} />
          </SearchTableBox>
          <PagingBoxSection>
            <BoardPagingBox
              currentPage={currentPage}
              postsPerPage={postsPerPage}
              totalPosts={faqs.length}
              paginate={setCurrentPage}
            />
          </PagingBoxSection>
        </MainContentsBox>
      </SupportSubContainer>
    </SupportMainContainer>
  );
};

export default SupportFaqMain;
