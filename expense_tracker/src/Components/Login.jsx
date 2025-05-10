import { Container, TextField, Typography,Box,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function Login(){
  const navigate=useNavigate();

  const [formData, setFormData] = useState({
    emailId: '',
    password: '',
  });
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value});
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
//     const params = new URLSearchParams();
// params.append('emailId', formData.emailId);
// params.append('password', formData.password);
    try {
     const response= await axios.get('http://localhost:8080/signin' ,{
      params: {
        emailId: formData.emailId,
        password: formData.password,
      },});// Replace with your backend URL
     if (response.data.statusCode === 200) {
      const token=response.data.data;
      localStorage.setItem('authToken', token);
      localStorage.setItem('emailId',formData.emailId);
      navigate('/dashboard');  // Login successful
    } else {
      alert(response.data.message || 'Login failed.');
    }
      navigate('/dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
      alert('Signup failed. Please try again.');
    }
  };

    return(
<Container maxWidth="sm" sx={{bgcolor:"red"}}>
<Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p :4,
          gap:6,
          borderRadius:2,
          boxShadow:3,
          bgcolor:"#f5f5f5",
          mt:10,
        }}
      >
<Typography variant="h5" sx={{color:"blue"}}>LOGIN </Typography>
<TextField id="emailId" label="User Email ID" variant="outlined" onChange={handleChange} fullWidth />
<TextField id="password" label="Password" variant="outlined" onChange={handleChange} fullWidth />
<Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Submit
        </Button>
</Box>
</Container>
    );
}
export default Login;