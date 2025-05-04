import { Container, TextField, Typography,Box,Button } from "@mui/material";



function Signup(){
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
<TextField id="emailId" label="User Email ID" variant="outlined" fullWidth />
<TextField id="password" label="Password" variant="outlined" fullWidth />
<TextField id="firstName" label="FirstName" variant="outlined" fullWidth />
<TextField id="lastName" label="LastName" variant="outlined" fullWidth />
<TextField id="phonenumber" label="PhoneNumber" variant="outlined" fullWidth />

<Button variant="contained" color="primary" fullWidth>
          Submit
        </Button>
</Box>
</Container>
    );
}
export default Signup;