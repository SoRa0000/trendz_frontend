import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const MainChartWrapper = styled.div`
    display: flex;
    position: relative;
    height: auto;
    margin-top: 50px;
    @media screen and (max-width: 766px){
        flex-direction: column;
        margin-top: 30px;
    }

`;

export const WeeklyTop = styled.div`
    display: flex;
    max-width: 65%;
    width: 65%;
    
    
    flex-direction: column;
    border-radius: 3px;
    position: relative;
    -webkit-box-shadow: 0px 13px 28px -13px rgba(13,13,13,0.73);
    -moz-box-shadow: 0px 13px 28px -13px rgba(13,13,13,0.73);
    box-shadow: 0px 13px 28px -13px rgba(13,13,13,0.73);
    @media screen and (max-width: 766px){
        max-width: 100%;
        width: 100%;
    }
`

export const WeeklyTopImgWrapper = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    aspect-ratio: 5/7;
    @media screen and (max-width: 766px){
    }
`
export const WeeklyTopImg = styled.img `
    display: block;
    width: 100%;
    height: 100%;
    bottom: 0;
    left: 0;
    right:0;
    height: auto;
    border-radius: 0 0 5px 5px;
    @media screen and (max-width: 766px){
    }
`;

export const WeeklyTopHeader = styled.div`
width: 100%;
position: relative;
height: 100px;
display: flex;
flex-direction: column;
background: #0d0d0d;
border-radius: 5px 5px 0 0;

@media screen and (max-width: 766px){
    height: 50px;
    }
`;


export const WeeklyTopTitle = styled.div`
color: #fff;
position: relative;
display: flex;
align-items: center;
justify-content: center;
height: 50%;
width: 100%;
color: #00c7fd;

@media screen and (max-width: 766px){
    font-size: 0.8rem;
    }

`;

export const WeeklyTopTitleButtonWrapper = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);  
    position: relative;
    
`;
export const WeeklyTopTitleButton = styled.button`
    width: 100%;
    outline: none;
    border: none;
    font-weight: 500;
    color: #fff;
    background: transparent;
    margin: 2px 0;
    cursor: pointer;
    position: relative;
    @media screen and (max-width: 766px){
    font-size: 0.6rem;
    
    }
    
`;

export const SectionChartWrapper = styled.div`
    margin-left: 20px;
    max-width: 35%;
    width: 35%;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 766px){
        margin: 20px 0;
        max-width: 100%;
        width: 100%;
    }
    
`
export const AllTimeTop = styled.div`
    display: flex;
    height: 88%;
    flex-direction: column;
    order: 1;
    @media screen and (max-width: 766px){
        margin: 20px 0;
        order: 2;
    }
`;

export const AllTimeHeader = styled.div`
    height: 70px;
    width: 100%;
    background: #fff;
`;

export const AllTimeTitle = styled.div`
    height: 50%;
    width: 100%;
    background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border: 2px solid #333;
    border-bottom: none;
    border-radius: 5px 5px 0 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 0.9rem;
    font-weight: 600;
`;

export const AllTimeTitleButtonWrapper = styled.div`
    padding: 2px 0;
    height: 50%;
    width: 100%;
    display: flex;
    background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);
`;

export const AllTimeTitleButton = styled.button`
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
    background: transparent;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: 500;
    color: #fff;
`;

export const AllTimeItemWrapper = styled.div`
    padding: 0 0;
    height: 100%;
    width: 100%;
    background: #fff;
`;

export const AllTimeItem = styled.div`
    height: 9.5%;
    width: 100%;
    display: flex;
    align-items: center;
    border-bottom: 1px dashed #2e81f7;
    border-left: 1px dashed #2e81f7;
    
`;

export const AllTimeItemOrder = styled.div`
    display: flex;
    height: 100%;
    width: 15%;
    justify-content: center;
    align-items: center;
    font-size: 1.6rem;
    color: #fff;
    font-weight: 800;
    position: relative;
`;

export const AllTimeOrderImg = styled.img`
    height: 100%;
    width: 100%;
`;

export const AllTimeOrderNumber = styled.h3`
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const AllTimeItemImgWrapper = styled.div`
    height: 100%;
    width: 20%;
    display: flex;
    padding: 3px 8px;
`
export const AllTimeItemImg = styled.img`
    display: flex;
    background: gray;
    height: 100%;
    width: 100%;
`;
export const AllTimeItemInfo = styled.div`
    display: flex;
    height: 100%;
    width: 50%;
    flex-direction: column;
    padding-top: 5px;

`;
export const AllTimeInfoTitle = styled.p`
    margin: 3px 0;
    font-size: 0.9rem;
    font-weight: 600;
    color: #0d0d0d;
    transition: .1s;
    &:hover{
        color: #00c7fd;
    }
    
`

export const AllTimeInfoYear = styled.p`
    margin-bottom: 3px;
    font-size: 0.7rem;
    font-weight: 500;
    font-style: italic;
    color: #333;

`

export const AllTimeInfoVote = styled.p`
    margin-top: 3px;
    font-size: 0.8rem;
    font-weight: 500;
    color: #333;
    color: #2e81f7;

`


export const AllTimeItemScoreWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    width: 15%;
    position: relative;
`;
export const AllTimeScoreImg = styled.img`
    display: block;
    float: right;
    width: 100%;
    height: auto;
    justify-self: flex-end;
    
`;

export const AllTimeItemScore = styled.h3`
    position: absolute;
    margin-left: 10px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    bottom: 0;
    left:0;
    right:0;
    top: 0;
`;

export const AllTimeTopInfoLink = styled(Link)`
    text-decoration: none;

`;

export const DonationBanner = styled.div`
    margin-top: 20px;
    order: 2;
    max-height: 12%;
    height: calc(100% - 65% - 20px);
    background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 37px -2px rgba(0,199,253,1);
-moz-box-shadow: 0px 0px 37px -2px rgba(0,199,253,1);
box-shadow: 0px 0px 37px -2px rgba(0,199,253,1);
    &::before{
        position:absolute;
        z-index: -1;
        top: 10%;
        left: 10%;
        background: linear-gradient(transparent, navy);
        content: '';
    }

    @media screen and (max-width: 766px){
        max-height: 100%;
        height: 100px;
        margin: 0;
        order: 1;
    }
`;

export const DonationBannerImg1Wrapper = styled.div`
    position: absolute;
    display: block;
    bottom: 0;
    left:0;
    top:0;
    height: 100%;
    aspect-ratio: 1/1;
    
`;

export const DonationBannerImg2Wrapper = styled.div`
    position: absolute;
    bottom: 0;
    right:0;
    top:0;
    display: block;
    float: right;
    height: 100%;
    aspect-ratio: 1/1;
    

`;
export const DonationBannerImg1 = styled.img`
    height: 100%;
    width: auto;
    border-radius: 5px;

`
export const DonationBannerImg2 = styled.img`
    height: 100%;
    width: auto;
`;

export const DonationBannerBtn = styled.button`
    height: 45px;
    width: 110px;
    border-radius: 5px;
    border: 3px solid #fff;
    outline: none;
    background: transparent;
    color: #fff;
    cursor: pointer;
    transition: all 0.3s ease;
    font-weight: 500;
    &:hover{
        background: #fff;
        color: #262626;
    }

    
`;