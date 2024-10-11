import Nav from "../../components/Nav";
import Grid from '@mui/material/Grid2';
import TextField from '@mui/material/TextField';
import { createTheme, ThemeProvider } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import './style.css'
const Home = () => {
    return(
        <div>
            <Nav />
            <Grid container>
                <Grid size={{xs:12}}>
                   <div className="hero-banner">
                       <div>
                       <p className="main-text hero-text">Find the right person to do the job right, at the right time</p>
                       <ThemeProvider theme={createTheme({palette:{primary:{main:"#fff"},secondary:{main:"#fff"}},components:{MuiTextField:{styleOverrides:{root:{'--TextField-brandBorderHoverColor': '#fff'}}}}})}>
                       <TextField 
                       id="outlined-basic"  
                       sx={{backgroundColor:'#fff',borderRadius:'5px',outline:'none',width: '50%',mt:'20px'}}
                        slotProps={{
                            input:{
                                endAdornment:<InputAdornment position="end"><SearchIcon id="search-icon"/></InputAdornment>
                            }
                        }}
                       />
                       </ThemeProvider>  
                       </div>
                   </div>
                </Grid>
                <Grid size={{xs:12}}>
                    <div className="service-item">
                      
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;