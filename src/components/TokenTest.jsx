import React, {useState} from 'react';



var axios = require("axios").default;




const Test = () =>{
    
    const token = `eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IkpqYUtfVnY1Z3M4dXNWM0dFZ0pJNCJ9.eyJpc3MiOiJodHRwczovL3NxdWFkbWF0ZS51cy5hdXRoMC5jb20vIiwic3ViIjoiU1RVYVA2eUJmN1kzcmw0SGdyMnhWN24ybW9iZ1lEYmVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vc3F1YWRtYXRlL2FwaSIsImlhdCI6MTYwNDQzNjYwMSwiZXhwIjoxNjA0NTIzMDAxLCJhenAiOiJTVFVhUDZ5QmY3WTNybDRIZ3IyeFY3bjJtb2JnWURiZSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.Y1SiQbwYLntlp0xFZDWfLwT1S5T91ncmO-og7t75SVkxOvJwkmbekFROToYDDtsZSNCDEmUsEzQO8SnfZVcFpYKQ6mp9Ksy34aEGR_u4_AvCaP8lJn19gx004QAvEa8xJc6yKs_gmwe_xtqViX41s2lgdZ-ktWS1fxVcy1cmCOKvXWJ8lewsRJsU6_syvk_ts3xa4o5HDT-B45ZQyhlMXWIMgoRkAf3nS7LLxG8R7OUMLwSmlgOvCbdEm44grywk4z56iDdPYE5kheSBGZWB72qFW5oubXuoHQzq6NpcA0kN6Nfe7ELhnddf9U4luCTJzyoXVkfWgsD1zfQSNl_urA`
    //const [message, setMessage] = useState('');

    const _handleClick = async () => {
        var options = {
            method: 'GET',
            url: 'http://localhost:3333/api/private',
            headers: {Authorization: `Bearer ${token}`}
          };
          
          axios.request(options).then(function (response) {
            console.log(response.data);
          }).catch(function (error) {
            console.error(error);
          });
    }

    return (
        <>
  <h1>Test Message</h1>
  <button type='button' onClick={_handleClick}>Check Message</button>
    
    </>
    )}

export default Test;