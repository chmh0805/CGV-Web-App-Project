import React from "react";
import styled from "styled-components";

const TicketingMovieBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding-top: 10%;
  padding-left: 10%;
`;

const TicketingMovieSection = styled.div`
  width: 100%;
  overflow: auto;
  margin-top: 3px;
  height: 100%;
`;

const TicketingMovieItem = styled.div`
  width: 100%;
  height: 35px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #333;
  font-size: 15px;
  cursor: pointer;
  margin-top: 10px;
  margin-bottom: 10px;
`;
const TicketingStep1MovieBox = ({ movieList, setSelectedMovie }) => {
  let movies = movieList;

  const selectOne = (movie) => {
    setSelectedMovie(movie);
  };

  return (
    <TicketingMovieBox>
      <TicketingMovieSection>
        {movies.map((movie) => (
          <>
            <TicketingMovieItem onClick={(e) => selectOne(movie)}>
              {movie.title}
            </TicketingMovieItem>
          </>
        ))}
      </TicketingMovieSection>
    </TicketingMovieBox>
  );
};

export default TicketingStep1MovieBox;
