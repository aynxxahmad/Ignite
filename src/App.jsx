import React ,{useEffect}from "react";
import { Routes,Route,useLocation} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useDispatch } from "react-redux";
//importing components
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";
import SearchedPage from "./pages/SearchedPage";
import GameDetail from "./pages/GameDetail";
import { fetchGames } from "./features/gamesSlice";


function App() {

  const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(fetchGames()); //dispatching the fetch games action creator(in context of redux toolkit- async thunk)
      return () => {
        //cleanup
      }
    },[dispatch])



  const location = useLocation();


  return (
    <div className="App">
        <GlobalStyles/>
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route  path="/" element={<Home/>}/>
          <Route  path="/searched" element={<SearchedPage />} />
          <Route  path="/games/:id" element={<GameDetail/>}/>
        </Routes>
        </AnimatePresence>
    </div>
  );
}

export default App;
