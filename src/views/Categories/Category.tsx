import Grid from '@mui/material/Grid2';
import './style.css';
import { Outlet } from 'react-router-dom';
import Nav from '../../components/Nav';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import SelectOption from '../../components/Global/SelectOption';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import StarIcon from '@mui/icons-material/Star';
import profile from '../../images/pexels-sulimansallehi-1704488.jpg';

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1,
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0,
        },
    },
}));

const Category = () => {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };
    return (
        <div>
            <Nav />
            <Outlet />
            <Grid container>
                <Grid size={{ xs: 12, md: 4 }}>
                    <div className="category-section-filter">
                        <div className="filter-container">
                            <SelectOption />
                        </div>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <div className="category-section-filter">
                        <div className="filter-container">
                            <SelectOption />
                        </div>
                    </div>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }}>
                    <div className="category-section-filter">
                        <div className="filter-container">
                            <SelectOption />
                        </div>
                    </div>
                </Grid>
                <Grid size={{ xs: 12,sm:6, md: 4 }}>
                    <div className="category-member-profile">
                           <div className="avatar-container">
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt="Remy Sharp" src={profile}  id="avatar"/>
                            </StyledBadge>
                           </div>
                           <div className="member-details">
                              <p className="name">Ntsakelo M</p>
                               <p className="title">Software Engineer</p>
                               <p className='description'>I will develop a fully operating software that suites your needs.</p>
                               <p className="rating"><StarIcon id="rating-icon"/> 4.8 <span className="ratings-count">(20)</span></p>
                               <p className='start-price'>FROM R200</p>
                           </div>
                           <div className="action">
                              <button className='main-cta more-cta'>See More</button>
                           </div> 
                    </div>
                </Grid>
                <Grid size={{ xs: 12,sm:6, md: 4 }}>
                    <div className="category-member-profile">
                           <div className="avatar-container">
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt="Remy Sharp" src={profile}  id="avatar"/>
                            </StyledBadge>
                           </div>
                           <div className="member-details">
                              <p className="name">Ntsakelo M</p>
                               <p className="title">Software Engineer</p>
                               <p className='description'>I will develop a fully operating software that suites your needs.</p>
                               <p className="rating"><StarIcon id="rating-icon"/> 4.8 <span className="ratings-count">(20)</span></p>
                               <p className='start-price'>FROM R200</p>
                           </div>
                           <div className="action">
                              <button className='main-cta more-cta'>See More</button>
                           </div> 
                    </div>
                </Grid>
                <Grid size={{ xs: 12,sm:6, md: 4 }}>
                    <div className="category-member-profile">
                           <div className="avatar-container">
                            <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                                variant="dot"
                            >
                                <Avatar alt="Remy Sharp" src={profile}  id="avatar"/>
                            </StyledBadge>
                           </div>
                           <div className="member-details">
                              <p className="name">Ntsakelo M</p>
                               <p className="title">Software Engineer</p>
                               <p className='description'>I will develop a fully operating software that suites your needs.</p>
                               <p className="rating"><StarIcon id="rating-icon"/> 4.8 <span className="ratings-count">(20)</span></p>
                               <p className='start-price'>FROM R200</p>
                           </div>
                           <div className="action">
                              <button className='main-cta more-cta'>See More</button>
                           </div> 
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Category;