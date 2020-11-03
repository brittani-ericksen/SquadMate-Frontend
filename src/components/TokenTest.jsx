import React, {useState} from 'react';

const Test = () =>{
    const [message, setMessage] = useState('');

    const _handleClick = async () => {
        const response = await fetch('http://localhost:3333/api/private');
        console.log(response);
        setMessage(response.message);
    }

    return (
        <>
  <h1>Test Message</h1>
  <button type='button' onClick={_handleClick}>Check Message</button>
    <p>{message}</p>
    
    </>
    )}

export default Test;