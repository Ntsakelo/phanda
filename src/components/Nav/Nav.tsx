import Grid from '@mui/material/Grid2';
import logo from '../../images/Phanda.svg';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import './style.css';

const Nav = () => {
    return(
        <div>
            <Grid container>
               <Grid size={{xs:12}}>
                   <div className="nav-container" id="main-nav-container">
                   <Link to="/">
                      <img src={logo} alt="logo" className="logo"/>    
                   </Link>
                   <Link to="/" className="nav-link">Find skill</Link> 
                   <Link to="/" className="nav-link">Find work</Link>
                   <button className='main-cta login-cta'>SIGN UP</button>
                   <MenuIcon id="menu-icon"/>
                   </div>
               </Grid>
                   <div className="nav-container-sm">
                    <div className="container-action">
                       <CloseIcon id="close-icon"/>
                    </div>
                    <div className="links-container-sm">
                    <div>
                   <Link to="/" className="nav-link-sm">Find skill</Link> 
                   <Link to="/" className="nav-link-sm">Find work</Link>
                    </div>    
                    </div>
                   <div className="bottom-fixed-container">
                   <button className='main-cta login-cta-sm'>SIGN UP</button>
                   </div>
                   </div>
               <Grid size={{xs:12}}>
                  <div className="secondary-nav-container">
                     <Link to="/" className="nav-link secondary-nav-link">Photography</Link>
                     <Link to="/" className="nav-link secondary-nav-link">Tailor</Link>
                     <Link to="/" className="nav-link secondary-nav-link">Gardening</Link>
                     <Link to="/" className="nav-link secondary-nav-link">Baking</Link>
                     <Link to="/" className="nav-link secondary-nav-link">Decor</Link>
                     <Link to="/" className="nav-link secondary-nav-link">House helper</Link>
                  </div>
               </Grid>
            </Grid>
        </div>
    )
}

export default Nav;