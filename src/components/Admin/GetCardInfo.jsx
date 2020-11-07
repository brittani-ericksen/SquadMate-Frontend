import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';

const QRCode = styled.img`
    position: absolute;
    height: 100px;
    width: 100px;
    z-index: 20;
    bottom: 10px;
    right: 10px;

    @media screen and (max-width: 380px) {
        position: relative;
        display: block;
        margin-left: 30px;
    }
`;

const useStyles = makeStyles({
    root: {
        textAlign: 'left',
        width: 500,
    },
    title: {
        fontSize: 14,
    },
});

const GetCardInfo = (props) => {

    const [member, setMember] = useState('');
    const classes = useStyles();
    const { id } = useParams();

    let user_id;
    if (id) {
        user_id = id
    } else {
        user_id = props.id;
    }

    useEffect(() => {
        (async function(){
            const response = await fetch(`http://localhost:3333/user/${user_id}`);
            const data = await response.json();
            setMember(data);
        })();
    }, [setMember, user_id]);

    return (
        <>
        {!!member ? (

<Card key={member._id} className={classes.root} variant="outlined">
                <div className="relative">
            <CardContent>
            <Typography className="title" component="h1">
                Rider Name {member.parentForm.rider.firstName + " " + member.parentForm.rider.lastName}
            </Typography>
            <Typography component="h2">
                Emergency Contact Name: {member.parentForm.emergencyContactOne.firstName}<br />
                Emergency Contact Number: {member.parentForm.emergencyContactOne.phone.cell}
            </Typography>
            <Typography component="p">
                Medications and History: {member.allergies}<br />
                Ibuprofen Release: {!!member.ibprofenRelease ? 'Yes' : 'No'}
            </Typography>
            <Typography component="p">
                Insurance Company Name: {member.insurance.provider}<br />
                Policy Number: {member.insurance.number}<br />
                Group Name: {member.insurance.group}<br />
            </Typography>
            </CardContent>
            
            <QRCode src={`https://api.qrserver.com/v1/create-qr-code/?data=http://localhost:3000/getCardInfo/${member._id}`} alt="qr-code"/>
            </div>
        </Card>
        ) : null}
        
        </>
    )
}

export default GetCardInfo
