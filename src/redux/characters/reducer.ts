import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Character, Review } from "../../types";
import _ from "lodash";
import { getCharacter, getCharacters } from "./actions";

export interface CharactersState {
  characters: Character[];
  isLoading: boolean;
  selectedCharacter?: Character;
}

const initialState: CharactersState = {
  characters: [],
  selectedCharacter: undefined,
  isLoading: false,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    addReview(state, action: PayloadAction<Review>) {
      if (state.selectedCharacter) {
        state.selectedCharacter = {
          ...state.selectedCharacter,
          reviews: [...state.selectedCharacter.reviews, action.payload],
        };
      }
    },
  },
  extraReducers: (builder) => {
    //GET CHARACTERS
    builder.addCase(getCharacters.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCharacters.fulfilled, (state, action) => {
      state.isLoading = false;
      state.characters = action.payload.results;
    });
    builder.addCase(getCharacters.rejected, (state) => {
      state.isLoading = false;
    });
    //GET CHARACTER
    builder.addCase(getCharacter.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getCharacter.fulfilled, (state, action) => {
      state.isLoading = false;
      state.selectedCharacter = {
        ...action.payload,
        reviews: [],
      };
    });
    builder.addCase(getCharacter.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export const { addReview } = charactersSlice.actions;

export default charactersSlice.reducer;
