import { useState } from 'react';
import Grid from '@mui/material/Grid2';
import './style.css';
import Nav from '../../components/Nav';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import StarIcon from '@mui/icons-material/Star';
import profile from '../../images/pexels-sulimansallehi-1704488.jpg';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Rating from '@mui/material/Rating';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Theme from '../../utils/Theme';
import { ThemeProvider } from '@mui/material';
import Divider from '@mui/material/Divider';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';
import ClearIcon from '@mui/icons-material/Clear';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CardActions from '@mui/material/CardActions';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import moment from 'moment';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import useFetch from '../../utils/useFetch';



import photoshoot1 from '../../images/photoshoot1.jpg';
import photoshoot2 from '../../images/photoshoot2.jpg';
import photoshoot3 from '../../images/photoshoot3.jpg';
import photoshoot4 from '../../images/photoshoot4.jpg';
import photoshoot5 from '../../images/photoshoot5.jpg';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

type Package = 'Basic' | 'Standard' | 'Premium'

interface PackageData {
    package: Package
    package_userDefinedName: string,
    package_description: string,
    package_price: number,
    package_details: string[]
}

const rows: PackageData[] = [{ package: 'Basic', package_userDefinedName: 'BRONZE', package_description: '1 HQ logo concept + HD JPG and Transparent PNG', package_details: ['Logo transparency', 'Printable file', '3D mockup'], package_price: 374.00 }, { package: 'Standard', package_userDefinedName: 'GOLD', package_description: '2 HQ logo concepts + HD JPG and Transparent PNG + Vector Source files(Ai, EPS, PDF)', package_details: ['Logo transparency', 'Printable file', '3D mockup', 'Source file', 'Vector file'], package_price: 790.00 }, { package: 'Premium', package_userDefinedName: 'PLATINUM', package_description: '3 HQ logo concepts + JPG & PNG + Vector Source files + Social Media Kit', package_details: ['Logo transparency', 'Printable file', '3D mockup', 'Source file', 'Social media kit', 'Vector file'], package_price: 1280.00 }];

const date = new Date();
const dataObject = {
    packageData: rows,
    service_provider: {
        name: 'Ntsakelo',
        email: 'Ntsakelo@gmail.com',
        location: 'Limpopo, Louis Trichardt'
    },
    FAQS: [{ question: 'When is a vector file?', response: 'This is fully scalable, editable file' }, { question: 'when will i get my items', response: 'Items are usually delivered within 4 days of order' }, { question: 'Can i make a custom order', response: 'Currently we cannot process costum orders' }],
    reviews: [{ user: { name: 'Rodney', location: 'Limpopo' }, rating: 4.5, feedback: 'I really loved the services provided by Ntsakelo. He understood my request and acted quickly with accuracy. I would definitely recommend his services to anyone who is interested', response: 'Thank you Rodney. I really take pleasure in providing the best service.' }, { user: { name: 'Sibusiso', location: 'Gauteng' }, rating: 3.7, feedback: 'Ntsakelo\'s service was not bad at all. I know that there is room for improvement. He delivered in time but with less precision to what I expected. Overall he is great to work with. I will consider giving him another try', response: '' }]
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme }) => ({
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    variants: [
        {
            props: ({ expand }) => !expand,
            style: {
                transform: 'rotate(0deg)',
            },
        },
        {
            props: ({ expand }) => !!expand,
            style: {
                transform: 'rotate(180deg)',
            },
        },
    ],
}));


