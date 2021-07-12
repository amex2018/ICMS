 import ServicesCard  from '../../Component/Services/ServicesCard';
 import PageHero from '../../Component/UI/PageHero';
 import { ServicesObj } from './data';
 const Service = () =>{
	 return(
	<div>
<PageHero {...ServicesObj} />
<ServicesCard />
	</div>
	    
	 
	
	 )
 }

 export default Service;