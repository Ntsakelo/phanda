import Nav from "../../../components/Nav";
import Grid from '@mui/material/Grid2';
import './style.css';
import LoginSvg from '../../../images/login.svg';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { useFormik } from "formik";
import Alert from '@mui/material/Alert';
import usePost from "../../../utils/usePost";
import * as yup from 'yup'
import { Password } from "@mui/icons-material";
import Cookies from "universal-cookie";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    let {post, result,error} = usePost()
    const cookie = new Cookies()
     const navigate = useNavigate()

    useEffect(() => {
        if(result && result.status === 200){
            setTimeout(() => {
                cookie.set('phanda', result?.data.access_token) 
                navigate('/')
             },3000)
        }
    },[result])
    
    const formik = useFormik({
        initialValues : {
            loginPassword:'',
            loginEmail:'',
        },
        onSubmit: async(values) => {
          try{
              await post({
               email:values.loginEmail.toLowerCase(),
               password:values.loginPassword.toLowerCase(),
              },'auth/login')
              console.log(error)

          }catch(error){

          }  
        },
       validationSchema: yup.object({
        loginPassword: yup.string().required('This field is required'),
        loginEmail:yup.string().required('This field is required')
       })
    })
    return (
        <div>
        <Nav />
        <div className="auth-container">
               <ThemeProvider theme={createTheme({
                    palette: {
                        primary: {
                            main: '#7695FF'
                        }
                    }
                })}>
            <Grid container>
                <Grid size={{xs:12,md:6}} sx={{height:'500px',backgroundColor:'var(--primary-theme-color)'}}>
                    <img src={LoginSvg} alt='login' className="auth-img"/>  
                </Grid>
                <Grid size={{xs:12,md:6}}>
                    <form action="" onSubmit={formik.handleSubmit}>
                            <p className="form-text">Hi there, Welcome back. Please Login below</p>
                            {result && result.status === 200 && <Alert variant="outlined" severity="success" sx={{ width: '85%', margin: 'auto', marginTop: '20px' }}>
                                    Welcome Back! Redirecting you to the homepage
                                </Alert>}
                            {error && error.status === 403 && <Alert variant="outlined" severity="error" sx={{ width: '85%', margin: 'auto', marginTop: '20px' }}>
                                    Oops! Credentials are incorrect! Please try again
                                </Alert>}
                            {error && error.status !== 403 && <Alert variant="outlined" severity="error" sx={{ width: '85%', margin: 'auto', marginTop: '20px' }}>
                                    Oops! Internal error. Please try again
                                </Alert>}
                            <div className="auth-input-container">   
                            <TextField 
                            fullWidth 
                            type="email" 
                            label="Email Address" 
                            id="login-email" 
                            name="loginEmail" 
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.loginEmail}
                            required />
                            <p className="error">{formik.errors.loginEmail && formik.touched.loginEmail && formik.errors.loginEmail}</p>
                            </div>
                            <div className="auth-input-container">
                            <TextField 
                            fullWidth 
                            type="password" 
                            label="Password" 
                            id="login-password" 
                            name="loginPassword"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.loginPassword} 
                            required />
                            <p className="error">{formik.errors.loginPassword && formik.touched.loginPassword && formik.errors.loginPassword}</p>
                            </div>
                            <button type="submit" className="main-cta" id='login-cta'>LOGIN</button>
                    </form>
    
                </Grid>
            </Grid>
            </ThemeProvider>
         </div>
        </div>
    
    )
}

export default Login;