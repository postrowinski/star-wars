import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import _ from "lodash";

export interface CommonState {
  headTitle: string;
}

const initialState: CommonState = {
  headTitle: "",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setTitle(state, action: PayloadAction<string>) {
      state.headTitle = action.payload;
    },
  },
});

export const { setTitle } = commonSlice.actions;
export default commonSlice.reducer;
