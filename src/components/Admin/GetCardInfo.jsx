import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { CardContent } from '@material-ui/core';
import styled from 'styled-components';

const Card = styled.div`
    position: relative;
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 5px;
    color: black;
    height: 225px;
    width: 450px;
    text-align: left;
    margin: 10px;

    .title {
        font-weight: bold;
        margin-right: 10px;
    }
`;

const QRCode = styled.img`
    position: absolute;
    height: 80px;
    width: 80px;
    z-index: 20;
    bottom: 10px;
    right: 10px;

    @media screen and (max-width: 380px) {
        position: relative;
        display: block;
        margin-left: 30px;
    }
`;



const GetCardInfo = (props) => {

    const [member, setMember] = useState('');
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

<Card key={member._id} variant="outlined">
        
            <CardContent>
            <div>
                Rider Name:  {member.parentForm.rider.firstName + " " + member.parentForm.rider.lastName}
            </div>
            <div>
            Emergency Contact Name: {member.parentForm.emergencyContactOne.firstName}<br />
            Emergency Contact Number:  {member.parentForm.emergencyContactOne.phone.cell}
            </div>
            <div component="p">
                Medications and History: {member.allergies}<br />
                Ibuprofen Release: {!!member.ibuprofenRelease ? 'Yes' : 'No'}
            </div>
            <div component="p">
                Insurance Company Name: {member.insurance.provider}<br />
                Policy Number: {member.insurance.number}<br />
                Group Name: {member.insurance.group}<br />
            </div>
            </CardContent>
            
            <QRCode src={`https://api.qrserver.com/v1/create-qr-code/?data=http://localhost:3000/getCardInfo/${member._id}`} alt="qr-code"/>
        
        </Card>
        ) : null}
        
        </>
    )
}

export default GetCardInfo
