import {
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import { setLogOut } from "../../redux/features/authSlice";
import jwt_decode from "jwt-decode";
import { clearSavedCollegeName } from "../../redux/features/collegeSlice";

export default function NavBar() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const { user } = useSelector((state) => state.auth);
  const loggedInUser = user?.user?._id;
  const dispatch = useDispatch();
  const userToken = user?.token;

  if (userToken) {
    const decoded = jwt_decode(userToken);
    if (decoded.exp * 1000 < new Date().getTime()) {
      console.log("jwt expired");
      dispatch(setLogOut());
      dispatch(clearSavedCollegeName());
    }
  }

  //console.log(process.env.REACT_APP_URL)

  return (
    <Box className=" navBar w-screen h-[80px]">
      {/* container */}
      <Box className="flex justify-between items-center w-full h-full">
        {/* leftSide */}
        <Box className="flex items-center ml-4">
          <img src={logo} alt="logo" className="h-[70px] rounded-[50%] " />
          <Typography className="text-gray-300 text-2xl ml-3">
            College Finder
          </Typography>
        </Box>

        {/* rightSide */}
        <Box className="md:flex mr-4 hidden items-center">
          <Typography className="text-gray-300 text-sm md:text-base mr-3 ml-1 hover:text-white">
            <Link to="/">Home</Link>
          </Typography>
          {loggedInUser && (
            <Typography className="text-gray-300 text-sm md:text-base mr-3 ml-1 hover:text-white">
              <Link to="/dashboard">Dashboard</Link>
            </Typography>
          )}
          {!loggedInUser && (
            <Typography className="text-gray-300 text-sm md:text-base mr-3 ml-1 hover:text-white">
              <Link to="/signup">Sign Up</Link>
            </Typography>
          )}
          {!loggedInUser && (
            <Typography className="text-gray-300 text-sm md:text-base mr-3 ml-1 hover:text-white">
              <Link to="/login">Log In</Link>
            </Typography>
          )}
          {loggedInUser && (
            <Button
              variant="contained"
              className="text-black bg-gray-300 text-sm md:text-base mr-3 ml-1 hover:text-blue-600 hover:bg-white"
              onClick={() => {
                dispatch(setLogOut());
                dispatch(clearSavedCollegeName());
              }}
            >
              Log Out
            </Button>
          )}
        </Box>

        {/* mobile menu right side */}
        <Box className="md:hidden block">
          <React.Fragment>
            <IconButton onClick={() => setOpenDrawer(true)}>
              <MenuIcon className="text-3xl text-gray-300" />
            </IconButton>
            <Drawer
              anchor="top"
              open={openDrawer}
              onClose={() => setOpenDrawer(false)}
            >
              <List>
                {/* Each Item */}
                <ListItem
                  onClick={() => setOpenDrawer(false)}
                  component={Link}
                  to="/"
                >
                  <ListItemButton>
                    <ListItemIcon>
                      <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                  </ListItemButton>
                </ListItem>

                {/* Each Item */}
                {loggedInUser && (
                  <ListItem
                    onClick={() => setOpenDrawer(false)}
                    component={Link}
                    to="/dashboard"
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary="Dashboard" />
                    </ListItemButton>
                  </ListItem>
                )}

                {/* Each Item */}
                {!loggedInUser && (
                  <ListItem
                    onClick={() => setOpenDrawer(false)}
                    component={Link}
                    to="/signup"
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <PersonIcon />
                      </ListItemIcon>
                      <ListItemText primary="Sign Up" />
                    </ListItemButton>
                  </ListItem>
                )}

                {/* Each Item */}
                {!loggedInUser && (
                  <ListItem
                    onClick={() => setOpenDrawer(false)}
                    component={Link}
                    to="/login"
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <LoginIcon />
                      </ListItemIcon>
                      <ListItemText primary="Log In" />
                    </ListItemButton>
                  </ListItem>
                )}

                {loggedInUser && (
                  <ListItem
                    onClick={() => {
                      setOpenDrawer(false);
                      dispatch(setLogOut());
                      dispatch(clearSavedCollegeName());
                    }}
                    component={Link}
                    to="/"
                  >
                    <ListItemButton>
                      <ListItemIcon>
                        <LogoutIcon />
                      </ListItemIcon>
                      <ListItemText primary="Log Out" />
                    </ListItemButton>
                  </ListItem>
                )}
              </List>
            </Drawer>
          </React.Fragment>
        </Box>
      </Box>
    </Box>
  );
}
