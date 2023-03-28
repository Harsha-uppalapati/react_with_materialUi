import * as React from "react";
import "./Navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";
import { Typography, AppBar, Box, Toolbar, Menu, IconButton, Container, Avatar, Button, Tooltip, MenuItem, CardContent, Card } from "@mui/material";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
  logo: {
    color: "#00317B",
    fontSize: "25px",
    fontWeight: "600",
    marginLeft: "30px",
  },
});
const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar
      elevation={0}
      position="static"
      style={{
        background: "#fff",
        color: "black",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar>
          <Typography variant="p" margin={"20px 0px 0 25px"} className={classes.logo}>
            allodoc
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="profile">
              <IconButton>
                <Avatar alt="Remy Sharp" src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg" />
              </IconButton>
            </Tooltip>
          </Box>
          <Box>
            <Typography
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace Plus Jakarta Display",
                color: "#14161A",
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "14px",
              }}
            >
              Ashrae Freeman
            </Typography>
            <Typography
              href="/"
              sx={{
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace Plus Jakarta Display",
                color: "#A4ABB7",
                fontSize: 11,
              }}
            >
              Ashrae Freeman
            </Typography>
          </Box>
          <Button
            variant="outlined"
            sx={{
              width: "110px",
              height: "40px",
              border: "1px solid #00317B",
              borderRadius: " 10px",
              color: "#00317B",
              fontSize: "12px",
              marginRight: "23px",
              marginLeft: "40px",
            }}
          >
            Logout
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
