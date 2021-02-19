import React from 'react'
import {
    FooterContainer,
    FooterWrapper,
    FooterLogoWrapper,
    FooterLogo,
    FooterCopyRightWrapper,
    FooterHR,
    FooterCopyRight,
    FooterListWrapper,
    FooterContactWrapper,
    FooterList,
    FooterListItem,
    FooterLink,
    FooterListHeader,
    FooterSocialMediaWrapper,
    FooterSocialMediaHeader,
    FooterSocialMediaItems,
    FooterSocialMediaItem,
    FooterContactUsWrapper,
    FooterContactUsHeader,
    FooterContactUsItem,
    FooterContactUsIcon,
    FooterContactUsText
} from './Footer.styles'

import {FaFacebook,FaInstagram,FaYoutube,FaDiscord,FaFacebookMessenger,FaPhone,FaMailBulk} from 'react-icons/fa'
const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterLogoWrapper>
                    <FooterLogo src="./6_final.png"/>
                </FooterLogoWrapper>
                <FooterListWrapper>
                    <FooterList>
                        <FooterListHeader>Цэс</FooterListHeader>
                        
                        <FooterLink>
                            <FooterListItem> Нүүр </FooterListItem>
                        </FooterLink>
                        <FooterLink>
                            <FooterListItem> Мэдээ </FooterListItem>
                        </FooterLink>
                        <FooterLink>
                            <FooterListItem> Санал хураалт </FooterListItem>
                        </FooterLink>
                        <FooterLink>
                            <FooterListItem> Жагсаалт </FooterListItem>
                        </FooterLink>
                        <FooterLink>
                            <FooterListItem> Хандив </FooterListItem>
                        </FooterLink>
                    </FooterList>
                    <FooterList>
                        <FooterListHeader>Холбоос</FooterListHeader>
                        
                        <FooterLink>
                            <FooterListItem> Бидний тухай </FooterListItem>
                        </FooterLink>
                        <FooterLink>
                            <FooterListItem> Дүрэм </FooterListItem>
                        </FooterLink>
                        <FooterLink>
                            <FooterListItem> Аюулгүй байдал </FooterListItem>
                        </FooterLink>
                    </FooterList>
                </FooterListWrapper>
                <FooterContactWrapper>
                    <FooterSocialMediaWrapper>
                        <FooterSocialMediaHeader>
                            Сошиал холбоосууд
                        </FooterSocialMediaHeader>
                        <FooterSocialMediaItems>
                        <FooterLink><FooterSocialMediaItem><FaFacebook/></FooterSocialMediaItem></FooterLink>
                        <FooterLink><FooterSocialMediaItem><FaInstagram/></FooterSocialMediaItem></FooterLink>
                        <FooterLink><FooterSocialMediaItem><FaYoutube/></FooterSocialMediaItem></FooterLink>
                        <FooterLink><FooterSocialMediaItem><FaDiscord/></FooterSocialMediaItem></FooterLink>
                        <FooterLink><FooterSocialMediaItem><FaFacebookMessenger/></FooterSocialMediaItem></FooterLink>                    
                        </FooterSocialMediaItems>
                    </FooterSocialMediaWrapper>
                    <FooterContactUsWrapper>
                        <FooterContactUsHeader>
                            Холбоо барих
                        </FooterContactUsHeader>
                        <FooterContactUsItem>
                            <FooterContactUsIcon>
                                <FaPhone/>
                            </FooterContactUsIcon>
                            <FooterContactUsText>
                                +976(xxxx-xxxx)
                            </FooterContactUsText>
                        </FooterContactUsItem>
                        <FooterContactUsItem>
                            <FooterContactUsIcon>
                                <FaMailBulk/>
                            </FooterContactUsIcon>
                            <FooterContactUsText>
                                trendzmn@gmail.com
                            </FooterContactUsText>
                        </FooterContactUsItem>
                        
                    </FooterContactUsWrapper>
                </FooterContactWrapper>
                <FooterCopyRightWrapper>
                    <FooterHR />
                    <FooterCopyRight>
                        Copyright Trendz.mn &copy; 2021 
                    </FooterCopyRight>
                </FooterCopyRightWrapper>
            </FooterWrapper>
        </FooterContainer>
    )
}

export default Footer
