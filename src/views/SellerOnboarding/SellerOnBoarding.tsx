import Grid from '@mui/material/Grid2';
import './style.css'
import Logo from '../../images/Phanda.svg';
import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';

const steps = ['Personal Info', 'Service Info', 'Uploads'];
const links:{[index:number]:string} = {0:'/onboarding/seller/personal_info',1:'/onboarding/seller/professional_info',2:'/onboarding/seller/uploads'}
interface Progress {
    setCurrentStep: Function
}


const SellerOnboarding = () => {
    const [activeStep, setActiveStep] = useState(0);
    const navigate = useNavigate();
    const [completed, setCompleted] = useState<{
        [k: number]: boolean;
    }>({});

    const totalSteps = () => {
        return steps.length;
    };

    const completedSteps = () => {
        return Object.keys(completed).length;
    };

    useEffect(() => {
       navigate(links[activeStep]);       
    },[activeStep,navigate])

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps();
    };

    const handleNext = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ? // It's the last step, but not all steps have been completed,
                // find the first step that has been completed
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
        //setCurrentLink(links[newActiveStep]); 
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
     
    };

    const handleStep = (step: number) => () => {
        setActiveStep(step);
      
    };

    const handleComplete = () => {
        setCompleted({
            ...completed,
            [activeStep]: true,
        });
        handleNext();
    };

    const handleReset = () => {
        setActiveStep(0);
        setCompleted({});
    };
    return (
        <div>
            <Grid container>
            <ThemeProvider theme={createTheme({
                    palette:{
                        primary:{
                            main:'#7695FF'
                        },
                    }
                })}>
                <Grid size={{ xs: 12 }}>
                    <img src={Logo} alt="logo" className='logo' id="logo"/>
                    <Box sx={{ width: '100%' }}>
                        <Stepper nonLinear activeStep={activeStep}>
                            {steps.map((label, index) => (
                                <Step key={label} completed={completed[index]}>
                                    <StepButton color="inherit" onClick={handleStep(index)}>
                                        {label}
                                    </StepButton>
                                </Step>
                            ))}
                        </Stepper>
                        <div>
                            {allStepsCompleted() ? (
                                <React.Fragment>
                                    <Typography sx={{ mt: 2, mb: 1 }}>
                                        All steps completed - you&apos;re finished
                                    </Typography>
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        <Button onClick={handleReset}>Reset</Button>
                                    </Box>
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    <Outlet />
                                    <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                        <Button
                                            color="inherit"
                                            disabled={activeStep === 0}
                                            onClick={handleBack}
                                            sx={{ mr: 1 }}
                                        >
                                            Back
                                        </Button>
                                        <Box sx={{ flex: '1 1 auto' }} />
                                        {activeStep !== steps.length &&
                                            (
                                                <Button onClick={handleComplete}>
                                                    {completedSteps() === totalSteps() - 1
                                                        ? 'Finish'
                                                        : ' Save & Continue'}
                                                </Button>
                                            )}
                                    </Box>
                                </React.Fragment>
                            )}
                        </div>
                    </Box>
                </Grid>
                </ThemeProvider>
            </Grid>
                            
          
        </div>
    )
}

export default SellerOnboarding;