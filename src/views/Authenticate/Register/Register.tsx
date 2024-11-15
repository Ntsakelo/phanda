import Nav from "../../../components/Nav";
import Grid from '@mui/material/Grid2';
import './style.css';
import Authenticate from '../../../images/authenticate.svg';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { useFormik } from "formik";
import * as yup from 'yup';
import { PuffLoader, PulseLoader } from "react-spinners";
import usePost from "../../../utils/usePost";
import { useState, useEffect } from "react";
import Alert from '@mui/material/Alert';
import {useNavigate}  from "react-router-dom";

const Register = () => {

    const [errorMessage, setErrorMessage] = useState<any>()
    const [isSubmit, setIsSubmit] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    let {post,result,error} = usePost()
    const navigate = useNavigate()

   
    useEffect(() => {
        if(result && result.status === 201){
            setTimeout(() => {
               navigate('/user/login')
            },3000)
        }
    },[result])


    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        onSubmit: async (values) => {
            setErrorMessage('')
            setIsSubmit(true)
            // setEmail(values.email)
            // setPassword(values.password)
            // setUsername(values.username)
            try{
                 await post({
                    username: values.username,
                    email: values.email,
                    password_hash: values.password
                }, 'auth/signup')
                
                

            }catch(error){
                   console.log(error)  
            }
            // setError(null)
            // setResult(null)
            values.email = '';
            values.password = '';
            values.confirmPassword = '';
            values.username = '';
        },
        validationSchema: yup.object({
            username: yup.string().required('Filled required'),
            email: yup.string().email().required('Filled required'),
            password: yup.string().required('Filled required').min(6),
            confirmPassword: yup.string().required('Filled required').oneOf([yup.ref('password')], 'password must match')
        })
    })
    return (
        <div>
            <div className="auth-container">
                <ThemeProvider theme={createTheme({
                    palette: {
                        primary: {
                            main: '#7695FF'
                        }
                    }
                })}>
                    <Grid container>
                        <Grid size={{ xs: 12, md: 6 }} sx={{ height: '500px', backgroundColor: 'var(--primary-theme-color)' }}>
                            <img src={Authenticate} alt='register' className="auth-img" />
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <form action="" onSubmit={formik.handleSubmit}>
                                <p className="form-text">Hi there, we are happy to have you here. To be a member, you need to create an account. Please fill in your details below</p>
                               {result && result.status === 201 && <Alert variant="outlined" severity="success" sx={{ width: '85%', margin: 'auto', marginTop: '20px' }}>
                                    Successfully registered
                                </Alert>}
                                {error && error.status === 403 && <Alert variant="outlined" severity="error" sx={{ width: '85%', margin: 'auto', marginTop: '20px' }}>
                                    Oops! Email already used
                                </Alert>}
                                {error && error.status !== 403 && <Alert variant="outlined" severity="error" sx={{ width: '85%', margin: 'auto', marginTop: '20px' }}>
                                    Oops! Internal error. Please try again
                                </Alert>}
                                <div className="auth-input-container">
                                    <TextField
                                        fullWidth
                                        label="Username"
                                        id="username"
                                        name="username"
                                        onChange={formik.handleChange}
                                        value={formik.values.username}
                                        onBlur={formik.handleBlur}
                                        required />
                                    <p className="error">{formik.errors.username && formik.touched.username && formik.errors.username}</p>
                                </div>
                                <div className="auth-input-container">
                                    <TextField
                                        fullWidth
                                        type="email"
                                        label="Email Address"
                                        id="auth-email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                        onBlur={formik.handleBlur}
                                        required />
                                    <p className="error">{formik.errors.email && formik.touched.email && formik.errors.email}</p>
                                </div>
                                <div className="auth-input-container">
                                    <TextField
                                        fullWidth type="password"
                                        label="Password"
                                        id="auth-password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                        onBlur={formik.handleBlur}
                                        required />
                                    <p className="error">{formik.errors.password && formik.touched.password && formik.errors.password}</p>
                                </div>
                                <div className="auth-input-container">
                                    <TextField
                                        fullWidth
                                        type="password"
                                        label="Confirm Password"
                                        id="auth-confirm-password"
                                        onChange={formik.handleChange}
                                        value={formik.values.confirmPassword}
                                        onBlur={formik.handleBlur}
                                        required
                                        name="confirmPassword" />
                                    <p className="error">{formik.errors.confirmPassword && formik.touched.confirmPassword && formik.errors.confirmPassword}</p>
                                </div>
                                <button type="submit" className="main-cta" id='register-cta'>REGISTER</button>
                                {/* {isSubmit && <button className="main-cta" id="register-loading-cta" disabled><PulseLoader color="#fff" size="10px"/></button>} */}
                            </form>

                        </Grid>
                    </Grid>
                </ThemeProvider>
            </div>
        </div>
    )
}

export default Register;