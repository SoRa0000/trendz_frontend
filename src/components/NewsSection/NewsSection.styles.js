import styled from 'styled-components'

export const NewsSectionWrapper = styled.div`
    max-width: 100%;
    margin: 20px 0;
    padding-top: 30%;
    background: gray;
    position: relative;
    @media screen and (max-width: 766px){
        padding-top: 109.09%;
    }

`;

export const SlideShow = styled.div`
    top:0;
    bottom: 0;
    left: 0;
    width: 55%;
    height: 100%;    
    background: green;
    position: absolute;

    @media screen and (max-width: 766px){
        width: 100%;
        top: 0;
        left: 0;
        right: 0;
        height: 50%;
    }
`;

export const NewsBannerWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    top:0;
    bottom: 0;
    right:0;
    position: absolute;
    width: 45%;
    height: 100%;
    background: red;
    @media screen and (max-width: 766px){
        width:100%;
        height: 50%;
        bottom: 0;
        left: 0;
        top: 50%;
    }
    
`;

export const MainNews = styled.div`


`;

export const NewsBanner = styled.div`
    width: 50%;
    height: 50%;
    background: blue;
    color: #fff;
    @media screen and (max-width: 766px){
        height: 50%;
        width: 50%;
    }
`;
