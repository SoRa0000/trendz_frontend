import React from 'react'
import {VoteListItems} from '../../../components'
import styled from 'styled-components'
import {FaRegPaperPlane} from 'react-icons/fa'
export const VoteListContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    flex-direction: column;
`;

export const VoteListWrapper = styled.div`
    max-width: 1300px;
    display: flex;
    padding-left: 50px;
    padding-right: 50px;
    padding-bottom: 0;
    height: auto;
    padding-top: 20px;
    flex-wrap: wrap;
    @media screen and (max-width: 766px){
        justify-content: center;
        padding-left: 0;
        padding-right: 0;
    }
`;

export const VoteSubmitBtnWrapper = styled.div`
    position: sticky;
    height: 100px;
    width: 300px;
    bottom: 0;
    left:0;
    right:0;
    z-index: 999;
    display: flex;
    align-items: center;
    justify-content: center;

    
`;
export const VoteSubmitBtn = styled.button`
    display: flex;
    height: 40px;
    width: 180px;
    outline: none;
    align-items: center;
    justify-content: center;
    color: #fff;
    background: #0d0d0d;
    font-size: 0.85rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover{
        background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);
        transform: scale(1.2);
    }
    
`;
const VoteList = () => {
    return (
        <VoteListContainer>
            <VoteListWrapper>
                <VoteListItems/>
            </VoteListWrapper>
            <VoteSubmitBtnWrapper>
                <VoteSubmitBtn>Саналыг илгээх<FaRegPaperPlane style={{marginLeft: "10px"}}/></VoteSubmitBtn>
            </VoteSubmitBtnWrapper>
        </VoteListContainer>
    )
}

export default VoteList
