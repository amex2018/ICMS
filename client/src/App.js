import {BrowserRouter as Router, Route} from 'react-router-dom';
import Homepage from './Page/Homepage/Homepage';
import Login from './Page/Auth-UI/login';
import Register from './Page/Auth-UI/register';
import About from './Page/Homepage/about';
import Contact from './Page/Homepage/contact';
import Service from './Page/Homepage/service';
import Navbar from './Component/Includes/NavBar/Navbar';
import Footer from './Component/Includes/Footer/Footer';
import ForgotPassword from './Page/Auth-UI/Forgetpassword';



function App() {

  return (
    <>
    
    <Router>
      <Navbar />
      <Route path='/' exact component={Homepage} />
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
       <Route path='rest' component={ForgotPassword}/>
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/service' component={Service}/>
      <Footer />
    </Router>

 </>
   
  );
}

export default App;
