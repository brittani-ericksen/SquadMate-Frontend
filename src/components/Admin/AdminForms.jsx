import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Container, Typography } from '@material-ui/core';
import PermissionsComponent from './PermissionsComponent';
import Documents from './Documents';
import styled from 'styled-components';

const Section = styled.div`
    background-color: white;
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
const PermTitle = styled.div`
    background-color:  #D60808;
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
        borderRadius: '7px',
        color: '#132143',
        width: 400,
        margin: '5px',
        marginTop: '20px',
    },
    permissionsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #000',
        padding: '5px',
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
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/team/${user.team}/users`);
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
                            <Section>
                                <Title>
                                    <h4>Riders missing forms</h4>
                                </Title>
                                <ul>
                                    {teamMembers.filter(member => !member.emergencyFormDone).map(member => {
                                    return (<li key={member._id}>{member.firstName}</li>)
                                    })}
                                </ul>
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
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                            <Section>
                                <Title>
                                    <h3>Forms</h3>
                                </Title>
                                <Documents user={user}/>
                            </Section>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <Container className={classes.permissions}>
                <Section>
                <PermTitle><h3>Permissions</h3></PermTitle>
                <div className={classes.permissionsHeader}><
                    h4>Member</h4><h4>Is Admin</h4>
                </div>
                {teamMembers.map(member => (
                    <PermissionsComponent key={member._id} member={member} />
                ))}
                </Section>
            </Container>
        </>
    );
}

export default AdminForms;