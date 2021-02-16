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
                    <NavLogo src="./logo_transparent.png"/>
                    <NavMobileIcon onClick={handleClick}>{click ? <FaTimes /> : <FaBars />  } </NavMobileIcon>
                    <NavMenu  click={click}>
                
                        <NavLink> <NavItem><FaIcons><FaHome/></FaIcons> НҮҮР</NavItem></NavLink>
                        <NavLink> <NavItem><FaIcons><FaNewspaper/></FaIcons> МЭДЭЭ</NavItem></NavLink>
                        <NavLink>
                            <NavItem ><FaIcons><FaVoteYea/></FaIcons>САНАЛ ХУРААЛТ <FaCaretDown/>
                             <NavSubMenu>
                            <NavLink><NavSubMenuItem>АНИМЭ</NavSubMenuItem></NavLink>
                            <NavLink><NavSubMenuItem><i style={{color:"#999"}}>Тун удахгүй...</i></NavSubMenuItem></NavLink>
                            </NavSubMenu>
                            </NavItem>
                        </NavLink>
                        <NavLink>
                            <NavItem><FaIcons><FaListOl/></FaIcons>ЖАГСААЛТ <FaCaretDown/>
                            <NavSubMenu >
                            <NavLink><NavSubMenuItem>АНИМЭ</NavSubMenuItem></NavLink>
                            <NavLink><NavSubMenuItem><i style={{color:"#999"}}>Тун удахгүй...</i></NavSubMenuItem></NavLink>
                            </NavSubMenu>
                            </NavItem>
                            
                        </NavLink>
                        <NavLink><NavItem><FaIcons><FaMoneyCheckAlt/></FaIcons>ХАНДИВ</NavItem></NavLink>
                        <NavBtn>
                            <NavLink><NavLogin>Нэвтрэх<span>&nbsp;</span> <FaSignInAlt/></NavLogin></NavLink>
                    </NavBtn>
                    </NavMenu>
                    
                    
                </NavContainer>
            </Nav>
        </>
    )
}

export default Navbar
