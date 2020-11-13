import React, {useState} from 'react';
import AdminEmergencyCards from "./AdminEmergencyCards";
import AdminForms from "./AdminForms";
import AdminProfile from "./AdminProfile";
import TeamList from "./TeamList";
import { makeStyles } from '@material-ui/core/styles';
import { Breadcrumbs } from '@material-ui/core';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import RecentActorsIcon from '@material-ui/icons/RecentActors';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Avatar from 'react-avatar';
import { Switch, Route, Link } from 'react-router-dom';
import RiderCard from './RiderCard';
import styled from 'styled-components';

const BreadcrumbWrapper = styled.div`
    background-color: #FFBA00;
    width: 350px;
    border-radius: 0 7px 7px 0;
`;

const images = [
{
    url: '/adminProfile.jpg',
    title: 'Profile',
    width: '25%',
    href: '/admin/profile',
},
{
    url: '/adminTeamImage.jpg',
    title: 'Team',
    width: '25%',
    href: '/admin/team',
},
{
    url: '/adminDocumentInfo.jpg',
    title: 'Documents & Permissions',
    width: '25%',
    href: '/admin/userlist',
},
{
    url: '/emergencyCards.jpg',
    title: 'Emergency Cards',
    width: '25%',
    href: '/admin/emergencycards',
}
];

const useStyles = makeStyles((theme) => ({
    root: {
        color: '#E6EAF3',
        display: 'flex',
        flexWrap: 'wrap',
        minWidth: 300,
        width: '100%',
    },
    picButton: {
        dipslay: 'block'
    },
    image: {
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('xs')]: {
            width: '100% !important', // Overrides inline-style
            height: 100,
        },
        '&:hover, &$focusVisible': {
            zndex: 1,
            '& $imageBackdrop': {
                opacity: 0.15,
            },
            '& $imageMarked': {
                opacity: 0,
            },
            '& $imageTitle': {
                border: '4px solid currentColor',
            },
        },
    },
    link: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        marginRight: "5px",
        width: 20,
        height: 20,
    },
    focusVisible: {},
    imageButton: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: '5px 10px',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        margin: '5px 10px',
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    upload: {
        backgroundColor: '#E6EAF3',
        borderRadius: '30px',
        width: '210px'
    }
}));



const Admin = (props) =>  {
    const { user, setUser } = props;
    const classes = useStyles();
    const [profilePicture, setProfilePicture] = useState(user.avatarUrl)
    


    return (
        <>
        <Switch>
            <Route exact path="/admin">
                <div>
                <Avatar src={user.avatarUrl} name={user.firstName + ' ' + user.lastName}size="105" round />  
                
                <h1>Welcome {user.firstName}</h1>
                    <div className={classes.root}>
                        {images.map((image) => (
            <ButtonBase
            focusRipple
            key={image.title}
            className={classes.image}
            focusVisibleClassName={classes.focusVisible}
            style={{
                width: image.width,
            }}
            ><Link to={image.href}>
            <span
                className={classes.imageSrc}
                style={{
                backgroundImage: `url(${image.url})`,
                }}
            />
            <span className={classes.imageBackdrop} />
            <span className={classes.imageButton} >
                <Typography
                component="span"
                variant="subtitle1"
                color="inherit"
                className={classes.imageTitle}
                >
                {image.title}
                <span className={classes.imageMarked} />
                </Typography>
            </span>
            </Link>
            </ButtonBase>
            
        ))} </div>
            </div>
            </Route>
            <Route path="/admin/profile">
                <BreadcrumbWrapper>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link className={classes.link} to="/admin">
                        <HomeIcon className={classes.icon} />
                        Admin Home
                    </Link>
                    <Typography color="textPrimary">
                        <AccountCircleIcon className={classes.icon} />
                        Account Profile</Typography>
                    </Breadcrumbs>
                </BreadcrumbWrapper>
                <AdminProfile user={user} setUser={setUser} setProfilePicture={setProfilePicture} profilePicture={profilePicture}/>
            </Route>

            <Route path="/admin/team">
                <BreadcrumbWrapper>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link className={classes.link} to="/admin">
                        <HomeIcon className={classes.icon} />
                        Admin Home
                    </Link>
                    <Typography color="textPrimary">
                        <GroupIcon className={classes.icon} />
                        Team Members
                        </Typography>
                    </Breadcrumbs>
                </BreadcrumbWrapper>
                <TeamList />
            </Route>

            <Route path="/admin/userlist">
                <BreadcrumbWrapper>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link className={classes.link} to="/admin">
                        <HomeIcon className={classes.icon} />
                        Admin Home
                    </Link>
                    <Typography color="textPrimary">
                        <AssignmentIcon className={classes.icon} />
                        Documents and Forms
                        </Typography>
                    </Breadcrumbs>
                </BreadcrumbWrapper>
                <AdminForms user={user}/>
            </Route>

            <Route path="/admin/emergencycards">
                <BreadcrumbWrapper>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link className={classes.link} to="/admin">
                        <HomeIcon className={classes.icon} />
                        Admin Home
                    </Link>
                    <Typography color="textPrimary">
                        <RecentActorsIcon className={classes.icon} />
                        Emergency Cards
                        </Typography>
                    </Breadcrumbs>
                </BreadcrumbWrapper>
                <h1 className="removePrint">Emergency Cards</h1>
                <AdminEmergencyCards user={user}/>
            </Route>

            <Route path="/admin/rider/:id">
                <BreadcrumbWrapper>
                    <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
                    <Link className={classes.link} to="/admin">
                        <HomeIcon className={classes.icon} />
                        Admin Home
                    </Link>
                    <Link className={classes.link} to="/admin/team">
                        <GroupIcon className={classes.icon} />
                        Team Members
                    </Link>
                    <Typography color="textPrimary">
                        <PersonIcon className={classes.icon} />
                        Rider Profile
                        </Typography>
                    </Breadcrumbs>
                </BreadcrumbWrapper>
                <RiderCard />
            </Route>
        </Switch>
        </>
    );
}
export default Admin;
