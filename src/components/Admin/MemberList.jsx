import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardActionArea, CardMedia, CardContent, Button, Typography, Grid } from '@material-ui/core';

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

const MemberList = () =>{
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
        <div className={classes.gridRoot}>
        <Grid container spacing={3}       
        >
        {teamData.map((mate) =>(
            <>
                    <Grid item className="center" xs={12} sm={9} md={6} lg={3} xl={3} >
                        <Card className={classes.cardRoot} >
                            <CardMedia
                                className={classes.image}
                                component="img"
                                image="/avatar-placeholder.png"
                                title={mate.firstName}
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    {mate.firstName} {mate.lastName}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    **** Additional info ****
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                View Profile
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

export default MemberList;
