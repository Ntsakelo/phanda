import Grid from '@mui/material/Grid2';
import './style.css';
import TextField from '@mui/material/TextField';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@mui/material';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect, useState } from 'react';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';



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

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const rows: { language: string, level: string }[] = [

];
const PersonalDetails = () => {
    const [language, setLanguage] = useState('');
    const [level, setLevel] = useState('');
    const [userRows, setUserRows] = useState<{ language: string, level: string }[]>();
    const [editValues, setEditValues] = useState<{ language: string, level: string } | null>();
    const [editIndex, setEditIndex] = useState<number>();

    useEffect(() => {
        setUserRows(userRows);
    }, [userRows]);

    useEffect(() => {
        setLanguage(editValues?.language!);
        setLevel(editValues?.level!);
    }, [editValues])

    const handleAddLanguage = () => {
        rows.push({ level, language });
        setUserRows(rows);
        setLanguage('');
        setLevel('');
    }

    const handleEdit = (row: number) => {
        if (userRows) {
            setEditValues(userRows[row]);
            setEditIndex(row);
        }
        else
            return;
    }
    const handleUpdate = () => {
        if (editIndex! >= 0 && userRows) {
            userRows[editIndex!] = { language, level };
            setUserRows(userRows);
            setLanguage('');
            setLevel('');
            setEditValues(null)
        }
    }
    const handleLanguageChange = (event: SelectChangeEvent) => {
        setLanguage(event.target.value as string);
    };

    const handleLevelChange = (event: SelectChangeEvent) => {
        setLevel(event.target.value as string);
    };


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
                        <h1 className="main-header">Personal Info</h1>
                        <p>Tell us a bit about yourself. This is a chance to let your potential buyers know you. This information will appear on your public profile</p>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <div className="profile-pic-upload">
                            <div className="upload">
                                <Button
                                    component="label"
                                    role={undefined}
                                    variant="contained"
                                    tabIndex={-1}
                                    sx={{ backgroundColor: "#fff", boxShadow: 'none', '&:hover': { boxShadow: 'none' } }}
                                >
                                    <CameraAltOutlinedIcon sx={{ color: '#7695FF' }} id="upload-icon" />
                                    <VisuallyHiddenInput
                                        type="file"
                                        onChange={(event) => console.log(event.target.files)}
                                        multiple
                                    />
                                </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className="input-container">
                            <TextField fullWidth label="First name" id="firstName" required />
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className="input-container align-right">
                            <TextField fullWidth label="Last name" id="lastName" required />
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className="input-container">
                            <TextField fullWidth label="Display Name" id="displayName" required />
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <div className="input-container align-right">
                            <TextField fullWidth label="Email address" id="email" required />
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <div className="input-container" id="description-textArea">
                            <Textarea aria-label="empty textarea" placeholder="Share a bit about your experience, the work that you have done, and area of expertise" minRows={4} />
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <div className="multi-selection">
                            <Grid container>
                                <Grid size={{ xs: 12 }}>
                                    <p className="side-margin-left">Language profeciency *</p>
                                </Grid>
                                <Grid size={{ xs: 12, md: 5 }}>
                                    <div className="language-selection">

                                        <FormControl fullWidth sx={{ width: '100%', margin: 'auto', marginBottom: '30px' }} id="select-form-control">
                                            <InputLabel id="demo-simple-select-label" required>Language</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={language}
                                                label="Language"
                                                onChange={handleLanguageChange}
                                            >
                                                <MenuItem value={'Afrikaans'}>Afrikaans</MenuItem>
                                                <MenuItem value={'English'}>English</MenuItem>
                                                <MenuItem value={'Isindebele'}>Isindebele</MenuItem>
                                                <MenuItem value={'Isizulu'}>Isizulu</MenuItem>
                                                <MenuItem value={'Sesotho'}>Sesotho</MenuItem>
                                                <MenuItem value={'Setswana'}>Setswana</MenuItem>
                                                <MenuItem value={'Tshivenda'}>Tshivenda</MenuItem>
                                                <MenuItem value={'Xhosa'}>Xhosa</MenuItem>
                                                <MenuItem value={'Xitsonga'}>Xitsonga</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Grid>
                                <Grid size={{ xs: 12, md: 5 }}>
                                    <div className="language-selection">
                                        <FormControl fullWidth sx={{ width: '100%', margin: 'auto', marginBottom: '30px' }} id="select-form-control">
                                            <InputLabel id="demo-simple-select-label" required>Language level</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={level}
                                                label="Language level"
                                                onChange={handleLevelChange}
                                            >
                                                <MenuItem value={'basic'}>Basic</MenuItem>
                                                <MenuItem value={'conversational'}>conversational</MenuItem>
                                                <MenuItem value={'fluent'}>Fluent</MenuItem>
                                                <MenuItem value={'native'}>Native/Bilingual</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Grid>
                                <Grid size={{ xs: 12, md: 2 }} >
                                    {!editValues && <Button variant='outlined' sx={{ height: '55px', width: '85%', display: 'block', margin: 'auto' }} onClick={handleAddLanguage}>ADD</Button>}
                                    {editValues && <Button variant='outlined' sx={{ height: '55px', width: '85%', display: 'block', margin: 'auto' }} onClick={handleUpdate}>UPDATE</Button>}
                                </Grid>
                                <Grid size={{ xs: 12 }}>
                                    {userRows && userRows.length > 0 && <TableContainer component={Paper}>
                                        <Table sx={{ minWidth: 650, width: '100%' }} aria-label="simple table">
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell align="center">Language</TableCell>
                                                    <TableCell align="center">Level</TableCell>
                                                    <TableCell align='center'>Action</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {userRows && userRows.map((row, i) => (
                                                    <TableRow
                                                        key={i}
                                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                    >
                                                        <TableCell component="th" scope="row" align='center'>
                                                            {row.language}
                                                        </TableCell>
                                                        <TableCell align="center">{row.level}</TableCell>
                                                        <TableCell align="center"><EditOutlinedIcon sx={{ cursor: 'pointer' }} onClick={() => handleEdit(i)} /></TableCell>
                                                    </TableRow>
                                                ))}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>}
                                </Grid>
                            </Grid>
                        </div>
                    </Grid>
                </ThemeProvider>
            </Grid>
        </div>
    )
}

export default PersonalDetails;