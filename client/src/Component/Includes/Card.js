import {Container, Grid} from '@material-ui/core';

const Card = () => {
	return(
		<Container>
			
				<Grid container spacing={3}>
                                   <Grid item xs={12} sm={6}>col one</Grid>
				   <Grid item xs={12} sm={6}>Col two</Grid>
				</Grid>
			
		</Container>
	)
}

export default Card;