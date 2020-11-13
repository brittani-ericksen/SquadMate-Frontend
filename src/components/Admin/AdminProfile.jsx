import React, {useState} from 'react';
import { Typography, TextField, Container, Button } from '@material-ui/core';
import Avatar from 'react-avatar';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import UploadPhoto from './UploadPhoto';

const Wrapper = styled.div`
    border-radius: 5px;
    margin: 0 auto;
    max-width: 1000px;
    padding-top: 5px;
    margin-top: 15px;
`;

const Section = styled.div`
    background-color: white;
    border-radius: 7px;
    margin: 30px;
`;

const Title = styled.div`
    background-color:  #223F84;
    color: white;
    border-radius: 7px 7px 0 0;
    padding: 0 7px;
    margin: 0;
`;

const Detail = styled.div`
    padding: 5px 20px;
`;

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '40ch',
        
        },
    },
    form: {
        display: 'flex',
        alignItems: 'center'
    },
    margin: {
        marginTop: '2rem',
        marginBottom: '20px',
    },
    upload: {
        backgroundColor: 'white',
        borderRadius: '15px',
        width: '210px',
    }
}));

const AdminProfile = (props) =>{
    const { user, setUser, setProfilePicture, profilePicture } = props;

    const classes = useStyles();
    const history = useHistory();

    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [cellPhone, setCellPhone] = useState(user.phone.cell);
    const [email, setEmail] = useState(user.email);

    const [updateProfilePicture, setUpdateProfilePicture] = useState(false);
    


    const _handleFirstName = input => {
        setFirstName(input);
    }

    const _handleLastName = input => {
        setLastName(input);
    }

    const _handleCellPhone = input => {
        setCellPhone(input);
    }

    const _handleEmail = input => {
        setEmail(input);
    }

    const _handleSubmit = async(e) => {
        e.preventDefault();
        let data = { 
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: {
                cell: cellPhone
            }
        }
        const response = await fetch(`http://localhost:3333/user/update/${user._id}`, {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(data)
        });

        const resdata = await response.json();
        setUser(resdata);
        history.push('/admin');
    }

    let profilePic = profilePicture === "" ? null : profilePicture;
    let initials = profilePicture === "" ? (user.firstName + ' ' + user.lastName)  : '';

    return (
        <>
        <Typography variant="h2">
            Profile
        </Typography>

            <div className={classes.root}>
                {/* upload profile pic */}
                <Avatar src={user.avatarUrl} name={user.firstName + ' ' + user.lastName}size="105" round /> 
                <Container className={classes.upload}>
                {!!updateProfilePicture ? <UploadPhoto user={user} setUser={setUser} setProfilePicture={setProfilePicture} setUpdateProfilePicture={setUpdateProfilePicture}/> : (<Button className={classes.picButton} onClick={setUpdateProfilePicture}>Change Profile Pic</Button>)} 
                </Container>      
                <form onSubmit={e => _handleSubmit(e)}>

<Wrapper>
        <Container component='AdminInformation'>
            <Section>
            <Title>
            <h2>User Information</h2>
            </Title>
            <Detail>
            <TextField
                required
                id="adminFirstName"
                label="Admin First Name"
                defaultValue={firstName}
                variant="outlined"
                onChange={e => _handleFirstName(e.target.value)}
            />
            <TextField
                required
                id="adminLastName"
                label="Admin Last Name"
                defaultValue={lastName}
                variant="outlined"
                onChange={e => _handleLastName(e.target.value)}
            />
            <TextField
                required
                id="email"
                label="Admin Email"
                defaultValue={email}
                variant="outlined"
                onChange={e => _handleEmail(e.target.value)}
            />
            <TextField
                id="adminCellPhone"
                label="Admin Cell Phone"
                defaultValue={cellPhone}
                variant="outlined"
                onChange={e => _handleCellPhone(e.target.value)}
            />
            </Detail>
            
            </Section>
        </Container>
        <Button size="large" variant="contained" className={classes.margin} color="primary" type="submit">
                Save 
            </Button>

            </Wrapper>
                </form>
    
            </div>
            
        </>
    );
}

export default AdminProfile;
