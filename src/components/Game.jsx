import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";



const Game = ({game}) => {
    return(
        <GameCard>
            <Link to={`/games/${game.id}`}><img src={game.background_image} alt={`${game.name}_card_image`} /></Link>
            <div className="description">
                <h3>{game.name}</h3>
                <h4>{game.released}</h4>
            </div>
        </GameCard>
    )
}

const GameCard = styled.div`
    margin: 4rem;
    height: 50rem;
    background-color: #202020;
    border-radius: 2.5rem;
    border: 5px solid #1b1b1b;

    img{
        width: 100%;
        height:75%;
        border-radius: 2.5rem 2.5rem 0 0 ;
        object-fit: cover;
        cursor: pointer
    }
    .description{
        height:25%;
        padding:1rem;
        position: relative;
        h3{
            text-align: center;
            margin-top:1rem;
            font-size:1.75rem;
            color: #fafafa;
            font-weight: lighter;
        }
        h4{
            font-size:1.5rem;
            color: #fafafa;
            font-weight: lighter;
            position: absolute;
            bottom:10px;
            left:10px;
        }
        
    }
`

export default Game;