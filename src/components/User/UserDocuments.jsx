import React, {useState, useEffect} from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    picButton: {
        display: 'block',
        margin: 'auto'
    },
    container: {
        maxWidth: '500px'
    }
}));

const Documents = ({user}) => {
    const classes = useStyles();
    const [documents, setDocuments] = useState([]);


    useEffect(() => {
        (async function(){
            const response = await fetch(`http://localhost:3333/document/team/${user.team}`);
            const data = await response.json();
            console.log(data);
            setDocuments(data);
        })();
    }, [setDocuments, user]);

    console.log('Documents', documents);

    return (
        <div>
            <h3>Forms</h3>
            <Container className={classes.container}>
                {documents.map(document => 
                    <a href={document.url} rel="noreferrer" target="_blank">
                    {!!document.formName ? document.formName: 'Form'}
                </a>
                )}
            </Container>

        </div>
    )
}

export default Documents