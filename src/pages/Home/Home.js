import React from 'react'
import {NewsSection} from '../../components'
import styled from 'styled-components'
const HomeContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
`;

const HomeWrapper = styled.div`
    background: #04857f;
    height: 3000px;
    width: 1300px; 
    padding: 0 50px; 
    @media screen and (max-width: 960px){
        padding: 0 10px;
    }
    
`;

const MainChartWrapper = styled.div`
    display: flex;
    position: relative;
    height: auto;
    @media screen and (max-width: 766px){
        flex-direction: column;
    }
`;

const WeeklyTop = styled.div`
    display: flex;
    max-width: 65%;
    width: 65%;
    height: auto;
    

    @media screen and (max-width: 766px){
        max-width: 100%;
        width: 100%;
        
    }
`

const WeeklyTopImg = styled.img `
    display: flex;
    width: 100%;
    height: auto;
`;

const SectionChartWrapper = styled.div`
    margin-left: 20px;
    max-width: 35%;
    width: 35%;
    background: red;
    @media screen and (max-width: 766px){
        margin: 20px 0;
        max-width: 100%;
        width: 100%;
    }
    
`
const AllTimeTop = styled.div`
    display: flex;
    height: 65%;
    background: yellow;
    @media screen and (max-width: 766px){
        display: none;
    }
`;

const DonationBanner = styled.div`
    margin-top: 20px;
    max-height: 35%;
    height: calc(100% - 65% - 20px);
    background: cyan;

    @media screen and (max-width: 766px){
        max-height: 100%;
        height: 80px;
        margin: 0;
    }
`;

const MainPollWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 500px;
    background: purple;
    margin-top: 20px;

    @media screen and (max-width: 766px){
        flex-direction: column;
        height: 500px;
    }
`;

const WeeklyPollMain = styled.div`
 display: flex;
 width: 34%;
 height: 100%;
 background: red;

 @media screen and (max-width: 766px){
     width: 100%;
     height: 100%;
 }
`;
const WeeklyPollBannerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 66%;
    height: 100%;
    background: green;

    @media screen and (max-width: 766px){
        width: 100%;
        height: 100%;
    }
`
const WeeklyPollBanner = styled.div`
    width: 50%;
    height: 50%;
    background: violet;

    @media screen and (max-width: 766px){

    }
`;
const SecondaryPollWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    width: 100%;
    height: 250px;
    background: red;
`
const SecondaryPoll = styled.div`
    width: 25%;
    height: 100%;
    background: blue;
    color: #fff;
    @media screen and (max-width: 766px){
        width: 50%;
        height: 50%;
    }
`
const InformationWrapper = styled.div`
    margin-top: 20px;
    display: flex;
    width: 100%;
    height: 500px;
    flex-wrap: wrap;
`;

const InformationSection = styled.div`
    width: 50%;
    background: yellow;
    height: 100%;

    @media screen and (max-width: 766px){
        width: 100%;
        height: 50%;
    }
`;
const InformationBanner = styled.div`
    width: 50%;
    background: orange;
    height: 100%;

    @media screen and (max-width: 766px){
        width: 100%;
        height: 50%;
    }
`;
const Home = () => {
    return (
        <HomeContainer>
            <HomeWrapper>
                <NewsSection />
                <MainChartWrapper>
                    <WeeklyTop>
                        <WeeklyTopImg src="images/weekly_top.png" />
                    </WeeklyTop>
                    <SectionChartWrapper>
                        <AllTimeTop>
                            AllTimeTop
                        </AllTimeTop>

                        <DonationBanner>
                            DonationBar
                        </DonationBanner>
                    </SectionChartWrapper>
                </MainChartWrapper>
                <MainPollWrapper>
                    <WeeklyPollMain>
                        MainPoll
                    </WeeklyPollMain>
                    <WeeklyPollBannerWrapper>
                        <WeeklyPollBanner>
                            Secondary Poll
                        </WeeklyPollBanner>
                        <WeeklyPollBanner>
                            Secondary Poll
                        </WeeklyPollBanner>
                        <WeeklyPollBanner>
                            Secondary Poll
                        </WeeklyPollBanner>
                        <WeeklyPollBanner>
                            Secondary Poll
                        </WeeklyPollBanner>
                    </WeeklyPollBannerWrapper>
                </MainPollWrapper>
                <SecondaryPollWrapper>
                    <SecondaryPoll>
                        Secondary Poll Banner
                    </SecondaryPoll>
                    <SecondaryPoll>
                        Secondary Poll Banner
                    </SecondaryPoll>
                    <SecondaryPoll>
                        Secondary Poll Banner
                    </SecondaryPoll>
                    <SecondaryPoll>
                        Secondary Poll Banner
                    </SecondaryPoll>
                </SecondaryPollWrapper>
                <InformationWrapper>
                    <InformationSection>
                        Information Section
                    </InformationSection>
                    <InformationBanner>
                        Information Banner
                    </InformationBanner>
                </InformationWrapper>
            </HomeWrapper>
        </HomeContainer>
    )
}

export default Home
