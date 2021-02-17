import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const SecondaryPollWrapper = styled.div`
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 100%;
    aspect-ratio: 4/1;
    border: 5px solid #fff;
    border-right: none;

    @media screen and (max-width: 766px){
        width: 100%;
        aspect-ratio: 1/1;
        border-bottom: none;
        margin-top: 0;
    }
`
export const SecondaryPollItem = styled.div`
    position: relative;
    width: 25%;
    height: 100%;
    background: #fff;
    color: #fff;
    display: flex;
    border-right: 5px solid #fff;
    background: radial-gradient(ellipse at top, #333 0%, #0d0d0d 100%);
    transition: background-color 0.5s;
    &:hover{
        background: radial-gradient(ellipse at bottom, #333 0%, #0d0d0d 100%);
        
    }

    @media screen and (max-width: 766px){
        width: 50%;
        height: 50%;
        border-bottom: 5px solid #fff;
        border-right: 5px solid #fff;
    }
`;

export const PollLink = styled(Link)`
    text-decoration: none;
    cursor: pointer;
`;
export const PollIcon = styled.img`
    height: 100%;
    width: 100%;
`
export const SecondaryPollIcon = styled.div`

    margin-top: 15%;
    margin-left: 5%;
    height: 25%;
    width: 25%;
    position: relative;
`;

export const SecondaryPollBtn = styled.button`
    position: absolute;
    bottom:0;
    right:0;
    left:0;
   display: flex;
   justify-content: center;
    align-items: center;
   height: 15%;
   width: 90%;
   margin-bottom: 15%;
   margin-left: 5%;
   background: transparent;
   border: 3px solid #fff;
   outline: none;
   color: #fff;
   font-size: 0.9rem;
   border-radius: 3px;
   cursor: pointer;
   transition: all ease-in-out 0.5s;
    &:hover{
        background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);
        -webkit-box-shadow: 0px 0px 37px -12px rgba(0,199,253,1);
        -moz-box-shadow: 0px 0px 37px -12px rgba(0,199,253,1);
        box-shadow: 0px 0px 37px -12px rgba(0,199,253,1);
        border: none;
    }
    @media screen and (max-width: 766px){
        font-size: 0.6rem;
    }

`;



export const SecondaryPollSubTitle = styled.div`
    position: absolute;
    left:0;
    top:0;
    right:0;
    margin-top: 30%;
    margin-left: 35%;
    font-size: 1.5rem;
    font-weight: 500;
    display: flex;
    color: #fff;
    @media screen and (max-width: 766px){
        font-size: 0.7rem;
    }
`;

export const SecondaryPollTitle = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px 0;
    position: absolute;
    left:0;
    top:0;
    right:0;
    margin-top: 45%;
    margin-left: 5%;
    margin-right: 5%;
    font-size: 1.25rem;
    font-weight: 700;
    background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);
    color: #fff;
    width: auto;
    border-radius: 0 0 40px 40px;
    -webkit-box-shadow: 0px 0px 37px -2px rgba(0,199,253,1);
-moz-box-shadow: 0px 0px 37px -2px rgba(0,199,253,1);
box-shadow: 0px 0px 37px -2px rgba(0,199,253,1);
@media screen and (max-width: 766px){
        font-size: 0.6rem;
        padding: 10px 0;
    }
`;
export const SecondaryPollText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    right:0;
    height: 8%;
    width: 25%;
    background: linear-gradient(rgba(0,199,253,1) 0%, rgba(0,199,253,0.2) 100%);
    
    font-size: 0.7rem;
    color: #ccc;
    border-radius: 0 0 0 6px;
    font-weight: 500;
    @media screen and (max-width: 766px){
        font-size: 0.4rem;
    }

`;