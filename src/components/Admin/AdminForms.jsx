import React from 'react';
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

const AdminForms = () =>{
    const classes = useStyles();

    return (
        <>
            <div className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <Paper className={classes.paper}>
                        <p>Riders missing forms</p>
                        <ul>
                            <li>rider name</li>
                        </ul>
                        <button>Send form reminder email</button>

                        <p>Riders with all forms submitted</p>
                        <ul>
                            <li>rider name</li>
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