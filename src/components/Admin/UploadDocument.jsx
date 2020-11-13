import React, {useState} from 'react';
import { storage } from '../../firebase';
import styled from 'styled-components';
import { Button, Input } from '@material-ui/core';

const Upload = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0 auto;
`;

const UploadDocument = ({user, setShowDocumentButton, documents, setDocuments}) => {
    const [name, setName] = useState(null);
    const [document, setDocument] = useState(null);
    


    const handleChange = async (e) => {
        if (e.target.files[0]) {
            setDocument(e.target.files[0]);
        }
    };

    const handleText = input => {
        setName(input);
    }


    const handleUpload = async () => { 
        const uploadTask = storage.ref(`documents/${document.name}`).put(document);
        uploadTask.on(
            'state_changed',
            (snapshot) => {},
            (error) => {
            },
            () => {
                storage
                    .ref('documents')
                    .child(document.name)
                    .getDownloadURL()
                    .then(async function(url) {
                        
                        const response = await fetch(
                            `${process.env.REACT_APP_SERVER_URL}/document/`,
                            {
                                method: 'POST',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    formName: name,
                                    url: url,
                                    team: user.team
                                }),
                            }
                        );
                        const resdata = await response.json();
                        setShowDocumentButton(false);
                        setDocuments([...documents, resdata]);
                    })  
                  
                })
            };

    return (
        <Upload>
            <Input type="text" placeholder="Enter Title of Form" onChange={e => handleText(e.target.value)}/>
            {!!document ? (<Button onClick={handleUpload}>Click to Upload</Button>) : (
                <>
                
            <Button
                component="label"
                >
                Add File to Upload
                
                <input
                    type="file"
                    style={{ display: "none" }}
                    accept="application/pdf,application/vnd.ms-excel,application/msword,text/plain"
                    onChange={handleChange}
                />
            </Button>
            </>
            )}

        </Upload>
    )
}

export default UploadDocument;
