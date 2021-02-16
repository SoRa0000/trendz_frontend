import React from 'react'
import {
    MainChartWrapper,
    WeeklyTop,
    WeeklyTopImg,
    SectionChartWrapper,
    AllTimeTop,
    DonationBanner
} from './MainChart.styles'
const MainChart = () => {
    return (
        <MainChartWrapper>
                    <WeeklyTop>
                        <WeeklyTopImg src="images/weekly_top.png" />
                    </WeeklyTop>
                    <SectionChartWrapper>
                        <AllTimeTop>
                            AllTimeTop
                        </AllTimeTop>

                        <DonationBanner>
                            DonationBar
                        </DonationBanner>
                    </SectionChartWrapper>
        </MainChartWrapper>
    )
}

export default MainChart
