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
    NavSubMenuItem
} from './Navbar.styles'
import {FaBars, FaTimes, FaCaretDown, FaSignInAlt} from 'react-icons/fa'
import {BiLogIn} from 'react-icons/bi'
const Navbar = () => {
    const [click,setClick] = useState(false)
    const handleClick = () => setClick(!click)
    return (
        <>
            <Nav>
                <NavContainer>
                    <NavLogo src="./logo_transparent.png"/>
                    <NavMobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />  } </NavMobileIcon>
                    <NavMenu  click={click}>
                
                        <NavLink> <NavItem>НҮҮР</NavItem></NavLink>
                        <NavLink> <NavItem>МЭДЭЭ</NavItem></NavLink>
                        <NavLink>
                            <NavItem >САНАЛ ХУРААЛТ <FaCaretDown/>
                             <NavSubMenu>
                            <NavLink><NavSubMenuItem>АНИМЭ</NavSubMenuItem></NavLink>
                            <NavLink><NavSubMenuItem><i>Тун удахгүй...</i></NavSubMenuItem></NavLink>
                            </NavSubMenu>
                            </NavItem>
                        </NavLink>
                        <NavLink>
                            <NavItem >ЖАГСААЛТ <FaCaretDown/>
                            <NavSubMenu >
                            <NavLink><NavSubMenuItem>АНИМЭ</NavSubMenuItem></NavLink>
                            <NavLink><NavSubMenuItem><i>Тун удахгүй...</i></NavSubMenuItem></NavLink>
                            </NavSubMenu>
                            </NavItem>
                            
                        </NavLink>
                        <NavLink><NavItem>ХАНДИВ</NavItem></NavLink>
                        <NavBtn>
                            <NavLink><NavLogin>Нэвтрэх <FaSignInAlt/></NavLogin></NavLink>
                    </NavBtn>
                    </NavMenu>
                    
                    
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
