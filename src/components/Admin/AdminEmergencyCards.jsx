import React, { useState, useEffect } from 'react';
import GetCardInfo from './GetCardInfo';


function EmergencyCard(props) {
    const { user } = props;
    const [teamMembers, setTeamMembers] = useState([]);

    useEffect(() => {
        (async function(){
            const response = await fetch(`http://localhost:3333/team/${user.team}/users`);
            const data = await response.json();
            setTeamMembers(data);
            console.log(data);
        })();
    }, [setTeamMembers, user]);

    let team = teamMembers.filter(member => member._id !== user._id);

    return (
        <div className="printCard">
        {team.map((member) => (            
            <GetCardInfo id={member._id}/>
        ))}
        </div>
    );
}

export default EmergencyCard;
