import Grid from '@mui/material/Grid2';
import photography from '../../../images/photography.svg';
import './style.css';

const Photography = () => {
    return (
        <div>
            <div className="category-banner">
               <Grid container>
                   <Grid size={{xs:12,md:6}} className="category-text-content">
                     <div className="banner-text-content">
                     <div>
                     <p className="service-category-text">Get the best photography services from the top rated photographers</p>
                     <p className="service-category-secondary-text">Check out photographers with the skills that you need</p>
                     </div>   
                     </div>
                   </Grid>
                   <Grid size={{xs:12,md:6}} className="category-image-content">
                       <img className="service-banner-img" src={photography} alt="photography"/>
                    </Grid>
               </Grid>
            </div>
        </div>
    )
}

export default Photography;