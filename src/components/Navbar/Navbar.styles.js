import styled from 'styled-components';
import {Link} from 'react-router-dom'
export const Nav = styled.nav`
    background: #0d0d0d;
    height: 64px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);

    @media screen and (max-width: 960px){
        height: 48px;
        box-shadow: none;
    }
`;

export const NavContainer = styled.div`
    height: 64px;
    width: 100%;
    max-width: 1200px;
    display:flex;
    justify-content: space-between;
    margin: auto;
    align-items: center;
    margin: 0 50px;
    @media screen and (max-width: 960px){
        justify-content: center;
        height: 48px;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style:none;
    flex-grow: 2;

    @media screen and (max-width: 960px){
        flex-direction: column;
        width: 100%;
        position: absolute;
        height: calc(100vh - 48px);
        top: 48px;
        color: #000;
        background: #0d0d0d;
        right: ${({click}) => (click ? 0 : '-100%')};
        display: ${({click}) => (click ? 'flex' : 'none')};
        transition: all .4s ease;
    }
`;

export const NavSubMenu = styled.ul`
    position: absolute;
    display: none;
    list-style:none;
    width: 160px;
    top:64px;
    margin-left: -15px;
    border-radius: 0 0 5px 5px;
    background: #e6e6e6;
    @media screen and (max-width: 960px){
        position: relative;
        top:0;
        width: 100vw;
        background-color: #0d0d0d;
        border-radius: 0;
        
    }

`;

export const NavSubMenuItem = styled.li`
    font-size: 0.6rem;
    line-height: 40px;
    color: #222;
    display: block;
    padding-left: 15px;
    background: #e6e6e6;
    border-radius: 0 0 3px 3px;
    border-bottom: 1px dotted gray;
    letter-spacing: 1px;
    &:hover{
        background: #333;
        color: #fff;
        border-radius: 0 0 3px 3px;
    } 
    
    @media screen and (max-width: 960px){
        color: #e6e6e6;
        font-size: 0.8rem;
        margin-left: 25px;
        background: #0d0d0d;
        &:hover{
            background: #0d0d0d;
            color: #fff;
        }
    }
`;

export const NavItem = styled.li`
    padding: 0 15px;
    font-size: 0.9rem;
    display:flex;
    align-items: center;
    line-height: 64px;
    color: #bbb;
    position: relative;
    font-weight: 500;
    flex-wrap: wrap;
    &:hover{
        color: #fff;
    }
    &:hover ${NavSubMenu}{
        display: block;
    }
    &::after{
        content:'';
        position: absolute;
        width: 0px;
        height: 3px;
        bottom: 0;
        left: 50%;
        background: #fff;
        background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 50%, #35dfcd 100%);
        transition: all ease-in-out .2s;
    }
    &:hover::after{
        width: 100%;
        left: 0;
    }
    @media screen and (max-width: 960px){
       display: flex;
       line-height: 64px; 
       margin: 0;
       width: 100%;
       text-align:left;
       padding-left: 25px;
       color: #fff;
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
        height: 48px;
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
    width: 110px;
    height: 34px;
    text-align: center;
    border: none;
    border-radius: 17px;
    color: #fff;
    background: transparent;
    outline: none;
    cursor: pointer;
    font-weight: 400;
    align-items: center;
    display: flex;
    justify-content: center;
    font-size: 13px;
    background: linear-gradient(90deg, #2e81f7 0%, #00c7fd 25%, #35dfcd 50%, #00c7fd 75%, #2e81f7 100%);
    background-size: 200% auto;
    transition: 0.3s;
    &:hover{
        color: #fff;
        background-position: right center;
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
    font-size: 24px;
    transform: translate(-30%,35%)
    
}
`;

export const FaIcons =styled.div`
display: none;
@media screen and (max-width: 960px){
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 18px;
    margin-right: 5px;
    background: -webkit-linear-gradient(#9c47fc, #356ad2);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}
`;
