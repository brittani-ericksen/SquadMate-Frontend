import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core';
import PrintIcon from '@material-ui/icons/Print';
import GetCardInfo from './GetCardInfo';

const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    color: black;
`;

const RemovePrint = styled.div`
    @media print {
        display: none;
    }
`;

const PrintBg = styled.div`
    background-color: white;
    border-radius: 50%;
    padding: 4px;
`;

function EmergencyCard(props) {
    const { user } = props;
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        (async function(){
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/team/${user.team}/users`);
            const data = await response.json();
            setTeamMembers(data);
        })();
    }, [setTeamMembers, user]);

    let team = teamMembers.filter(member => member._id !== user._id);

    return (
        <>
        <RemovePrint className=".removePrint">
        <Button onClick={window.print}><PrintBg><PrintIcon /></PrintBg></Button>
        </RemovePrint>
        <Container className="printCard">
        {team.map((member) => (            
            <GetCardInfo id={member._id}/>
        ))}
        </Container>
        </>
    );
}

export default EmergencyCard;
