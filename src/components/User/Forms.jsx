import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl, FormLabel, Grid, TextField } from '@material-ui/core';

const initialValue = {
  id: 0,
  ridersFirstName:'',
  ridersLastName:'',
  ridersEmail:'',
  ridersPhone:'',
  ridersStreetAddress:'',
  ridersCityName:'',
  ridersCityZipCode:'',
  ridersState:'',
  ridersGender:'',
  riders:'',
  emergencyContactName:'',
  emergencyContactPhoneNumber:'',
  listAnyMedications:'',
  anyHistory:'',
  insuranceCompanyName:'',
  policyNumber:'',
  groupName:'',
  ibuprofenRelease:'yes',
  ridersName:'',
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MultiForm Control-root':{
      width: '80%',
      margin: theme.spacing(1),
      display: 'flex',
      flexWrap: 'wrap',
    }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

const Forms = ()=> {
  const [values, setValues] = useState(initialValue);
  const classes = useStyles();
  const handleInputChange=event=>{
    const { name, value } = event.target.property
    setValues({
      ...values,
      [name]:value
    })
  }
  return (
    <>
      <div className={classes.root}>
        <Grid container>
          
            <Grid item xs={6}>
              <TextField 
                id="standard-full-width"
                variant="outlined" 
                label="Full Name"
                name="Full Name"
                value={values.fullName}
                onChange={handleInputChange}
                style={{ margin: 8 }}
                placeholder="Placeholder"
                helperText="Full width!"
                fullWidthmargin="normal"
                InputLabelProps={{shrink: true,}}
              />
            </Grid>
            <Grid item xs={6}>
                <TextField
                  label="None"
                  id="margin-none"
                  defaultValue="Default Value"
                  className={classes.textField}
                  helperText="Some important text"
                />
            </Grid>
            <Grid item xs={6}>
              <TextField
                  label="Dense"
                  id="margin-dense"
                  defaultValue="Default Value"
                  className={classes.textField}
                  helperText="Some important text"
                  margin="dense"/>
            </Grid>
            <Grid item xs={6}>
              <TextField 
              label="Normal" 
              id="margin-normal" 
              defaultValue="Default Value" 
              className={classes.textField} 
              helperText="Some important text" 
              margin="normal"/>
              
            </Grid>
            <Grid>
              <FormControl>
                <FormLabel>Ibuprofen Release</FormLabel>
                  <RadioGroup 
                  row 
                  aria-label="Ibuprofen Release" 
                  name="Ibuprofen Release" 
                  value={values.ibuprofenRelease} 
                  onChange={handleInputChange}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />
                  </RadioGroup>
              </FormControl>
            </Grid>
        
        </Grid>
      </div>
    </>
  );
};
export default Forms;