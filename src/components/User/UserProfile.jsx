import React, {useState} from 'react';
import {TextField, Container, Button, FormControl, Radio, RadioGroup, FormLabel, FormControlLabel} from '@material-ui/core';
import Avatar from 'react-avatar';
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
    marginTop: {
      marginTop: '4rem'
    }
  }));

const UserProfile = ({user, setUser}) =>{
    const classes = useStyles();
    const history = useHistory();


    const [riderFirstName, setRiderFirstName] = useState(user.parentForm.rider.firstName);
    const [riderLastName, setRiderLastName] = useState(user.parentForm.rider.lastName);
    const [riderEmail, setRiderEmail] = useState(user.parentForm.rider.email);
    const [riderCellPhone, setRiderCellPhone] = useState(user.parentForm.rider.phone.cell);

    const [parentOneFirstName, setParentOneFirstName] = useState(user.parentForm.parentOne.firstName);
    const [parentOneLastName, setParentOneLastName] = useState(user.parentForm.parentOne.lastName);
    const [parentOneCellPhone, setParentOneCellPhone] = useState(user.parentForm.parentOne.phone.cell);
    const [parentOneHomePhone, setParentOneHomePhone] = useState(user.parentForm.parentOne.phone.home);

  const [parentTwoFirstName, setParentTwoFirstName] = useState(user.parentForm.parentTwo.firstName);
  const [parentTwoLastName, setParentTwoLastName] = useState(user.parentForm.parentTwo.lastName);
  const [parentTwoCellPhone, setParentTwoCellPhone] = useState(user.parentForm.parentTwo.phone.cell);
    const [parentTwoHomePhone, setParentTwoHomePhone] = useState(user.parentForm.parentTwo.phone.cell);

    const [emergencyContactOneFirstName, setEmergencyContactOneFirstName] = useState(user.parentForm.emergencyContactOne.firstName);
    const [emergencyContactOneLastName, setEmergencyContactOneLastName] = useState(user.parentForm.emergencyContactOne.lastName);
    const [emergencyContactOneCellPhone, setEmergencyContactOneCellPhone] = useState(user.parentForm.emergencyContactOne.phone.cell);
    const [emergencyContactOneHomePhone, setEmergencyContactOneHomePhone] = useState(user.parentForm.emergencyContactOne.phone.home);

    const [emergencyContactTwoFirstName, setEmergencyContactTwoFirstName] = useState(user.parentForm.emergencyContactTwo.firstName);
    const [emergencyContactTwoLastName, setEmergencyContactTwoLastName] = useState(user.parentForm.emergencyContactTwo.lastName);
    const [emergencyContactTwoCellPhone, setEmergencyContactTwoCellPhone] = useState(user.parentForm.emergencyContactTwo.phone.cell);
    const [emergencyContactTwoHomePhone, setEmergencyContactTwoHomePhone] = useState(user.parentForm.emergencyContactTwo.phone.home);

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
  const _handleRiderEmail = input => {
    setRiderEmail(input);
  }
    const _handleRiderCellPhone = input => {
        setRiderCellPhone(input);
    }

    const _handleParentOneFirstName = input => {
        setParentOneFirstName(input);
    }
    const _handleParentOneLastName = input => {
        setParentOneLastName(input);
    }

    const _handleParentOneCellPhone = input => {
      setParentOneCellPhone(input);
  }

  const _handleParentOneHomePhone = input => {
    setParentOneHomePhone(input);
}

    const _handleParentTwoFirstName = input => {
        setParentTwoFirstName(input);
    }
    const _handleParentTwoLastName = input => {
        setParentTwoLastName(input);
    }
    const _handleParentTwoCellPhone = input => {
        setParentTwoCellPhone(input);
    }
    const _handleParentTwoHomePhone = input => {
        setParentTwoHomePhone(input);
    }

    const _handleEmergencyContactOneFirstName = input => {
      setEmergencyContactOneFirstName(input);
    }
  
    const _handleEmergencyContactOneLastName = input => {
      setEmergencyContactOneLastName(input);
    }
  
    const _handleEmergencyContactOneCellPhone = input => {
      setEmergencyContactOneCellPhone(input);
    }
  
    const _handleEmergencyContactOneHomePhone = input => {
      setEmergencyContactOneHomePhone(input);
    }

    const _handleEmergencyContactTwoFirstName = input => {
        setEmergencyContactTwoFirstName(input);
      }
    
      const _handleEmergencyContactTwoLastName = input => {
        setEmergencyContactTwoLastName(input);
      }
    
      const _handleEmergencyContactTwoCellPhone = input => {
        setEmergencyContactTwoCellPhone(input);
      }
    
      const _handleEmergencyContactTwoHomePhone = input => {
        setEmergencyContactTwoHomePhone(input);
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
                lastName: riderLastName,
                email: riderEmail,
                phone: {
                  cell: riderCellPhone
                }
              },
              parentOne: {
                firstName: parentOneFirstName,
                lastName: parentOneLastName,
                phone: {
                  cell: parentOneCellPhone,
                  home: parentOneHomePhone
                }
              },
              parentTwo: {
                firstName: parentTwoFirstName,
                lastName: parentTwoLastName,
                phone: {
                  cell: parentTwoCellPhone,
                  home: parentTwoHomePhone
                }
              },
              emergencyContactOne: {
                firstName: emergencyContactOneFirstName,
                lastName: emergencyContactOneLastName,
                phone: {
                  cell: emergencyContactOneCellPhone,
                  home: emergencyContactOneHomePhone
                }
              },
              emergencyContactTwo: {
                firstName: emergencyContactTwoFirstName,
                lastName: emergencyContactTwoLastName,
                phone: {
                  cell: emergencyContactTwoCellPhone,
                  home: emergencyContactTwoHomePhone
                }
              },
              insurance: {
                provider: insuranceProvider,
                group: insuranceGroup,
                number: insurancePolicyNumber
              },
              ibuprofenRelease: ib,
            }
          }
          
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
        <>
            {/* pulls info in from completed form, editable and updates db when changed */}
            <div>
            <Avatar src="/avatar-placeholder.png" size="75" round />
                <form className={classes.root} validation autoComplete="off" onSubmit={e => _handleSubmit(e)}>


          

          <Container component='RiderInformation'>
              <h2>Rider Information</h2>
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
                  label="Rider last Name"
                  defaultValue={riderLastName}
                  variant="outlined"
                  onChange={e => _handleRiderLastName(e.target.value)}
              />
              <TextField
                  id="riderEmail"
                  label="Rider Email"
                  defaultValue={riderEmail}
                  variant="outlined"
                  onChange={e => _handleRiderEmail(e.target.value)}
              />
              <TextField
                  id="riderCellPhone"
                  label="Rider Cell Phone"
                  defaultValue={riderCellPhone}
                  variant="outlined"
                  onChange={e => _handleRiderCellPhone(e.target.value)}
              />
          </Container>

          <Container component='ParentOneInformation' className={classes.marginTop}>
              <h2>Parent One Information</h2>
              <TextField
                  required
                  id="parentOneFirstName"
                  label="Parent One First Name"
                  defaultValue={parentOneFirstName}
                  variant="outlined"
                  onChange={e => _handleParentOneFirstName(e.target.value)}
              />
              <TextField
                  required
                  id="parentOneLastName"
                  label="Parent One Last Name"
                  defaultValue={parentOneLastName}
                  variant="outlined"
                  onChange={e => _handleParentOneLastName(e.target.value)}
              />
              <TextField
                  required
                  id="parentOneCellPhone"
                  label="Parent One Cell Phone"
                  defaultValue={parentOneCellPhone}
                  variant="outlined"
                  onChange={e => _handleParentOneCellPhone(e.target.value)}
              />
            <TextField
                id="parentOneHomePhone"
                label="Parent One Home Phone"
                defaultValue={parentOneHomePhone}
                variant="outlined"
                onChange={e => _handleParentOneHomePhone(e.target.value)}
            />
        </Container>

        <Container component='ParentTwoInformation' className={classes.marginTop}>
            <h2>Parent Two Information</h2>
            <TextField
                id="parentTwoFirstName"
                label="Parent Two First Name"
                defaultValue={parentTwoFirstName}
                variant="outlined"
                onChange={e => _handleParentTwoFirstName(e.target.value)}
            />
            <TextField
                id="parentTwoLastName"
                label="Parent Two Last Name"
                defaultValue={parentTwoLastName}
                variant="outlined"
                onChange={e => _handleParentTwoLastName(e.target.value)}
                />
            <TextField
                id="parentTwoCellPhone"
                label="Paren Two Cell Phone"
                defaultValue={parentTwoCellPhone}
                variant="outlined"
                onChange={e => _handleParentTwoCellPhone}
            />
            <TextField
                id="parentTwoHomePhone"
                label="Parent Two Home Phone"
                defaultValue={parentTwoHomePhone}
                variant="outlined"
                onChange={e => _handleParentTwoHomePhone(e.target.value)}
            />
        </Container>

        <Container component="Emergencycontact" className={classes.marginTop}>
          <h2>Emergency Contact One</h2>
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
                id="emergencyContactOneCellPhone"
                label="Emergency Contact One Cell Phone"
                defaultValue={emergencyContactOneCellPhone}
                variant="outlined"
                onChange={e => _handleEmergencyContactOneCellPhone(e.target.value)}
              />

            <TextField
                id="emergencyContactOneHomePhone"
                label="Emergency Contact One Home Phone"
                defaultValue={emergencyContactOneHomePhone}
                variant="outlined"
                onChange={e => _handleEmergencyContactOneHomePhone(e.target.value)}
              />

        </Container>

        <Container component="Emergencycontact" className={classes.marginTop}>
          <h2>Emergency Contact Two</h2>
            <TextField
                id="emergencyContactTwoFirstName"
                label="Emergency Contact Two First Name"
                defaultValue={emergencyContactTwoFirstName}
                variant="outlined"
                onChange={e => _handleEmergencyContactTwoFirstName(e.target.value)}
              />

            <TextField
                id="emergencyContactTwoLastName"
                label="Emergency Contact Two Last Name"
                defaultValue={emergencyContactTwoLastName}
                variant="outlined"
                onChange={e => _handleEmergencyContactTwoLastName(e.target.value)}
              />

            <TextField
                id="emergencyContactTwoCellPhone"
                label="Emergency Contact Two Cell Phone"
                defaultValue={emergencyContactTwoCellPhone}
                variant="outlined"
                onChange={e => _handleEmergencyContactTwoCellPhone(e.target.value)}
              />

            <TextField
                id="emergencyContactHomePhone"
                label="Emergency Contact Two Home Phone"
                defaultValue={emergencyContactTwoHomePhone}
                variant="outlined"
                onChange={e => _handleEmergencyContactTwoHomePhone(e.target.value)}
              />

        </Container>

        <Container component='Insurance' className={classes.marginTop}> 

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
        </Container>
        <FormControl component="fieldset" className={classes.form}>
        <FormLabel component="legend">Ibuprofen Release</FormLabel>
        <RadioGroup aria-label="ibReleaseRadio" name="ibRelease" value={ibReleaseRadio} onChange={e => _handleIbReleaseRadio(e)}>
          <FormControlLabel value="false" control={<Radio />} label="No" />
          <FormControlLabel value="true" control={<Radio />} label="Yes" />
        </RadioGroup>
      </FormControl>
        

<Button size="large" variant="contained" className={classes.margin} color="primary" type="submit">
          Save 
        </Button>
                </form>
            </div>
            
        </>
    );
}

export default UserProfile;
