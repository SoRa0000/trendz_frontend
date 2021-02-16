import styled from 'styled-components'

export const MainPollWrapper = styled.div`
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

export const WeeklyPollMain = styled.div`
 display: flex;
 width: 34%;
 height: 100%;
 background: red;

 @media screen and (max-width: 766px){
     width: 100%;
     height: 100%;
 }
`;
export const WeeklyPollBannerWrapper = styled.div`
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
export const WeeklyPollBanner = styled.div`
    width: 50%;
    height: 50%;
    background: violet;

    @media screen and (max-width: 766px){

    }
`;