import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'left',
        color: theme.palette.text.secondary,
    },
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
                        <button>Send form reminder email</button>

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
                        Forms 
                        <ul>
                            <li>Form</li>
                        </ul>
                        <button>View/Edit form</button>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default AdminForms;