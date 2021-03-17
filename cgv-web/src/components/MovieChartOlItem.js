import React from "react";
import styled from "styled-components";
import MovieChartItem from "./MovieChartItem";

const ItemOl = styled.ol`
  list-style: none;
  border-bottom: 3px solid #241d1e;
  height: 452px;
  padding-left: 0;
`;

const ItemLi = styled.li`
  margin-left: -64px;
`;

const MovieChartOlItem = () => {
  return (
    <ItemOl>
      <ItemLi>
        <MovieChartItem />
      </ItemLi>
      <li>
        <MovieChartItem />
      </li>
      <li>
        <MovieChartItem />
      </li>
      <li>
        <MovieChartItem />
      </li>
    </ItemOl>
  );
};

export default MovieChartOlItem;
