import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IMovie } from "../../interfaces";

interface IinitialState {
  movies: IMovie[] | [];
  filteredMovies: IMovie[] | [];
}

const initialState: IinitialState = {
  movies: [],
  filteredMovies: [],
};

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    // moviesPostData(state, action: PayloadAction<IMovie[]>) {
    //   state.movies = action.payload;
    // },
    setMovies: (state, action: PayloadAction<IMovie[]>) => {
      state.movies = action.payload.concat(state.movies)
      state.filteredMovies = action.payload.concat(state.filteredMovies)
    },
  
    addMovie: (state, action: PayloadAction<IMovie>) => {
      state.movies = [...state.movies, action.payload]
      state.filteredMovies = [...state.filteredMovies, action.payload]
    },

    removeMovie: (state, action: PayloadAction<number>) => {
      state.movies = [...state.movies].filter(item => item.id !== action.payload)
      state.filteredMovies = [...state.filteredMovies].filter(item => item.id !== action.payload)
    },

    filterMovies: (state, action: PayloadAction<string>) => {
      const filteredMovies = state.movies.filter(item => 
        item.title.toLowerCase().includes(action.payload.toLowerCase()) ||
        item.actors.join(', ').toLowerCase().includes(action.payload.toLowerCase())
      )

      state.filteredMovies = action.payload.length > 0 ? filteredMovies : [...state.movies]
    },

    sortMovies: (state, action: PayloadAction<string>) => {
      const sortBy = <K extends string, T extends Record<K, number | string | string[]>>(
        items: T[],
        dateFieldName: K,
      ) => items.sort((a: T, b: T) => (a[dateFieldName] > b[dateFieldName]) ? 1 : ((b[dateFieldName] > a[dateFieldName]) ? -1 : 0))

      state.movies = sortBy(state.movies, action.payload)
      state.filteredMovies = sortBy(state.filteredMovies, action.payload)
    },
  }
})

export default moviesSlice.reducer;