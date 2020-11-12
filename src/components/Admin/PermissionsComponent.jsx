import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Checkbox } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    memberPermissions: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 10px'
    }
}));

const PermissionsComponent = ({member}) => {
    const classes = useStyles();
    const [isAdmin, setIsAdmin] = useState(member.isAdmin);

    const _handleChange = async () => {
        let updatedValue;
        if (isAdmin) {
            setIsAdmin(false);
            updatedValue = false;
        } else {
            setIsAdmin(true)
            updatedValue = true
        }

        let data = {
            ...member,
            isAdmin: updatedValue
        }

        //let response;
        await fetch(`http://localhost:3333/user/update/${member._id}`, {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(data)
        });


    }

    return (
        <div className={classes.memberPermissions}>      
            {member.firstName} {member.lastName}
            <Checkbox
                checked={isAdmin}
                onChange={_handleChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
        </div>
    )
}



export default PermissionsComponent;