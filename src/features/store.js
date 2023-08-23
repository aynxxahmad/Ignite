import { configureStore } from "@reduxjs/toolkit";
//reducers
import gamesReducer from "./gamesSlice";
import gameDetailsReducer from "./gameDetailsSlice";
import gameScreenshotReducer from "./gameScreenshotSlice";
import searchedGameReducer from "./searchedGameSlice";

const store = configureStore({
    reducer: {
        games : gamesReducer,
        gameDetails : gameDetailsReducer,
        gameScreenshots : gameScreenshotReducer,
        searchedGame : searchedGameReducer
    },
    //enable redux devtools extension
    devTools: process.env.NODE_ENV !== 'production',
});


export default store;