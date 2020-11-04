import React from 'react';
import { TextField, RadioGroup, Radio, FormControlLabel,  } from '@material-ui/core'

function EmergencyCard() {
  return (
    <>
      <form noValidate autoComplete="off">
        <TextField id="filled-basic" label="Rider's Name" variant="filled" />
        <TextField id="filled-basic" label="Emergency Phone Number" variant="filled" />
        <TextField id="filled-basic" label="Emergency Contact Name" variant="filled" />
        <TextField id="filled-basic" label="Insurance Company Name" variant="filled" />
        <TextField id="filled-basic" label="List Any Medication and History" variant="filled" />
        <TextField id="filled-basic" label="Policy Number" variant="filled" />
        <TextField id="filled-basic" label="Group Name" variant="filled" />
        <RadioGroup aria-label="Ibuprofen Release" name="Ibuprofen Release" value="" onChange="">
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </form>
    </>
  )
}

export default EmergencyCard;
