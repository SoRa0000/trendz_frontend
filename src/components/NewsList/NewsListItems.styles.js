import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NewsListItemsContainer = styled.div`
    margin-top: 20px;
    width: auto;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    @media screen and (max-width: 1300px){
        justify-content: center;
    }
    
`;

export const NewsListItemImgWrapper = styled.div`
    height: 200px;
    width: 360px;
    overflow: hidden; 
    @media screen and (max-width: 1300px){
        width: 300px;
        height: 270px;
    }
    
`;
export const NewsListItemImg = styled.img`
    height: 100%;
    width: 100%;
    border-radius: 3px 3px 0 0;
    transition: transform 0.3s ease-in-out;
    
    
`;
export const NewsListItem = styled.div`
    width: 360px;
    height: 320px;
    border-bottom: 1px solid #333;
    display: flex;
    margin-bottom: 20px;
    flex-direction: column;
    margin-right: 30px;
    &:hover ${NewsListItemImg}{
        transform: scale(1.1);
    }
    @media screen and (max-width: 1300px){
        width: 300px;
        height: 270px;
        margin-right: 0;
    }
`;

export const NewsListItemHeader = styled.div`
    margin-top: 10px;
    height: auto;
    width: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    
`;

export const NewsListTitle = styled.h4`
    font-size: 1.1rem;
    font-weight: 500;
    color: #0d0d0d;

    &:hover{
        color: #2e81f7;
    }

    @media screen and (max-width: 1300px){
        font-size: 0.9rem;
    }
`;

export const NewsListItemFooter = styled.div`
    height: 30px;
    width: 100%;
    display: flex;
`;

export const NewsListItemFooterDate =  styled.div`
    display: flex;  
    align-items: flex-end;
    height: 100%;
    width: 50%;
    font-size: 0.8rem;
    color: #555;
    justify-content: start;
    @media screen and (max-width: 1300px){
        font-size: 0.7rem;
    }
`;

export const NewsListItemFooterViewer = styled.div`
    height: 100%;
    width: 50%;
    display: flex;
    font-size: 0.9rem;
    align-items: flex-end;
    color: #555;
    justify-content: flex-end;
    @media screen and (max-width: 1300px){
        font-size: 0.7rem;
    }
`;

export const NewsListItemLink = styled(Link)`
    text-decoration: none;
`;