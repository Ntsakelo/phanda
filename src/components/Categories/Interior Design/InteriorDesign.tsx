import Grid from '@mui/material/Grid2';
import interiorDesign from '../../../images/interior_design.svg';

const InteriorDesign = () => {
    return (
        <div>
             <div className="category-banner">
               <Grid container className="category-banner-container">
                   <Grid size={{xs:12,md:6}} className="category-text-content">
                     <div className="banner-text-content">
                     <div>
                     <p className="service-category-text">Get the best Interior Design services from the top rated Designers</p>
                     <p className="service-category-secondary-text">Check out Interior Designers with the skills that you need</p>
                     </div>   
                     </div>
                   </Grid>
                   <Grid size={{xs:12,md:6}} className="category-image-content">
                       <img className="service-banner-img" src={interiorDesign} alt="interior design"/>
                    </Grid>
               </Grid>
            </div>
        </div>
    )
}

export default InteriorDesign;