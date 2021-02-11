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
import {FaBars, FaTimes, FaCaretDown} from 'react-icons/fa'
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
                
                        <NavLink> <NavItem>Нүүр</NavItem></NavLink>
                        <NavLink> <NavItem>Мэдээ</NavItem></NavLink>
                        <NavLink>
                            <NavItem >Санал хураалт <FaCaretDown/>
                             <NavSubMenu>
                            <NavLink><NavSubMenuItem>Weekly Top</NavSubMenuItem></NavLink>
                            <NavLink><NavSubMenuItem>AllTime Top</NavSubMenuItem></NavLink>
                            </NavSubMenu>
                            </NavItem>
                        </NavLink>
                        <NavLink>
                            <NavItem >Жагсаалт <FaCaretDown/>
                            <NavSubMenu >
                            <NavLink><NavSubMenuItem>Weekly Top</NavSubMenuItem></NavLink>
                            <NavLink><NavSubMenuItem>AllTime Top</NavSubMenuItem></NavLink>
                            </NavSubMenu>
                            </NavItem>
                            
                        </NavLink>
                        <NavLink><NavItem>Хандив</NavItem></NavLink>
                        <NavBtn>
                            <NavLink><NavLogin>Нэвтрэх</NavLogin></NavLink>
                            <NavLink><NavLogin>Бүртгүүлэх</NavLogin></NavLink>
                    </NavBtn>
                    </NavMenu>
                    
                    
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
