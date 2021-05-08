import React from 'react'
import {
    AnimePageContainer,
    AnimePageCover,
    AnimePageCoverImg,
    AnimePageCoverFilter,
    AnimePageWrapper,
    AnimePageHeaderWrapper,
    AnimePageHeaderProfile,
    AnimePageHeaderProfileImg,
    AnimePageHeader,
    AnimePageHeaderTitle,
    AnimePageHeaderSub,
    AnimePageHeaderSubItem,
    AnimePageHeaderAddtoListBtn,
    AnimePageMainWrapper,
    AnimePageSectionWrapper,
    AnimePageContentWrapper,
    AnimePageSectionItemWrapper,
    AnimePageSectionItem,
    AnimePageSectionSubItem,
    AnimePageContentHeader,
    AnimePageContentHeaderBtn,
    AnimePageContentDescWrapper,
    AnimePageContentDescTitle,
    AnimePageContentDesc,
    AnimePageContentCharacterWrapper,
    AnimePageContentCharacterTitle,
    AnimePageContentCharacterItem,
    AnimePageContentCharacter,
    AnimePageContentAct,
    AnimePageContentCharacterImg,
    AnimePageContentCharacterInfo,
    AnimePageContentCharacterName,
    AnimePageContentCharacterRole
} from './AnimePage.styles.js'

