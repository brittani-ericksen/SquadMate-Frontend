import React, { useEffect, useState } from 'react';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';



const useStyles = makeStyles((theme) => ({
    gridRoot: {
        flexGrow: 1,
        justifyContent: "space-evenly",
    },
    cardRoot: {
        backgroundColor: 'white',
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
    center: {
        margin: '0 auto',
    }
}));



const TeamList = () =>{
    const classes = useStyles();
    const[teamData, setTeamData] = useState([]);
    

    useEffect(() => {
        let teamId = '5fa2dd0998fe8fbfdf5eaac2';

        (async function() {
            const response = await fetch(`http://localhost:3333/team/${teamId}/users`);
            const data = await response.json();
            setTeamData(data);
        })();
        
    },[setTeamData])


    return (
        <>
        <Typography variant="h2">
            Team
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
                            <CardActions>
                                <Button size="small"
                                color="primary"
                                >
                                    <Link to={`/admin/rider/${mate._id}`}>
                                View Profile
                                </Link>
                                </Button>
                                
                                <Button size="small"
                                color="primary"
                                >
                                    <Link to={`/getCardInfo/${mate._id}`}>
                                    View Emergency Card
                                    </Link>
                                
                                </Button>
                            </CardActions>
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
