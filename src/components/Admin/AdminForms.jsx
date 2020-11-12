import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Container } from '@material-ui/core';
import PermissionsComponent from './PermissionsComponent';
import Documents from './Documents';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
    picButton: {
        display: 'block',
        margin: 'auto'
    },
    permissions: {
        width: 400
    },
    permissionsHeader: {
        display: 'flex',
        justifyContent: 'space-between',
        borderBottom: '1px solid #000'
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
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
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
                        </Paper>
                    </Grid>

                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                    <Documents user={user}/>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
            <Container className={classes.permissions}>
                <h2>Permissions</h2>
                <div className={classes.permissionsHeader}><h4>Member</h4><h4>Is Admin</h4></div>
                {teamMembers.map(member => (
                    <PermissionsComponent key={member._id} member={member} />
                ))}
            </Container>
        </>
    );
}

export default AdminForms;