import React from 'react'
import styled from 'styled-components'
import {VoteWeeklyList} from '../../../components'
export const VoteAnimeContainer = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: center;
    height: 100%;
    width: 100%;
    align-items: center;
`;

export const VoteAnimeWrapper = styled.div`
    display: flex;
    width: 1300px;
    padding: 0 50px;
    height: auto;
    flex-direction: column;

    @media screen and (max-width: 766px){
        padding:0 10px;
    }
`;
export const VoteAnimeWeeklyWrapper = styled.div`
    display: flex;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
    border-bottom: 2px;
    
`;

export const VoteAnimeHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    border-width: 3px;
    border-style: solid;
    border-image-source: linear-gradient(to right, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);
    border-image-slice: 1;
    border-top: none;
    border-right: none;
    border-left: none;
    color: #0d0d0d;
    font-weight: 500;
    font-size: 1.2rem;
`;
const Vote_Anime = () => {
    return (
        <VoteAnimeContainer>
            <VoteAnimeWrapper>
                <VoteAnimeWeeklyWrapper>
                    <VoteAnimeHeader>
                        7 хоногийн ШИЛДЭГ                                                    
                    </VoteAnimeHeader>
                    <VoteWeeklyList/>
                </VoteAnimeWeeklyWrapper>
                <VoteAnimeWeeklyWrapper>
                    <VoteAnimeHeader>
                        Хаврын улирлын ШИЛДЭГ                                                    
                    </VoteAnimeHeader>
                    <VoteWeeklyList/>
                </VoteAnimeWeeklyWrapper>
            </VoteAnimeWrapper>
        </VoteAnimeContainer>
    )
}

export default Vote_Anime
