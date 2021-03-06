import styled from 'styled-components';

export const VoteListItemCover = styled.div`
    z-index: 1;
    height: 100%;
    width: 100%;
    position: absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    -webkit-filter: blur(1px) brightness(0.7);
    filter: blur(1px) brightness(0.7);
    transition: filter .5s ease;
`;

export const VoteListItem = styled.div`
    height: 320px;
    width: 200px;
    margin: 20px;
    -webkit-box-shadow: 0px 0px 20px -12px rgba(13,13,13,1);
    -moz-box-shadow: 0px 0px 20px -12px rgba(13,13,13,1);
    box-shadow: 0px 0px 20px -12px rgba(13,13,13,1);
    border-radius: 5px;

    &:hover ${VoteListItemCover}{
        -webkit-filter: brightness(0.8);
        filter: brightness(0.8);
    }
    @media screen and (max-width: 766px){
        height: 200px;
        width: 130px;
        margin: 10px;
        border-radius: 3px;
    }
`;

export const VoteListItemHeader = styled.div`
    height: 120px;
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 766px){
        height:80px;
    }
`;

export const VoteListItemCoverImg = styled.img`
    height: auto;
    width: 100%;
`;
export const VoteListItemProfile = styled.div`
    margin-bottom: -90px;
    height: 100px;
    width: 100px;
    z-index: 2;
    @media screen and (max-width: 766px){
        margin-bottom: -65px;
        height: 65px;
        width: 65px;
    }
    
`;
export const VoteListItemProfileImg = styled.img`
    height: 100%;
    width: 100%;
    border: 2px solid #fff;
    border-radius: 25px;
    -webkit-box-shadow: 0px 0px 13px -1px rgba(102,102,102,1);
    -moz-box-shadow: 0px 0px 13px -1px rgba(102,102,102,1);
    box-shadow: 0px 0px 13px -1px rgba(102,102,102,1);
    @media screen and (max-width: 766px){
        border-radius: 20px;
    }
`;
export const VoteListItemTitle = styled.div`
    display: flex;
    margin-top: 30px;
    height: 80px;
    width: 100%;
    align-items: center;
    color: #222;
    justify-content: center;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
    @media screen and (max-width: 766px){
        margin-top: 20px;
        height: 50px;
        font-size: 0.7rem;

    }
`;

export const VoteListItemBtnWrapper = styled.div`
    display: flex;
    height: 60px;
    margin-top: 10px;
    width: 100%;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 766px){
        height: 50px;
        margin-top: 0;
    }
`;

export const VoteListBtn = styled.button`
    height: 35px;
    width: 150px;
    background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 25%, #35dfcd 50%, #00c7fd 75%, #2e81f7 100%);
    background-size: 200% auto;
    outline: none;
    border: none;
    transition: .3s;
    border-radius: 17px;
    cursor: pointer;
    color: #fff;
    font-size: 0.85rem;
    &:hover{
        background-position: right center;
    }
    @media screen and (max-width: 766px){
        height: 30px;
        width: 90px;
        border-radius: 15px;
        font-size: 0.6rem;
    }
`;