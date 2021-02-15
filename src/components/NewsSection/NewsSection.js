import React from 'react'
import {
    NewsSectionWrapper,
    SlideShow,
    NewsBannerWrapper,
    MainNews,
    NewsBanner
} from './NewsSection.styles'
import CarouselWrapper from './CarouselWrapper'
const NewsSection = () => {
    return (
        <NewsSectionWrapper>
            <SlideShow>
                <MainNews>MainNews</MainNews>
            </SlideShow>
            <NewsBannerWrapper>
                <NewsBanner>
                    BannerNews
                </NewsBanner>
                <NewsBanner>
                BannerNews
                </NewsBanner>
                <NewsBanner>
                BannerNews
                </NewsBanner>
                <NewsBanner>
                BannerNews
                </NewsBanner>
                
            </NewsBannerWrapper>
            
        </NewsSectionWrapper>
    )
}

export default NewsSection
