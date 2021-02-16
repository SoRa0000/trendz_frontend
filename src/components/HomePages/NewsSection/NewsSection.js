import React from 'react'
import {
    NewsSectionWrapper,
    SlideShow,
    NewsBannerWrapper,
    MainNews,
    NewsBanner,
    MainNewsImg,
    MainNewsShadow,
    MainNewsTitleWrapper,
    MainNewsTitle,
    MainNewsBtn,
    BtnLink,
    NewsBannerImg,
    NewsBannerTitleWrapper,
    NewsBannerTitle,
    TitleLink,
    NewsBannerShadow

} from './NewsSection.styles'
const NewsSection = () => {
    return (
        <NewsSectionWrapper>
            <SlideShow>
                <MainNews>
                    <MainNewsShadow>
                    <MainNewsImg src="images/MainNews.jpg"/>
                    </MainNewsShadow>
                    <MainNewsTitleWrapper>
                    <MainNewsTitle>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </MainNewsTitle>
                        <BtnLink>
                        <MainNewsBtn>
                            Цааш үзэх...
                            </MainNewsBtn>
                        </BtnLink>
                    </MainNewsTitleWrapper>
                </MainNews>
            </SlideShow>
            <NewsBannerWrapper>
                
                <NewsBanner>
                    <NewsBannerShadow>
                    <NewsBannerImg src="images/BannerNews.jpg"/>
                    </NewsBannerShadow>
                    <NewsBannerTitleWrapper>
                        <TitleLink>
                            <NewsBannerTitle>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </NewsBannerTitle>
                        </TitleLink>
                    </NewsBannerTitleWrapper>
                </NewsBanner>
                <NewsBanner>
                    <NewsBannerShadow>
                        <NewsBannerImg src="images/BannerNews.jpg"/>
                    </NewsBannerShadow>
                    <NewsBannerTitleWrapper>
                        <TitleLink>
                            <NewsBannerTitle>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </NewsBannerTitle>
                        </TitleLink>
                    </NewsBannerTitleWrapper>
                </NewsBanner>
                <NewsBanner>
                    <NewsBannerShadow>
                        <NewsBannerImg src="images/BannerNews.jpg"/>
                    </NewsBannerShadow>
                    <NewsBannerTitleWrapper>
                        <TitleLink>
                            <NewsBannerTitle>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </NewsBannerTitle>
                        </TitleLink>
                    </NewsBannerTitleWrapper>
                </NewsBanner>
                <NewsBanner>
                    <NewsBannerShadow>
                        <NewsBannerImg src="images/BannerNews.jpg"/>
                    </NewsBannerShadow>
                    <NewsBannerTitleWrapper>
                        <TitleLink>
                            <NewsBannerTitle>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry
                            </NewsBannerTitle>
                        </TitleLink>
                    </NewsBannerTitleWrapper>
                </NewsBanner>
            </NewsBannerWrapper>
            
        </NewsSectionWrapper>
    )
}

export default NewsSection
