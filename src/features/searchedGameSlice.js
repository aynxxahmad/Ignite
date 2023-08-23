import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { searchedGameURL } from "../api";

export const searchGames = createAsyncThunk(
    'searchedGames/searchGames',
    async(game_name) => {
        const fetched = await axios.get(searchedGameURL(game_name));
        const fetchedData = fetched.data.results;
        return fetchedData;
    }
)

const searchedGameSlice = createSlice({
    name: 'searchedGames' ,
    initialState: {
        data : [],
        loading: false,
        error: null,
    },
    reducer : {},
    extraReducers: (builder) => {
        builder
            .addCase(searchGames.pending,(state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(searchGames.fulfilled,(state,action) => {
                state.data = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(searchGames.rejected, (state,action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }

})



export default searchedGameSlice.reducer;