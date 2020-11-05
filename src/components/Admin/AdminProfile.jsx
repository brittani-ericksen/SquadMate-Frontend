import React from 'react';

const AdminProfile = () =>{

    return (
        <>
            <div>
                {/* upload profile pic */}
                <input type="file" accept="image/*" multiple = "false" />
                <form>
                    <label>First Name</label><input type="text" />
                    <label>Last Name</label><input type="text" />
                    <label>Cell phone</label><input type="text" />
                    <label>Email</label><input type="text" />
                </form>
            </div>
            <button>Edit Profile</button>
        </>
    );
}

export default AdminProfile;
