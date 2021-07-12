import {FooterContainer, FooterSubHeading, FooterSubscribition, FooterSubText, Form, FormInput,
     FooterLink, FooterLinkContainer, FooterLinkItems, FooterLinkTitle, FooterLinkWrapper, FooterImg
} from './Footer.elements';
import {Button } from '../../../globalStyled';
import {Grid} from '@material-ui/core';
const Footer = () =>{
	return(
		
	 <FooterContainer>
		 
		 <Grid container spacing={2}>
                        <Grid item xs={12} sm={12}>
			<FooterSubscribition>
                      <FooterSubHeading>
                 	Join our exclusive memebership to receive the latest and trends
                      </FooterSubHeading>
                        <FooterSubText>
	                <Form>
	            <FormInput name='email' type='email' placeholder='Enter your Email..' />
		   <Button fontBig>Subscribition</Button>
	       
	                    </Form>
                      </FooterSubText>
                     </FooterSubscribition>
			</Grid>
			<Grid item xs={12} sm={12}>
			<FooterLinkContainer>
			 <FooterLinkWrapper>
				 <FooterLinkItems>
					 <FooterLinkTitle>About my ICMS</FooterLinkTitle>
					 <FooterImg src='/logo-icms-one.png' alt='footer'/>
				 </FooterLinkItems>
				 <FooterLinkItems>
					 <FooterLinkTitle>About Us</FooterLinkTitle>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
				 </FooterLinkItems>
				  <FooterLinkItems>
					 <FooterLinkTitle>Contact Us</FooterLinkTitle>
					 <FooterLink>How it works?</FooterLink>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
				 </FooterLinkItems>
				  <FooterLinkItems>
					 <FooterLinkTitle>Services</FooterLinkTitle>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
				 </FooterLinkItems>
				  <FooterLinkItems>
					 <FooterLinkTitle>Map</FooterLinkTitle>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
					 <FooterLink>Ababa</FooterLink>
				 </FooterLinkItems>
				 
			 </FooterLinkWrapper>
		 </FooterLinkContainer>
			</Grid>
		 </Grid>
		
	 </FooterContainer>
	)
}


export default Footer