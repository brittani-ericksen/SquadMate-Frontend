import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        textAlign: 'left',
        width: 500,
    },
    title: {
        fontSize: 14,
    },
});

function EmergencyCard(props) {
    const { user } = props;
    const classes = useStyles();

    return (
        <>
        {/* card components - display one for each member */}
            <Card className={classes.root} variant="outlined">
                <CardContent>
                <Typography className="title" component="h1">
                    Rider Name {user.firstName}
                </Typography>
                <Typography component="h2">
                    Emergency Contact Name: <br />
                    Emergency Contact Number:
                </Typography>
                <Typography component="p">
                    Medications and History:<br />
                    Ibuprofen Release:
                </Typography>
                <Typography component="p">
                    Insurance Company Name:<br />
                    Policy Number:<br />
                    Group Name:<br />
                </Typography>
                </CardContent>
            </Card>
        </>
    );
}

export default EmergencyCard;
