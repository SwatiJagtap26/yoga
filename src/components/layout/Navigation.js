import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import './Navigation.css';
import { authActions } from '../store/auth';
const Navigation =()=>{
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
  
    const logoutHandler = () => {
      dispatch(authActions.logout());
    };
    return(
        <div >
        <header className='headerNav'>
            
            <Link to='/'>
            <div className='logo'>Yoga Asanas</div>
            </Link>
            {isAuth && ( 
                
            <nav>
                
                <ul>
                    <li><Link to='/' >Home</Link></li>
                    <li><Link   to='/about'>About</Link></li>
                    <li><Link  to='/trainee'>Trainee</Link></li>
                    <li><Link  to='/blog'>Blog</Link></li>
                   <li> <Link to ='/basicform'>Sign-up</Link></li>
                   <button className='btnLogout' onClick={logoutHandler}>Logout</button>
            
                </ul>
            </nav>
            
            )}
            
        </header> 
        </div>
    )

}
export default Navigation;