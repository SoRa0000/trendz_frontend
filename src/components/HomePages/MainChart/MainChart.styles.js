import styled from 'styled-components'

export const MainChartWrapper = styled.div`
    display: flex;
    position: relative;
    height: auto;
    @media screen and (max-width: 766px){
        flex-direction: column;
    }
`;

export const WeeklyTop = styled.div`
    display: flex;
    max-width: 65%;
    width: 65%;
    height: auto;
    

    @media screen and (max-width: 766px){
        max-width: 100%;
        width: 100%;
        
    }
`

export const WeeklyTopImg = styled.img `
    display: flex;
    width: 100%;
    height: auto;
`;

export const SectionChartWrapper = styled.div`
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
export const AllTimeTop = styled.div`
    display: flex;
    height: 65%;
    background: yellow;
    @media screen and (max-width: 766px){
        display: none;
    }
`;

export const DonationBanner = styled.div`
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