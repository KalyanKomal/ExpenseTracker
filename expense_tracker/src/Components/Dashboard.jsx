import { Container, TextField, Typography,Box,Button,AppBar,Toolbar,IconButton,Drawer, ListItem,List,ListItemText,Divider, Avatar, Stack, Badge,Dialog, DialogTitle, DialogContent, DialogActions} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Dashboard(){
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
</Box>
    );
}
export default Dashboard;