import React, { useState } from "react";
import "../App.css";
import styled from "styled-components";
import brickBg from "../images/movieFinder/bg_mainbanner.png";
import MovieChart from "./MovieChart";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "react-router-dom";
import MovieFinderItem from "../components/MovieFinderItem";

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

const MFContainer = styled.div`
  width: 100%;
  height: 460px;
  background-image: url(${brickBg});
`;

const MovieFinderBox = styled.div`
  width: 980px;
  height: 455px;
  background: #29353d;
  margin: 0 auto;
`;

const MFHeaderH3 = styled.h3`
  color: white;
  font-size: 20px;
  text-align: center;
  font-weight: 500;
  padding: 15px 0 10px;
  margin: 0;
`;

const MFTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-top: 1px solid #333e46;
`;

const MFTableTh = styled.th`
  text-align: left;
  vertical-align: middle;
  padding: 8px 0;
  padding-left: 34px;
  border-top: 1px solid #3e484f;
  color: #fdfcf0;
  font-size: 13px;
  width: 10%;
`;

const MFTableTd = styled.td`
  padding: 8px 0;
  border-top: 1px solid #3e484f;
  color: #fdfcf0;
  font-size: 13px;
  align-items: center;
  text-align: center;
  vertical-align: middle;
`;

const MFSubmitBox = styled.div`
  padding-top: 3px;
  text-align: center;
`;

const MFSubmitBtn = styled.button`
  width: 71px;
  margin: 0 3px;
  padding: 4px 0;
  background: #e71a0f;
  border: 2px solid #e71a0f;
  border-radius: 5px;
  color: #ffffff;
`;

const MFResetBtn = styled.button`
  width: 71px;
  margin: 0 3px;
  padding: 4px 0;
  border-radius: 5px;
  border: 2px solid #e71a0f;
  color: #e71a0f;
  background: #29353d;
`;

const MFUl = styled.ul`
  list-style: none;
  margin: 0;
  padding-left: 0;
`;

const MFAllLi = styled.li`
  display: inline-block;
  width: 14%;
  margin: 0;
  align-items: center;
`;

const MFCountryLi = styled.li`
  display: inline-block;
  width: auto;
  margin-right: 25px;
  align-items: center;
`;

const MFCheckText = styled.label`
  display: inline-block;
  padding: 1px 0;
