import React, {useState, useEffect} from 'react';
import { Card, Typography, Button, CardActions, Link } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    picButton: {
        display: 'block',
        margin: 'auto'
    },
    root: {
        maxWidth: '700px',
        display: 'flex',
        margin: '0 auto',
    }
}));

const Documents = ({user}) => {
    const classes = useStyles();
    const [documents, setDocuments] = useState([]);


    useEffect(() => {
        (async function(){
            const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/document/team/${user.team}`);
            const data = await response.json();
            setDocuments(data);
        })();
    }, [setDocuments, user]);

    return (
        <div>
            <Typography className={classes.title} variant='h3' component='h1'>
            Document and Forms
            </Typography>
            <Card className={classes.root} >
                <CardActions>
                    {documents.map(document => 
                    <>
                        <Link href={document.url} rel="noreferrer" target="_blank">
                            <Button variant="h5"
                            component="h2" >
                            {!!document.formName ? document.formName: 'Form'}
                            </Button>
                        </Link>
                    </>
                    )}
                </CardActions>
            </Card>

        </div>
    )
}

export default Documents