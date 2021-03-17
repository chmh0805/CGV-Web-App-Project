import React from "react";
import styled from "styled-components";

const MovieReplyBox = styled.li`
  width: 370px;
  height: 150px;
  border-bottom: 1px solid #ceccc1;
  padding: 30px 0;
  float: left;
  position: relative;
`;

const MovieDetailReply = () => {
  return (
    <div>
      <MovieReplyBox></MovieReplyBox>
    </div>
  );
};

export default MovieDetailReply;