`;

const MovieFinder = () => {
  const [findBy, setFindBy] = useState(1); // 영화제목/감독명
  const [keyword, setKeyword] = useState(""); // 키워드
  const [startYear, setStartYear] = useState("1960");
  const [endYear, setEndYear] = useState(new Date().getFullYear());
  const [isSearched, setIsSearched] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  let checkedCountryList = []; // 국가 선택 리스트

  const handleSelectChange = (e) => {
    setFindBy(e.target.value);
  };
  const handleKeyword = (e) => {
    setKeyword(e.target.value);
  };
  const handleCheckBox = (e) => {
    if (e.target.checked) {
      checkedCountryList.push(e.target.value);
    } else {
      let idx = checkedCountryList.indexOf(e.target.value);
      checkedCountryList.splice(idx, 1);
    }
  };
  const checkAll = (e) => {
    if (e.target.checked) {
      let checkboxes = document.getElementsByName("countryNm");
      checkboxes.forEach((checkbox) => {
        checkedCountryList.push(checkbox.value);
        checkbox.checked = true;
      });
    } else {
      let checkboxes = document.getElementsByName("countryNm");
      checkboxes.forEach((checkbox) => {
        checkedCountryList = [];
        checkbox.checked = false;
      });
    }
  };
  const handleStartYear = (e) => {
    setStartYear(e.target.value);
  };
  const handleEndYear = (e) => {
    setEndYear(e.target.value);
  };

  const reset = (e) => {
    e.preventDefault();

    setFindBy(1);
    setKeyword("");
    setStartYear("1960");
    setEndYear("2021");
    checkedCountryList = [];

    let checkboxes = document.getElementsByName("countryNm");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };

  const search = (e) => {
    e.preventDefault();
    let today = new Date();

    if (keyword === "") {
      alert("검색어를 입력해주세요.");
      return;
    }

    if (!checkedCountryList.length) {
      alert("국가를 선택해주세요.");
      return;
    }

    if (startYear === "" || endYear === "") {
      alert("개봉연도를 입력해주세요.");
      return;
    }

    if (isNaN(Number(startYear)) || isNaN(Number(endYear))) {
      alert("개봉연도에는 숫자만 입력할 수 있습니다.");
      return;
    }

    if (Number(startYear) < 1960 || Number(endYear) > today.getFullYear()) {
      alert(
        "개봉연도에는 1960년부터 " +
          today.getUTCFullYear() +
          "년 사이의 숫자만 입력할 수 있습니다."
      );
      return;
    }

    setIsSearched(true);
    let reqUrl = "http://localhost:8080/movie/search";
    reqUrl += "?sort=" + findBy;
    reqUrl += "&keyword=" + keyword;
    checkedCountryList.forEach((countryNm) => {
      reqUrl += "&countryNm=" + countryNm;
    });
    reqUrl += "&startYear=" + startYear;
    reqUrl += "&endYear=" + endYear;

    console.log(reqUrl);

    fetch(reqUrl)
      .then((res) => res.json())
      .then((res) => {
        if (res.statusCode === 1) {
          setSearchResult(res.data);
        } else {
          alert("검색 실패");
        }
      });
  };

  if (isSearched) {
    return (
      <>
        <MFContainer>
          <NavSection>
            <NavSectionItemBox>
              <NavSectionHome to="/">
                <HomeIcon />
              </NavSectionHome>
              <NavSectionArrow>〉</NavSectionArrow>
              <NavSectionSpan>영화</NavSectionSpan>
              <NavSectionArrow>〉</NavSectionArrow>
              <NavSectionSpan
                style={{ textDecoration: "underline", fontWeight: "700" }}
              >
                무비파인더
              </NavSectionSpan>
            </NavSectionItemBox>
          </NavSection>
          <MovieFinderBox>
            <MFHeaderH3>
              좋아하는 영화, 찾고싶은 영화를 CGV에서 찾아드립니다!
            </MFHeaderH3>
            <form onSubmit={(e) => e.preventDefault()}>
              <MFTable>
                <tr>
                  <MFTableTh>영화검색</MFTableTh>
                  <MFTableTd>
                    <select
                      className="MCselect"
                      onChange={handleSelectChange}
                      defaultValue="1"
                    >
                      <option value="1">영화제목</option>
                      <option value="2">감독명</option>
                    </select>
                    <input
                      type="text"
                      title="영화검색 키워드입력"
                      id="keyword"
                      placeholder="키워드를 입력해 주세요"
                      value={keyword}
                      className="MFInput"
                      onChange={handleKeyword}
                      style={{ color: "black" }}
                    />
                  </MFTableTd>
                </tr>

                {/* 제작국가 체크박스 */}
                <tr>
                  <MFTableTh>제작국가</MFTableTh>
                  <MFTableTd>
                    <MFUl>
                      <MFAllLi>
                        <input
                          type="checkbox"
                          id="country-checker"
                          className="MFCheckBox"
                          onChange={checkAll}
                        />
                        <MFCheckText>전체</MFCheckText>
                      </MFAllLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041011"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041011"
                        />
                        <MFCheckText>한국</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041001"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041001"
                        />
                        <MFCheckText>대만</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041002"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041002"
                        />
                        <MFCheckText>말레이시아</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041004"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041004"
                        />
                        <MFCheckText>싱가포르</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041005"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041005"
                        />
                        <MFCheckText>아프카니스탄</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041006"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041006"
                        />
                        <MFCheckText>이란</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041007"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041007"
                        />
                        <MFCheckText>인도</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041009"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041009"
                        />
                        <MFCheckText>중국</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041010"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041010"
                        />
                        <MFCheckText>태국</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041013"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041013"
                        />
                        <MFCheckText>이스라엘</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041014"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041014"
                        />
                        <MFCheckText>필리핀</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041015"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041015"
                        />
                        <MFCheckText>아랍에미리트</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041016"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041016"
                        />
                        <MFCheckText>몽고</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041017"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041017"
                        />
                        <MFCheckText>티베트</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041018"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041018"
                        />
                        <MFCheckText>카자흐스탄</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041019"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041019"
                        />
                        <MFCheckText>캄보디아</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041020"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041020"
                        />
                        <MFCheckText>이라크</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041021"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041021"
                        />
                        <MFCheckText>우즈베키스탄</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041022"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041022"
                        />
                        <MFCheckText>베트남</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041023"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041023"
                        />
                        <MFCheckText>인도네시아</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041024"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041024"
                        />
                        <MFCheckText>카타르</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041008"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041008"
                        />
                        <MFCheckText>일본</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041012"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041012"
                        />
                        <MFCheckText>홍콩</MFCheckText>
                      </MFCountryLi>
                    </MFUl>
                  </MFTableTd>
                </tr>
                <tr>
                  <MFTableTh>개봉연도</MFTableTh>
                  <MFTableTd>
                    <input
                      type="text"
                      id="year_start"
                      className="MFYearCheck"
                      value={startYear}
                      maxLength="4"
                      placeholder="1960"
                      number="number"
                      onChange={handleStartYear}
                    />
                    -
                    <input
                      type="text"
                      id="year_end"
                      className="MFYearCheck"
                      value={endYear}
                      maxLength="4"
                      placeholder="2021"
                      number="number"
                      onChange={handleEndYear}
                    />
                    년
                  </MFTableTd>
                </tr>
              </MFTable>
              <MFSubmitBox>
                <MFSubmitBtn onClick={search}>검색</MFSubmitBtn>
                <MFResetBtn onClick={reset}>초기화</MFResetBtn>
              </MFSubmitBox>
            </form>
          </MovieFinderBox>
        </MFContainer>
        <MovieFinderItem movies={searchResult} />
      </>
    );
  } else {
    return (
      <>
        <MFContainer>
          <NavSection>
            <NavSectionItemBox>
              <NavSectionHome to="/">
                <HomeIcon />
              </NavSectionHome>
              <NavSectionArrow>〉</NavSectionArrow>
              <NavSectionSpan>영화</NavSectionSpan>
              <NavSectionArrow>〉</NavSectionArrow>
              <NavSectionSpan
                style={{ textDecoration: "underline", fontWeight: "700" }}
              >
                무비파인더
              </NavSectionSpan>
            </NavSectionItemBox>
          </NavSection>
          <MovieFinderBox>
            <MFHeaderH3>
              좋아하는 영화, 찾고싶은 영화를 CGV에서 찾아드립니다!
            </MFHeaderH3>
            <form onSubmit={(e) => e.preventDefault()}>
              <MFTable>
                <tr>
                  <MFTableTh>영화검색</MFTableTh>
                  <MFTableTd>
                    <select
                      className="MCselect"
                      onChange={handleSelectChange}
                      defaultValue="1"
                    >
                      <option value="1">영화제목</option>
                      <option value="2">감독명</option>
                    </select>
                    <input
                      type="text"
                      title="영화검색 키워드입력"
                      id="keyword"
                      placeholder="키워드를 입력해 주세요"
                      value={keyword}
                      className="MFInput"
                      onChange={handleKeyword}
                      style={{ color: "black" }}
                    />
                  </MFTableTd>
                </tr>

                {/* 제작국가 체크박스 */}
                <tr>
                  <MFTableTh>제작국가</MFTableTh>
                  <MFTableTd>
                    <MFUl>
                      <MFAllLi>
                        <input
                          type="checkbox"
                          id="country-checker"
                          className="MFCheckBox"
                          onChange={checkAll}
                        />
                        <MFCheckText>전체</MFCheckText>
                      </MFAllLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041011"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041011"
                        />
                        <MFCheckText>한국</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041001"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041001"
                        />
                        <MFCheckText>대만</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041002"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041002"
                        />
                        <MFCheckText>말레이시아</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041004"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041004"
                        />
                        <MFCheckText>싱가포르</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041005"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041005"
                        />
                        <MFCheckText>아프카니스탄</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041006"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041006"
                        />
                        <MFCheckText>이란</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041007"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041007"
                        />
                        <MFCheckText>인도</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041009"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041009"
                        />
                        <MFCheckText>중국</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041010"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041010"
                        />
                        <MFCheckText>태국</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041013"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041013"
                        />
                        <MFCheckText>이스라엘</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041014"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041014"
                        />
                        <MFCheckText>필리핀</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041015"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041015"
                        />
                        <MFCheckText>아랍에미리트</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041016"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041016"
                        />
                        <MFCheckText>몽고</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041017"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041017"
                        />
                        <MFCheckText>티베트</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041018"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041018"
                        />
                        <MFCheckText>카자흐스탄</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041019"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041019"
                        />
                        <MFCheckText>캄보디아</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041020"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041020"
                        />
                        <MFCheckText>이라크</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041021"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041021"
                        />
                        <MFCheckText>우즈베키스탄</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041022"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041022"
                        />
                        <MFCheckText>베트남</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041023"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041023"
                        />
                        <MFCheckText>인도네시아</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041024"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041024"
                        />
                        <MFCheckText>카타르</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041008"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041008"
                        />
                        <MFCheckText>일본</MFCheckText>
                      </MFCountryLi>
                      <MFCountryLi>
                        <input
                          type="checkbox"
                          id="country-22041012"
                          className="MFCheckBox"
                          name="countryNm"
                          onChange={handleCheckBox}
                          value="22041012"
                        />
                        <MFCheckText>홍콩</MFCheckText>
                      </MFCountryLi>
                    </MFUl>
                  </MFTableTd>
                </tr>
                <tr>
                  <MFTableTh>개봉연도</MFTableTh>
                  <MFTableTd>
                    <input
                      type="text"
                      id="year_start"
                      className="MFYearCheck"
                      value={startYear}
                      maxLength="4"
                      placeholder="1960"
                      number="number"
                      onChange={handleStartYear}
                    />
                    -
                    <input
                      type="text"
                      id="year_end"
                      className="MFYearCheck"
                      value={endYear}
                      maxLength="4"
                      placeholder="2021"
                      number="number"
                      onChange={handleEndYear}
                    />
                    년
                  </MFTableTd>
                </tr>
              </MFTable>
              <MFSubmitBox>
                <MFSubmitBtn onClick={search}>검색</MFSubmitBtn>
                <MFResetBtn onClick={reset}>초기화</MFResetBtn>
              </MFSubmitBox>
            </form>
          </MovieFinderBox>
        </MFContainer>
        <MovieChart />
      </>
    );
  }
};

export default MovieFinder;
