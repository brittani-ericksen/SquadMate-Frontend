import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';

const AdminProfile = (props) =>{
    const { user, setUser } = props;
    const [firstName, setFirstName] = useState(user.firstName);
    const [lastName, setLastName] = useState(user.lastName);
    const [cellPhone, setCellPhone] = useState(user.phone.cell);
    const [email, setEmail] = useState(user.email);

    const history = useHistory();

    const _handleFirstName = input => {
        setFirstName(input);
    }

    const _handleLastName = input => {
        setLastName(input);
    }

    const _handleCellPhone = input => {
        setCellPhone(input);
    }

    const _handleEmail = input => {
        setEmail(input);
    }

    const _handleSubmit = async(e) => {
        e.preventDefault();
        let data = { 
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: {
                cell: cellPhone
            }
        }
        const response = await fetch(`http://localhost:3333/user/update/${user._id}`, {
            method: 'PUT',
            headers: { 'Content-Type' : 'application/json' },
            body: JSON.stringify(data)
        });

        const resdata = await response.json();
        setUser(resdata);
        history.push('/admin');
    }


    return (
        <>
            <div>
                {/* upload profile pic */}
                <input type="file" accept="image/*" multiple={false} />
                <form onSubmit={e => _handleSubmit(e)}>
                    <label>First Name</label><input type="text" value={firstName} onChange={e => _handleFirstName(e.target.value)}/>
                    <label>Last Name</label><input type="text" value={lastName} onChange={e => _handleLastName(e.target.value)}/>
                    <label>Cell phone</label><input type="text" value={cellPhone} onChange={e => _handleCellPhone(e.target.value)}/>
                    <label>Email</label><input type="email" value={email} onChange={e => _handleEmail(e.target.value)}/>
                    <button type="submit">Edit Profile</button>
                </form>
            </div>
            
        </>
    );
}

export default AdminProfile;
