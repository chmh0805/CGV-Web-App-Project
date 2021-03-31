import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const TableContentSec = styled.div`
  width: 100%;
  height: 35px;
  display: flex;
`;

const TableContent = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 13px;
  line-height: 34px;
  color: #666;
`;

const TableNoContent = styled(TableContent)`
  width: 150px;
`;

const TableNameContent = styled(TableContent)`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const TableCreateDateContent = styled(TableContent)`
  width: 200px;
`;

const TableStateContent = styled(TableContent)`
  width: 100px;
`;

const TableContentSection = ({ qnas }) => {
  return (
    <>
      {qnas.map((qna) => (
        <TableContentSec>
          <TableNoContent>{qna.id}</TableNoContent>
          <Link
            to={{
              pathname: "/user/mycgv/myqna/detail",
              state: {
                qnaId: qna.id,
              },
            }}
          >
            <TableNameContent>{qna.title}</TableNameContent>
          </Link>
          <TableCreateDateContent>{qna.createDate}</TableCreateDateContent>
          <TableStateContent>{qna.state}</TableStateContent>
        </TableContentSec>
      ))}
    </>
  );
};

export default TableContentSection;
