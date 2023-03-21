import { makeStyles } from "@material-ui/styles";
import {
  Box,
  Card,
  List,
  ListItem,
  Typography,
  CardContent,
  Button,
} from "@mui/material";
import React from "react";
const useStyles = makeStyles({
  card: {
    width: "75%",
    marginTop: "30px",
    padding: "60px",
    borderRadius: "20px",
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  expertise: {
    borderBottom: "1.5px solid #eeeeee",
    padding: "30px 0",
  },
  expertiseBox: {
    display: "flex",
    paddingTop: "20px",
  },
  expertiseSpan: {
    padding: "15px",
    backgroundColor: "rgba(0, 100, 250, 0.1)",
    borderRadius: "10px",
    margin: "0 20px 10px 0",
    color: "rgb(0, 100, 250)",
    fontWeight: "bold",
  },
  listItem: {
    color: "#aaa",
  },
  containerGrid: {
    width: "79%",
    marginTop: "30px",
    borderRadius: "20px",
    display: "flex",
    padding: "30px",
    alignItems: "center",
    // margin: "20px,0px,",
  },
});
const Profile = () => {
  const classes = useStyles();
  const expertises = [
    "Orthodontist",
    "General Dentist (DDS)",
    "Periodontist",
    "General Dentist (DDS)",
  ];
  const medicalLicenses = [
    { number: "XX-00000-XX", country: "United States" },
    { number: "XX-00000-XX", country: "India" },
  ];

  return (
    <>
      <Box className={classes.grid} sx={{ minWidth: "275px" }}>
        <Card className={classes.containerGrid} elevation={0}>
          <Box>
            <Box
              component="img"
              sx={{
                height: 200,
                border: "1px",
                borderRadius: "20px",
                width: 200,
                // maxHeight: { xs: 233, md: 167 },
                // maxWidth: { xs: 350, md: 250 },
              }}
              alt="img"
              src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg"
            />
          </Box>

          <Box
            sx={{
              height: 200,
              width: 220,
              display: "flex",
              flexDirection: "column",
              paddingLeft: "50px",
            }}
          >
            <Typography
              variant="p"
              fontSize="30px"
              component="div"
              fontWeight="bold"
            >
              Dr. Will Martin
            </Typography>
            <Typography
              color="#aaa"
              component="div"
              variant="h5"
              paddingTop="20px"
            >
              Chaines medicen
            </Typography>
            <Typography
              color="#5aa52c"
              component="div"
              variant="p"
              paddingTop="80px"
              fontSize="18px"
              fontWeight="550"
            >
              2 Slots Avalible Today
            </Typography>
          </Box>

          <Box
            sx={{
              height: 200,
              width: 300,
              display: "flex",
              flexDirection: "column",
              paddingLeft: "85px",
            }}
          >
            <Typography
              variant="p"
              fontSize="18px"
              component="div"
              paddingTop="20px"
              fontWeight="bold"
            >
              Jupiter Hospital,
            </Typography>
            <Typography
              color="#aaa"
              component="div"
              paddingTop="15px"
              fontSize="20px"
            >
              514, Avalanche Avenue,
            </Typography>
            <Typography
              color="#aaa"
              component="div"
              variant="p"
              paddingTop="8px"
              fontSize="20px"
            >
              waverly St. Louisiana, USA
            </Typography>
            <Typography
              color="#0066ff"
              component="div"
              variant="p"
              paddingTop="60px"
              fontSize="18px"
              fontWeight="550"
              sx={{ textDecoration: "underline" }}
            >
              Get Directions
            </Typography>
          </Box>

          <Box
            sx={{
              height: 178,
              width: 230,
              display: "flex",
              justifyContent: "center",
              alignItems: "end",
              paddingLeft: "50px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                height: "50px",
                width: "90%",
                borderRadius: "10px",
                borderWidth: "1px",
                fontSize: "10px",
                backgroundColor: "#00317b",
              }}
            >
              Book Slot
            </Button>
          </Box>
        </Card>
      </Box>
      <Box className={classes.grid}>
        <Card className={classes.card} elevation={0}>
          <Typography variant="h4">Profile</Typography>
          <Box className={classes.expertise}>
            <Typography variant="h6">Expertise</Typography>
            <Box className={classes.expertiseBox} flexWrap="wrap">
              {expertises.map((e, i) => {
                return (
                  <Box
                    key={i}
                    component="div"
                    className={classes.expertiseSpan}
                  >
                    {e}
                  </Box>
                );
              })}
            </Box>
          </Box>
          <Box className={classes.expertise}>
            <Typography variant="h6">Medical License</Typography>
            <Box className={classes.expertiseBox}>
              <List>
                {medicalLicenses.map((e, i) => {
                  return (
                    <ListItem key={i}>
                      {++i} &nbsp;
                      <Typography className={classes.listItem}>
                        {" "}
                        Number: &nbsp;
                      </Typography>{" "}
                      {e.number} &nbsp;&nbsp;&nbsp;&nbsp;{" "}
                      <Typography className={classes.listItem}>
                        Country:&nbsp;
                      </Typography>{" "}
                      {e.country}
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Profile;
