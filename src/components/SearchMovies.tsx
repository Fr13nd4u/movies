import React, { FC, ChangeEvent, useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../hooks/redux";
import { filterMovies, sortMovies } from "../redux/movies/ActionCreators";

const SearchMovies: FC = () => {
  const [showSortBtn, setShowSortBtn] = useState<boolean>(true);
  const dispatch = useAppDispatch();

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(filterMovies(e.target.value));
  };

  const handleSort = () => {
    dispatch(sortMovies("title"));
    setShowSortBtn(false);
  };

  const handleCancelSort = () => {
    dispatch(sortMovies("id"));
    setShowSortBtn(true);
  };

  return (
    <SearchWrapper>
      <Input
        type="text"
        onChange={(e) => handleSearch(e)}
        placeholder="search by name or actor"
      />
      {showSortBtn ? (
        <button onClick={handleSort}>Sort by name</button>
      ) : (
        <button onClick={handleCancelSort}>Cancel sort</button>
      )}
    </SearchWrapper>
  );
};

const SearchWrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
  align-items: baseline;

  button {
    min-width: 200px;
    margin-left: 20px;
    padding: 5px 15px;
  }
`;

const Input = styled.input`
  width: 20%;
  text-align: center;
  border: none;
  background: transparent;
  border-bottom: 1px solid #fff;
  color: inherit;
  font-size: 22px;

  ::placeholder {
    color: rgba(255, 255, 255, 0.75);
  }
`;

export default SearchMovies;
