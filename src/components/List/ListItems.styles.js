import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const ListItemsWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`;

export const ListItem = styled.div`
    height: 100px;
    width: 100%;
    background: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    border-radius: 10px;
    margin-bottom: 20px;

    -webkit-box-shadow: 0px 34px 39px -43px rgba(153,153,153,1);
    -moz-box-shadow: 0px 34px 39px -43px rgba(153,153,153,1);
    box-shadow: 0px 34px 39px -43px rgba(153,153,153,1);


    @media screen and (max-width: 766px){
        height: 140px;
    }

`;

export const ListItemRank = styled.div`
     display: flex;
     justify-content: center;
     align-items: center;
    height: 100px;
    width: 80px;
    color: #333;
    font-size: 1.75rem;
    font-weight: 900;

    @media screen and (max-width: 766px){
        height: 140px;
        width: 40px;
        font-size: 1.25rem;
    }
    
`;

export const ListItemMainWrapper = styled.div`
    max-width: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    @media screen and (max-width: 766px){
        max-width: 100%;
        width: 80%;
    }
`;

export const ListItemImgWrapper = styled.div`
    height: 80px;
    width: 60px;
    @media screen and (max-width: 766px){
        height: 120px;
        width: 90px;
        margin-bottom: 5px;
    }

    @media screen and (max-width: 360px){
        height: 100px;
        width: 65px;
    }
`;

export const ListItemImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 3px;
`;
export const ListItemDescWrapper = styled.div`
    padding-top: 0px;
    max-width:60%;
    width: 60%;
    height: 80px;
    margin-left: 20px;
    @media screen and (max-width: 766px){
        max-width: 60%;

    }
`;
export const ListItemDescTitle = styled.h4`
    font-weight: 500;
    color: #2a2a2a;
    font-size: 1.1rem;
    @media screen and (max-width: 766px){
        height: 50px;
        font-size: 0.8rem;
    }
`;
export const ListItemDescSub = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 766px){
        height: 35px;
    }
`;
export const ListItemDescType = styled.p`
    margin-top: 5px;
    font-size: 0.7rem;
    color: #666;
    @media screen and (max-width: 766px){
        margin-right: 10px;
        font-size: 0.6rem;
    }
`;

export const ListItemDescStatus = styled.p`
    margin-top: 5px;
    font-size: 0.7rem;
    color: #666;
    @media screen and (max-width: 766px){
        font-size: 0.6rem;
    }
`;
export const ListItemDescCategories = styled.div`
    display: flex;
    width: 100%;
    height: 20px;
    align-items: flex-end;
    @media screen and (max-width: 766px){
        height: 35px;
        width: 120px;
    }
`;

export const ListItemDescCategory = styled.div`
     display: flex;
     justify-content: center;
     align-items:center;
     padding: 0 7px;
     border-radius: 5px;
     height: 15px;
    width: auto;
    flex-wrap: wrap;
    background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);
    color: #f2f2f2;
    font-size: 0.6rem;
    margin-right: 10px;
    @media screen and (max-width: 766px){
        padding: 0 5px;
        font-size: 0.4rem;
        height: 12px;
        
    }
`
export const ListItemBackWrapper = styled.div`
    position: relative;
    width: 280px;
    height: 80px;
    margin: 10px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 766px){
        flex-direction: column;
        height: 120px;
        width: 40px;
    }
`;
export const ListItemScoreWrapper = styled.div`
    display: flex;
    position: relative;
    height: 100%;
    width: 200px;
    @media screen and (max-width: 766px){
        flex-direction: column;
        height: 90px;
        width: 40px;
    }

`;
export const ListItemOverallSroce = styled.div`
    width: 50%;
    height: 100%;
    padding: 10px;
    position: relative;
    @media screen and (max-width: 766px){
        height: 50%;
        width: 100%;
        padding: 0;
    }
`;
export const ListItemOverallScoreBg = styled.img`
    height: 100%;
    width: 100%;
    position: relative;
    
`;
export const ListItemOverScoretxt = styled.div`
    position: absolute;
    bottom:0;
    left:0;
    right:0;
    top:0;
    display: flex;
    align-items: center;
    justify-content:center;
    color: #fff;
    font-weight: 500;
    font-size: 1.2rem;
    @media screen and (max-width: 766px){
        font-size: 0.9rem;
    }
`

export const ListItemYourScore = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;

    @media screen and (max-width: 766px){
        height: 50%;
        width: 100%;

    }
`;



export const ListItemYourScoreTitle = styled.div`
    height: 20px;
    width: auto;
    text-align: center;
    font-size: .9rem;
    color: #333;
    padding-top: 5px;
    @media screen and (max-width: 766px){
        height: 10px;
        font-size: 0.5rem;
    }

`;
export const ListItemYourScoreMain = styled.div`
    height: 60px;
    width: 100%;
    position:relative;
    display: flex;
    justify-content: center;
    padding: 10px 0;

    @media screen and (max-width: 766px){
        height: 60%;
        padding:0;
        margin-top: 5px;
    }
    
`;

export const ListItemYourScoreBg = styled.img`
    height: 100%;
    width: 100%;
    position:relative;
`;

export const ListItemYourScoretxt = styled.div`
    position: absolute;
    bottom:0;
    left:0;
    right:0;
    top:0;
    display: flex;
    justify-content:center;
    align-items: center;
    color: #fff;
    font-weight: 400;
    font-size: .8rem;
    @media screen and (max-width: 766px){
        font-size: .55rem;
    }
`;


export const ListItemAddBtn = styled.button`
        margin-left: 15px;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        border: none;
        background: #0d0d0d;
        color: #fff;
        display:flex;
        justify-content:center;
        align-items: center;
        font-size: 1rem;
        outline: none;
        cursor: pointer;
        &:hover{
            background: #0d0d0d;
            background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);
        }
        @media screen and (max-width: 766px){
            margin-top: 5px;
            margin-left: 0;
            height: 25px;
            width: 25px;
            font-size: 0.9rem;
        }

`;
export const ListItemAddedBtn = styled.button`
        padding-top: 2px;
        padding-left: 1px;
        margin-left: 15px;
        height: 35px;
        width: 35px;
        border-radius: 50%;
        border: none;
        background: #33cc33;
        
        color: #fff;
        display:flex;
        justify-content:center;
        align-items: center;
        font-size: 1rem;
        outline: none;
        cursor: pointer;

        &:hover{
            background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);
        }
        @media screen and (max-width: 766px){
            margin-left: 0;
            height: 30px;
            width: 30px;
            font-size: .9rem;
        }

`;

export const ListDescTitleLink = styled(Link)`
    text-decoration: none;
`;