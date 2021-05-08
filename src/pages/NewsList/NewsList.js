import React, {useEffect} from 'react'
import styled from 'styled-components';
import {NewsSection, NewsListItems} from '../../components'
export const NewsListContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`;

export const NewsListWrapper = styled.div`
    width: 1300px;
    max-width: 1300px;
    padding: 0 50px;
    @media screen and (max-width: 766px){
        padding: 0 10px;
    }
`;

export const NewsListItemsWrapper = styled.div`
    width: 100%;
    display: flex;
    height: auto;
    flex-direction: column;
`;

export const NewsListItemsHeader = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    height: 40px;
    color: #0d0d0d;
    font-size: 1.1rem;
    border-bottom: 2px solid #0d0d0d;
`;
export const NewsListItemTitle = styled.h5`
    color: #fafafa;
    margin:0;
    background: #0d0d0d;
    display: block;
    line-height: 40px;
    padding: 0 20px;
    border-radius: 3px 3px 0 0;
`;

export const NewsListItemsSection = styled.div`
    width: 35%;
    background: yellow;
    margin-left: 5%;
`;

const NewsList = () => {
    
    return (
        <NewsListContainer>
            <NewsListWrapper>
                <NewsSection/>
                <NewsListItemsWrapper>
                    <NewsListItemsHeader>
                        <NewsListItemTitle>
                            Шинэ мэдээ
                        </NewsListItemTitle>
                        
                    </NewsListItemsHeader>
                    <NewsListItems/>
                </NewsListItemsWrapper>
                
            </NewsListWrapper>
        </NewsListContainer>
    )
}

export default NewsList
