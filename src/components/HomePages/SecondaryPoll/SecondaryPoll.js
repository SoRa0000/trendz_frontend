import React from 'react'
import {
    SecondaryPollWrapper,
    SecondaryPollItem,
    PollLink,
    SecondaryPollBtn,
    SecondaryPollIcon,
    PollIcon,
    SecondaryPollTitle,
    SecondaryPollSubTitle,
    SecondaryPollText
} from './SecondaryPoll.styles'
const SecondaryPoll = () => {
    return (
        <SecondaryPollWrapper>
            
            <SecondaryPollItem>
                <SecondaryPollIcon>
                    <PollIcon src="svg/crown.svg"/>
                </SecondaryPollIcon>
                <SecondaryPollSubTitle>
                    Улирлын   
                </SecondaryPollSubTitle>
                <SecondaryPollTitle>
                ШИЛДЭГ АНИМЭ
                </SecondaryPollTitle>
                <SecondaryPollText>
                    6-р сарын 2
                </SecondaryPollText>
            <PollLink>
                <SecondaryPollBtn>
                    Санал өгөх
                </SecondaryPollBtn>
            </PollLink>    
            </SecondaryPollItem>
            
            <SecondaryPollItem>
                <SecondaryPollIcon>
                    <PollIcon src="svg/male.svg"/>
                </SecondaryPollIcon>
                <SecondaryPollSubTitle>
                    Улирлын   
                </SecondaryPollSubTitle>
                <SecondaryPollTitle>
                ШИЛДЭГ ЭРЭГТЭЙ ДҮР
                </SecondaryPollTitle>
                <SecondaryPollText>
                    6-р сарын 2
                </SecondaryPollText>
            <PollLink>
                <SecondaryPollBtn>
                    Санал өгөх
                </SecondaryPollBtn>
            </PollLink>    
            </SecondaryPollItem>
            <SecondaryPollItem>
                <SecondaryPollIcon>
                    <PollIcon src="svg/female.svg"/>
                </SecondaryPollIcon>
                <SecondaryPollSubTitle>
                    Улирлын   
                </SecondaryPollSubTitle>
                <SecondaryPollTitle>
                ШИЛДЭГ ЭМЭГТЭЙ ДҮР
                </SecondaryPollTitle>
                <SecondaryPollText>
                    6-р сарын 2
                </SecondaryPollText>
            <PollLink>
                <SecondaryPollBtn>
                    Санал өгөх
                </SecondaryPollBtn>
            </PollLink>    
            </SecondaryPollItem>
            <SecondaryPollItem>
                <SecondaryPollIcon>
                    <PollIcon src="svg/hearts.svg"/>
                </SecondaryPollIcon>
                <SecondaryPollSubTitle>
                    Улирлын   
                </SecondaryPollSubTitle>
                <SecondaryPollTitle>
                ШИЛДЭГ ХОС ДҮР
                </SecondaryPollTitle>
                <SecondaryPollText>
                    6-р сарын 2
                </SecondaryPollText>
            <PollLink>
                <SecondaryPollBtn>
                    Санал өгөх
                </SecondaryPollBtn>
            </PollLink>    
            </SecondaryPollItem>
            
        </SecondaryPollWrapper>
    )
}

export default SecondaryPoll
