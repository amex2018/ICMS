import styled from 'styled-components';
import { Grid } from '@material-ui/core';

import { Container , Divider} from '../../globalStyled';
const AboutSection = () => {
	return(
	 <AboutSec>
		 <Titles>
			 About Us

		 </Titles>
		 <Divider />
             <Container>
		     
	     
		     <Grid container spacing={3}>
                        <Grid item xs={12} sm={6}>
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
			<Grid item xs={12} sm={6}>
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
					   <img src='/Images/banner-one.svg' alt='ff'  />
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

export default AboutSection;

const AboutSec = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin: 40px 0px 40px 0px;
flex-direction: column;
`;
const CardItem = styled.div`
width: 100%;
height: 150px;
background: #eee;
border-radius: 20px;
margin-bottom: 30px;
display: flex;
`;
const Images = styled.div`
justify-content: left;
margin:  auto;
align-items: center;
  img {
	  width: 100px;
	  height: 100px;
	  border-radius: 50px;
	  background-size: cover;
  }
`;
const Heading = styled.div`
justify-content: right;
margin: auto;
align-items: center;
 span{
	 padding: auto;
 }
`;
const Titles =styled.h2`
font-size: 30px;
text-align: center;
margin-bottom: 10px;
`;