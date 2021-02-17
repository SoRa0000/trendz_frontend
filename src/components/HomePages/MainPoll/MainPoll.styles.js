import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const MainPollWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    aspect-ratio: 3/1;
    margin-top: 40px;
    position: relative;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 766px){
        flex-direction: column;
        aspect-ratio: 1/3;
        margin-top: 0;
    }
`;

export const MainPollItem = styled.div`
    width: 80%;
    aspect-ratio: 1/1;
    position: relative;
    @media screen and (max-width: 766px){
        margin-bottom: 20px;
    }
`;

export const MainPollItemImg = styled.img`
    height: 100%;
    width: 100%;
`;

export const MainPollItemBg = styled.div`
    position: absolute;
    bottom: 0;
    top:0;
    right: 0;
    left:0;
    background: linear-gradient(0deg, rgba(46,129,247,1) 0%, rgba(0,199,253,0.9) 50%, rgba(53,203,205,0.5) 100%);
    height: 100%;
    width: 100%;
    display: flex;
    padding-left: 50px;
    padding-top: 60px;
    padding-right: 0;
    padding-bottom: 60px;
    flex-direction: column;

    @media screen and (max-width: 766px){
        padding-left: 25px;
        padding-top: 50px;
        padding-bottom: 30px;
    }
    @media screen and (max-width: 960px){
        padding-left: 35px;
        padding-top: 40px;
        padding-bottom: 20px;
    }
`;

export const MainPollTitle = styled.div`
    margin-top: 10px;
    display: flex;
    color: #fff;
    width: 100%;
    font-size: 1.75rem;
    font-weight: 600;
    text-transform: uppercase;
    @media screen and (max-width: 960px){
        font-size: 1.5rem;
    }
    @media screen and (max-width: 766px){
        font-size: 1.75rem;
    }
    @media screen and (max-width: 480px){
        font-size: 1.25rem;   
    }
    @media screen and (max-width: 290px){
        font-size: 1rem;
    }
`;

export const MainPollSubTitle = styled.div`
    display: flex;
    color: #fff;
    width: 100%;
    font-size: 1.75rem;
    letter-spacing: 5px;
    @media screen and (max-width: 766px){
        font-size: 1.75rem;
    }
    @media screen and (max-width: 480px){
        font-size: 1.25rem;   
    }
    @media screen and (max-width: 960px){
        font-size: 1.5rem;
    }
    @media screen and (max-width: 290px){
        font-size: 1rem;
    }
    
`;
export const MainPollBtn = styled.button`
    position: absolute;
    bottom: 0;
    margin-bottom: 50px;
    height: 40px;
    width: 70%;
    color: #fff;
    font-weight: 500;
    border-radius: 3px 20px 20px 3px;
    background: transparent;
    border: 2px solid #fff;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    transition: all .3s ease-in-out;
    &:hover{
        background: #fff;
        
        background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);
        color: #fff;
        border: none;
    }

    @media screen and (max-width: 766px){
        margin-bottom: 25px;
    }

    @media screen and (max-width: 290px){
        margin-bottom:15px;
    }
`;

export const MainPollLink = styled(Link)`
    text-decoration: none;
`;

export const MainPollText = styled.div`
    position: absolute;
    top:0;
    right:0;
    background: linear-gradient(180deg, rgba(13,13,13,0.9) 0%, rgba(33,33,33,0.5) 100%);
    padding: 5px 6px;
    font-size: 0.8rem;
    font-weight: 400;
    color: #ccc;
    border-radius: 0 0 0 8px;

`