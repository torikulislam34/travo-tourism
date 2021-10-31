
import './Login.css';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const history = useHistory();

    const redirect_uri = location.state?.from || '/home';

    const handleGoogleLogin =() =>{
        signInUsingGoogle()
        .then((result) => {
           history.push(redirect_uri);
           window.location.reload(); 
          })
         
    }

    return (
        <div >
            <div className='log-header'>
            <h1 className= 'text-white login-text fw-bold'>SIGN UP</h1>
            </div>
            <div className='row'>
              <div className=' col-lg-4 col-md-6 col-12 btn-area'>
                <div className= 'left-log'>
                  <p className='text-primary'>SIGN UP</p>
                  <h2>Connect with us for Better Tour.</h2>
                  <button onClick= {handleGoogleLogin} className= 'login-btn'>Log In With Google</button>
                </div>

              </div>
              <div className='col-lg-8 col-md-6 col-12'>
               <img className='logb-img' src="https://i.ibb.co/1fpLd3G/image056-1024x573.jpg" alt="" />
              </div>
            </div>
        </div>
    );
};

export default Login;
