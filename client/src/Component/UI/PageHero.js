 import styled from "styled-components"
 import { Divider } from "../../globalStyled"
 const PageHero = ({imgUrl, HeadColor, DescColor, heading,descrption}) =>{
	 return (
		 <Header imgUrl={imgUrl}>
                   <Heading HeadColor={HeadColor}>{heading}</Heading>
                   <Description DescColor={DescColor}>{descrption}</Description>
                   <Divider />
		 </Header>
	 )
 }
 export default PageHero

 const Header = styled.div`
  display: flex;
  width: 100%;
  height: 20rem;
  justify-content: center;
  align-items: center;
  background: url(${(prop) => prop.imgUrl});
  background-size: contain;
  flex-direction: column;
 `;
 const Img = styled.img`
  width: 100%;
  height: 100%;
 `;

const Heading = styled.h2`
font-size: 32px;
font-weight: bold;
color: ${({HeadColor}) => (HeadColor ? '#ffffff' : 'rgb(17, 2, 7)')};
margin-bottom: 30px; 
@media screen and (max-width: 700px){
        margin-bottom: 10px;
}

`;

const Description = styled.p`
font-size: 18px;
font-weight: bold;
color: ${({DescColor}) => (DescColor ? '#ffffff' : 'rgb(17, 2, 7)')};
margin-bottom: 30px;
@media screen and (max-width: 700px){
       text-align: center;
       padding: 20px;
       margin-bottom: 10px;
}
`;


