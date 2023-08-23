import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { gameScreenShotsURL } from "../api";
import axios from "axios";

export const fetchScreenShots = createAsyncThunk(
    'screenShots/fetchScreenShots',
    async(game_id) => {
        const screenShotsObj = await axios.get(gameScreenShotsURL(game_id));
        const screenShots = screenShotsObj.data.results;
        return screenShots;
    }
)



const gameScreenShotsSlice = createSlice({
    name: 'screenShots',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchScreenShots.pending,(state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchScreenShots.fulfilled,(state,action) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload;
            })
            .addCase(fetchScreenShots.rejected,(state,action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});


export default gameScreenShotsSlice.reducer;