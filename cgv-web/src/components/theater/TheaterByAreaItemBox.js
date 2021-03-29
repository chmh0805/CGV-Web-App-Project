import React from "react";
import styled from "styled-components";

const TheaterByAreaBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #dbdbdb;
  font-size: 14px;
  line-height: 42px;
`;

const TheaterByAreaItem = styled.div`
  width: 60px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #dbdbdb;
  font-size: 14px;
  line-height: 42px;
  margin-left: 15px;
  margin-right: 15px;
  cursor: pointer;
`;

const TheaterByAreaItemBox = ({ theatersByArea, findTheaterDetails }) => {
  return (
    <TheaterByAreaBox>
      {theatersByArea.map((theaterName) => (
        <TheaterByAreaItem onClick={() => findTheaterDetails(theaterName)}>
          {theaterName}
        </TheaterByAreaItem>
      ))}
    </TheaterByAreaBox>
  );
};

export default TheaterByAreaItemBox;
