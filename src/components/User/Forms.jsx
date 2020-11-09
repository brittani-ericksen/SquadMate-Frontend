import React, {useState} from 'react';
import {TextField, FormControl, FormLabel, FormControlLabel, RadioGroup, Radio, Button }  from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '50ch',
    },
  },
  form: {
    display: 'flex',
    alignItems: 'center'
  },
}));

function Forms({user, setUser}) {
  const classes = useStyles();
  const history = useHistory();

  const [riderFirstName, setRiderFirstName] = useState(user.parentForm.rider.firstName);
  const [riderLastName, setRiderLastName] = useState(user.parentForm.rider.lastName);
  const [emergencyContactOneFirstName, setEmergencyContactOneFirstName] = useState(user.parentForm.emergencyContactOne.firstName);
  const [emergencyContactOneLastName, setEmergencyContactOneLastName] = useState(user.parentForm.emergencyContactOne.lastName);
  const [emergencyContactOneCell, setEmergencyContactOneCell] = useState(user.parentForm.emergencyContactOne.phone.cell);
  const [emergencyContactOneHome, setEmergencyContactOneHome] = useState(user.parentForm.emergencyContactOne.phone.home);
  const [insuranceProvider, setInsuranceProvider] = useState(user.insurance.provider);
  const [insurancePolicyNumber, setInsurancePolicyNumber] = useState(user.insurance.number);
  const [insuranceGroup, setInsuranceGroup] = useState(user.insurance.group);
  const [ibReleaseRadio, setIbReleaseRadio] = useState(String(user.ibuprofenRelease));

  const _handleRiderFirstName = input => {
    setRiderFirstName(input);
  }

  const _handleRiderLastName = input => {
    setRiderLastName(input);
  }

  const _handleEmergencyContactOneFirstName = input => {
    setEmergencyContactOneFirstName(input);
  }

  const _handleEmergencyContactOneLastName = input => {
    setEmergencyContactOneLastName(input);
  }

  const _handleEmergencyContactOneCell = input => {
    setEmergencyContactOneCell(input);
  }

  const _handleEmergencyContactOneHome = input => {
    setEmergencyContactOneHome(input);
  }

  const _handleInsuranceProvider = input => {
    setInsuranceProvider(input);
  }

  const _handleInsurancePolicyNumber = input => {
    setInsurancePolicyNumber(input);
  }

  const _handleInsuranceGroup = input => {
    setInsuranceGroup(input);
  }

  const _handleIbReleaseRadio = e => {
    setIbReleaseRadio(e.target.value);
  }

  
  const _handleSubmit = async (e) => {
    e.preventDefault();
    let ib;
    if (ibReleaseRadio === 'true') {
      ib = true;
    } else {
      ib = false
    }
    let data = { 
      parentForm: {
        rider: {
          firstName: riderFirstName,
          lastName: riderLastName
        },
        emergencyContactOne: {
          firstName: emergencyContactOneFirstName,
          lastName: emergencyContactOneLastName,
          phone: {
            cell: emergencyContactOneCell,
            home: emergencyContactOneHome
          }
        }
      },
      insurance: {
        provider: insuranceProvider,
        group: insuranceGroup,
        number: insurancePolicyNumber
      },
      ibuprofenRelease: ib,
      emergencyFormDone: true,
  }

  console.log('Data', data);

  const response = await fetch(`http://localhost:3333/user/update/${user._id}`, {
        method: 'PUT',
        headers: { 'Content-Type' : 'application/json' },
        body: JSON.stringify(data)
    });

    const resdata = await response.json();
    console.log('res', resdata);
    setUser(resdata);
    history.push('/user');
  }

    
    
  

  return (
    <form className={classes.root} autoComplete="off" onSubmit={e => _handleSubmit(e)}>
      <p>*  Required</p>
      <div>
      <TextField
          required
          id="riderFirstName"
          label="Rider First Name"
          defaultValue={riderFirstName}
          variant="outlined"
          onChange={e => _handleRiderFirstName(e.target.value)}
        />
        
      <TextField
          required
          id="riderLastName"
          label="Rider Last Name"
          defaultValue={riderLastName}
          variant="outlined"
          onChange={e => _handleRiderLastName(e.target.value)}
        />

      <TextField
          required
          id="emergencyContactFirstName"
          label="Emergency Contact First Name"
          defaultValue={emergencyContactOneFirstName}
          variant="outlined"
          onChange={e => _handleEmergencyContactOneFirstName(e.target.value)}
        />

      <TextField
          required
          id="emergencyContactLastName"
          label="Emergency Contact Last Name"
          defaultValue={emergencyContactOneLastName}
          variant="outlined"
          onChange={e => _handleEmergencyContactOneLastName(e.target.value)}
        />

      <TextField
          required
          id="emergencyContactCell"
          label="Emergency Contact Cell"
          defaultValue={emergencyContactOneCell}
          variant="outlined"
          onChange={e => _handleEmergencyContactOneCell(e.target.value)}
        />

      <TextField
          id="emergencyContactHome"
          label="Emergency Contact Home"
          defaultValue={emergencyContactOneHome}
          variant="outlined"
          onChange={e => _handleEmergencyContactOneHome(e.target.value)}
        />

      <TextField
          required
          id="insuranceProvider"
          label="Insurance Provider"
          defaultValue={insuranceProvider}
          variant="outlined"
          onChange={e => _handleInsuranceProvider(e.target.value)}
        />

      <TextField
          required
          id="policyNumber"
          label="Policy Number"
          defaultValue={insurancePolicyNumber}
          variant="outlined"
          onChange={e => _handleInsurancePolicyNumber(e.target.value)}
        />

      <TextField
          required
          id="insuranceGroup"
          label="Group"
          defaultValue={insuranceGroup}
          variant="outlined"
          onChange={e => _handleInsuranceGroup(e.target.value)}
        />

      <FormControl component="fieldset" className={classes.form}>
        <FormLabel component="legend">Ibuprofen Release</FormLabel>
        <RadioGroup aria-label="ibReleaseRadio" name="ibRelease" value={ibReleaseRadio} onChange={e => _handleIbReleaseRadio(e)}>
          <FormControlLabel value="false" control={<Radio />} label="No" />
          <FormControlLabel value="true" control={<Radio />} label="Yes" />
        </RadioGroup>
      </FormControl>

        <Button size="large" variant="contained" className={classes.margin} color="primary" type="submit">
          Submit Form
        </Button>
      </div>
    </form>
  );
}

export default Forms;
