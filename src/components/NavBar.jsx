import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

//styled and animation
import styled from "styled-components";

//icons and images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logo.svg"

//redux
import { useDispatch } from "react-redux";
import {searchGames} from "../features/searchedGameSlice";


const NavBar = () => {   

    const [inputValue,setInputValue] = useState("");
    const [isbuttonDisabled,setIsButtonDisabled] = useState(true);

    const dispatch = useDispatch();
    const navigate  = useNavigate();

    const inputHandler = (e) => {
        setInputValue(e.target.value);
        if(!inputValue)
            setIsButtonDisabled(() => true);
        else
            setIsButtonDisabled(() => false);
    }

    const searchGameHandler = (e) => {
        e.preventDefault();
        dispatch(searchGames(inputValue));
        setInputValue("");
        navigate('/searched');
    }

    return(
        <Nav>
            <div className="logo-box">
                <img src={logo} alt="logo" />
                <h1>IGNITE</h1>
            </div>
            <form className="search-box">
                <input type="text" onChange={inputHandler} className="search-input" value={inputValue} placeholder="Search"  />
                <button onClick={(e)=>searchGameHandler(e)} disabled={isbuttonDisabled}><FontAwesomeIcon icon={faSearch} className="search-icon"/></button>
            </form>
        </Nav>
    )
}



//styled components
const Nav = styled.div`
    min-height: 8vh;
    display:flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width:650px){
        flex-direction: column;   
    }

    .logo-box{
        height:5rem;
        margin-top: 0.5rem;
        margin-left: 1rem;
        width:15rem;
        display:flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        img{
            height: 100%;
        }
        h1{
            color: #fafafa;
            font-size:2.75rem;
            position: absolute;
            right:2px;
            bottom:-10px;
        }
    }
    .search-box{
        width: 35%;
        position: relative;
        margin-right:2rem;
        align-self: end;
        border-radius: 10rem;

        @media screen and (max-width:650px){
            width: 90%;
            margin-top: 2rem;
        }
        input{
            width:100%;
            padding: 1.1rem;
            outline:none;
            border:none;
            background-color: #322f2f;
            border-radius: 10rem;
            font-size:1.5rem;
            color: #fafafa;
            letter-spacing:0.2rem;
            font-weight: lighter;
        }
        button{
            outline:none;
            border:none;
            height:4.2rem;
            width:4.2rem;
            border-radius: 50%;
            font-size:2rem;
            padding:1.60rem;
            color: #b82f2f;
            position: absolute;
            top:1.8px;
            right:1.5px;
            cursor: pointer;
            transition: all 0.5s ease-in-out;
            &:hover{
                background-color: #b82f2f;
                color:white;
            }
            .search-icon{
                position: absolute;
                top:13px;
                right:10px;
                pointer-events: none;
            }
       }

    }

`

export default NavBar;