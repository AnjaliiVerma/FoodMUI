import React, {useState} from "react";
import { AppBar, Box, Divider, Drawer, IconButton, Toolbar, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Logo from '../../image/logo.svg'
const Header = () => {
  const[mobileOpen, setMobileOpen]=useState(false);
  //Handle menu click
  const handleDrawerToggle=()=>{
    setMobileOpen(!mobileOpen)
  }
  //menu drawer
  const drawer =(
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
    <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, my:2 }}
            >
            <img src={Logo} alt="logo" height={'70'} width="200"/>
            </Typography>
            <Divider/>
              <ul className="mobile-navigation">
                <li>
                  <NavLink actionClassName="action" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About Page</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
    </Box>
  )
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            <IconButton 
              color="inherit" 
              aria-label="open drawer" 
              edge="start"
              sx={{
                mr:2, 
                display:{sm:"none"}
              }}
              onClick={handleDrawerToggle}
            >
              <MenuOpenIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {/* <RestaurantIcon />
              My Restaurant */}
              <img src={Logo} alt="logo" height={'70'} width="250"/>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/menu"}>Menu</NavLink>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
            <Drawer 
            varient="temporary" 
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display:{
                xs:'block',
                sm:'none', 
                "& .MuiDrawer-paper":{
                  boxSizing:'border-box',
                width:'240px',
                }}
            }}
            >
              {drawer}
            </Drawer>
        </Box>
        <Box >
          <Toolbar/>
        </Box>
      </Box>
    </>
  );
};

export default Header;
