import { Container, TextField, Typography,Box,Button,AppBar,Toolbar,IconButton,Drawer, ListItem,List,ListItemText,Divider, Avatar, Stack, Badge,Dialog, DialogTitle, DialogContent, DialogActions,Card,CardContent} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Dashboard(){
  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('authToken');
      const emailId = localStorage.getItem('emailId');
      try {
        const response = await axios.get('http://localhost:8080/getUser', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          params: {
            emailId: emailId,  // Passing emailId as a query parameter
          },
        });

        if (response.data.statusCode === 200) {
          localStorage.setItem('user', JSON.stringify(response.data.data));
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    fetchUserDetails();
  }, []);
  const transactions = [
    { id: 101, amount: 5000, status: 'Success', date: '2025-05-01' },
    { id: 102, amount: 7500, status: 'Pending', date: '2025-05-02' },
    { id: 103, amount: 3200, status: 'Failed', date: '2025-05-03' },
    { id: 104, amount: 3200, status: 'Failed', date: '2025-05-03' },
    { id: 105, amount: 3200, status: 'Failed', date: '2025-05-03' },
    { id: 106, amount: 3200, status: 'Failed', date: '2025-05-03' },
  ];
  const [open, setOpen] = useState(false);
  const[logout,setLogout]=useState(false);
  const navigate=useNavigate();
  const toggleDrawer = (state) => () => {
    setOpen(state);
  };
  const toggleDialog =(state)=>()=>{
    setLogout(state);
  }
  const handleConfirmLogout = () => {
   // localStorage.removeItem('token'); // Clear session
    setOpen(false);
    navigate('/login');
  };
    return (
        <Box sx={{width:'100vw',overflowX: 'auto',m:0,p:0,minHeight: '100vh',top: 0,
            left: 0,
            right: 0 }}>
      <AppBar  sx={{border:'1px solid red',width:'100vw'}}>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
            </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Stack direction="row" spacing={2}>
          <Button color="inherit" onClick={toggleDialog(true)}>Logout</Button>
          <IconButton
            size="medium"
            // edge="start"
            // color="inherit"
            // aria-label="menu"
            // sx={{ mr: 2 }}
            
          >
            <Avatar variant="square"    sx={{color:"red",bgcolor:"pink"}}>PK</Avatar>

            </IconButton>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 ,p:1 }}
            >
            <Badge badgeContent={3} color="error">
              <NotificationsIcon/>
              </Badge>
</IconButton>
            </Stack>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
      <Box sx={{ p: 2, backgroundColor: '#1976d2', color: '#fff' }}>
      <Typography variant="h6">Menu</Typography>
    </Box>
        <Divider/>
        <List sx={{ width: 250 }}>
          <ListItem button>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemText primary="About" />
          </ListItem>
          <Divider/>
          <ListItem button>
            <ListItemText primary="Statistics" />
          </ListItem>
          
          <Divider/>
          {/* Add more drawer items as needed */}
        </List>
      </Drawer>
      <Dialog open={logout} onClose={toggleDialog(false)}>
        <DialogTitle>Confirm Logout</DialogTitle>
        <DialogContent>Are you sure you want to log out?</DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={handleConfirmLogout} color="error">
            Logout
          </Button>
        </DialogActions>
      </Dialog>
      <Box display="flex" flexWrap="wrap" justifyContent="center" mt={15} p={0} sx={{bgcolor :"red",width:'100vw'}}>
  {transactions.map((txn) => (
    <Card key={txn.id} sx={{ width: 300, m: 2, boxShadow: 3 }}>
      <CardContent>
        <Typography variant="h6">Transaction #{txn.id}</Typography>
        <Typography>Amount: ₹{txn.amount}</Typography>
        <Typography>Title: {txn.status}</Typography>
        <Typography>Date: {txn.date}</Typography>
      </CardContent>
    </Card>
  ))}
</Box>

<Box display="flex"  alignItems="center"
  justifyContent="space-between"
  mt={4}
  px={3}
  py={2}
  borderRadius={2} sx={{bgcolor:"pink"}}>
  <Typography >Balance: ₹20000</Typography>
  <Button variant="contained"
        // onClick={onAddRecord}
      >
        + Add Record
      </Button>
</Box>
</Box>
    );
}
export default Dashboard;