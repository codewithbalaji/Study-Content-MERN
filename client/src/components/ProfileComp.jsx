import { useState, useEffect } from 'react';
import axios from 'axios';
import '../css/profilecomp.css'; // Import your CSS file
import { Toaster, toast } from "sonner";

const ProfileComp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        profileUrl: '',
    });

    useEffect(() => {
        // Fetch user data from the server when the component mounts
        const fetchUserData = async () => {
            try {
                const userId = localStorage.getItem('userId'); // Retrieve userId from local storage
                const url = `http://localhost:3001/get-profile?userId=${userId}`; // Append userId to the URL
                const response = await axios.get(url);
                const userData = response.data;
                setFormData(userData);
            } catch (error) {
                toast.error("Error fetching user data");
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData(); // Call the function to fetch user data
    }, []); // Empty dependency array ensures the effect runs only once when the component mounts

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const userId = localStorage.getItem('userId'); // Retrieve userId from local storage
          const url = `http://localhost:3001/update-profile?userId=${userId}`; // Append userId to the URL
          const response = await axios.post(url, formData);
          toast.success("Profile updated successfully");
          console.log(response.data); // Log the response from the server
          // Optionally, you can display a success message or redirect the user
      } catch (error) {
          console.error('Error updating profile:', error);
          if (error.response && error.response.status === 400 && error.response.data.error === "Email already exists") {
              toast.error("Email already exists");
          } else {
              toast.error("Error updating profile");
          }
          // Optionally, you can display an error message to the user
      }
  };
  

    return (
        <div className="profile">
            <Toaster richColors position="top-right" />
            <div className="profile-container">
                <h2>Update Profile</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="profileUrl">profile:</label>
                        <input
                            type="text"
                            id="profileUrl"
                            name="profileUrl"
                            value={formData.profileUrl || ''}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password || ''}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn">Update</button>
                </form>
            </div>
        </div>
    );
};

export default ProfileComp;
