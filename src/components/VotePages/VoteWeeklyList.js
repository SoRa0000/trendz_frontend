import React from 'react'
import {
    VoteWeeklyListItem,
    VoteWeeklyListItemBg,
    VoteWeeklyListItemBgImg,
    VoteWeeklyListTitle,
    VoteWeeklyListBtn,
    VoteWeeklyListBtnWrapper,
    VoteLink
} from './VoteWeeklyList.styles'
import {FaArrowRight} from 'react-icons/fa'
const VoteWeeklyList = () => {
    return (
        <>
            
            <VoteWeeklyListItem>
                <VoteWeeklyListItemBgImg  src="/images/main_poll_anime.jpg"/>
                <VoteWeeklyListItemBg>
                    <VoteWeeklyListTitle>Анимэ</VoteWeeklyListTitle>
                    <VoteWeeklyListBtnWrapper>
                        <VoteLink to="/vote/anime/weekly">
                            <VoteWeeklyListBtn>Санал өгөх <FaArrowRight style={{fontSize: "0.7rem", marginLeft: "5px", marginTop: "2px"}}/> </VoteWeeklyListBtn>
                        </VoteLink>
                    
                </VoteWeeklyListBtnWrapper>
                </VoteWeeklyListItemBg>
                
            </VoteWeeklyListItem>
           
            <VoteWeeklyListItem>
                <VoteWeeklyListItemBgImg  src="/images/main_poll_male.jpg"/>
                <VoteWeeklyListItemBg>
                    <VoteWeeklyListTitle>Эрэгтэй дүр</VoteWeeklyListTitle>
                    <VoteWeeklyListBtnWrapper>
                    <VoteLink to="/vote/anime/weekly">
                            <VoteWeeklyListBtn>Санал өгөх <FaArrowRight style={{fontSize: "0.7rem", marginLeft: "5px", marginTop: "2px"}}/> </VoteWeeklyListBtn>
                        </VoteLink>
                </VoteWeeklyListBtnWrapper>
                </VoteWeeklyListItemBg>
                
            </VoteWeeklyListItem>
            <VoteWeeklyListItem>
                <VoteWeeklyListItemBgImg  src="/images/main_poll_female.jpg"/>
                <VoteWeeklyListItemBg>
                    <VoteWeeklyListTitle>Эмэгтэй дүр</VoteWeeklyListTitle>
                    <VoteWeeklyListBtnWrapper>
                    <VoteLink to="/vote/anime/weekly">
                            <VoteWeeklyListBtn>Санал өгөх <FaArrowRight style={{fontSize: "0.7rem", marginLeft: "5px", marginTop: "2px"}}/> </VoteWeeklyListBtn>
                        </VoteLink>
                </VoteWeeklyListBtnWrapper>
                </VoteWeeklyListItemBg>
                
            </VoteWeeklyListItem>
            
        </>
    )
}

export default VoteWeeklyList
