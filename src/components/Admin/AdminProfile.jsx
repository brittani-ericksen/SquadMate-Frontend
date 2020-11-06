import React from 'react';

const AdminProfile = (props) =>{
    const { user } = props;
    return (
        <>
            <div>
                {/* upload profile pic */}
                <input type="file" accept="image/*" multiple = "false" />
                <form>
                    <label>First Name</label><input type="text" value={user.firstName}/>
                    <label>Last Name</label><input type="text" value={user.lastName}/>
                    <label>Cell phone</label><input type="text" value={user.phone.cellphone}/>
                    <label>Email</label><input type="text" value={user.email}/>
                </form>
            </div>
            <button>Edit Profile</button>
        </>
    );
}

export default AdminProfile;
