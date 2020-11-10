import React, { useEffect, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';
import RiderCard from './RiderCard';


const useStyles = makeStyles((theme) => ({
    gridRoot: {
        flexGrow: 1,
        justifyContent: "space-evenly",
    },
    cardRoot: {
        margin: '0 auto',
        maxWidth: 345,
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
        <Switch>
          <Route path="/admin/team">
        <div className={classes.gridRoot}>
        <Grid container spacing={3}       
        >
        {teamData.map((mate) =>(
            <>
                    <Grid item className="center" xs={12} sm={9} md={6} lg={3} xl={3} >
                        <Card className={classes.cardRoot} >
                        <Avatar githubHandle={mate.github} src="/avatar-placeholder.png" size="105" round /> 
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
                                <Link to="/admin/rider">
                                  <Button size="small"
                                  color="primary" >
                                  View Profile
                                  </Button>
                                </Link>
                                
                                <Button size="small"
                                color="primary"
                                href={`/getCardInfo/${mate._id}`}>
                                View Emergency Card
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>    
                
                <p></p>

                
            </>
        ))}
        </Grid>
        </div>
        </Route>
    <Route path="/admin/rider">
    <h1>Forms</h1>
    <RiderCard mate={mate}/>
</Route>
</Switch>
</>
    );
}

export default TeamList;
