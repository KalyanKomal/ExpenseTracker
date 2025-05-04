import { Container, TextField, Typography,Box,Button,AppBar,Toolbar,IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';


function Dashboard(){
    return (
        <Box   sx={{width:'100vw',overflowX: 'auto',m:0,p:0,minHeight: '100vh',top: 0,
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
          >
            <MenuIcon />
            </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
</Box>
    );
}
export default Dashboard;