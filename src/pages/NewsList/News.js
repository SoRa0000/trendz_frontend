import React from 'react'
import {
    NewsContainer,
    NewsWrapper,
    NewsHeader,
    NewsTitle,
    NewsSubHeader,
    NewsDate,
    NewsViewer,
    NewsFacebookShareBtn,
    NewsHeaderHR,
    NewsBody
} from './News.styles'
const News = () => {
    return (
        <NewsContainer>
            <NewsWrapper>
                <NewsHeader>
                    <NewsTitle>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                    </NewsTitle>
                    
                </NewsHeader>
                <NewsSubHeader>
                    <NewsDate>
                    3-р сарын 19
                    </NewsDate>
                    <NewsViewer>
                    5472 уншигч
                    </NewsViewer>
                    <NewsFacebookShareBtn>
                        Хуваалцах
                    </NewsFacebookShareBtn>
                </NewsSubHeader>
                <NewsHeaderHR />
                <NewsBody>
                    121
                </NewsBody>
            </NewsWrapper>
        </NewsContainer>
    )
}

export default News
