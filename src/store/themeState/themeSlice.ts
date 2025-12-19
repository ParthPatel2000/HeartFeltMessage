import type { Theme } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { themes } from "../../utils/themes"

const initialState: Theme = {
    name: "Apology",
    background: "linear-gradient(180deg, #f8fafc, #e5e7eb)",
    textColor: "#1f2937",
    placeholderColor: "#6b7280",
    fontFamily: "'Georgia', serif",
    borderColor: "#d1d5db",
    buttonBackground: "#64748b",
    buttonTextColor: "#ffffff",
    accentColor: "#475569",
}

const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (_, action: PayloadAction<string>) => {
            return themes.filter((theme) => theme.name === action.payload)[0]
        }
    }
})

export default themeSlice.reducer;
export const { changeTheme } = themeSlice.actions;
