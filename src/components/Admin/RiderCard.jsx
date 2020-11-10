import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from 'react-avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button, Typography, Grid } from '@material-ui/core';


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


const RiderCard = (props) =>{
    const classes = useStyles();
    const { mate } = props;
    
    
    return (
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
        </Card>
    )
}
export default RiderCard;