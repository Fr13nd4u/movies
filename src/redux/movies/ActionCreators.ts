// import axios from "axios";
import { IMovie } from "../../interfaces";
import { AppDispatch } from "../store";
import { moviesSlice } from "./moviesSlice";

// export const moviesPostData = (data: any) => async (dispatch: AppDispatch) => {

//   await axios.post("http://localhost:8000/api/v1/movies", {
//       data,
//       headers: {
//         'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJwZXRyb0BnbWFpbC5jb20iLCJuYW1lIjoiUGV0cm92IFBldHJvIiwiY3JlYXRlZEF0IjoiMjAyMi0wOS0wOFQwOTo1NDo0NC42NTFaIiwidXBkYXRlZEF0IjoiMjAyMi0wOS0wOFQwOTo1NDo0NC42NTFaIiwiaWF0IjoxNjYyNjMwODg0fQ.elGktwAaprsxY0-EhnfTTyu_SSF_JDa5U2GfAvop-qw'
//       },
//     })
//     .then(res => {
//       dispatch(moviesSlice.actions.setMovies(res.data));
//     })
//     .catch(err => console.log(err))
  
// };

export const setMovies = (movies: IMovie[]) => (dispatch: AppDispatch) => {
  dispatch(moviesSlice.actions.setMovies(movies))
}

export const addMovie = (movie: IMovie) => (dispatch: AppDispatch) => {
  dispatch(moviesSlice.actions.addMovie(movie))
}

export const removeMovie = (id: number) => (dispatch: AppDispatch) => {
  dispatch(moviesSlice.actions.removeMovie(id))
};

export const filterMovies = (item: string) => (dispatch: AppDispatch) => {
  dispatch(moviesSlice.actions.filterMovies(item))
}

export const sortMovies = (item: string) => (dispatch: AppDispatch) => {
  dispatch(moviesSlice.actions.sortMovies(item))
}