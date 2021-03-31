import React from "react";
import styled from "styled-components";
import btnPaging from "../../images/button/btn_paging.gif";

const PagingBox = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

const PagingSpan = styled.span`
  color: #333333;
  font-weight: bold;
  line-height: 28px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #993333;
    text-decoration: underline;
  }
`;

const PageButton = styled.button`
  display: inline-block;
  min-width: 56px;
  height: 28px;
  margin: 0 2px;
  border: 1px solid #cacac1;
  color: #333333;
  font-size: 11px;
  font-weight: 600;
  line-height: 28px;
  vertical-align: middle;
  overflow: visible;
  background: #faf9ed url(${btnPaging}) no-repeat;
`;

const NextPageButton = styled(PageButton)`
  padding: 0 24px 0 10px;
  background-position: right -52px;
`;

const PrevPageButton = styled(PageButton)`
  padding: 0 10px 0 24px;
  background-position: 0 0;
`;

const BoardPagingBox = ({
  currentPage,
  postsPerPage,
  totalPosts,
  paginate,
}) => {
  const pageNumbers = [];
  for (var i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  if (currentPage === 1 && pageNumbers.length === 1) {
    return (
      <PagingBox>
        {pageNumbers.map((number) => (
          <PagingSpan key={number} onClick={() => paginate(number)}>
            {number}
          </PagingSpan>
        ))}
      </PagingBox>
    );
  } else if (currentPage === 1 && pageNumbers.length > 1) {
    return (
      <PagingBox>
        {pageNumbers.map((number) => (
          <PagingSpan key={number} onClick={() => paginate(number)}>
            {number}
          </PagingSpan>
        ))}
        <NextPageButton onClick={() => paginate(currentPage + 1)}>
          다음
        </NextPageButton>
      </PagingBox>
    );
  } else if (
    currentPage !== 1 &&
    pageNumbers.length >= 2 &&
    currentPage !== pageNumbers.length
  ) {
    return (
      <PagingBox>
        <PrevPageButton onClick={() => paginate(currentPage - 1)}>
          이전
        </PrevPageButton>
        {pageNumbers.map((number) => (
          <PagingSpan key={number} onClick={() => paginate(number)}>
            {number}
          </PagingSpan>
        ))}
        <NextPageButton onClick={() => paginate(currentPage + 1)}>
          다음
        </NextPageButton>
      </PagingBox>
    );
  } else {
    return (
      <PagingBox>
        <PrevPageButton onClick={() => paginate(currentPage - 1)}>
          이전
        </PrevPageButton>
        {pageNumbers.map((number) => (
          <PagingSpan key={number} onClick={() => paginate(number)}>
            {number}
          </PagingSpan>
        ))}
      </PagingBox>
    );
  }
};

export default BoardPagingBox;
