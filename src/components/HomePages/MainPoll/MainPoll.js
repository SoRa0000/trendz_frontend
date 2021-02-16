import React from 'react'
import {
    MainPollWrapper,
    WeeklyPollMain,
    WeeklyPollBannerWrapper,
    WeeklyPollBanner

} from './MainPoll.styles'
const MainPoll = () => {
    return (
        <MainPollWrapper>
                <WeeklyPollMain>
                        MainPoll
                </WeeklyPollMain>
                <WeeklyPollBannerWrapper>
                    <WeeklyPollBanner>
                        Secondary Poll
                    </WeeklyPollBanner>
                    <WeeklyPollBanner>
                        Secondary Poll
                    </WeeklyPollBanner>
                    <WeeklyPollBanner>
                        Secondary Poll
                    </WeeklyPollBanner>
                    <WeeklyPollBanner>
                        Secondary Poll
                    </WeeklyPollBanner>
                </WeeklyPollBannerWrapper>
         </MainPollWrapper>
    )
}

export default MainPoll
