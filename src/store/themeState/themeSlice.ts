import type { Theme } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { themes } from "../../utils/themes"

const initialState: Theme = { name: "Light", background: "#ffffff", textColor: "#111827" }

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action: PayloadAction<string>) => {
            return themes.filter((theme) => theme.name === action.payload)[0]
        }
    }
})

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
