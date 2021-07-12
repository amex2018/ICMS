import { InfoSec, TextWrapper , Topline, Heading, Subtitle, ImgWrapper, Img} from "./InfoSection.elements";
import { Button, Container } from "../../../globalStyled";
import {Grid} from '@material-ui/core';
const InfoSection = ({lightBg, imgStart, lightTopline, lightHeadline, lightSubtitle, toplinetext,headlinetext,description, button, start, img, alt, primary}) => {
	return(
		
		<InfoSec lightBg={lightBg}>
		<Container>
		<Grid container imgStart={imgStart}>
			<Grid item xs={12} sm={8} >
			
		 	  <TextWrapper>
		 	    <Topline lightTopline={lightTopline}>{toplinetext}</Topline>
		 	    <Heading lightHeadline={lightHeadline}>{headlinetext}</Heading>
		 	    <Subtitle lightSubtitle={lightSubtitle}>{description}</Subtitle>
		 	    <Button big fontBig primary={primary}>{button}</Button>
		 	  </TextWrapper>
		     
			</Grid>
			<Grid item xs={12} sm={4}>
			<ImgWrapper start={start}>
			  <Img src={img} alt={alt} />
		        </ImgWrapper>
			</Grid>

		</Grid>
		</Container>
		</InfoSec>
		
	)
}

export default InfoSection