import React from "react";
import GlobalStyle from "./styles/global";
import styled from "styled-components";

import MoviesList from "./components/MoviesList";
import SearchMovies from "./components/SearchMovies";
import UploadFile from "./components/UploadFile";

const App = () => {
  return (
    <AppWrapper>
      <GlobalStyle />
      <SearchMovies />
      <UploadFile />
      <MoviesList />
    </AppWrapper>
  );
};

const AppWrapper = styled.div`
  width: 80%;
  margin: 100px auto;
  text-align: center;
`;

export default App;
