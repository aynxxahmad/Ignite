import React,{useEffect} from "react";
import styled from "styled-components"
import {useLocation ,useNavigate } from "react-router-dom";

//components
import Stats from "../components/Stats";

//redux
import {useSelector,useDispatch} from "react-redux";
import {fetchGameDetails} from "../features/gameDetailsSlice";
import {fetchScreenShots} from "../features/gameScreenshotSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft} from "@fortawesome/free-solid-svg-icons";




const GameDetail = () => {
    
    const dispatch = useDispatch();
    const url = useLocation();
    const navigate = useNavigate();

    const pathNameArray = url.pathname.split('/');
    const id = pathNameArray[2];


    useEffect(()=> {
        dispatch(fetchGameDetails(id));
        dispatch(fetchScreenShots(id));
        
        return () => {
            //cleanup
        }
    },[id])

    const {data,loading} = useSelector((store) => store.gameDetails);
    const screenShots = useSelector((store) => store.gameScreenshots.data);
        

    const goBackHandler = () => {
        navigate(-1);
    }


    return(
        <>
            {data && screenShots && !loading && (
            <StyledDetails>
                <div className="background-image">
                    <img src={data.background_image} alt={`${data.name} img`} />
                </div>
                <div className="details-div">
                    <PrimaryInfo>
                        <button onClick={goBackHandler}><FontAwesomeIcon icon={faAngleLeft} size="2x" /></button>
                        <h3>{data.name}</h3>
                        <div className="image-container">
                            <img src={data.background_image} alt="hero-img" />
                        </div>
                    </PrimaryInfo>
                    <Stats data={data}/>
                    <Description>
                        <p>{data.description_raw}</p>
                    </Description>
                    <Gallery>
                        {screenShots.map(img => (
                            <img src={img.image} alt="gallery-img" key={img.id} />
                        ))}
                    </Gallery>
                </div>
            </StyledDetails>
            )}
        </>
    )
}



//styled components


const StyledDetails = styled.div`
    min-height:100vh;
    background-color: #1b1b1b;
    position: relative;
    overflow: hidden;

    .background-image{
        height: 100vh;
        width: 100vw;
        img{
            height: 100%;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }

    .details-div{
        min-height: 100%;
        max-height: 100vh;
        width: 50%;
        position: absolute;
        overflow-y: scroll;
        top: 0;
        right: 0;
        z-index: 5;
        overflow-y: scroll;
        overflow-x: hidden;
        //glassmorphism
        backdrop-filter: blur(10px) saturate(180%);
        -webkit-backdrop-filter: blur(3px) saturate(180%);
        background-color: rgba(54, 69, 79, 0.75);
        border-radius: 1rem 0 0 1rem;
        border: 1px solid rgba(255, 255, 255, 0.125);
        box-shadow:  -21px 21px 35px #090808,
                      21px -21px 35px #231e1e;
        
        @media screen and (max-width: 650px) {
            width: 100vw;
            border-radius: 0rem;
        }
    }
`

const PrimaryInfo = styled.div`
    min-height: 50vh;
    width: 100%;
    border-radius: 1rem 0 0 1rem;
    display: flex;
    flex-direction: column;
    button{
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
        }
    h3{
        font-size:3rem;
        color: #cec7c7;
        text-align: center;
        padding:3rem;
    }
    .image-container{
        height: 60%;
        img{
            height:100%;
            width:90%;
            object-fit: cover;
            border-radius: 1.5rem;
            display: block;
            margin: auto;       
     }
    }

`
const Description = styled.div`
    margin-top: 3rem;
    p{
        font-size: 1.5rem;
        color: #cec7c7;
        line-height: 2.75rem;
        padding: 1rem;
    }
`

const Gallery = styled.div`
    width: 100%;
    img{
        height: 100%;
        width: 80%;
        object-fit: cover;
        object-position: center;
        padding: 1rem;
        display: block;
        margin: auto;
    }
`

export default GameDetail;