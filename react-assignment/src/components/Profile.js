const Profile = ({ name, email }) => {
    return (
      <div className="bg-gray-200 p-4 rounded shadow-md">
        <h2 className="text-xl font-bold">Profile</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    );
  };
  
  export default Profile;
  