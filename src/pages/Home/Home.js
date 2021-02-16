import React from 'react'
import {
    NewsSection,
    MainChart,
    MainPoll,
    SecondaryPoll,
    Information

} from '../../components'
import styled from 'styled-components'
const HomeContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
`;

const HomeWrapper = styled.div`
    height: 3000px;
    width: 1300px; 
    padding: 0 50px; 
    @media screen and (max-width: 960px){
        padding: 0 10px;
    }
`;





const Home = () => {
    return (
        <HomeContainer>
            <HomeWrapper>
                <NewsSection />
                <MainChart />
                <MainPoll />
                <SecondaryPoll />
                <Information />
            </HomeWrapper>
        </HomeContainer>
    )
}

export default Home
