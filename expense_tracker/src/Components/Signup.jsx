import { Container, TextField, Typography,Box,Button } from "@mui/material";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
import { useState } from "react";

function Signup(){
const navigate=useNavigate();
const [formData, setFormData] = useState({
  user_Email: '',
  password: '',
  firstName: '',
  lastName: '',
  phoneNumber: ''
});

const handleChange = (e) => {
  setFormData({...formData, [e.target.id]: e.target.value});
};
const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    await axios.post('http://localhost:8080/signup', formData); // Replace with your backend URL
    navigate('/login');
  } catch (error) {
    console.error('Signup failed:', error);
    alert('Signup failed. Please try again.');
  }
};

    return (
        <Container maxWidth="sm" sx={{bgcolor:"red"}}>
<Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p :4,
          gap:2,
          borderRadius:2,
          boxShadow:3,
          bgcolor:"#f5f5f5",
          mt:10,
          ml:5,
          mr:5,
        }}
      >
<Typography variant="h5" sx={{color:"blue"}}>LOGIN </Typography>
<TextField id="user_Email" label="User Email ID" variant="outlined" onChange={handleChange} fullWidth required/>
<TextField id="password" label="Password" variant="outlined" onChange={handleChange} fullWidth required/>
<TextField id="firstName" label="FirstName" variant="outlined" onChange={handleChange} fullWidth required/>
<TextField id="lastName" label="LastName" variant="outlined" onChange={handleChange}  fullWidth required/>
<TextField id="phoneNumber" label="PhoneNumber" variant="outlined" onChange={handleChange} fullWidth required/>

<Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Submit
        </Button>
</Box>
</Container>
    );
}
export default Signup;