import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid2';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';

const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    box-sizing: border-box;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: #000;
    border:none;
    outline:none;
    resize:none;
    `,
);

const ProfessionalDetails = () => {
    return (
        <div>
            <Grid container>
                <ThemeProvider theme={createTheme({
                    palette: {
                        primary: {
                            main: '#7695FF'
                        }
                    }
                })}>
                    <Grid size={{ xs: 12 }}>
                        <h1 className="main-header">Service Info</h1>
                        <p>Tell us a bit about your services. Let potential clients know about your expertise, services and packages. This is a good chance to model your business</p>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className="input-container">
                            <FormControl fullWidth sx={{ width: '100%', margin: 'auto', marginBottom: '0px' }} id="select-form-control">
                                <InputLabel id="demo-simple-select-label" required>Service Category</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={''}
                                    label="Language level"
                                >
                                    <MenuItem value={'basic'}>Basic</MenuItem>
                                    <MenuItem value={'conversational'}>conversational</MenuItem>
                                    <MenuItem value={'fluent'}>Fluent</MenuItem>
                                    <MenuItem value={'native'}>Native/Bilingual</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid size={{xs:12,md:6}}>
                    <div className="input-container align-right">
                            <FormControl fullWidth sx={{ width: '100%', margin: 'auto', marginBottom: '0px' }} id="select-form-control">
                                <InputLabel id="demo-simple-select-label" required>Experience level</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={''}
                                    label="Language level"
                                >
                                    <MenuItem value={'basic'}>0-1</MenuItem>
                                    <MenuItem value={'conversational'}>2-4</MenuItem>
                                    <MenuItem value={'fluent'}>4+</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <div className="input-container" id="description-textArea">
                            <Textarea aria-label="empty textarea" placeholder="Provide a brief description of your service" minRows={4} />
                        </div>
                    </Grid>
                    <Grid size={{xs:12}}>
                        <div className='multi-selection bottom-space'>
                            <Grid container>
                            <Grid size={{ xs: 12 }}>
                                    <p className="side-margin-left">Packages *</p>
                                </Grid>
                                 <Grid size={{ xs: 12, md: 2 }}>
                                    <div className="selection">

                                        <FormControl fullWidth sx={{ width: '100%', margin: 'auto', marginBottom: '30px' }} id="select-form-control">
                                            <InputLabel id="demo-simple-select-label" required>Package Tier</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value=''
                                                label="Package Tier"
                                        
                                            >
                                                <MenuItem value={'basic'}>Basic</MenuItem>
                                                <MenuItem value={'standard'}>Standard</MenuItem>
                                                <MenuItem value={'premium'}>Premium</MenuItem>
                                                
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Grid>
                                <Grid size={{xs:12,md:5}}>
                                    <div className="input-container align-more-right">
                                       <TextField fullWidth className="" label="Package" id="firstName" />

                                    </div>
                                </Grid>
                                <Grid size={{xs:12,md:3}}>
                                    <div className="input-container align-more-right">
                                       <TextField slotProps={
                                         {input:{startAdornment:`R` }}
                                       } fullWidth className="" type='number' label="Package Price" id="firstName"  required/>

                                    </div>
                                </Grid>
                                <Grid size={{ xs: 12, md: 2 }} >
                                    <div className="align-more-right">
                                    <Button variant='outlined'  sx={{ height: '55px', width: '90%', display: 'block', margin: 'auto' }} onClick={() => {}}>ADD</Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid size={{xs:12}}>
                        <div className='multi-selection bottom-space'>
                            <Grid container>
                            <Grid size={{ xs: 12 }}>
                                    <p className="side-margin-left">Package Inclusives *</p>
                                </Grid>
                                <Grid size={{xs:12,md:5}}>
                                    <div className="input-container side-margin-left">
                                       <TextField fullWidth className="" label="Item" id="firstName" />

                                    </div>
                                </Grid>
                                 <Grid size={{ xs: 12, md: 5 }}>
                                    <div className="selection side-margin-left">

                                        <FormControl fullWidth sx={{ width: '100%', margin: 'auto', marginBottom: '30px' }} id="select-form-control">
                                            <InputLabel id="demo-simple-select-label" required>Package</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value=''
                                                label="Package Tier"
                                        
                                            >
                                                <MenuItem value={'basic'}>Basic</MenuItem>
                                                <MenuItem value={'standard'}>Standard</MenuItem>
                                                <MenuItem value={'basic'}>Premium</MenuItem>
                                                <MenuItem value={'standard and premium'}>Standard And Premium</MenuItem>                                                <MenuItem value={'all packages'}>All Packages</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Grid>
                                <Grid size={{ xs: 12, md: 2 }} >
                                    <div>
                                    <Button variant='outlined'  sx={{ height: '55px', width: '90%', display: 'block', margin: 'auto' }} onClick={() => {}}>ADD</Button>
                                    </div>
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </ThemeProvider>
            </Grid>
        </div>
    )
}

export default ProfessionalDetails;