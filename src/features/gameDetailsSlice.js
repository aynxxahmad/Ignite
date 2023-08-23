import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { gameDetailsURL } from "../api";


export const fetchGameDetails = createAsyncThunk(
    'gameDetails/fetchGameDetails',
     async(game_id) => {
        const details = await axios.get(gameDetailsURL(game_id));
        const detailsData = details.data;
        return ({
            detailsData,
        });
     }
)




const gameDetailsSlice = createSlice({
    name: 'gameDetails',
    initialState: {
        data: null,
        loading: false,
        error: null,
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
            .addCase(fetchGameDetails.pending,(state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchGameDetails.fulfilled,(state,action) => {
                state.loading = false;
                state.error = null;
                state.data = action.payload.detailsData;
            })
            .addCase(fetchGameDetails.rejected,(state,action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
});



export default gameDetailsSlice.reducer;