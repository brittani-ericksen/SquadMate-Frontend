import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    gridRoot: {
        flexGrow: 1,
        justifyContent: "space-evenly",
    },
    cardRoot: {
        color: '#132143',
        margin: '0 auto',
        maxWidth: 345,
        paddingTop: '20px',
    },
    image: {
        height: "auto",
        margin: '0 auto',
        width: 200,
    },
    title: {
        margin: '15px 0 40px',
    },
    center: {
        margin: '0 auto',
    }
}));


const TeamList = () =>{
    const classes = useStyles();
    const[teamData, setTeamData] = useState([]);
    const[teamName, setTeamName] = useState([]);
    

    useEffect(() => {
        let teamId = '5fa2dd0998fe8fbfdf5eaac2';

        (async function() {
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/team/${teamId}/users`);
            const data = await response.json();
            setTeamData(data);
            const response2 = await fetch(`${process.env.REACT_APP_SERVER_URL}/team/${teamId}`);
            const data2 = await response2.json();
            setTeamName(data2);
        })();
        
    },[setTeamData])


    return (
        <>
        <Typography className={classes.title} variant='h3' component='h1'>
            Team {teamName.teamName}
        </Typography>
        <div className={classes.gridRoot}>
        <Grid container spacing={3}       
        >
        {teamData.map((mate) =>(
            <>
                    <Grid item className="center" xs={12} sm={9} md={6} lg={3} xl={3} >
                        <Card className={classes.cardRoot} >
                        <Avatar src={mate.avatarUrl} name={mate.parentForm.rider.firstName + ' ' + mate.parentForm.rider.lastName}size="105" round /> 
                            <CardContent>
                                <Typography gutterBottom
                                variant="h5"
                                component="h2">
                                    {mate.parentForm.rider.firstName} {mate.parentForm.rider.lastName}
                                </Typography>
                                <Typography variant="h6"
                                color="textSecondary"
                                component="p">
                                    Parent: 
                                </Typography>
                                <Typography varriant="body1"
                                color="textSecondary"
                                component="p">
                                    {mate.parentForm.parentOne.firstName} {mate.parentForm.parentOne.lastName}
                                </Typography>
                            </CardContent>
                            
                        </Card>
                    </Grid>    
                
                <p></p>
            </>
        ))}
        </Grid>
        </div>
    </>
    );
}

export default TeamList;
