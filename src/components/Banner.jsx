import React,{useState,useEffect} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"; 

//styling and animations
import styled from "styled-components";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

//redux
import {useSelector,useDispatch } from "react-redux";
import {fetchGameDetails} from "../features/gameDetailsSlice";
import {fetchScreenShots} from "../features/gameScreenshotSlice";



const Banner = () => {
 
    const upcomingGames = useSelector(store => store.games.data.upcomingGames);
    const dispatch = useDispatch();
    
    const [currentIndex,setCurrentIndex] = useState(0);
    const [bannerArray,setBannerArray] = useState(null);
    const [isimageLoaded,setIsImageLoaded] = useState(false);

 
    
    useEffect(()=>{
        if(upcomingGames){
            const newBannerArray = (upcomingGames.map(game => {
                return({
                    id: game.id,
                    name: game.name,
                    image: game.background_image,
                });
            }));
            setBannerArray(newBannerArray);
            setCurrentIndex(0);
        }
    },[upcomingGames]);


    useEffect(()=>{
        if(bannerArray){
            setIsImageLoaded(prev => false);
            const intervalId = setInterval(()=>{
                setCurrentIndex(prev => (prev+1) % bannerArray.length);
            },6000);
            return () => {
                clearInterval(intervalId);
            }
        }
    },[bannerArray]);
    
    const fetchDetailsHandler = () => {
        dispatch(fetchGameDetails(bannerArray[currentIndex].id));
        dispatch(fetchScreenShots(bannerArray[currentIndex].id));
    }

    return(
        <Hero>
            {bannerArray && bannerArray.length > 0 && (
                <div className="img-container">
                    <img src={bannerArray[currentIndex].image} alt="hero" onLoad = {()=> setIsImageLoaded(prev => true)} />
                        {isimageLoaded ? <h3>{bannerArray[currentIndex].name}</h3> : " "};
                        <Link to={`games/${bannerArray[currentIndex].id}`}>
                            <button onClick={fetchDetailsHandler}>
                                <FontAwesomeIcon icon={faAngleRight} size="2x" />
                            </button>
                        </Link>
                </div>
            )}
        </Hero>
    )
}




//stying

const Hero = styled.div`
    height:60vh;
    min-width:100vw;
    margin-top:2.5rem;
    border-radius:4rem;
    overflow:hidden;
    display: flex;
    justify-content: center;
    position: relative;
    .img-container{
        width: 85%;
        height: 100%;
        border-radius: 4rem;
        position: relative;

        &::before{
            content: '';
            border:none;
            height: 100%;
            width:30%;
            border-radius: 4rem 0 0 4rem;
            position: absolute;
            top:0;
            left:0;
            z-index: 2;
            backdrop-filter: blur(18px);
            background-color: rgba(255, 255, 255, 0.04);

            @media (max-width:650px){
                position:absolute;
                top:70%;
                width:100%;
                height:30%;
                border-radius: 0 0 4rem 4rem;
            }
        }

        h3{
            font-size:3rem;
            color:white;
            z-index:2;
            position: absolute;
            left:3rem;
            top:40%;
            letter-spacing:1.15rem;
            @media (max-width:650px){
                font-size: 2rem;
                letter-spacing: 0.75rem;
                top: 75%;
                text-align: center;
                font-weight: lighter;
            }
        }

        button{
            z-index:5;
            position: absolute;
            top:80%;
            left: 8rem;
            border: 2px solid #b82f2f;
            color: #fafafa;
            background: transparent;
            height: 4.5rem;
            width: 4.5rem;
            border-radius: 50%;
            font-size:1.25rem;
            cursor: pointer;
            @media (max-width:650px){
                left:1rem;
                top:87%;
            }
        }

        img{
            display: block;
            height:100%;
            width:100%;
            object-fit: cover;
            object-position: center 10%;
            border-radius: 4rem;
        }
        @media (max-width:650px){
                position: relative;
                right:0.5rem;
            }
    }
`

export default Banner;