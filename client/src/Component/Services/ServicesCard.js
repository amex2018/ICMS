import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import { Container , Divider} from '../../globalStyled';
const ServicesCard = () => {
	return(
	 <AboutSec>
		 <Titles>
			Services

		 </Titles>
		 <Divider />
             <Container>
		     
	     
		     <Grid container spacing={3}>
                        <Grid item xs={12} sm={4}>
                              <CardItem>
                                   <Images>
					   <img src='/Images/banner-one.svg' alt='ff'/>
				   </Images>
				   <Heading>
					<h2>Hello</h2>
					<span>hello everyone ! today better day than yesterday</span>
				   </Heading>
			      </CardItem>
			      <CardItem>
                                   <Images>
					   <img src='/Images/banner-one.svg' alt='ff'/>
				   </Images>
				   <Heading>
					<h2>Hello</h2>
					<span>hello everyone ! today better day than yesterday</span>
				   </Heading>
			      </CardItem>
			      
			</Grid>
			<Grid item xs={12} sm={4}>
			      <CardItem>
                                   <Images>
					   <img src='/Images/banner-one.svg' alt='ff'/>
				   </Images>
				   <Heading>
					<h2>Hello</h2>
					<span>hello everyone ! today better day than yesterday</span>
				   </Heading>
			      </CardItem>
			     
			      <CardItem>
                                   <Images>
					   <img src='/Images/banner-one.svg' alt='ff'/>
				   </Images>
				   <Heading>
					<h2>Hello</h2>
					<span>hello everyone ! today better day than yesterday</span>
				   </Heading>
			      </CardItem>
			</Grid>
			<Grid item xs={12} sm={4}>
			      <CardItem>
                                   <Images>
					   <img src='/Images/banner-one.svg' alt='ff'/>
				   </Images>
				   <Heading>
					<h2>Hello</h2>
					<span>hello everyone ! today better day than yesterday</span>
				   </Heading>
			      </CardItem>
			     
			      <CardItem>
                                   <Images>
					   <img src='/Images/banner-one.svg' alt='ff'/>
				   </Images>
				   <Heading>
					<h2>Hello</h2>
					<span>hello everyone ! today better day than yesterday</span>
				   </Heading>
			      </CardItem>
			</Grid>
		     </Grid>
	     </Container>
	 </AboutSec>
	)
}

export default ServicesCard;

const AboutSec = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 40px 5px 40px 0px;
flex-direction: column;

`;
const CardItem = styled.div`
width: 80%;
height: auto;
background: #fff;
border-radius: 20px;
margin: 30px 0px 0px 0px;
padding: 10px 30px 20px 50px;
box-shadow: 0px 0px 2px 1px rgba(250, 6, 87, 0.158);
&: hover{
	box-shadow: 0px 0px 2px 1px rgba(250, 6, 87, 0.258);
	transition: ease-in-out;
	background: rgb(250, 16, 74)
}
`;
const Images = styled.div`
margin:  auto;
  img {
	  width: 100px;
	  height: 100px;
	  border-radius: 50px;
	  background-size: cover;
  }
`;
const Heading = styled.div`
margin: auto;

 span{
	 padding: 0px;
 }
`;
const Titles =styled.h2`
font-size: 30px;
text-align: center;
margin-bottom: 10px;
`;