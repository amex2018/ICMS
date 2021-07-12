import React, {useState, useEffect} from 'react';
import {Nav, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink, NavBtnLink,NavItembtn, Img} from './Navbar.elements';
import { Menu, Close} from '@material-ui/icons';
import { Button } from '../../../globalStyled';

const Navbar =  () =>{
	const [click, setClick] = useState(false);
	const [button, setButton] = useState(true);
	const handleMobilemenu = () =>{
		setClick(!click)
	}

	const showButton = () =>{
		if(window.innerWidth <= 960){
			setButton(false)
		}else{
			setButton(true)
		}
	}
       useEffect(() => {
            showButton()
       }, [])

       window.addEventListener('resize', showButton)
	return(
		<Nav> 
			<NavContainer>
				<NavLogo  href='/'>
					<Img src='/logo-icms-one.png' alt='logos'/>
					ICMS
				</NavLogo>
				<MobileIcon onClick={handleMobilemenu}>
					{click ? <Close /> : <Menu />}
				</MobileIcon>

				<NavMenu onClick={handleMobilemenu} click={click}>
                                     <NavItem>
					     <NavLink href='/'>Home</NavLink>
				     </NavItem>
				      <NavItem>
					     <NavLink href='/intership-post'>Internship</NavLink>
				     </NavItem>
				      <NavItem>
					     <NavLink href='/career-post'>Career</NavLink>
				     </NavItem>
				      <NavItem>
					     <NavLink href='/about'>About Us</NavLink>
				     </NavItem>
				     <NavItem>
					     <NavLink href='/service'>Service</NavLink>
				     </NavItem>
				     <NavItem>
					     <NavLink href='/contact'>Contact Us</NavLink>
				     </NavItem>

				     <NavItembtn>
					     {button ? (
						     <NavBtnLink href='login'>
                                                       <Button primary>Sing Up</Button>
						     </NavBtnLink>
					     ): (
						<NavBtnLink href='sign-up'>
						<Button fontbig primary>Sing Up</Button>
					      </NavBtnLink>
					     )}
				     </NavItembtn>
				</NavMenu>
			</NavContainer>
		</Nav>
	)
}

export default Navbar