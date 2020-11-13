import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { CardContent, Typography, Divider, Paper, Chip } from '@material-ui/core';
import styled from 'styled-components';
import { makeStyles, createMuiTheme } from '@material-ui/core/styles';
import Avatar from 'react-avatar';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import PhoneIcon from '@material-ui/icons/Phone';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import VisibilityIcon from '@material-ui/icons/Visibility';


const Card = styled.div`
    position: relative;
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
    max-width: 500px;
    text-align: left;
    margin: 0 auto;

    .title {
        font-weight: bold;
        margin-right: 10px;
    }
`;

const Title = styled.div`
    border-radius: 7px 7px 0 0;
    padding: 0 7px;
`;

const Detail = styled.div`
    padding: 5px 20px;
`;

const useStyles = makeStyles((theme) => ({
    chip: {
      margin: theme.spacing(0.5),
    },
    chipYes: {
        margin: theme.spacing(0.5),
        backgroundColor: '#4caf50',
    }
  }));

const GetCardInfo = (props) => {
    const [groupView, setGroupView] = useState(false);
    const [numberView, setNumberView] = useState(false);
    const [member, setMember] = useState('');
    const { id } = useParams();
    const classes = useStyles();

    let user_id;
    if (id) {
        user_id = id
    } else {
        user_id = props.id;
    }

    useEffect(() => {
        (async function(){
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/user/${user_id}`);
            const data = await response.json();
            setMember(data);
        })();
    }, [setMember, user_id]);

    const _handleViewClick =() =>{
        setGroupView(groupView ? false : true);
    };

    const _handleViewClick2 =() =>{
        setNumberView(numberView ? false : true);
    };

    return (
        <>
        <Typography variant="h2">
            Rider Profile
        </Typography>
        {!!member ? (

        <Card key={member._id} variant="outlined">
            <CardContent>
                <Avatar src={member.avatarUrl} />
                <Typography variant='h4'>
                    {member.parentForm.rider.firstName + " " + member.parentForm.rider.lastName}
                </Typography>
                <Chip className={classes.chip}
                icon={<PhoneAndroidIcon />}
                label={member.parentForm.rider.phone.cell}
                />
                <Chip className={classes.chip}
                icon={<AlternateEmailIcon />}
                label={member.parentForm.rider.email}
                />
                <p></p>
                <Paper>
                    <Title className="blue">
                        <Typography variant='h5'>
                            Parent One:
                        </Typography>
                    </Title>
                    <Detail>
                        <Typography variant='h6'>
                        {member.parentForm.parentOne.firstName} {member.parentForm.parentOne.lastName}
                        </Typography>
                        <Chip className={classes.chip}
                        icon={<PhoneAndroidIcon />}
                        label={member.parentForm.parentOne.phone.cell}
                        />
                        <Chip className={classes.chip}
                        icon={<PhoneIcon />}
                        label={member.parentForm.parentOne.phone.home}
                        />
                    </Detail>
                    <Detail>
                    <Chip className={classes.chip}
                        icon={<AlternateEmailIcon />}
                        label={member.email}
                        />
                    </Detail>
                </Paper>
                <p></p>
                <Paper>
                    <Title className="blue">
                        <Typography variant='h5'>
                            Parent Two:
                        </Typography>
                    </Title>
                    <Detail>
                        <Typography variant='h6'>
                        {member.parentForm.parentTwo.firstName} {member.parentForm.parentTwo.lastName}
                        </Typography>
                        <Chip className={classes.chip}
                        icon={<PhoneAndroidIcon />}
                        label={member.parentForm.parentTwo.phone.cell}
                        />
                        <Chip className={classes.chip}
                        icon={<PhoneIcon />}
                        label={member.parentForm.parentTwo.phone.home}
                        />
                    </Detail>
                </Paper>
                <p></p>
                <Paper>
                    <Title className="blue">
                        <Typography variant='h5'>
                            Emergency Information:
                        </Typography>
                    </Title>
                    <Detail>
                        <Typography variant='subtitle1'>
                        <em>Primary Contact:</em> {member.parentForm.emergencyContactOne.firstName} {member.parentForm.emergencyContactOne.lastName}
                        </Typography>
                        <Chip className={classes.chip}
                        icon={<PhoneAndroidIcon />}
                        label={member.parentForm.parentOne.phone.cell}
                        />
                        <Chip className={classes.chip}
                        icon={<PhoneIcon />}
                        label={member.parentForm.parentOne.phone.home}
                        />
                    </Detail>
                    <Detail>
                        <Typography variant='subtitle1'>
                        <em>Alternate Contact:</em> {member.parentForm.emergencyContactTwo.firstName} {member.parentForm.emergencyContactTwo.lastName}
                        </Typography>
                        <Chip className={classes.chip}
                        icon={<PhoneAndroidIcon />}
                        label={member.parentForm.parentTwo.phone.cell}
                        />
                        <Chip className={classes.chip}
                        icon={<PhoneIcon />}
                        label={member.parentForm.parentTwo.phone.home}
                        />
                    </Detail>
                    <Divider />
                    <Detail>
                        <Typography variant="h6">
                            Insurance
                        </Typography>
                    </Detail>
                    <Detail>
                        <Typography variant='subtitle1'>
                        <em>Provider:</em> <Chip className={classes.chip} label={member.insurance.provider}/>
                        </Typography>
                    </Detail>
                    <Detail>
                        <Typography variant='subtitle1'>
                        <em>Group:</em> 
                            {groupView ? 
                                <Chip className={classes.chip} label={member.insurance.group}/> 
                            : 
                            <Chip  className={classes.chip} label="*******************"/>} 
                            <VisibilityIcon onClick={_handleViewClick}/>
                        </Typography>
                    </Detail>
                    <Detail>
                        <Typography variant='subtitle1'>
                        <em>Number:</em> 
                            {numberView ? 
                                <Chip className={classes.chip} label={member.insurance.number}/> 
                            : 
                            <Chip className={classes.chip} label="*********************"/>} 
                            <VisibilityIcon onClick={_handleViewClick2}/>
                        </Typography>
                    </Detail>
                </Paper>
                <p></p>
                <Paper>
                    <Title className="blue">
                        <Typography variant='h5'>
                            Medical:
                        </Typography>
                    </Title>
                    <Detail>
                        <Typography variant='subtitle1'>
                            Ibuprofen Release: {!!member.ibuprofenRelease === true ? 
                                <Chip
                                className={classes.chipYes}
                                label="Yes"
                                />
                                : 
                                <Chip
                                className={classes.chip}
                                label="No"
                                color="secondary"
                                />
                                }
                        </Typography>                        
                    </Detail>
                    <Detail>
                        <Typography variant='subtitle1'>
                            History:
                        </Typography>
                        <Divider />
                        {member.medicalCondition = true ? <Chip
                            className={classes.chip}
                            label="Medical Condition"
                            color="secondary"
                            />
                        : null } 
                        {member.asthma = true ? <Chip
                            className={classes.chip}
                            label="Asthma"
                            color="secondary"
                            />
                        : null } 
                        {member.medicationRequired =true ? <Chip
                            className={classes.chip}
                            label="Medication Needed"
                            color="secondary"
                            />
                        : null }
                    </Detail>
                    <Detail>
                        <Typography variant='subtitle1'>
                            Medications/Allergies:
                        </Typography>
                        <Divider />
                        <Typography variant='subtitle1'>
                            {member.allergies}
                        </Typography>
                    </Detail>
                </Paper>
            </CardContent>
        </Card>
        ) : null}
        
        </>
    )
}

export default GetCardInfo
