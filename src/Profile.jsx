import { makeStyles } from "@material-ui/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LensIcon from "@material-ui/icons/Lens";
import { Box, Card, CardContent, CardMedia, List, ListItem, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CarouselSlide from "react-material-ui-carousel";

import React, { useState } from "react";
const useStyles = makeStyles({
  card: {
    width: "75%",
    marginTop: "30px",
    marginBottom: "70px",
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
  clinicH6: {
    padding: "40px 0",
  },
  experience: {
    paddingTop: "20px 0",
  },
  expertiseBox: {
    display: "flex",
    paddingTop: "25px",
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
  experienceH6: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  expandIcon: {
    fontSize: "40px",
    marginBottom: "-8px",
  },
  experienceListItem: {
    color: "#aaa",
    fontSize: "13px",
  },
  experienceList: {
    padding: "20px 0",
    borderBottom: "1.5px solid #eeeeee",
  },
  dot: {
    fontSize: "7px",
  },
  corouselSlide: {
    height: "350px",
    width: "350px",
    borderRadius: "20px",
  },
  nextArrow: {
    color: "blue",
  },
  clinic: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingTop: "40px",
  },
  cliniccorousel: {
    width: "350px",
    height: "350px",
  },
});
const Profile = () => {
  const classes = useStyles();
  const expertises = ["Orthodontist", "General Dentist (DDS)", "Periodontist", "General Dentist (DDS)"];
  const memberships = ["Orthodontist", "General Dentist (DDS)", "Periodontist", "General Dentist (DDS)"];
  const medicalLicenses = [
    { number: "XX-00000-XX", country: "United States" },
    { number: "XX-00000-XX", country: "India" },
  ];

  const experience = [
    { name: "MAEER's Institute of Sciences", designation: "Pediatric Dentist", hours: "Full-Time", period: "May 2018 - Dec 2019", country: "India", place: "Pune" },
    { name: "MAEER's Institute of Sciences", designation: "Pediatric Dentist", hours: "Full-Time", period: "May 2018 - Dec 2019", country: "India", place: "Pune" },
    { name: "MAEER's Institute of Sciences", designation: "Pediatric Dentist", hours: "Full-Time", period: "May 2018 - Dec 2019", country: "India", place: "Pune" },
    { name: "MAEER's Institute of Sciences", designation: "Pediatric Dentist", hours: "Full-Time", period: "May 2018 - Dec 2019", country: "India", place: "Pune" },
  ];
  const education = [
    { name: "MAEER's College of Medical Science", specialization: "Pediatric Dentistry", course: "M.D", period: "May 2018 - Dec 2019", country: "India" },
    { name: "MAEER's Institute of Sciences", specialization: "Dentistry", course: "M.B.B.S", period: "May 2018 - Dec 2019", country: "India" },
  ];

  const pictures = [
    { image: "https://wordpress.wbur.org/wp-content/uploads/2020/06/doctor-office-1000x667.jpg" },
    { image: "https://content.jdmagicbox.com/comp/kolkata/h7/033pxx33.xx33.150606181529.y6h7/catalogue/mshaque-clinic-khidirpur-kolkata-gynaecologist-and-obstetrician-doctors-9zwywiuspd.jpg?clr=444422" },
    { image: "https://static.wixstatic.com/media/619db9_689b4038546c4087b3e20333189daf3e~mv2.jpg/v1/fill/w_320,h_318,q_90/619db9_689b4038546c4087b3e20333189daf3e~mv2.jpg" },
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
          <Box>
            <List>
              {medicalLicenses.map((e, i) => {
                return (
                  <ListItem key={i}>
                    {++i}. &nbsp;<Typography className={classes.listItem}> Number: &nbsp;</Typography> {e.number} &nbsp;&nbsp;&nbsp;&nbsp; <Typography className={classes.listItem}>Country:&nbsp;</Typography> {e.country}
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
        <Box className={classes.experience}>
          <Box className={classes.experienceH6}>
            <Typography variant="h6">Experience</Typography>
            <Typography className={classes.expandIcon}>
              <ExpandMoreIcon className={classes.expandIcon} />
            </Typography>
          </Box>
          <Box className={classes.experienceBox}>
            <List>
              {experience.map((e, i) => {
                return (
                  <List className={classes.experienceList} key={i}>
                    <ListItem>{e.name}</ListItem>
                    <ListItem className={classes.experienceListItem}>
                      {e.designation}&nbsp;&nbsp;
                      <LensIcon className={classes.dot} />
                      &nbsp;&nbsp;{e.hours}
                    </ListItem>
                    <ListItem className={classes.experienceListItem}>
                      {e.period}&nbsp;&nbsp;
                      <LensIcon className={classes.dot} />
                      &nbsp;&nbsp;
                      {e.country}&nbsp;&nbsp;
                      <LensIcon className={classes.dot} />
                      &nbsp;&nbsp;{e.place}
                    </ListItem>
                  </List>
                );
              })}
            </List>
          </Box>
        </Box>
        <Box className={classes.expertise}>
          <Typography variant="h6">Memberships</Typography>
          <Box>
            <List>
              {memberships.map((e, i) => {
                return (
                  <ListItem key={i}>
                    {++i}. &nbsp;<Typography> {e} </Typography>
                  </ListItem>
                );
              })}
            </List>
          </Box>
        </Box>
        <Box className={classes.expertise}>
          <Box className={classes.experienceH6}>
            <Typography variant="h6">Education</Typography>
            <Typography className={classes.expandIcon}>
              <ExpandMoreIcon className={classes.expandIcon} />
            </Typography>
          </Box>
          <Box className={classes.experienceBox}>
            <List>
              {education.map((e, i) => {
                return (
                  <List key={i}>
                    <ListItem>{e.name}</ListItem>
                    <ListItem className={classes.experienceListItem}>
                      {e.course}&nbsp;&nbsp;
                      <LensIcon className={classes.dot} />
                      &nbsp;&nbsp;{e.specialization}
                    </ListItem>
                    <ListItem className={classes.experienceListItem}>
                      {e.period}&nbsp;&nbsp;
                      <LensIcon className={classes.dot} />
                      &nbsp;&nbsp;
                      {e.country}
                    </ListItem>
                  </List>
                );
              })}
            </List>
          </Box>
        </Box>
        <Box className={classes.clinicH6}>
          <Box className={classes.experienceH6}>
            <Typography variant="h6">Clinic</Typography>
            <Typography className={classes.expandIcon}>
              <ExpandMoreIcon className={classes.expandIcon} />
            </Typography>
          </Box>
          <Box className={classes.clinic}>
            <Box className={classes.cliniccorousel}>
              <Carousel autoplay animation={"slide"}>
                {pictures.map(({ image, title }) => (
                  <CarouselSlide key={image} className={classes.corouselSlide}>
                    <CardMedia
                      image={image}
                      style={{
                        height: "350px",
                        width: "350px",
                      }}
                    />
                  </CarouselSlide>
                ))}
              </Carousel>
            </Box>
            <Box></Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default Profile;
