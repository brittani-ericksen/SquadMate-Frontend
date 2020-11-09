import React, { useState, useEffect } from 'react';
import GetCardInfo from './GetCardInfo';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    center: {
        margin: "0 auto",
    }

  }));

function EmergencyCard(props) {
    const { user } = props;
    const [teamMembers, setTeamMembers] = useState([]);
    const classes = useStyles();

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
            <Grid className={classes.root} container spacing={3}> 
                {team.map((member) => ( 
                    <>  
                    <div className="printCard">
                        <GetCardInfo id={member._id}/>
                    </div>   
                    <Grid className="center removePrint" item xs={12} sm={6} md={6} lg={6} xl={6}>
                        <GetCardInfo id={member._id}/>
                    </Grid>
                    </>
                ))}
            </Grid>
    );
}

export default EmergencyCard;
