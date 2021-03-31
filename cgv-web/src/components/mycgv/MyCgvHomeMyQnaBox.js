import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MainContentsCommonItemBox = styled.div`
  width: 100%;
  height: auto;
  border: 1px solid #656560;
  margin-bottom: 30px;
  line-height: 1.2;
  color: #666;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
`;

const MainContentsCommonItemBoxInner = styled.div`
  width: 100%;
  height: auto;
  padding: 26px;
`;

const MainContentsCommonItemBoxListItem = styled.div`
  min-height: 15px;
  line-height: 1.2;
  color: #666;
  font-size: 12px;
  font-family: "CJONLYONENEW", "맑은 고딕", "돋움", Dotum, sans-serif;
  font-weight: 300;
`;

const MyCgvHomeMyQnaBox = ({ qnas }) => {
  if (qnas !== []) {
    return (
      <>
        <MainContentsCommonItemBox>
          {qnas.map((qna) => (
            <MainContentsCommonItemBoxInner>
              <Link
                to={{
                  pathname: "/user/mycgv/myqna/detail",
                  state: {
                    qnaId: qna.id,
                  },
                }}
              >
                <MainContentsCommonItemBoxListItem>
                  {qna.title}
                </MainContentsCommonItemBoxListItem>
              </Link>
            </MainContentsCommonItemBoxInner>
          ))}
        </MainContentsCommonItemBox>
      </>
    );
  } else {
    return (
      <MainContentsCommonItemBox>
        <MainContentsCommonItemBoxInner>
          <MainContentsCommonItemBoxListItem>
            고객님의 1:1 문의내역이 존재하지 않습니다.
          </MainContentsCommonItemBoxListItem>
        </MainContentsCommonItemBoxInner>
      </MainContentsCommonItemBox>
    );
  }
};

export default MyCgvHomeMyQnaBox;
