import React,{useEffect} from 'react'
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
    height: auto;
    width: 1300px; 
    padding: 0 50px; 
    @media screen and (max-width: 960px){
        padding: 0 10px;
    }
`;





const Home = () => {
    useEffect(() =>{
        try{
          window.scroll({
            top:0,
            left:0,
            behavior: 'smooth',
          });
        }
        catch (error) {
          window.scroll(0,0);
        }
      },[])
    return (
        <HomeContainer>
            <HomeWrapper>
                <NewsSection />
                <MainChart />
                <MainPoll />
                <SecondaryPoll />
                {/* <Information />*/} 
            </HomeWrapper>
        </HomeContainer>
    )
}

export default Home
