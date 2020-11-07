import React from 'react';
import Avatar from 'react-avatar';

const AdminProfile = (props) =>{
    const { user } = props;
    return (
        <>
            <div>
                {/* upload profile pic */}
                <Avatar githubHandle={user.github} src="/avatar-placeholder.png" size="105" round />
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
