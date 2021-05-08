import styled from 'styled-components'

export const NewsContainer = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    justify-content: center;
`;

export const NewsWrapper = styled.div`
    margin-top: 20px;
    width: 1300px;
    padding: 0 50px;
    background: green;
    height: 1000px;
`;

export const NewsHeader = styled.div`
    width: 100%;
    height: auto;
    display: block;
    position: relative;
    
`;
export const NewsTitle = styled.h1`
    width: 100%;
    height: auto;
    display: flex;
    background: yellow;
    padding: 15px;
   
`;

export const NewsSubHeader = styled.div`
    display: flex;
    position: relative;

`;
export const NewsDate = styled.div`
    display: flex;
    height: 40px;
    width: 120px;
    background: gray;
    float: left;
    align-self: flex-start;
    font-size: 0.8rem;
`;
export const NewsViewer = styled.div`
    display: flex;
    height: 40px;
    width: 120px;
    background: purple;
    font-size: 0.9rem;
    align-self: flex-start;

`;

export const NewsFacebookShareBtn = styled.button`
    display: flex;
    height: 40px;
    width: 120px;
    background: blue;
    align-self: flex-end;
    right: 0;
    
`;

export const NewsHeaderHR = styled.hr`
    height: 2px;
    border: 0;
    background: #000;
`;

export const NewsBody = styled.div`

`;