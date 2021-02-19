import styled from 'styled-components'
import {Link} from 'react-router-dom'
export const FooterLink = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin:0;
    padding:0;
`
export const FooterContainer = styled.div`
    margin-top: 20px;
    display: flex;
    position: relative;
    justify-content: center;
    height: 300px;
    width: 100%;
    background: #0d0d0d;

    @media screen and (max-width: 766px){
        height: 600px;
        
    }
`;

export const FooterWrapper = styled.div`
    display: flex;
    max-width: 1200px;
    width: 1300px;
    height: 100%;
    position: relative;
    @media screen and (max-width: 766px){
        flex-direction: column;
    }
`;

export const FooterLogoWrapper = styled.div`
    display: flex;
    height: 260px;
    width: 15%;
    align-items: center;
    margin-left: 0;
    position: relative;
    @media screen and (max-width: 766px){

        height: 100px;
        justify-content: center;
        align-items: center;
        width: 100%;
    }
`;
export const FooterLogo = styled.img`
    padding: 50px 50px 50px 0;
    height: 100%;
    width: auto;
    
    @media screen and (max-width: 766px){
        padding: 0;
        padding-top: 20px;
    }
`;

export const FooterCopyRightWrapper = styled.div`
    position: absolute;
    bottom: 0;
    left:0;
    right:0;
    height: 40px;
    display: flex;
    flex-direction: column;
    color: #999;
    justify-content: center;
    text-align: center;
    
`;

export const FooterHR = styled.hr`
    border: 0;
    height: 1px;
    background: linear-gradient(0deg, rgba(46,129,247,1) 0%, rgba(0,199,253,0.9) 50%, rgba(53,203,205,0.5) 100%);
    background-image: linear-gradient(to right, rgba(0,199,253, 0), rgba(0,199,253, 0.75), rgba(0,199,253, 0));
    position: relative;
`;

export const FooterCopyRight = styled.div`
    display: flex;
    color: #aaa;
    align-items:center;
    justify-content: center;
    font-size: 0.7rem;
    height: 38px;

`;

export const FooterListWrapper = styled.div`
position: relative;
    width: 45%;
    height: 260px;
    display: flex;
    padding-top: 40px;
    justify-content: center;
    padding-left: 50px;
    border-width: 1px;
    border-style: solid;
    border-image-source: linear-gradient(to bottom, rgba(0,199,253, 0), rgba(0,199,253, 0.75), rgba(0,199,253, 0));
    border-image-slice: 1;
    border-right: none;
    
    @media screen and (max-width: 766px){
        justify-content: center;
        width: 100%;
        padding-left: 10%;
        border-image-source: linear-gradient(to right, rgba(0,199,253, 0), rgba(0,199,253, 0.75), rgba(0,199,253, 0));
        border-top: none;
        height: auto;
    }
`;
export const FooterContactWrapper = styled.div`
    padding-top: 40px;
    position: relative;
    display: flex;
    width: 40%;
    height: 260px;
    border-width: 1px;
    border-style: solid;
    border-image-source: linear-gradient(to bottom, rgba(0,199,253, 0), rgba(0,199,253, 0.75), rgba(0,199,253, 0));
    border-image-slice: 1;
    border-right: none;

    @media screen and (max-width: 766px){
        width: 100%;
        border: none;
        height: auto;
        padding-top: 20px;
    }
`;

export const FooterListHeader = styled.div`
    color: #ccc;
    display: flex;
    align-items: flex-start;
    height: 50px;
    font-weight: 500;
    font-size: 1rem;

`

export const FooterList = styled.ul`
    width: 50%;
    height: 100%;
    list-style: none;
    @media screen and (max-width: 766px){
        padding-bottom: 10px;
    }
`;

export const FooterListItem = styled.li`
    color: #aaa;
    height: 30px;
    display: block;
    font-size: 0.7rem;
    font-weight: 300;
    transition: .2s;
    &:hover{
        color: #2e81f7;
    }
`;

export const FooterSocialMediaWrapper = styled.div`
    width: 50%;
    height: 100%;
    position: relative;
    padding-left: 40px;
    @media screen and (max-width: 766px){
        padding-left: 10%;
    }

`; 

export const FooterSocialMediaHeader = styled.div`
    color: #ccc;
    font-weight: 500;
    font-size: 1rem;
`;

export const FooterSocialMediaItems = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    padding-top: 25px;
    height: 100%;
    width: 100%;
`;

export const FooterSocialMediaItem = styled.div`
    height: 55px;
    width: 55px;
    font-size: 30px;
    color: #fff;
    transition: .2s;
    margin:0;
    &:hover{
        color: #2e87f7;
    }

    @media screen and (max-width: 766px){
        height: 25px;
        width: 25px;
        font-size: 25px;
        margin-right: 20px;
        margin-bottom: 20px;
    }

`;

export const FooterContactUsWrapper = styled.div`
    display: flex;
    width: 50%;
    height: 100%;
    flex-direction: column;
    padding-left: 40px;
    
    @media screen and (max-width: 766px){
        padding-left: 5%;
    }
`;
export const FooterContactUsHeader = styled.div`
    color: #ccc;
    font-weight: 500;
    font-size: 1rem;
    margin-bottom: 30px;
`;

export const FooterContactUsItem = styled.div`
    width: 100%;
    height: 25px;
    color: #fff;
    display: flex;
    margin-bottom: 10px;

`;

export const FooterContactUsIcon = styled.div`
    height: 15px;
    width: 15px;
    font-size: 0.9rem;
    margin-right: 15px;
`;

export const FooterContactUsText = styled.div`
    font-size: 0.9rem;
`;