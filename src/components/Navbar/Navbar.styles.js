import styled from 'styled-components';
import {Link} from 'react-router-dom'

export const Nav = styled.nav`
    background: #1A1A1A;
    background-image: linear-gradient(0deg, #2e81f7 0%, #00c7fd );
    background: #142740;
    background: #385773;
    height: 64px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
`;

export const NavContainer = styled.div`
    height: 64px;
    width: 100%;
    max-width: 1300px;
    display:flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    
    @media screen and (max-width: 960px){
        justify-content: center;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style:none;
    flex-grow: 2;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        position: absolute;
        height: 90vh;
        top: 64px;
        color: #000;
        background: #385773;
        left: ${({click}) => (click ? 0 : '-100%')}
    }
`;

export const NavSubMenu = styled.ul`
    position: absolute;
    display: none;
    list-style:none;
    background: #C9D4E7;
    width: 150px;
    flex-direction: column;
    top:64px;
    margin-left: -15px;
    border-radius: 0 0 3px 3px;
    
    @media screen and (max-width: 960px){
        position: relative;
        top:0;
        width: 100%;
        background-color: #385773;

        border-radius: none;
        
    }

`;

export const NavSubMenuItem = styled.li`
    font-size: 0.6rem;
    line-height: 40px;
    color: #444;
    display: block;
    padding-left: 15px;
    &:hover{
        background: #385773;
        color: #fff;
        border-radius: 0 0 3px 3px;
    } 

    @media screen and (max-width: 960px){
        color: #fff;
        font-size: 0.8rem
    }
`;

export const NavItem = styled.li`
    padding: 0 15px;
    font-size: 0.9rem;
    letter-spacing: .5px;
    display:flex;
    align-items: center;
    line-height: 64px;
    border-bottom: 5px solid transparent;
    &:hover{
        border-bottom: 5px solid #fff;
    }
    &:hover ${NavSubMenu}{
        display: block;
    }

    @media screen and (max-width: 960px){
       display: block;
       line-height: 64px; 
       margin: 0;
       width: 100%;
        text-align:center;
        border-bottom: 1px solid #142740;
    }
`;

export const NavLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    @media screen and (max-width: 960px){
        width: 100%;
    }
`;


export const NavLogo = styled.img`
    padding: 10px;
    justify-content: flex-start;
    align-items: center;
    margin-right: 25px;
    height: 64px;
    width: auto;
    
    @media screen and (max-width: 960px){
        margin:0;
    }
`;




export const NavBtn = styled.div`
    display: flex;
    margin-left: auto;
    
    @media screen and (max-width: 960px){
      display: flex;
      flex-direction: column;
      margin: 0;  
    }
`;

export const NavLogin = styled.button`
    margin-left: 15px;
    width: 90px;
    height: 30px;
    text-align: center;
    border: 2px solid #fff;
    border-radius: 2px;
    color: #fff;
    background: transparent;
    outline: none;
    cursor: pointer;
    font-weight: 500;

    &:hover{
        background: #fff;
        color: #666;
    }

    @media screen and (max-width: 960px){
        width: 200px;
        height: 40px;
        margin: 10px 0;
    }
`;

export const NavMobileIcon = styled.div`
    display: none;

@media screen and (max-width: 960px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    color: #fff;
    font-size: 30px;
    transform: translate(-30%,35%)
    
}
`;


