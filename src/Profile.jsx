import { makeStyles } from "@material-ui/styles";
import { Box, Card, List, ListItem, Typography } from "@mui/material";
import React from "react";
const useStyles = makeStyles({
  card: {
    width: "75%",
    marginTop: "30px",
    padding: "60px",
    borderRadius: "15px",
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
});
const Profile = () => {
  const classes = useStyles();
  const expertises = ["Orthodontist", "General Dentist (DDS)", "Periodontist", "General Dentist (DDS)"];
  const medicalLicenses = [
    { number: "XX-00000-XX", country: "United States" },
    { number: "XX-00000-XX", country: "India" },
  ];
  return (
    <Box className={classes.grid}>
      <Card className={classes.card} elevation={0}>
        <Typography variant="h4">Profile</Typography>
        <Box className={classes.expertise}>
          <Typography variant="h6">Expertise</Typography>
          <Box className={classes.expertiseBox} flexWrap="wrap">
            {expertises.map((e, i) => {
              return (
                <Box key={i} component="div" className={classes.expertiseSpan}>
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
                    {++i} &nbsp;<Typography className={classes.listItem}> Number: &nbsp;</Typography> {e.number} &nbsp;&nbsp;&nbsp;&nbsp; <Typography className={classes.listItem}>Country:&nbsp;</Typography> {e.country}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Profile;
