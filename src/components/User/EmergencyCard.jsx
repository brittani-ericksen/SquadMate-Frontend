import React from 'react';
import { Card, CardContent, Typography, TextField, RadioGroup, Radio, FormControlLabel,  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
      textAlign: 'left',
      width: 500,
  },
  title: {
      fontSize: 14,
  },
});

function EmergencyCard() {
  const classes = useStyles();
  return (
    <>
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <form noValidate autoComplete="off">
          <TextField id="filled-basic" label="Rider's Name" variant="filled" />
          <TextField id="filled-basic" label="Emergency Contact Name" variant="filled" />
          <TextField id="filled-basic" label="Emergency Contact Phone Number" variant="filled" />
          <TextField id="filled-basic" label="Medications and History" variant="filled" />
          <TextField id="filled-basic" label="Insurance Company Name" variant="filled" />
          <TextField id="filled-basic" label="Policy Number" variant="filled" />
          <TextField id="filled-basic" label="Group Name" variant="filled" />
          <RadioGroup aria-label="Ibuprofen Release" name="Ibuprofen Release" value="" onChange="">
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
          </RadioGroup>
        </form>
      </CardContent>
    </Card>
    </>
  )
}

export default EmergencyCard;
