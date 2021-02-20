import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const VoteLink = styled(Link)`
    text-decoration: none;
    color: #fff;
`;

export const VoteWeeklyListItemBgImg = styled.img`
    position: relative;
    height: 100%;
    width: 100%;
    border-radius: 3px;
    transition: transform .3s ease;
    overflow: hidden;
`;

export const VoteWeeklyListItem = styled.div`
    margin: 20px 20px;
    height: 200px;
    width: 200px;
    position: relative;
    border-radius: 3px;
    overflow: hidden;
    transition: transform .3s ease;
    &:hover ${VoteWeeklyListItemBgImg}{
        transform: scale(1.1);
    }

    @media screen and (max-width: 766px){
        height: 160px;
        width: 160px;
        margin: 5px 5px;
    }
`;


export const VoteWeeklyListTitle = styled.div`
    padding-top: 20px;
    position: relative;
    color: #fff;
    height: 50%;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 500;
    justify-content: center;
    letter-spacing: 2px;
`
export const VoteWeeklyListItemBg = styled.div`
    background: linear-gradient(0deg,rgba(13, 13, 13, 1) 0%, rgba(13, 13, 13, 0.3) 100%);
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    border-radius: 3px;
    
    
`;



export const VoteWeeklyListBtnWrapper = styled.div`
    padding-top: 20px;
    position: relative;
    color: #fff;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const VoteWeeklyListBtn =  styled.button`
    display: flex;
     align-items: center;
     justify-content: center;
     font-size: 0.8rem;
    height: 30px;
    width: 130px;
    outline: none;
    border: none;
    background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 25%, #35dfcd 50%, #00c7fd 75%, #2e81f7 100%);
    background-size: 200% auto;
    color:#fff;
    cursor: pointer;
    border-radius: 3px 15px 15px 3px;
    transition: .3s;
    &:hover{
        background-position: right center;
    }
`