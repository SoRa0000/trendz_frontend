import React from 'react'
import styled from 'styled-components'
import {ListItems} from '../../components'

export const ListContainer = styled.div`
    width:100%;
    height: auto;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    
`;

export const ListWrapperHeader = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: flex-end;
    border-bottom: 1px solid #333;
    margin-bottom: 30px;
`;

export const ListWrapper = styled.div`
    margin-top: 20px;
    max-width: 1300px;
    width: 1300px;
    padding: 10px 50px;
    height: auto;
    flex-direction: column;
    @media screen and (max-width: 766px){
        padding: 10px;
    }
`;
const AnimeList = () => {
    return (
        <ListContainer>
            <ListWrapper>
                <ListWrapperHeader>
                    АНИМЭ ЖАГСААЛТ
                </ListWrapperHeader>
                <ListItems/>
            </ListWrapper>
        </ListContainer>
    )
}

export default AnimeList
