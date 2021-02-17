import React, {useState}from 'react'
import {
    MainChartWrapper,
    WeeklyTop,
    WeeklyTopImg,
    SectionChartWrapper,
    AllTimeTop,
    DonationBanner,
    WeeklyTopHeader,
    WeeklyTopTitle,
    WeeklyTopImgWrapper,
    WeeklyTopTitleButtonWrapper,
    WeeklyTopTitleButton,
    AllTimeHeader,
    AllTimeTitle,
    AllTimeTitleButtonWrapper,
    AllTimeTitleButton,
    AllTimeItemWrapper,
    AllTimeItem,
    AllTimeItemOrder,
    AllTimeItemImg,
    AllTimeItemInfo,
    AllTimeInfoTitle,
    AllTimeInfoYear,
    AllTimeInfoVote,
    AllTimeItemScoreWrapper,
    AllTimeItemScore,
    AllTimeScoreImg,
    AllTimeItemImgWrapper,
    AllTimeOrderImg,
    AllTimeOrderNumber,
    AllTimeTopInfoLink,
    DonationBannerImg1Wrapper,
    DonationBannerImg2Wrapper,
    DonationBannerImg1,
    DonationBannerImg2,
    DonationBannerBtn
} from './MainChart.styles'
const MainChart = () => {
    return (
        <MainChartWrapper>
                    <WeeklyTop>
                        <WeeklyTopHeader>
                            <WeeklyTopTitle>
                                <h3>Өнгөрсөн 7 хоногийн ШИЛДЭГ</h3>
                            </WeeklyTopTitle>
                            <WeeklyTopTitleButtonWrapper>
                                <WeeklyTopTitleButton >АНИМЭ</WeeklyTopTitleButton>
                                <WeeklyTopTitleButton style={{background: '#333'}}><i style={{fontWeight: "300", color: "#666"}}>Тун удахгүй...</i></WeeklyTopTitleButton>
                            </WeeklyTopTitleButtonWrapper>
                        </WeeklyTopHeader>
                        <WeeklyTopImgWrapper><WeeklyTopImg src="images/weekly_top.png" /></WeeklyTopImgWrapper>
                    </WeeklyTop>
                    <SectionChartWrapper>
                        <AllTimeTop>
                           <AllTimeHeader>
                               <AllTimeTitle>
                                    БҮХ ЦАГ ҮЕИЙН ШИЛДЭГ
                               </AllTimeTitle>
                               <AllTimeTitleButtonWrapper>
                                   <AllTimeTitleButton>АНИМЭ</AllTimeTitleButton>
                                   <AllTimeTitleButton style={{background: "#333"}}><i style={{color: "#666"}}>Тун удахгүй...</i></AllTimeTitleButton>
                               </AllTimeTitleButtonWrapper>
                           </AllTimeHeader>
                           <AllTimeItemWrapper>
                                <AllTimeItem>
                                        <AllTimeItemOrder>
                                            <AllTimeOrderImg  src="./rank_bg.svg"/>
                                            <AllTimeOrderNumber> 1 </AllTimeOrderNumber>
                                        </AllTimeItemOrder>
                                        <AllTimeItemImgWrapper>
                                        <AllTimeItemImg src="images/top_img.jpg"/>
                                        </AllTimeItemImgWrapper>
                                        <AllTimeItemInfo>
                                            
                                                <AllTimeTopInfoLink>
                                                    <AllTimeInfoTitle>5cm per second</AllTimeInfoTitle>
                                                </AllTimeTopInfoLink> 
                                            
                                            <AllTimeInfoYear>
                                                2007 он
                                            </AllTimeInfoYear>
                                            <AllTimeInfoVote>
                                                10215 санал 
                                            </AllTimeInfoVote>
                                        </AllTimeItemInfo>
                                        <AllTimeItemScoreWrapper>
                                            <AllTimeScoreImg src="./score_bg.svg"/>
                                            <AllTimeItemScore>9.8</AllTimeItemScore>
                                        </AllTimeItemScoreWrapper>
                                </AllTimeItem>
                                
                                
                                <AllTimeItem>
                                        <AllTimeItemOrder>
                                            <AllTimeOrderImg style={{height: "90%", width: "90%"}} src="./rank_bg.svg"/>
                                            <AllTimeOrderNumber style={{fontSize: "1.5rem"}}> 2 </AllTimeOrderNumber>
                                        </AllTimeItemOrder>
                                        <AllTimeItemImgWrapper>
                                        <AllTimeItemImg src="images/top_img.jpg"/>
                                        </AllTimeItemImgWrapper>
                                        <AllTimeItemInfo>
                                        <AllTimeTopInfoLink>
                                                    <AllTimeInfoTitle>5cm per second</AllTimeInfoTitle>
                                                </AllTimeTopInfoLink>
                                            <AllTimeInfoYear>
                                                2007 он
                                            </AllTimeInfoYear>
                                            <AllTimeInfoVote>
                                                10215 санал 
                                            </AllTimeInfoVote>
                                        </AllTimeItemInfo>
                                        <AllTimeItemScoreWrapper>
                                            <AllTimeScoreImg src="./score_bg.svg"/>
                                            <AllTimeItemScore>9.6</AllTimeItemScore>
                                        </AllTimeItemScoreWrapper>
                                </AllTimeItem>
                                <AllTimeItem>
                                        <AllTimeItemOrder>
                                            <AllTimeOrderImg style={{height: "80%", width: "80%"}} src="./rank_bg.svg"/>
                                            <AllTimeOrderNumber style={{fontSize: "1.25rem"}}> 3 </AllTimeOrderNumber>
                                        </AllTimeItemOrder>
                                        <AllTimeItemImgWrapper>
                                        <AllTimeItemImg src="images/top_img.jpg"/>
                                        </AllTimeItemImgWrapper>
                                        <AllTimeItemInfo>
                                        <AllTimeTopInfoLink>
                                                    <AllTimeInfoTitle>5cm per second</AllTimeInfoTitle>
                                                </AllTimeTopInfoLink>
                                            <AllTimeInfoYear>
                                                2007 он
                                            </AllTimeInfoYear>
                                            <AllTimeInfoVote>
                                                10215 санал 
                                            </AllTimeInfoVote>
                                        </AllTimeItemInfo>
                                        <AllTimeItemScoreWrapper>
                                            <AllTimeScoreImg src="./score_bg.svg"/>
                                            <AllTimeItemScore>9.5</AllTimeItemScore>
                                        </AllTimeItemScoreWrapper>
                                </AllTimeItem>
                                <AllTimeItem>
                                        <AllTimeItemOrder>
                                            <AllTimeOrderImg style={{height: "60%", width: "60%"}} src="./rank_bg_dark.svg"/>
                                            <AllTimeOrderNumber style={{fontSize: "1rem", color: "#fff"}}> 4 </AllTimeOrderNumber>
                                        </AllTimeItemOrder>
                                        <AllTimeItemImgWrapper>
                                        <AllTimeItemImg src="images/top_img.jpg"/>
                                        </AllTimeItemImgWrapper>
                                        <AllTimeItemInfo>
                                        <AllTimeTopInfoLink>
                                                    <AllTimeInfoTitle>5cm per second</AllTimeInfoTitle>
                                                </AllTimeTopInfoLink>
                                            <AllTimeInfoYear>
                                                2007 он
                                            </AllTimeInfoYear>
                                            <AllTimeInfoVote>
                                                10215 санал 
                                            </AllTimeInfoVote>
                                        </AllTimeItemInfo>
                                        <AllTimeItemScoreWrapper>
                                            <AllTimeScoreImg src="./score_bg.svg"/>
                                            <AllTimeItemScore>9.1</AllTimeItemScore>
                                        </AllTimeItemScoreWrapper>
                                </AllTimeItem>
                                <AllTimeItem>
                                        <AllTimeItemOrder>
                                            <AllTimeOrderImg style={{height: "60%", width: "60%"}} src="./rank_bg_dark.svg"/>
                                            <AllTimeOrderNumber style={{fontSize: "1rem", color: "#fff"}}> 5 </AllTimeOrderNumber>
                                        </AllTimeItemOrder>
                                        <AllTimeItemImgWrapper>
                                        <AllTimeItemImg src="images/top_img.jpg"/>
                                        </AllTimeItemImgWrapper>
                                        <AllTimeItemInfo>
                                        <AllTimeTopInfoLink>
                                                    <AllTimeInfoTitle>5cm per second</AllTimeInfoTitle>
                                                </AllTimeTopInfoLink>
                                            <AllTimeInfoYear>
                                                2007 он
                                            </AllTimeInfoYear>
                                            <AllTimeInfoVote>
                                                10215 санал 
                                            </AllTimeInfoVote>
                                        </AllTimeItemInfo>
                                        <AllTimeItemScoreWrapper>
                                            <AllTimeScoreImg src="./score_bg.svg"/>
                                            <AllTimeItemScore>9.0</AllTimeItemScore>
                                        </AllTimeItemScoreWrapper>
                                </AllTimeItem>
                                <AllTimeItem>
                                        <AllTimeItemOrder>
                                            <AllTimeOrderImg style={{height: "60%", width: "60%"}} src="./rank_bg_dark.svg"/>
                                            <AllTimeOrderNumber style={{fontSize: "1rem", color: "#fff"}}> 6 </AllTimeOrderNumber>
                                        </AllTimeItemOrder>
                                        <AllTimeItemImgWrapper>
                                        <AllTimeItemImg src="images/top_img.jpg"/>
                                        </AllTimeItemImgWrapper>
                                        <AllTimeItemInfo>
                                        <AllTimeTopInfoLink>
                                                    <AllTimeInfoTitle>5cm per second</AllTimeInfoTitle>
                                                </AllTimeTopInfoLink>
                                            <AllTimeInfoYear>
                                                2007 он
                                            </AllTimeInfoYear>
                                            <AllTimeInfoVote>
                                                10215 санал 
                                            </AllTimeInfoVote>
                                        </AllTimeItemInfo>
                                        <AllTimeItemScoreWrapper>
                                            <AllTimeScoreImg src="./score_bg.svg"/>
                                            <AllTimeItemScore>8.8</AllTimeItemScore>
                                        </AllTimeItemScoreWrapper>
                                </AllTimeItem>
                                <AllTimeItem>
                                        <AllTimeItemOrder>
                                            <AllTimeOrderImg style={{height: "60%", width: "60%"}} src="./rank_bg_dark.svg"/>
                                            <AllTimeOrderNumber style={{fontSize: "1rem", color: "#fff"}}> 7 </AllTimeOrderNumber>
                                        </AllTimeItemOrder>
                                        <AllTimeItemImgWrapper>
                                        <AllTimeItemImg src="images/top_img.jpg"/>
                                        </AllTimeItemImgWrapper>
                                        <AllTimeItemInfo>
                                        <AllTimeTopInfoLink>
                                                    <AllTimeInfoTitle>5cm per second</AllTimeInfoTitle>
                                                </AllTimeTopInfoLink>
                                            <AllTimeInfoYear>
                                                2007 он
                                            </AllTimeInfoYear>
                                            <AllTimeInfoVote>
                                                10215 санал 
                                            </AllTimeInfoVote>
                                        </AllTimeItemInfo>
                                        <AllTimeItemScoreWrapper>
                                            <AllTimeScoreImg src="./score_bg.svg"/>
                                            <AllTimeItemScore>8.7</AllTimeItemScore>
                                        </AllTimeItemScoreWrapper>
                                </AllTimeItem>
                                <AllTimeItem>
                                        <AllTimeItemOrder>
                                            <AllTimeOrderImg style={{height: "60%", width: "60%"}} src="./rank_bg_dark.svg"/>
                                            <AllTimeOrderNumber style={{fontSize: "1rem", color: "#fff"}}> 8 </AllTimeOrderNumber>
                                        </AllTimeItemOrder>
                                        <AllTimeItemImgWrapper>
                                        <AllTimeItemImg src="images/top_img.jpg"/>
                                        </AllTimeItemImgWrapper>
                                        <AllTimeItemInfo>
                                        <AllTimeTopInfoLink>
                                                    <AllTimeInfoTitle>5cm per second</AllTimeInfoTitle>
                                                </AllTimeTopInfoLink>
                                            <AllTimeInfoYear>
                                                2007 он
                                            </AllTimeInfoYear>
                                            <AllTimeInfoVote>
                                                10215 санал 
                                            </AllTimeInfoVote>
                                        </AllTimeItemInfo>
                                        <AllTimeItemScoreWrapper>
                                            <AllTimeScoreImg src="./score_bg.svg"/>
                                            <AllTimeItemScore>8.7</AllTimeItemScore>
                                        </AllTimeItemScoreWrapper>
                                </AllTimeItem>
                                <AllTimeItem>
                                        <AllTimeItemOrder>
                                            <AllTimeOrderImg style={{height: "60%", width: "60%"}} src="./rank_bg_dark.svg"/>
                                            <AllTimeOrderNumber style={{fontSize: "1rem", color: "#fff"}}> 9 </AllTimeOrderNumber>
                                        </AllTimeItemOrder>
                                        <AllTimeItemImgWrapper>
                                        <AllTimeItemImg src="images/top_img.jpg"/>
                                        </AllTimeItemImgWrapper>
                                        <AllTimeItemInfo>
                                        <AllTimeTopInfoLink>
                                                    <AllTimeInfoTitle>5cm per second</AllTimeInfoTitle>
                                                </AllTimeTopInfoLink>
                                            <AllTimeInfoYear>
                                                2007 он
                                            </AllTimeInfoYear>
                                            <AllTimeInfoVote>
                                                10215 санал 
                                            </AllTimeInfoVote>
                                        </AllTimeItemInfo>
                                        <AllTimeItemScoreWrapper>
                                            <AllTimeScoreImg src="./score_bg.svg"/>
                                            <AllTimeItemScore>8.3</AllTimeItemScore>
                                        </AllTimeItemScoreWrapper>
                                </AllTimeItem>
                                <AllTimeItem>
                                        <AllTimeItemOrder>
                                            <AllTimeOrderImg style={{height: "60%", width: "60%"}} src="./rank_bg_dark.svg"/>
                                            <AllTimeOrderNumber style={{fontSize: "1rem", color: "#fff"}}> 10 </AllTimeOrderNumber>
                                        </AllTimeItemOrder>
                                        <AllTimeItemImgWrapper>
                                        <AllTimeItemImg src="images/top_img.jpg"/>
                                        </AllTimeItemImgWrapper>
                                        <AllTimeItemInfo>
                                        <AllTimeTopInfoLink>
                                                    <AllTimeInfoTitle>5cm per second</AllTimeInfoTitle>
                                                </AllTimeTopInfoLink>
                                            <AllTimeInfoYear>
                                                2007 он
                                            </AllTimeInfoYear>
                                            <AllTimeInfoVote>
                                                10215 санал 
                                            </AllTimeInfoVote>
                                        </AllTimeItemInfo>
                                        <AllTimeItemScoreWrapper>
                                            <AllTimeScoreImg src="./score_bg.svg"/>
                                            <AllTimeItemScore>8.1</AllTimeItemScore>
                                        </AllTimeItemScoreWrapper>
                                </AllTimeItem>
                                
                           </AllTimeItemWrapper>
                        </AllTimeTop>

                        <DonationBanner>
                        <DonationBannerImg1Wrapper>
                        <DonationBannerImg1 src="images/donation_bar_1.png"/>
                            </DonationBannerImg1Wrapper>
                            <DonationBannerImg2Wrapper>
                            <DonationBannerImg2 src="images/donation_bar_2.png" />
                            </DonationBannerImg2Wrapper>
                            <DonationBannerBtn>
                                Хандив өгөх
                            </DonationBannerBtn>
                            
                        </DonationBanner>
                        
                    </SectionChartWrapper>
        </MainChartWrapper>
    )
}

export default MainChart
