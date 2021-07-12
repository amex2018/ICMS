import PageHero from "../../Component/UI/PageHero";
import { AboutObj} from "./data";
import AboutSection from "../../Component/About/AboutSection";
const About = () => {
	return(
		<div>
			<PageHero {...AboutObj}/>
			<AboutSection />
			
		</div>
	)
}

export default About;