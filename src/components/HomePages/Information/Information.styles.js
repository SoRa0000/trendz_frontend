import styled from 'styled-components'
export const InformationWrapper = styled.div`
    position: relative;
    margin-top: 50px;
    display: flex;
    width: 100%;
    height: 500px;
    flex-wrap: wrap;
`;

export const InformationSection = styled.div`
    width: 50%;
    background: yellow;
    height: 100%;

    @media screen and (max-width: 766px){
        width: 100%;
        height: 50%;
    }
`;
export const InformationBanner = styled.div`
    width: 50%;
    background: orange;
    height: 100%;

    @media screen and (max-width: 766px){
        width: 100%;
        height: 50%;
    }
`;