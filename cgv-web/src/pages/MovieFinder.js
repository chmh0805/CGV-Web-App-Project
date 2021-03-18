import React from "react";
import "../App.css";
import styled from "styled-components";
import brickBg from "../images/movieFinder/bg_mainbanner.png";
import MovieChart from "./MovieChart";

const MFContainer = styled.div`
  width: 100%;
  height: 455px;
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
  padding: 11px 0;
  padding-left: 34px;
  border-top: 1px solid #3e484f;
  color: #fdfcf0;
  font-size: 13px;
  width: 10%;
`;

const MFTableTd = styled.td`
  padding: 11px 0;
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
  return (
    <>
      <MFContainer>
        <MovieFinderBox>
          <MFHeaderH3>
            좋아하는 영화, 찾고싶은 영화를 CGV에서 찾아드립니다!
          </MFHeaderH3>
          <form>
            <MFTable>
              <tr>
                <MFTableTh>영화검색</MFTableTh>
                <MFTableTd>
                  <select id="" name="" className="MCselect">
                    <option value="1">전체</option>
                    <option value="2">영화제목</option>
                    <option value="3">주연배우</option>
                    <option value="3">감독</option>
                  </select>
                  <input
                    type="text"
                    title="영화검색 키워드입력"
                    id="keyword"
                    placeholder="키워드를 입력해 주세요"
                    value=""
                    className="MFInput"
                  />
                </MFTableTd>
              </tr>

              {/* 장르 체크박스 */}
              <tr>
                <MFTableTh>장르</MFTableTh>
                <MFTableTd>
                  <MFUl>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>전체</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>가족</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>공포/호러</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>드라마</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>SF</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>멜로/로맨스</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>코미디</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>애니메이션</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>느와르</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>단편</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>다큐멘터리</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>로드무비</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>무협</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>뮤지컬</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>뮤직</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>미스터리</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>범죄</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>옴니버스</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>서부</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>스릴러</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>스포츠</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>시대극/사극</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>아동</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>액션</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>어드벤쳐</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>역사</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>전기</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>전쟁</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>종교</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>재난</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>청춘영화</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>퀴어</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>판타지</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>학원물</MFCheckText>
                    </MFAllLi>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>에로</MFCheckText>
                    </MFAllLi>
                  </MFUl>
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
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>전체</MFCheckText>
                    </MFAllLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>한국</MFCheckText>
                    </MFCountryLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>미국</MFCheckText>
                    </MFCountryLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>일본</MFCheckText>
                    </MFCountryLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>중국</MFCheckText>
                    </MFCountryLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>홍콩</MFCheckText>
                    </MFCountryLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>프랑스</MFCheckText>
                    </MFCountryLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>영국</MFCheckText>
                    </MFCountryLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>독일</MFCheckText>
                    </MFCountryLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>인도</MFCheckText>
                    </MFCountryLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>기타</MFCheckText>
                    </MFCountryLi>
                  </MFUl>
                </MFTableTd>
              </tr>

              {/* 관람등급 체크박스 */}
              <tr>
                <MFTableTh>관람등급</MFTableTh>
                <MFTableTd>
                  <MFUl>
                    <MFAllLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>전체</MFCheckText>
                    </MFAllLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>전체관람가</MFCheckText>
                    </MFCountryLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>12세 관람가</MFCheckText>
                    </MFCountryLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>15세 관람가</MFCheckText>
                    </MFCountryLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>청소년 관람불가</MFCheckText>
                    </MFCountryLi>
                    <MFCountryLi>
                      <input
                        type="checkbox"
                        id=""
                        className="MFCheckBox"
                        value=""
                        checked="checked"
                      />
                      <MFCheckText>미정</MFCheckText>
                    </MFCountryLi>
                  </MFUl>
                </MFTableTd>
              </tr>
              <tr>
                <MFTableTh>제작년도</MFTableTh>
                <MFTableTd>
                  <input
                    type="text"
                    id="year_start"
                    className="MFYearCheck"
                    value="1960"
                    maxlength="4"
                    placeholder="시작년도 입력해주세요."
                    title="시작년도 입력해주세요."
                    number="number"
                  />
                  -
                  <input
                    type="text"
                    id="year_start"
                    className="MFYearCheck"
                    value="2021"
                    maxlength="4"
                    placeholder="시작년도 입력해주세요."
                    title="시작년도 입력해주세요."
                    number="number"
                  />
                  년
                </MFTableTd>
              </tr>
            </MFTable>
            <MFSubmitBox>
              <MFSubmitBtn>검색</MFSubmitBtn>
              <MFResetBtn>초기화</MFResetBtn>
            </MFSubmitBox>
          </form>
        </MovieFinderBox>
      </MFContainer>
      <MovieChart />
    </>
  );
};

export default MovieFinder;
