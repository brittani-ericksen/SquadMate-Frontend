import React from 'react';

const AdminForms = () =>{

    return (
        <>
            {/* left side */}
            <div>
                Riders missing forms
                <ul>
                    <li>rider name</li>
                    <li>rider name</li>
                    <li>rider name</li>
                </ul>
                <button>Send form reminder email</button>

                Riders with all forms submitted
                <ul>
                    <li>rider name</li>
                    <li>rider name</li>
                    <li>rider name</li>
                </ul>
            </div>
            {/* right side */}
            <div>
                Forms 
                <ul>
                    <li>Form</li>
                </ul>
                <button>View/Edit form</button>
            </div>
        </>
    );
}

export default AdminForms;