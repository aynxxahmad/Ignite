import React from "react";
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";
import {motion} from "framer-motion";
import { pageAnim } from "../animation";

import {useSelector} from "react-redux";
import Game from "../components/Game";
import { useNavigate } from "react-router-dom";

const SearchedPage = () => {

    const {data,loading} = useSelector((store) => store.searchedGame);
    const navigate = useNavigate();

    const goBackHandler = () => {
        navigate(-1);
    }

    return(
        <>
        {data && !loading && (
            <motion.div variants={pageAnim} initial="hidden" animate="show" exit="exit" >
        <StyledButton onClick={goBackHandler}><FontAwesomeIcon icon={faAngleLeft} size="2x" /></StyledButton>
        <Searched>
            {data.map((game) => <Game game={game} key={game.id}/>)}
        </Searched>
            </motion.div>
        )}
        </>
    )
}

const StyledButton = styled.button`
            z-index:10;
            margin-left: 1rem;
            margin-top: 1rem;
            color: #b82f2f;
            background: rgba(0,0,0,0.6);
            height: 4.5rem;
            width: 4.5rem;
            border: none;
            border-radius: 50%;
            font-size:1.5rem;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            &:hover{
                background-color: #b82f2f;
                color: rgba(0,0,0,0.6);
            }
`

const Searched = styled.div`
    min-height: 80vh;
    padding:1.5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(400px,1fr));  
    grid-column-gap: 3rem;
    grid-column-gap: 3rem;
    @media screen and (max-width: 650px) {
        margin: 0;
        padding:0;
    }

`

export default SearchedPage;