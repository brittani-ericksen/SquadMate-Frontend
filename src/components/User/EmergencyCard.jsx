import React from 'react';
import { Card, CardContent, Typography, TextField, RadioGroup, Radio, FormControl, FormControlLabel, FormLabel } from '@material-ui/core'
import { createMuiTheme, makeStyles } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';

const theme = createMuiTheme({
  status: {
    danger: orange[500],
  },
});

const useStyles = makeStyles({
  root: {
      flexGrow: 1,
      textAlign: 'left',
      width: 500,
  },
  title: {
      fontSize: 14,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function EmergencyCard() {
  const classes = useStyles();
  const [value, setValue] = React.useState('female');

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography>
        <form noValidate autoComplete="off">
          <TextField id="filled-basic" label="Rider's Name" variant="filled" />
          <TextField id="filled-basic" label="Emergency Contact Name" variant="filled" />
          <TextField id="filled-basic" label="Emergency Contact Phone Number" variant="filled" />
          <TextField id="filled-basic" label="Medications and History" variant="filled" />
          <TextField id="filled-basic" label="Insurance Company Name" variant="filled" />
          <TextField id="filled-basic" label="Policy Number" variant="filled" />
          <TextField id="filled-basic" label="Group Name" variant="filled" />
          <FormControl component="fieldset">
            <FormLabel component="legend">Ibuprofen Release</FormLabel>
            <RadioGroup aria-label="Ibuprofen Release" name="Ibuprofen Release" value={value} onChange={handleChange}>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
        </form>
        </Typography>
      </CardContent>
    </Card>
    </>
  )
}

export default EmergencyCard;
