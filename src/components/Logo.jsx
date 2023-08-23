import React from "react";
import styled from "styled-components";
import logo from "../img/logo.svg"



const Logo = () => {
	return(
		<StyledLogo>
			<img src={logo} alt="logo" />
			<h1>IGNITE</h1>
	    </StyledLogo>
	)
}

const StyledLogo = styled.div`
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
`

export default Logo;