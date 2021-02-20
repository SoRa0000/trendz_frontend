import React, {useState} from 'react'
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
import {FaBars, FaTimes, FaCaretDown, FaSignInAlt, FaHome,FaNewspaper,FaVoteYea,FaListOl,FaMoneyCheckAlt} from 'react-icons/fa'
const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo src="/logo_transparent.png"/>
                    <NavMobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />  } </NavMobileIcon>
                    <NavMenu  click={click}>
                        <NavLink to='/'> <NavItem><FaIcons><FaHome/></FaIcons> НҮҮР</NavItem></NavLink>
                        <NavLink to='/'> <NavItem><FaIcons><FaNewspaper/></FaIcons> МЭДЭЭ</NavItem></NavLink>
                            <NavItem ><FaIcons><FaVoteYea/></FaIcons>САНАЛ ХУРААЛТ <FaCaretDown/>
                                <NavSubMenu>
                                <NavLink to='/vote/anime'><NavSubMenuItem>АНИМЭ</NavSubMenuItem></NavLink>
                                <NavLink to='/'><NavSubMenuItem><i style={{color:"#999"}}>Тун удахгүй...</i></NavSubMenuItem></NavLink>
                                </NavSubMenu>
                            </NavItem>
                            <NavItem><FaIcons><FaListOl/></FaIcons>ЖАГСААЛТ <FaCaretDown/>
                                <NavSubMenu >
                                <NavLink to='/'><NavSubMenuItem>АНИМЭ</NavSubMenuItem></NavLink>
                                <NavLink to='/'><NavSubMenuItem><i style={{color:"#999"}}>Тун удахгүй...</i></NavSubMenuItem></NavLink>
                                </NavSubMenu>
                            </NavItem>
                        <NavLink to='/'><NavItem><FaIcons><FaMoneyCheckAlt/></FaIcons>ХАНДИВ</NavItem></NavLink>
                        <NavBtn>
                            <NavLink to='/'><NavLogin>Нэвтрэх<span>&nbsp;</span> <FaSignInAlt/></NavLogin></NavLink>
                    </NavBtn>
                    </NavMenu>
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
