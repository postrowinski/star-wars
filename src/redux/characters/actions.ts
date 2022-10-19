// fetchMethod<{ results: Movie[] }>(`${endpoint}/films/`).then(
//     ({ results }) => {F
//       setResponse(results);
//     }
//   );

import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiCall } from "../../services/api";

export const getCharacters = createAsyncThunk(
  "characters/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await apiCall().get("/people/");
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const getCharacter = createAsyncThunk(
  "character/get",
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await apiCall().get(`/people/${id}/`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);
