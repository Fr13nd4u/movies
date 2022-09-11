import React, { FC, useState } from "react";
import styled from "styled-components";
import { useAppSelector } from "../hooks/redux";
import { IMovie } from "../interfaces";

import AddMovieForm from "../shared/forms/AddMovieForm";
import Modal from "../shared/Modal";
import MovieItem from "./MovieItem";

const MoviesList: FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const [modalAddMovie, setModalAddMovie] = useState(false);
  const { filteredMovies } = useAppSelector((state) => state.moviesReducer);

  return (
    <>
      <Modal
        title="Add new movie"
        active={modalActive}
        setActive={setModalActive}
      >
        <AddMovieForm
          setActive={setModalActive}
          setModalAddMovie={setModalAddMovie}
        />
      </Modal>

      <Modal title="" active={modalAddMovie} setActive={setModalAddMovie}>
        <ModalAddedMovie>
          <h3>
            Movie{" "}
            {filteredMovies.length > 0 &&
              filteredMovies?.[filteredMovies.length - 1].title}{" "}
            was added
          </h3>
          <button onClick={() => setModalAddMovie(false)}>OK</button>
        </ModalAddedMovie>
      </Modal>
      <MoviesTitle>
        <h1>List of movies (upload: {filteredMovies.length})</h1>
        <button onClick={() => setModalActive(true)}>Add new movie</button>
      </MoviesTitle>
      <MoviesWrapper>
        {filteredMovies.map((movie: IMovie) => (
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

const ModalAddedMovie = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-bottom: 30px;
  }
`;

export default MoviesList;
