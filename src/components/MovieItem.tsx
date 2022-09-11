import React, { FC, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/redux";
import { IMovie } from "../interfaces";
import { removeMovie } from "../redux/movies/ActionCreators";
import Modal from "../shared/Modal";

interface IMovieItem {
  movie: IMovie;
}

const MovieItem: FC<IMovieItem> = ({ movie }) => {
  const [modalActive, setModalActive] = useState(false);
  const { title, year, format, actors, id } = movie;
  const dispatch = useAppDispatch();

  const handleRemove = () => {
    setModalActive(false);
    dispatch(removeMovie(id));
  };

  return (
    <MovieWrapper>
      <MovieTitle>
        <h3>{title}</h3>
        <p>{year}</p>
      </MovieTitle>
      <MovieBody>
        <h4>
          Format: <span>{format}</span>
        </h4>
        <h4>
          Stars: <span>{actors.join(", ")}</span>
        </h4>

        <button onClick={() => setModalActive(true)}>Delete</button>
      </MovieBody>

      <Modal
        title="Removing the movie"
        active={modalActive}
        setActive={setModalActive}
      >
        <ModalContent>
          <h3>Are you sure you want to delete {title}?</h3>
          <div>
            <button onClick={handleRemove}>Delete</button>
            <button onClick={() => setModalActive(false)}>Cancel</button>
          </div>
        </ModalContent>
      </Modal>
    </MovieWrapper>
  );
};

const MovieWrapper = styled.div`
  height: min-content;
  margin: 20px 20px 50px;
  background: rgba(255, 255, 255, 0.2);
  padding: 20px;
  border-radius: 5px;
  text-align: justify;
  width: 350px;
`;

const MovieTitle = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  p {
    margin-left: 15px;
    font-weight: 600;
  }
`;

const MovieBody = styled.div`
  transition: 0.4s ease-in-out;
  opacity: 0;
  height: 0;
  overflow: hidden;

  ${MovieWrapper}:hover & {
    transition: 0.4s ease-in-out;
    opacity: 1;
    height: auto;
    margin-bottom: 30px;
  }

  h4 {
    margin: 20px 0 15px;

    span {
      font-weight: 400;
    }
  }

  button {
    margin-top: 15px;
    font-size: 16px;
    width: 100%;
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h3 {
    margin-bottom: 30px;
  }

  button {
    margin-right: 20px;
  }
`;

export default MovieItem;
