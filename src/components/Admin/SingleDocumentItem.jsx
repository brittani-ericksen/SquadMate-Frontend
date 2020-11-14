import React from 'react';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import styled from 'styled-components';

const Document = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
`;

const Button = styled.div`
    border: none;
    color: red;
    border-radius: 50px;
    cursor: pointer;
`;

const SingleDocumentItem = ({document, user, setDocuments, documents}) => {
    const handleDelete = async () => {
        const response = await fetch(
            `${process.env.REACT_APP_SERVER_URL}/document/${document._id}`,
            {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' },
            }
        );
        const resdata = await response.json();
        setDocuments(resdata);

    }
    return (
        <Document>     
            <div>           
            <a href={document.url} rel="noreferrer" target="_blank">
                {!!document.formName ? document.formName: 'Form'}
            </a>
            </div>
            <Button onClick={handleDelete}><HighlightOffIcon /></Button>
        </Document>
    )
}

export default SingleDocumentItem