const Profile = () => {
    const [errorMessage,result] = useFetch('profile');
    console.log(result)
    //const swiper = useSwiper();
    const [value, setValue] = useState(0);
    const [sticky, setSticky] = useState(false);
    const [expanded, setExpanded] = useState(false);
    console.log(date);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    window.addEventListener('scroll', () => {
        if (window.scrollY >= 160) {
            setSticky(true);
        } else {
            setSticky(false);
        }

    })

    const serviceDeliverables = () => {
        const deliverables: string[] = []
        rows.forEach(item => {
            item.package_details.forEach(item => {
                if (deliverables.indexOf(item) < 0) {
                    deliverables.push(item);
                }
            })
        })

        return deliverables;
    }

    const deliverables = serviceDeliverables();
    return (
        <div>
            <Nav />
            <div className="profile-details">
                <Grid container>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <div className="profile-description">
                            <div className="intro-title">
                                <p>I will capture the best memories based on your ideas and interests</p>
                            </div>
                            <CardHeader
                                avatar={
                                    <Avatar src={profile} sx={{ bgcolor: '#000' }} id="profile-avatar" aria-label="recipe">
                                        R
                                    </Avatar>
                                }
                                title={<p className="profile-name" id="profile-name">Ntsakelo Makhuvele</p>}
                                subheader={<p className="rating" id="rating"><StarIcon id="rating-icon" /> 4.8 <span className="ratings-count">(20)</span></p>}
                            />
                            <div className="pictures">
                                <Swiper
                                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                                    navigation
                                    pagination={{ clickable: true }}
                                    slidesPerView={1}
                                    style={{ height: '100%' }}

                                >
                                    <SwiperSlide style={{ textAlign: 'center', height: '100%' }}>
                                        <img src={photoshoot1} alt="slide illustrations" className="slide-img" />
                                    </SwiperSlide>
                                    <SwiperSlide style={{ textAlign: 'center', height: '100%' }}>
                                        <img src={photoshoot2} alt="slide illustrations" className="slide-img" />
                                    </SwiperSlide>
                                    <SwiperSlide style={{ textAlign: 'center', height: '100%' }}>
                                        <img src={photoshoot3} alt="slide illustrations" className="slide-img" />
                                    </SwiperSlide>
                                    <SwiperSlide style={{ textAlign: 'center', height: '100%' }}>
                                        <img src={photoshoot4} alt="slide illustrations" className="slide-img" />
                                    </SwiperSlide>
                                    <SwiperSlide style={{ textAlign: 'center', height: '100%' }}>
                                        <img src={photoshoot5} alt="slide illustrations" className="slide-img" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <div className="reviews-slide">
                                <h3 className="main-head text-left-margin">What people are saying about Ntsakelo's service</h3>
                                <div className="reviews-container">
                                    <Swiper
                                        modules={[Navigation]}
                                        navigation={{ nextEl: '.nextBtn', prevEl: '.prevBtn' }}
                                        pagination={{ clickable: true }}
                                        slidesPerView={1}
                                        rewind={true}
                                    >
                                        <SwiperSlide>
                                            <CardHeader
                                                avatar={
                                                    <Avatar src={profile} sx={{ bgcolor: '#000' }} id="profile-reviews-avatar" aria-label="recipe">
                                                        R
                                                    </Avatar>
                                                }
                                                title={<p className="profile-name" id="reviewer-name">Ntsakelo Makhuvele</p>}
                                                subheader={<Rating name="read-only" sx={{ color: '#000' }} value={4.5} readOnly precision={0.5} />}
                                            />
                                            <p className="review">Words cannot begin to describe the level of satisfaction and excitement of the service i received from Ntsakelo. My wife and I are happy with the quality of work that Ntsakelo produced on our wedding. If you need quality pictures, don't hesitate!!!</p>

                                        </SwiperSlide>
                                        <SwiperSlide>
                                            <CardHeader
                                                avatar={
                                                    <Avatar sx={{ bgcolor: '#000' }} id="profile-reviews-avatar" aria-label="recipe">
                                                        R
                                                    </Avatar>
                                                }
                                                title={<p className="profile-name" id="reviewer-name">Ntsakelo Makhuvele</p>}
                                                subheader={<Rating name="read-only" sx={{ color: '#000' }} value={4.5} readOnly precision={0.5} />}
                                            />
                                            <p className="review">Words cannot begin to describe the level of satisfaction and excitement of the service i received from Ntsakelo. My wife and I are happy with the quality of work that Ntsakelo produced on our wedding. If you need quality pictures, don't hesitate!!!</p>

                                        </SwiperSlide>
                                    </Swiper>
                                </div>
                                <div className="controllers-container">
                                    <ArrowBackIosIcon className="prevBtn" />
                                    <ArrowForwardIosIcon className="nextBtn" />
                                </div>
                            </div>
                            <div className="service-description">
                                <h3 className="main-head text-left-margin">About our services</h3>
                                <p>Hi, Lorem ipsum dolor sit amet consectetur adipisicing elit. Et facilis asperiores vitae ipsa voluptatem amet eos nemo impedit rerum excepturi deserunt eum necessitatibus atque, voluptate alias quam commodi minus ab, tenetur totam maxime sequi? Asperiores possimus quibusdam ab obcaecati repellendus est dicta velit veniam! Ut exercitationem architecto sequi inventore ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, harum accusantium quos adipisci laudantium ullam reiciendis neque facilis cumque repellendus reprehenderit distinctio odit aliquid qui necessitatibus quasi exercitationem totam vitae animi ipsam aliquam natus, libero ducimus. Laudantium porro similique dicta quae, debitis dolorem sit natus fuga! Cupiditate corporis, sapiente laudantium sequi cum qui. Modi error nihil, voluptatibus animi odio laudantium velit doloribus exercitationem voluptates debitis vel voluptatem vitae facilis fuga est in. Voluptatibus animi doloribus saepe a consequuntur eveniet cumque iusto nesciunt, explicabo dolor temporibus recusandae quos officia sit, cupiditate ab, facere pariatur reprehenderit aliquid dolore ducimus officiis? Nisi, aut?</p>
                            </div>
                            <div className="preference-notice">
                                <h1 className='notice-head'><InfoIcon id="info-icon" />Delivery Of Service</h1>
                                <p>We strongly advice you to speak to the service provider about the delivery of the service and if they are able to reach your area before processing any payment</p>
                            </div>
                            <div className="about-service-provider">
                                <h3 className="main-head text-left-margin" id="about-head">Get to know Ntsakelo Makhuvele</h3>
                                <CardHeader
                                    avatar={
                                        <Avatar src={profile} sx={{ bgcolor: '#000' }} id="about-profile-avatar" aria-label="recipe">
                                            R
                                        </Avatar>
                                    }
                                    title={<div><p className="profile-name" id="about-profile-name">Ntsakelo Makhuvele</p>  <p className="profile-title">Artistic And Creative</p></div>}
                                    subheader={<p className="overall-rating"><Rating name="read-only" sx={{ color: '#000' }} value={4.5} readOnly precision={0.5} /><span className='reviewers-count'>(149)</span></p>}
                                />
                                <button className="secondary-cta" id="contact-me-cta">Contact Me</button>
                                <div className="about-me-section">
                                    <Grid container>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <p className="about-text-main">From</p>
                                            <p className="about-text-secondary">Louis Trichardt</p>
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <p className="about-text-main">Member since</p>
                                            <p className="about-text-secondary">Jan 2024</p>
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <p className="about-text-main">Avg. response time</p>
                                            <p className="about-text-secondary">1 hour</p>
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <p className="about-text-main">Last delivery</p>
                                            <p className="about-text-secondary">About 28 minutes</p>
                                        </Grid>
                                        <Grid size={{ xs: 12, sm: 6 }}>
                                            <p className="about-text-main">Languages</p>
                                            <p className="about-text-secondary">English</p>
                                        </Grid>
                                    </Grid>
                                    <Divider />
                                    <p className="about-me-description">Welcome to my profile! My name is Ntsakelo. I am a full time photographer. I enjoy capturing special moments for my clients and i do it with passion and care. Please leave a message for me.</p>
                                </div>
                            </div>
                            <div id="package-section">
                                <h3 className="main-head text-left-margin">Compare packages</h3>
                                <TableContainer component={Paper}>
                                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell align='center'>Package</TableCell>
                                                {rows && rows.map(item => (
                                                    <TableCell align="center">{`ZAR ${item.package_price}`} <br /> {item.package} <br />{item.package_userDefinedName} <br /> {item.package_description}</TableCell>
                                                ))}

                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {deliverables && deliverables.map((item, i) => (
                                                <TableRow
                                                    key={i}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row" align='center'>
                                                        {item}
                                                    </TableCell>
                                                    <TableCell align='center'>
                                                        {rows[0].package_details.indexOf(item) >= 0 ? <DoneIcon /> : <ClearIcon />}
                                                    </TableCell>
                                                    <TableCell align='center'>
                                                        {rows[1].package_details.indexOf(item) >= 0 ? <DoneIcon /> : <ClearIcon />}
                                                    </TableCell>
                                                    <TableCell align='center'>
                                                        {rows[2].package_details.indexOf(item) >= 0 ? <DoneIcon /> : <ClearIcon />}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>
                            <div>
                                <h3 className="main-head text-left-margin">FAQ</h3>
                                {dataObject && dataObject.FAQS.map(item => (
                                    <Accordion>
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1-content"
                                            id="panel1-header"
                                        >
                                            {item.question}
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {item.response}
                                        </AccordionDetails>
                                    </Accordion>
                                ))}
                            </div>
                            <div>
                                <h3 className="main-head text-left-margin">Reviews</h3>
                                {dataObject && dataObject.reviews.map(item => (
                                  <div>
                                    <div className="customer-review">
                                        <CardHeader
                                            avatar={
                                                <Avatar src='' sx={{ bgcolor: '#000' }} id="profile-reviews-avatar" aria-label="recipe">
                                                    {item.user.name.slice(0, 1).toUpperCase()}
                                                </Avatar>
                                            }
                                            title={<p className="profile-name" id="reviewer-name">{item.user.name}</p>}
                                            subheader={item.user.location}
                                        />
                                        <Divider />
                                        <Rating name="read-only" sx={{ color: '#000', mt: '10px', mb: '10px', ml: '15px' }} value={item.rating} readOnly precision={0.5} />
                                        <p className="text-left-margin">{moment('Sat Aug 03 2024 20:13:05 GMT+0200 (South Africa Standard Time)').fromNow()}</p>
                                        <p className="review">{item.feedback}</p>
                                        {item.response && <div>
                                            <Divider />
                                            <CardActions disableSpacing>
                                                <IconButton aria-label="seller_avatar" sx={{ '&:hover': { backgroundColor: '#fff' } }} onClick={handleExpandClick}>
                                                    <CardHeader
                                                        avatar={
                                                            <Avatar src={profile} sx={{ bgcolor: '#000' }} id="profile-reviews-avatar" aria-label="recipe">
                                                                R
                                                            </Avatar>
                                                        }
                                                        title={<p className="profile-name" id="reviewer-name">Seller's Response</p>}
                                                    />
                                                </IconButton>
                                                <ExpandMore
                                                    expand={expanded}
                                                    onClick={handleExpandClick}
                                                    aria-expanded={expanded}
                                                    aria-label="show more"
                                                >
                                                    <ExpandMoreIcon />
                                                </ExpandMore>
                                            </CardActions>
                                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                                <p className="seller-response">{item.response}</p>
                                            </Collapse>
                                        </div>}
                                    </div>
                                      <p className='text-left-margin'>Helpful? <span className="review-upvote"><ThumbUpOffAltIcon sx={{position:'relative',top:'5px'}}/> Yes</span> <span className='review-downvote'><ThumbDownOffAltIcon sx={{position:'relative',top:'5px'}}/> No</span></p>
                                  </div>

                                ))}
                            </div>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, md: 5 }} id="desktop-view-package-details">
                        <div className={`pricing-details ${sticky ? 'sticky' : ''}`}>
                            <ThemeProvider theme={Theme}>
                                <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    variant="scrollable"
                                    scrollButtons={false}
                                    aria-label="scrollable prevent tabs example"
                                    textColor={'primary'}
                                >
                                    <Tab label="Basic" sx={{ width: '33.33%' }} />
                                    <Tab label="Standard" sx={{ width: '33.33%' }} />
                                    <Tab label="Premium" sx={{ width: '33.33%' }} />
                                </Tabs>

                            </ThemeProvider>
                            {/* <Link to="#package-section">Compare packages</Link> */}
                        </div>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Profile;