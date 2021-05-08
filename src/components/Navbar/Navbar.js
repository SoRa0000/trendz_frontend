import React, {useState, useEffect} from 'react'
import {
    Nav,
    NavContainer,
    NavLogo,
    NavLink,
    NavMenu,
    NavItem,
    NavBtn,
    NavLogin,
    NavMobileIcon,
    NavSubMenu,
    NavSubMenuItem,
    FaIcons
} from './Navbar.styles'
import {FaBars, FaTimes, FaCaretDown, FaSignInAlt, FaHome,FaNewspaper,FaVoteYea,FaListOl,FaMoneyCheckAlt,FaThList,FaSortAmountDownAlt} from 'react-icons/fa'
const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    useEffect(() =>{
        try{
          window.scroll({
            top:0,
            left:0,
            behavior: 'smooth',
          });
        }
        catch (error) {
          window.scroll(0,0);
        }
      },[])
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo src="/logo_transparent.png"/>
                    <NavMobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />  } </NavMobileIcon>
                    <NavMenu  click={click}>
                        <NavLink to='/' onClick={handleClick}> <NavItem><FaIcons><FaHome/></FaIcons> НҮҮР</NavItem></NavLink>
                        <NavLink to='/news' onClick={handleClick}> <NavItem><FaIcons><FaNewspaper/></FaIcons> МЭДЭЭ</NavItem></NavLink>
                            <NavItem ><FaIcons><FaVoteYea/></FaIcons>САНАЛ ХУРААЛТ <FaCaretDown/>
                                <NavSubMenu>
                                <NavLink to='/vote/anime' onClick={handleClick}><NavSubMenuItem>АНИМЭ</NavSubMenuItem></NavLink>
                                <NavLink to='/' onClick={handleClick}><NavSubMenuItem><i style={{color:"#999"}}>Тун удахгүй...</i></NavSubMenuItem></NavLink>
                                </NavSubMenu>
                            </NavItem><NavItem><FaIcons><FaListOl/></FaIcons>ҮР ДҮН <FaCaretDown/>
                                <NavSubMenu >
                                <NavLink to='/' onClick={handleClick}><NavSubMenuItem>АНИМЭ</NavSubMenuItem></NavLink>
                                <NavLink to='/' onClick={handleClick}><NavSubMenuItem><i style={{color:"#999"}}>Тун удахгүй...</i></NavSubMenuItem></NavLink>
                                </NavSubMenu>
                            </NavItem>
                            <NavItem><FaIcons><FaSortAmountDownAlt/></FaIcons>ЖАГСААЛТ <FaCaretDown/>
                                <NavSubMenu >
                                <NavLink to='/list/anime' onClick={handleClick}><NavSubMenuItem>АНИМЭ</NavSubMenuItem></NavLink>
                                <NavLink to='/' onClick={handleClick}><NavSubMenuItem><i style={{color:"#999"}}>Тун удахгүй...</i></NavSubMenuItem></NavLink>
                                </NavSubMenu>
                            </NavItem>
                        <NavLink to='/' onClick={handleClick}><NavItem><FaIcons><FaMoneyCheckAlt/></FaIcons>ХАНДИВ</NavItem></NavLink>
                        <NavBtn>
                            <NavLink to='/' onClick={handleClick}><NavLogin>Нэвтрэх<span>&nbsp;</span> <FaSignInAlt/></NavLogin></NavLink>
                    </NavBtn>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
