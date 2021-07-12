import {Link} from 'react-router-dom';
import { Button } from '../../globalStyled'; 
import {LoginContainer, InputGroup, Input, Logo} from './login.elements';

const Login = () =>{
	return(
         
		
                        <LoginContainer>
				<Link to='/'><Logo src='/logo-icms-one.png' alt='logo login' /></Link>
				<h2>Login</h2>
                          <form>
				  <InputGroup>
				  <label htmlFor='login-email'>Email Address:</label>
				  <Input type='email' placeholder='Enter your Email' />
				  </InputGroup>
				  <InputGroup>
				  <label htmlFor='login-email'>Password:</label>
				  <Input type='password' placeholder='Enter your Password' />
				  </InputGroup>
				  <Button fontBig big primary>Login</Button>
                                     <a href='/resetpassword'> Forget password</a>
				     <a href='/register'>Register Account</a> 
			  </form>
			</LoginContainer> 
			
	)
}

export default Login;