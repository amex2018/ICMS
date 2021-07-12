import { Container } from '../../../globalStyled';
import styled from 'styled-components';

export const Nav = styled.nav`
background: rgb(253, 253, 253);
height: 80px;
display: flex;
justify-content: 'center';
align-items: 'center';
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;

`;

export const NavContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;

${Container}
`;
export const NavLogo = styled.a`
  color: rgb(248, 6, 87);
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: bold;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 640px){
	display: block;
	position: absolute;
	top: 0;
	right: 0;
	transform: translate(-100%, 60%);
	font-size: 2rem;
	cursor: pointer;
}
`;

export const NavMenu = styled.ul`
 display: flex;
 list-style: none;
 align-items: center;
 text-align: center;

 @media screen and (max-width: 640px){
	display: flex;
	align-items: center;
	flex-direction: column;
	width: 100%;
	height: 90vh;
	position: absolute;
	top: 80px;
	left: ${({click}) => (click ? 0 : '-100%')};
	opacity: 30;
	transition: all 0.5s ease;
	background: #101522;
	
 }
`;


export const NavItem = styled.li`
  height: 80px;
  border-bottom: 1px solid transparent;

  &:hover{
   border-bottom: 2px solid rgb(248, 6, 87);
   color: rgb(248, 6, 87);
  }


  @media screen and (max-width: 640px){
        
        align-items: center;
	color: #fff;
	&:hover{
		color: rgb(250, 16, 74);
		transition: all 0.5s ease;
	}
  }
`;
export const NavLink = styled.a`
  color: #000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (maxwidth: 640px){
	  display: table;
	  padding: 0.5rem;
	  width: 100%;
	  text-align: center;

	  &:hover{
		  color: #4b59f7;
		  transition: all 0.3s ease;
	  }
  }
`;

export const NavItembtn = styled.li`
@media screen and (max-width: 640px){
	display: flex;
	justify-content: center;
	align-items: center;
	width: 70%;
	height: 60px;
}
`;

export const NavBtnLink = styled.a`
display: flex;
justify-content: center;
align-item: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none; 
outline: none;
`;

export const Img = styled.img`
width: 50px;
height: 50px;
border-radius: 50%;
margin-right: 10px;
`;