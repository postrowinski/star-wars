// fetchMethod<{ results: Movie[] }>(`${endpoint}/films/`).then(
//     ({ results }) => {F
//       setResponse(results);
//     }
//   );

import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../../services/api";


export const getMovies = createAsyncThunk(
    "movies/get",
     async (_, { rejectWithValue }) => {
        try {
            const response = await apiCall().get('/films/');
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
     }
);

export const getMovie = createAsyncThunk(
    "movie/get",
     async (id: string, { rejectWithValue }) => {
        try {
            const response = await apiCall().get(`/films/${id}/`);
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data)
        }
     }
);