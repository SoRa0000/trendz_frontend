import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const NewsSectionWrapper = styled.div`
    max-width: 100%;
    margin: 20px 0;
    padding-top: 30%;
    position: relative;
    -webkit-box-shadow: 0px 13px 28px -13px rgba(13,13,13,0.73);
    -moz-box-shadow: 0px 13px 28px -13px rgba(13,13,13,0.73);
    box-shadow: 0px 13px 28px -13px rgba(13,13,13,0.73);
    @media screen and (max-width: 766px){
        padding-top: 120%;
    }
`;

export const SlideShow = styled.div`
    top:0;
    bottom: 0;
    left: 0;
    width: 55%;
    height: 100%;    
    position: absolute;

    @media screen and (max-width: 766px){
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        height: 45.45%;
    }
`;

export const NewsBannerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    top:0;
    bottom: 0;
    right:0;
    position: absolute;
    width: 45%;
    height: 100%;
    padding-left: 5px;
    border-radius: 3px;
    @media screen and (max-width: 766px){
        width:100%;
        height: 54.55%;
        bottom: 0;
        left: 0;
        right: 0;
        top: 45.45%;
        padding: 0;
        padding-top: 5px;
    }
    
`;


export const MainNewsShadow = styled.div`
    height: 100%;
    width: 100%;
    -webkit-box-shadow: inset 0px 0px 134px -12px rgba(13,13,13,1);
    -moz-box-shadow: inset 0px 0px 134px -12px rgba(13,13,13,1);
    box-shadow: inset 0px 0px 134px -12px rgba(13,13,13,1);
    position: absolute;
    border-radius: 3px;
`;

export const MainNews = styled.div`
    border-radius: 3px;
`;

export const MainNewsImg = styled.img`
    width: 100%;
    height: 100%;
    z-index: -2;
    position: relative;
    
    
`;

export const MainNewsTitleWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 0;
    left:0;
    right: 0;
    height: 30%;
    background: rgba(13,13,13,0.5);
    transition: all .2s ease;
    padding: 0 15px;
    border-radius: 0 0 3px 3px;
    &:hover{
        background: rgba(13,13,13,0.9);
    }
`;

export const MainNewsTitle = styled.h4`
    color: #fff;
    width: 70%;

    @media screen and (max-width: 480px){
        font-size: 0.6rem;
    }
`;

export const MainNewsBtn = styled.button`
    height: 34px;
    width: 110px;
    border-radius: 17px;
    outline: none;
    border: none;
    background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 25%, #00c7fd 75%, #2e81f7 100%);
    background-size: 200% auto;
    color: #fff;
    margin-left: 35px;
    transition: 0.3s;
    font-weight: 500;
    cursor: pointer;
    &:hover{
        background-position: right center;
    }
    @media screen and (max-width: 480px){
        font-size: 0.6rem;
        height: 24px;
        width: 90px;
        border-radius: 12px;
    }
`;

export const BtnLink = styled(Link)`
    text-decoration: none;
`;



export const NewsBanner = styled.div`
    width: 50%;
    height: 50%;
    color: #fff;
    position: relative;
    @media screen and (max-width: 766px){
        height: 50%;
        width: 50%;
    }
`;

export const NewsBannerImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 3px;
    position: relative;
    z-index: -2;
`;

export const NewsBannerTitleWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    height: 40%;
    bottom: 0;
    left:0 ;
    right: 0;
    background: rgba(13,13,13,0.5);
    transition: .2s;
    &:hover{
        background: rgba(13,13,13,.9);
    }
`;
export const NewsBannerTitle = styled.h5`
    color: #fff;
    padding-left: 10px;
    @media screen and (max-width: 480px){
        font-size: 0.6rem;
    }
    &:hover{
        color: #00c7fd;
    }
`;

export const TitleLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;

export const NewsBannerShadow = styled.div`
    position: absolute;
    height: 100%;
    width: 100%;
    -webkit-box-shadow: inset 0px 0px 108px -30px rgba(13,13,13,1);
    -moz-box-shadow: inset 0px 0px 108px -30px rgba(13,13,13,1);
    box-shadow: inset 0px 0px 108px -30px rgba(13,13,13,1);
`;