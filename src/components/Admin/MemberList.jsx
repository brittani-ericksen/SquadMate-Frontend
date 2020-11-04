import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardActionArea, CardMedia, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

const MemberList = () =>{
    const classes = useStyles();

    return (
        <>
            {/* card components - map through each member - infintie scrolling */}
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image="../../public/avatar-placeholder.png"
                        title="Contemplative Reptile"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Name
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
                </CardActionArea>
            </Card>
        </>
    );
}

export default MemberList;
