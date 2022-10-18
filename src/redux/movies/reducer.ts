import { createSlice } from '@reduxjs/toolkit';
import { Movie } from '../../types';
import {getMovies, getMovie} from './actions';

export interface InitialMoviesState {
  movies: Movie[];
  isLoading: boolean;
  selectedMovie?: Movie;
}

const initialState: InitialMoviesState = {
  movies: [],
  selectedMovie: undefined,
  isLoading: false
}

export const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    //GET MOVIES
    builder.addCase(getMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload.results;
    })
    builder.addCase(getMovies.rejected, (state) => {
      state.isLoading = false;
    })
    //GET MOVIE
     builder.addCase(getMovie.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovie.fulfilled, (state, action) => {
      console.log(action.payload);
      state.isLoading = false;
      //Hack na potrzeby zadania, chyba nie potrzebnie dodałem reduxa do tego zadania rekrutacyjnego :)
      state.selectedMovie = {
        ...action.payload, 
        reviews: []
      };
    })
    builder.addCase(getMovie.rejected, (state) => {
      state.isLoading = false;
    })
  }
})

export default moviesSlice.reducer