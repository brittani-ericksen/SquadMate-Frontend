import React, {useState} from 'react';
import {TextField, Container, Button} from '@material-ui/core';
import Avatar from 'react-avatar';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import UploadPhoto from './UploadPhoto';


const useStyles = makeStyles((theme) => ({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50ch',
      },
    },
    form: {
      display: 'flex',
      alignItems: 'center'
    },
    marginTop: {
      marginTop: '4rem'
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
    let githubPic = profilePicture === "" ? user.github : '';
    console.log(profilePic)


    return (
        <>
            <div>
                {/* upload profile pic */}
                <Avatar githubHandle={githubPic} src={profilePic} size="105" round />
                <Container>
                {!!updateProfilePicture ? <UploadPhoto user={user} setUser={setUser} setProfilePicture={setProfilePicture} setUpdateProfilePicture={setUpdateProfilePicture}/> : (<Button className={classes.picButton} onClick={setUpdateProfilePicture}>Change Profile Pic</Button>)} 
                </Container>      
                <form onSubmit={e => _handleSubmit(e)}>
        <Container component='AdminInformation'>
            <h2>User Information</h2>
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
                label="Admin last Name"
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
        </Container>
        <Button size="large" variant="contained" className={classes.margin} color="primary" type="submit">
          Save 
        </Button>
                </form>
            </div>
            
        </>
    );
}

export default AdminProfile;