const AnimePage = () => {
    return (
        <AnimePageContainer>
           <AnimePageCover>
               <AnimePageCoverImg src='/images/cover.jpg'/>
               <AnimePageCoverFilter>

               </AnimePageCoverFilter>
            </AnimePageCover> 
            <AnimePageWrapper>
                <AnimePageHeaderWrapper>
                    <AnimePageHeaderProfile>
                        <AnimePageHeaderProfileImg src="/images/profile.png"/>
                    </AnimePageHeaderProfile>
                    <AnimePageHeader>
                        <AnimePageHeaderTitle>Attack on Titan Final Season</AnimePageHeaderTitle>
                        <AnimePageHeaderSub>
                            <AnimePageHeaderSubItem>
                                Эзэлж буй байр #1
                            </AnimePageHeaderSubItem>
                            <AnimePageHeaderSubItem>
                                Үнэлгээ 9,8
                            </AnimePageHeaderSubItem>
                            <AnimePageHeaderSubItem>
                                Таны үнэлгээ N/A
                            </AnimePageHeaderSubItem>
                                <AnimePageHeaderAddtoListBtn>
                                    Жагсаалтанд нэмэх
                                </AnimePageHeaderAddtoListBtn>
                        </AnimePageHeaderSub>
                    </AnimePageHeader>
                </AnimePageHeaderWrapper>
                <AnimePageMainWrapper>
                    <AnimePageSectionWrapper>
                        <AnimePageSectionItemWrapper>
                            <AnimePageSectionItem>
                                Төрөл
                            </AnimePageSectionItem>
                            <AnimePageSectionSubItem>
                                16 ангит
                            </AnimePageSectionSubItem>
                        </AnimePageSectionItemWrapper>
                        <AnimePageSectionItemWrapper>
                            <AnimePageSectionItem>
                                Төлөв
                            </AnimePageSectionItem>
                            <AnimePageSectionSubItem>
                                Гарч байгаа 
                            </AnimePageSectionSubItem>
                        </AnimePageSectionItemWrapper>
                        <AnimePageSectionItemWrapper>
                            <AnimePageSectionItem>
                                Үргэлжлэх хугацаа
                            </AnimePageSectionItem>
                            <AnimePageSectionSubItem>
                                23 минут
                            </AnimePageSectionSubItem>
                        </AnimePageSectionItemWrapper>
                        <AnimePageSectionItemWrapper>
                            <AnimePageSectionItem>
                                Гарж эхэлсэн он сар
                            </AnimePageSectionItem>
                            <AnimePageSectionSubItem>
                                2021 оны 2-р сарын 01
                            </AnimePageSectionSubItem>
                        </AnimePageSectionItemWrapper>
                        <AnimePageSectionItemWrapper>
                            <AnimePageSectionItem>
                                Гарсан улирал
                            </AnimePageSectionItem>
                            <AnimePageSectionSubItem>
                                2021 оны Өвөл
                            </AnimePageSectionSubItem>
                        </AnimePageSectionItemWrapper>
                        <AnimePageSectionItemWrapper>
                            <AnimePageSectionItem>
                                Студио
                            </AnimePageSectionItem>
                            <AnimePageSectionSubItem>
                                Mappa
                            </AnimePageSectionSubItem>
                        </AnimePageSectionItemWrapper>
                        <AnimePageSectionItemWrapper>
                            <AnimePageSectionItem>
                                Нийт үзэгч
                            </AnimePageSectionItem>
                            <AnimePageSectionSubItem>
                                13214
                            </AnimePageSectionSubItem>
                        </AnimePageSectionItemWrapper>
                        <AnimePageSectionItemWrapper>
                            <AnimePageSectionItem>
                                Ангилал
                            </AnimePageSectionItem>
                            <AnimePageSectionSubItem>
                                Тулаан, Нууцлагдмал
                            </AnimePageSectionSubItem>
                        </AnimePageSectionItemWrapper>
                    </AnimePageSectionWrapper>
                    <AnimePageContentWrapper>
                        <AnimePageContentHeader>
                            <AnimePageContentHeaderBtn>Overview</AnimePageContentHeaderBtn>
                            <AnimePageContentHeaderBtn>Characters</AnimePageContentHeaderBtn>
                            <AnimePageContentHeaderBtn>Watch</AnimePageContentHeaderBtn>
                            <AnimePageContentHeaderBtn>Relations</AnimePageContentHeaderBtn>
                            <AnimePageContentHeaderBtn>Reviews</AnimePageContentHeaderBtn>
                        </AnimePageContentHeader>
                        <AnimePageContentDescWrapper>
                            <AnimePageContentDescTitle>Description</AnimePageContentDescTitle>
                            <AnimePageContentDesc>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </AnimePageContentDesc>
                        </AnimePageContentDescWrapper>
                        <AnimePageContentCharacterWrapper>
                            <AnimePageContentCharacterTitle>Characters</AnimePageContentCharacterTitle>
                            <AnimePageContentCharacterItem>
                                <AnimePageContentCharacter>
                                    <AnimePageContentCharacterImg src="/images/character.jpg"/>

                                    <AnimePageContentCharacterInfo>
                                        <AnimePageContentCharacterName>Mikasa Ackerman</AnimePageContentCharacterName>
                                        <AnimePageContentCharacterRole>Main</AnimePageContentCharacterRole>
                                    </AnimePageContentCharacterInfo>
                                   
                                </AnimePageContentCharacter>
                                <AnimePageContentAct>
                                    

                                    <AnimePageContentCharacterInfo>
                                        <AnimePageContentCharacterName>Yui Ishikawa</AnimePageContentCharacterName>
                                        <AnimePageContentCharacterRole>Japanese</AnimePageContentCharacterRole>
                                    </AnimePageContentCharacterInfo>
                                    <AnimePageContentCharacterImg src="/images/voice.jpg"/>

                                </AnimePageContentAct>

                            </AnimePageContentCharacterItem>
                            <AnimePageContentCharacterItem>
                                <AnimePageContentCharacter>
                                    <AnimePageContentCharacterImg src="/images/character.jpg"/>

                                    <AnimePageContentCharacterInfo>
                                        <AnimePageContentCharacterName>Mikasa Ackerman</AnimePageContentCharacterName>
                                        <AnimePageContentCharacterRole>Main</AnimePageContentCharacterRole>
                                    </AnimePageContentCharacterInfo>
                                   
                                </AnimePageContentCharacter>
                                <AnimePageContentAct>
                                    

                                    <AnimePageContentCharacterInfo>
                                        <AnimePageContentCharacterName>Yui Ishikawa</AnimePageContentCharacterName>
                                        <AnimePageContentCharacterRole>Japanese</AnimePageContentCharacterRole>
                                    </AnimePageContentCharacterInfo>
                                    <AnimePageContentCharacterImg src="/images/voice.jpg"/>

                                </AnimePageContentAct>

                            </AnimePageContentCharacterItem>
                            <AnimePageContentCharacterItem>
                                <AnimePageContentCharacter>
                                    <AnimePageContentCharacterImg src="/images/character.jpg"/>

                                    <AnimePageContentCharacterInfo>
                                        <AnimePageContentCharacterName>Mikasa Ackerman</AnimePageContentCharacterName>
                                        <AnimePageContentCharacterRole>Main</AnimePageContentCharacterRole>
                                    </AnimePageContentCharacterInfo>
                                   
                                </AnimePageContentCharacter>
                                <AnimePageContentAct>
                                    

                                    <AnimePageContentCharacterInfo>
                                        <AnimePageContentCharacterName>Yui Ishikawa</AnimePageContentCharacterName>
                                        <AnimePageContentCharacterRole>Japanese</AnimePageContentCharacterRole>
                                    </AnimePageContentCharacterInfo>
                                    <AnimePageContentCharacterImg src="/images/voice.jpg"/>

                                </AnimePageContentAct>

                            </AnimePageContentCharacterItem>
                            <AnimePageContentCharacterItem>
                                <AnimePageContentCharacter>
                                    <AnimePageContentCharacterImg src="/images/character.jpg"/>

                                    <AnimePageContentCharacterInfo>
                                        <AnimePageContentCharacterName>Mikasa Ackerman</AnimePageContentCharacterName>
                                        <AnimePageContentCharacterRole>Main</AnimePageContentCharacterRole>
                                    </AnimePageContentCharacterInfo>
                                   
                                </AnimePageContentCharacter>
                                <AnimePageContentAct>
                                    

                                    <AnimePageContentCharacterInfo>
                                        <AnimePageContentCharacterName>Yui Ishikawa</AnimePageContentCharacterName>
                                        <AnimePageContentCharacterRole>Japanese</AnimePageContentCharacterRole>
                                    </AnimePageContentCharacterInfo>
                                    <AnimePageContentCharacterImg src="/images/voice.jpg"/>

                                </AnimePageContentAct>

                            </AnimePageContentCharacterItem>
                            <AnimePageContentCharacterItem>
                                <AnimePageContentCharacter>
                                    <AnimePageContentCharacterImg src="/images/character.jpg"/>

                                    <AnimePageContentCharacterInfo>
                                        <AnimePageContentCharacterName>Mikasa Ackerman</AnimePageContentCharacterName>
                                        <AnimePageContentCharacterRole>Main</AnimePageContentCharacterRole>
                                    </AnimePageContentCharacterInfo>
                                   
                                </AnimePageContentCharacter>
                                <AnimePageContentAct>
                                    

                                    <AnimePageContentCharacterInfo>
                                        <AnimePageContentCharacterName>Yui Ishikawa</AnimePageContentCharacterName>
                                        <AnimePageContentCharacterRole>Japanese</AnimePageContentCharacterRole>
                                    </AnimePageContentCharacterInfo>
                                    <AnimePageContentCharacterImg src="/images/voice.jpg"/>

                                </AnimePageContentAct>

                            </AnimePageContentCharacterItem>
                            <AnimePageContentCharacterItem>
                                <AnimePageContentCharacter>
                                    <AnimePageContentCharacterImg src="/images/character.jpg"/>

                                    <AnimePageContentCharacterInfo>
                                        <AnimePageContentCharacterName>Mikasa Ackerman</AnimePageContentCharacterName>
                                        <AnimePageContentCharacterRole>Main</AnimePageContentCharacterRole>
                                    </AnimePageContentCharacterInfo>
                                   
                                </AnimePageContentCharacter>
                                <AnimePageContentAct>
                                    

                                    <AnimePageContentCharacterInfo>
                                        <AnimePageContentCharacterName>Yui Ishikawa</AnimePageContentCharacterName>
                                        <AnimePageContentCharacterRole>Japanese</AnimePageContentCharacterRole>
                                    </AnimePageContentCharacterInfo>
                                    <AnimePageContentCharacterImg src="/images/voice.jpg"/>

                                </AnimePageContentAct>

                            </AnimePageContentCharacterItem>

                        </AnimePageContentCharacterWrapper>
                    </AnimePageContentWrapper>
                </AnimePageMainWrapper>
            </AnimePageWrapper>

        </AnimePageContainer>
    )
}

export default AnimePage

