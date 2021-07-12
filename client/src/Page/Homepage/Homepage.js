import InfoSection from '../../Component/Includes/Info-section/InfoSection';
import { homeObjOne, homeObjTwo } from "./data";

const Homepage = () => {
	return(
		<>
	
		<InfoSection {...homeObjOne}/>
		<InfoSection {...homeObjTwo}/>
		</>
	)
}

export default Homepage;