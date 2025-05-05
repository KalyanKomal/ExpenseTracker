import { Container, TextField, Typography,Box,Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login(){
  const navigate=useNavigate();
const handleSubmit = () => {
  // Do your form submission logic here (e.g., validation, API call)
  
  // Then navigate to login page
  navigate('/dashboard');
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
<TextField id="emailId" label="User Email ID" variant="outlined" fullWidth />
<TextField id="password" label="Password" variant="outlined" fullWidth />
<Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
          Submit
        </Button>
</Box>
</Container>
    );
}
export default Login;