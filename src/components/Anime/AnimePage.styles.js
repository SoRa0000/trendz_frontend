import styled from 'styled-components'

export const AnimePageContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AnimePageCover = styled.div`
    width: 100%;
    height: 350px;
    position: relative;
    overflow: hidden;
`;
export const AnimePageCoverImg = styled.img`
    width: 100%;
    height: auto;
    position: sticky;
`;
export const AnimePageCoverFilter = styled.div`
    position: absolute;
    z-index: 5;
    top:0;
    right:0;
    bottom:0;
    left:0;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    opacity: 0.7;
`;

export const AnimePageWrapper = styled.div`
    width: 1200px;
    height: auto;
`;

export const AnimePageHeaderWrapper = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
`;

export const AnimePageHeaderProfile = styled.div`
    margin-top: -200px;
    width: 210px;
    height: 300px;
    z-index: 10;
`;

export const AnimePageHeaderProfileImg = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 5px;
`;

export const AnimePageHeader = styled.div`
    height: 100px;
    max-width: 80%;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    padding: 0px 20px;
`;

export const AnimePageHeaderTitle = styled.h2`
    margin-top: 20px;
    width: 100%;
    font-weight: 400;
`;  

export const AnimePageHeaderSub = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    align-items: flex-end;
    padding: 5px 0px;
`;

export const AnimePageHeaderSubItem = styled.p`
    padding: 5px 10px;
    margin-right: 5px;
    background: #00e64d;
    color: #fff;
    font-size: 0.8rem;
    border-radius: 3px;

`;

export const AnimePageHeaderAddtoListBtn = styled.button`
    font-size: 0.8rem;
    padding: 5px 10px;
    margin-right: 5px;
    background: #00e64d;
    border: none;
    outline: none;
    cursor: pointer;
    color: #fff;
    border-radius: 3px;
`;

export const AnimePageMainWrapper = styled.div`
position: relative;
    margin-top: 20px;
    width: 1200px;
    display: flex;
    
    height: auto;
`;
export const AnimePageSectionWrapper = styled.div`
    padding: 5px 15px 15px 15px;
    width: 210px;
    max-width: 210px;
    background: #fff;
    height: 100%;
    flex-direction: column;
    display: flex;
    -webkit-box-shadow: 0px 0px 17px -9px rgba(51,51,51,1);
-moz-box-shadow: 0px 0px 17px -9px rgba(51,51,51,1);
box-shadow: 0px 0px 17px -9px rgba(51,51,51,1);
`;
export const AnimePageContentWrapper = styled.div`
    width: calc(100% - 210px);
    height: auto;
    max-width: 100%;
    margin-left: 20px;
    display: flex;
    flex-direction: column;
`;

export const AnimePageSectionItemWrapper = styled.div`
    height: 50px;
    width: 100%;
    display:flex;
    flex-direction: column;
    margin-top: 10px;
`;
export const  AnimePageSectionItem = styled.div`
    width: 100%;
    display:flex;
    height: 25px;
    align-items: center;
    justify-content: flex-start;
    font-size: 0.9rem;
    font-weight: 600;
    color: #0d0d0d;
`;
export const AnimePageSectionSubItem = styled.div`
    display:flex;
    height: 25px;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    font-size: 0.85rem;
    font-weight: 400;
    color: #333;
`;

export const AnimePageContentHeader = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    height: 40px;
    background: #fff;
    padding: 0 15px;
`;

export const AnimePageContentHeaderBtn = styled.button`
    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-right: 25px;
    border: none;
    outline: none;
    cursor: pointer;
    background: #fff;
    font-size: 0.8rem;
`;

export const AnimePageContentDescWrapper = styled.div`
    margin-top: 25px;
    padding: 20px 20px;
    width: 100%;
    height: auto;
    background: #fff;

`;

export const AnimePageContentDescTitle = styled.h3`
    font-weight: 500;

`;

export const AnimePageContentDesc = styled.p`
    margin-top: 10px;
    font-weight: 400;
    font-size: 0.9rem;
`;

export const AnimePageContentCharacterWrapper = styled.div`
    margin-top: 25px;
    padding: 20px 20px;
    display: flex;
    width: 100%;
    flex-wrap: wrap;
`;
export const AnimePageContentCharacterTitle = styled.h3`
    width: 100%;
    margin-bottom: 10px;
    font-weight: 500;
`
export const AnimePageContentCharacterItem = styled.div`
    height: 100px;
    width: 44%;
    background: #fff;
    margin-right: 50px;
    display: flex;
    margin-bottom: 15px;
`;
export const AnimePageContentCharacter = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;

`;
export const AnimePageContentCharacterImg = styled.img`
    height: 100%;
    width: auto;
    display:flex;
`;
export const AnimePageContentCharacterInfo =  styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
`;
export const AnimePageContentCharacterName = styled.p`
    display:flex;
    align-items: flex-start;
    width: 100%;
    height: 50%;
    font-size: 0.8rem;    
    font-weight: 500;

`;

export const AnimePageContentCharacterRole =  styled.p`
    display: flex;
    align-items: flex-end;
    width: 100%;
    height: 50%;   
    font-size: 0.8rem;
    color: #333;
`;

export const AnimePageContentAct = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-wrap: nowrap;

`;