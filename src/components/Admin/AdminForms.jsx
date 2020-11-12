import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Container, Button, Typography } from '@material-ui/core';
import PermissionsComponent from './PermissionsComponent';
import Documents from './Documents';
import styled from 'styled-components';

const Section = styled.div`
    background-color: white;
    //border: 1px solid lightgray;
    border-radius: 7px;
    padding-bottom: 5px;
`;
const Title = styled.div`
    background-color:  #223F84;
    color: white;
    border-radius: 7px 7px 0 0;
    padding: 0 7px;
    margin: 0;
`;

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        backgroundColor: '#132143',
        textAlign: 'left',
        color: '#132143',
        margin: '5px',
    },
    picButton: {
        display: 'block',
        margin: 'auto'
    },
    permissions: {
        backgroundColor: 'white',
        borderRadius: '5px',
        color: '#132143',
        width: 400,
        margin: '5px',
        marginTop: '20px',
        padding: '10px 10px 10px 10px'
    },
    permissionsTitle: {
        backgroundColor: '#D60808',
        borderRadius: '7px 7px 0 0',
        color: 'white',
        padding: '5px'
    },
    permissionsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #000'
    },
    button: {
        color: '#D60808',
    }
}));

const AdminForms = ({user}) =>{
    const classes = useStyles();
    const [teamMembers, setTeamMembers] = useState([]);
    
    useEffect(() => {
        (async function(){
            const response = await fetch(`http://localhost:3333/team/${user.team}/users`);
            const data = await response.json();
            setTeamMembers(data);
        })();
    }, [setTeamMembers, user]);
    

    return (
        <>
            <Typography variant="h2">
                Documents and Permissions
            </Typography>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
<<<<<<< HEAD
                            <Section>
                                <Title>
                                    <h4>Riders missing forms</h4>
                                </Title>
                                <ul>
                                    {teamMembers.filter(member => !member.emergencyFormDone).map(member => {
                                    return (<li key={member._id}>{member.firstName}</li>)
                                    })}
                                </ul>
                                <Button className={classes.button}>
                                    Send form reminder email
                                </Button>
                            </Section>
                            <br />
                            <Section>
                                <Title>
                                    <h4>Riders with all forms submitted</h4>
                                </Title>
                                <ul>
                                    {teamMembers.filter(member => member.emergencyFormDone).map(member => {
                                        return (<li key={member._id}>{member.firstName}</li>)
                                    })}
                                </ul>
                            </Section>
=======
                        <p>Riders missing forms</p>
                        <ul>
                            {teamMembers.filter(member => !member.emergencyFormDone).map(member => {
                                return (<li key={member._id}>{member.firstName}</li>)
                            })}
                        </ul>

                        <p>Riders with all forms submitted</p>
                        <ul>
                            {teamMembers.filter(member => member.emergencyFormDone).map(member => {
                                return (<li key={member._id}>{member.firstName}</li>)
                            })}
                        </ul>
>>>>>>> fef690676d40f03082be4106fabcbf4720c0ee75
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Section>
                                <Title>
                                    <h2>Forms</h2>
                                </Title>
                                <Documents user={user}/>
                            </Section>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <Container className={classes.permissions}>
                <h3 className={classes.permissionsTitle}>Permissions</h3>
                <div className={classes.permissionsHeader}><
                    h4>Member</h4><h4>Is Admin</h4>
                </div>
                {teamMembers.map(member => (
                    <PermissionsComponent key={member._id} member={member} />
                ))}
            </Container>
        </>
    );
}

export default AdminForms;