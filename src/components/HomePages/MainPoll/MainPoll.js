import React from 'react'
import {
    MainPollWrapper,
    MainPollItem,
    MainPollItemImg,
    MainPollItemBg,
    MainPollTitle,
    MainPollSubTitle,
    MainPollBtn,
    MainPollLink,
    MainPollText
} from './MainPoll.styles'
import {FaArrowRight} from 'react-icons/fa'
const MainPoll = () => {
    return (
        <MainPollWrapper>
                <MainPollItem>
                    <MainPollItemImg src="/images/main_poll_anime.jpg"/>
                    <MainPollItemBg>
                        <MainPollSubTitle>
                            7 хоногийн
                        </MainPollSubTitle>
                        <MainPollTitle>
                        Шилдэг анимэ                                             
                        </MainPollTitle>
                        <MainPollText>                            
                        Ням гариг
                        </MainPollText>
                        <MainPollLink to="/"><MainPollBtn>Санал өгөх <FaArrowRight style={{marginLeft: "10px"}}/></MainPollBtn></MainPollLink>
                    </MainPollItemBg>
                </MainPollItem>
                <MainPollItem>
                    <MainPollItemImg src="/images/main_poll_male.jpg"/>
                    <MainPollItemBg>
                        <MainPollSubTitle>
                            7 хоногийн
                        </MainPollSubTitle>
                        <MainPollTitle>
                        Шилдэг эрэгтэй дүр                                         
                        </MainPollTitle>
                        <MainPollText>                            
                        Ням гариг
                        </MainPollText>
                        <MainPollLink to="/"><MainPollBtn>Санал өгөх <FaArrowRight style={{marginLeft: "10px"}}/></MainPollBtn></MainPollLink>
                    </MainPollItemBg>
                </MainPollItem>
                <MainPollItem>
                    <MainPollItemImg src="/images/main_poll_female.jpg"/> 
                    <MainPollItemBg>
                        <MainPollSubTitle>
                            7 хоногийн
                        </MainPollSubTitle>
                        <MainPollTitle>
                        Шилдэг эмэгтэй дүр                                           
                        </MainPollTitle>
                        <MainPollText>                            
                        Ням гариг
                        </MainPollText>
                        <MainPollLink to="/"><MainPollBtn>Санал өгөх <FaArrowRight style={{marginLeft: "10px"}}/></MainPollBtn></MainPollLink>
                    </MainPollItemBg>
                </MainPollItem>
         </MainPollWrapper>
    )
}

export default MainPoll
