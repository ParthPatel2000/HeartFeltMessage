import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { ThemeName } from "@/types";

const initialState = "playful";

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (_state, action: PayloadAction<ThemeName>) => {
      return action.payload;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
