import React, { FC, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";
import { IMovie } from "../interfaces";

import AddMovieForm from "../shared/forms/AddMovieForm";
import Modal from "../shared/Modal";
import MovieItem from "./MovieItem";

const MoviesList: FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const { filteredMovies } = useAppSelector((state) => state.moviesReducer);

  return (
    <>
      <Modal
        title="Add new movie"
        active={modalActive}
        setActive={setModalActive}
      >
        <AddMovieForm setActive={setModalActive} />
      </Modal>
      <MoviesTitle>
        <h1>List of movies</h1>
        <button onClick={() => setModalActive(true)}>Add new movie</button>
      </MoviesTitle>
      <MoviesWrapper>
        {filteredMovies
          .filter((movie: IMovie) => movie.title !== undefined)
          .map((movie: IMovie) => (
            <MovieItem key={movie.id} movie={movie} />
          ))}
      </MoviesWrapper>
    </>
  );
};

const MoviesWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 80%;
  margin: auto;
`;

const MoviesTitle = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 50px;
`;

export default MoviesList;
