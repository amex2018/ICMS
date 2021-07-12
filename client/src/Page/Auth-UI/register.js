import {Grid} from '@material-ui/core';
import { Button } from '../../globalStyled'; 
import {LoginContainer, InputGroup, Input, Logo} from './login.elements';

const Register = () =>{
	return(
         
		
                        <LoginContainer>
				<Logo src='/logo-icms-one.png' alt='logo login' />
				<h2>Register</h2>
                          <form>
				  <Grid container spacing={3}>
                                    <Grid item  sm={6}> 
				    <InputGroup>
				  <label htmlFor='login-email'>First Name</label>
				  <Input type='text' placeholder='Enter your First name' />
				  </InputGroup>
				    </Grid>
				    <Grid item  sm={6}><InputGroup>
				  <label htmlFor='login-email'>Last Name</label>
				  <Input type='text' placeholder='Enter your Last name' />
				  </InputGroup>

				    </Grid>
				  </Grid>
				  <InputGroup>
				  <label htmlFor='login-email'>Email Address:</label>
				  <Input type='email' placeholder='Enter your Email' />
				  </InputGroup>
				  <InputGroup>
				  <label htmlFor='login-email'>Password:</label>
				  <Input type='password' placeholder='Enter your Password' />
				  </InputGroup>
				  <InputGroup>
				  <label htmlFor='login-email'>Retype Password:</label>
				  <Input type='password' placeholder='Enter your Password' />
				  </InputGroup>
				  <Button fontBig big primary>Register</Button>
                                     
				     <a href='/login'>Login</a> 
			  </form>
			</LoginContainer> 
			
	)
}

export default Register;