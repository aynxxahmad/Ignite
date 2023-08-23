import React from "react";
import styled from "styled-components"

//images
import star from "../img/star.png";
import playStation from "../img/playstation.svg";
import steam from "../img/steam.svg";
import xbox from "../img/xbox.svg";
import nintendo from "../img/nintendo.svg";
import apple from "../img/apple.svg";
import gamepad from "../img/gamepad.svg";

const Stats = ({data}) => {

    const getPlatformImage = (platform) => {
        switch(platform) {
            case "PlayStation 4":
                return playStation;
            case "PlayStation 5":
                return playStation;
            case "Xbox One":
                return xbox;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "iOS":
                return apple;
            case "macOS":
                return apple;
            default:
                return gamepad;
        }
    }


    return(
        <StyledStats>
            <div className="ratings">
                <h4>Ratings: {data.rating}</h4>
            </div>
            <div className="platforms">
                <h4>Platforms:</h4>
                <div className="icons">
                    {data.platforms.map(each => (
                        <div className="icon" key={each.platform.id} data-name={each.platform.name}>
                           <img src={getPlatformImage(each.platform.name)} alt={each.platform.name}/> 
                        </div>
                    ))} 
                </div>
            </div>
        </StyledStats>
    )
}

//styled components
const StyledStats = styled.div`
    min-height:15vh;
    display: flex;
    justify-content: space-between;
    margin-top: 2rem;
    h4{
            font-size:1.5rem;
            padding: 1rem;
            color: #e8dcdc;
            letter-spacing: 2px;
            font-weight: lighter;
        }

    .ratings{
        flex:1;
        h4{
            margin-left: 1.5rem;
        }
    }

    .platforms {
        text-align: center;
        display: flex;
        flex-direction: column;
        margin-right: 2rem;

        .icons{
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex: wrap;
            width: 100%;
            position: relative;
            .icon{
                img{
                    height: 2.5rem;
                    position: relative;
                    margin: 0 1.75rem;
                }
                &::before{
                    content: attr(data-name);
                    font-size:1.25rem;
                    position: absolute;
                    top: -40px;
                    background-color: rgba(0,0,0,0.7);
                    color: #fafafa;
                    height: 4rem;
                    display: none;
                    z-index: 10;
                    padding: 0.5rem;
                    border: none;
                    border-radius: 1rem;
                }
                &:hover::before{
                    display: block;
                }
            }
        }
        
    }
`



export default Stats;