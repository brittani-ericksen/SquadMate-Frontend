import React from 'react';

const UserProfile = ({ user }) =>{
    const [file, setFile] = React.useState(null);
    const [img, setImg] = React.useState(null);
    const getImage = React.useCallback(() => {
        fetch(`http://localhost:3333/users/img/${user._id}`)
        .then(response => {
            setImg(response.data);
        });
    }, []);

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    }
    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData();
        console.log(file);
        formData.append('file', file);
        await fetch(`http://localhost:3333/users/upload?userid=${user._id}`, {method: 'POST',  formData})
        setTimeout(() => getImage(), 500);
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit}>
                    <img className="profile-pic" src={img} alt="profile" />
                    <h3>Change Profile Picture</h3>             
                <input type="file" name="file" accept="image/*" onChange={handleChange} multiple = "false" />
                </form>   
                <form>
                    <label>Rider First Name</label><input type="text" />
                    <label>Rider Last Name</label><input type="text" />
                    <label>Rider cell phone</label><input type="text" />
                    <label>Rider email</label><input type="text" />
                {/* selector for primary/secondary */}
                    <label>Parent 1 First Name</label><input type="text" />
                    <label>Parent 1 Last Name</label><input type="text" />
                    <label>Parent 1 cell phone</label><input type="text" />
                    <label>Parent 1 home phone</label><input type="text" />

                    <label>Parent 2 First Name</label><input type="text" />
                    <label>Parent 2 Last Name</label><input type="text" />
                    <label>Parent 2 cell phone</label><input type="text" />
                    <label>Parent 2 home phone</label><input type="text" />
                </form>
            </div>
            <button>Edit Profile</button>
        </>
    );
}

export default UserProfile;
