import React, {useState} from 'react';
import { storage } from '../../firebase';
import styled from 'styled-components';
import {Button } from '@material-ui/core';

const Upload = styled.div`
    display: flex;
    flex-direction: column;
    width: 200px;
    margin: 0 auto;

    progress {
        margin: 0 auto;
    }
`;

const UploadPhoto = ({user, setUser, setProfilePicture, setUpdateProfilePicture}) => {
    const [image, setImage] = useState(null);

    const handleChange = async (e) => {
        if (e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const handleUpload = async () => { 
        const uploadTask = storage.ref(`images/${image.name}`).put(image);
        uploadTask.on(
            'state_changed',
            (snapshot) => {},
            (error) => {
            },
            () => {
                storage
                    .ref('images')
                    .child(image.name)
                    .getDownloadURL()
                    .then(async function(url) {
                        
                        const response = await fetch(
                            `${process.env.REACT_APP_SERVER_URL}/user/update/${user._id}`,
                            {
                                method: 'PUT',
                                headers: { 'Content-Type': 'application/json' },
                                body: JSON.stringify({
                                    avatarUrl: url
                                }),
                            }
                        );
                        const resdata = await response.json();
                        setUser(resdata);
                        setProfilePicture(resdata.avatarUrl);
                        setUpdateProfilePicture(false);
                    })  
                  
                })
            };
    return (
        <Upload>
            {!!image ? (<Button onClick={handleUpload}>Click to Upload</Button>) : (<Button
                component="label"
                >
                Add File to Upload
                <input
                    type="file"
                    style={{ display: "none" }}
                    accept="image/png, image/jpeg"
                    onChange={handleChange}
                />
                </Button>)


            }
            
                
            
            
        </Upload>
    )
}

export default UploadPhoto
