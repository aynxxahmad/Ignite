import React from "react";
import { Routes , Route } from "react-router-dom";
//importing components
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import SearchedPage from "./pages/SearchedPage";
import GameDetail from "./pages/GameDetail";


function App() {

  return (
    <div className="App">
        <GlobalStyles/>
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/searched" element={<SearchedPage />} />
          <Route  path="/games/:id" element={<GameDetail/>}/>
        </Routes>
    </div>
  );
}

export default App;
