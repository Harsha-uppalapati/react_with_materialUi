import { makeStyles } from "@material-ui/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LensIcon from "@material-ui/icons/Lens";
import { Box, Button, Card, CardMedia, List, ListItem, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";
import CarouselSlide from "react-material-ui-carousel";
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
const useStyles = makeStyles({
  card: {
    width: "73.3%",
    marginTop: "30px",
    marginBottom: "70px",
    padding: "60px",
    borderRadius: "20px",
  },
  grid: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  expertise: {
    borderBottom: "1.5px solid #E8EEF8",
    padding: "30px 0",
    fontWeight: 550,
  },
  clinicH6: {
    padding: "40px 0",
  },
  experience: {
    paddingTop: "20px 0",
    fontWeight: 550,
  },
  expertiseBox: {
    display: "flex",
    paddingTop: "25px",
  },
  expertiseSpan: {
    padding: "15px",
    backgroundColor: "#E0ECFF",
    borderRadius: "10px",
    margin: "0 20px 10px 0",
    color: "#0066FF",
    fontWeight: "bold",
  },
  listItem: {
    color: "#A4ABB7",
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
    color: "#A4ABB7",
    fontSize: "12px",
  },
  experienceList: {
    padding: "20px 0",
    borderBottom: "1.5px solid #E8EEF8",
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
  containerGrid: {
    width: "79%",
    marginTop: "30px",
    borderRadius: "20px",
    display: "flex",
    padding: "25px",
    alignItems: "center",
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
    <>
      <Box className={classes.grid} sx={{ minWidth: "275px" }}>
        <Card className={classes.containerGrid} elevation={0} borderRadius="20px">
          <Box>
            <Box
              component="img"
              sx={{
                height: 180,
                border: "1px",
                borderRadius: "20px",
                width: 180,
              }}
              alt="img"
              src="https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "50px",
              width: "25%",
            }}
          >
            <Box>
              <Typography variant="p" fontSize="25px" fontWeight="bold" color="#14161A">
                Dr. Will Martin
              </Typography>
              <Typography color="#A4ABB7" paddingTop="15px" fontSize="20px">
                Chinese medicine
              </Typography>
            </Box>
            <Typography color="#5AA52C" paddingTop="70px" fontSize="16px" fontWeight="500">
              2 Slots Avalible Today
            </Typography>
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "25%",
            }}
          >
            <Box>
              <Typography fontSize="16px" paddingTop="10px" fontWeight="bold" color={"#14161A"}>
                Jupiter Hospital,
              </Typography>
              <Typography color="#A4ABB7" paddingTop="10px" fontSize="18px">
                514, Avalanche Avenue, waverly St, Louisiana, USA
              </Typography>
            </Box>
            <Typography color="#0066FF" paddingTop="45px" fontSize="18px" fontWeight="550" sx={{ textDecoration: "underline" }}>
              Get Directions
            </Typography>
          </Box>

          <Box
            sx={{
              width: 230,
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
              paddingLeft: "50px",
              height: "160px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                height: "43px",
                width: "75%",
                borderRadius: "10px",
                textTransform: "capitalize",
                fontSize: "11px",
                backgroundColor: "#00317B",
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
              <Box style={{ width: "46%", margin: "0 60px" }}>
                <Box style={{ display: "flex", justifyContent: "space-between", borderBottom: "1.5px solid #E8EEF8" }}>
                  <Box style={{ width: "50%" }}>
                    <Typography style={{ fontSize: "17px", color: "#14161A", fontWeight: "bold", paddingBottom: "15px" }}>
                      <PlaceOutlinedIcon style={{ marginBottom: "-5px" }} /> Jupiter Hospital,
                    </Typography>
                    <Typography style={{ fontSize: "11px", color: "#A4ABB7", width: "65% " }}>514, Avalanche Avenue waverly St, Louisiana, USA</Typography>
                    <Typography style={{ color: "#0066FF", fontSize: "13px", paddingTop: "10px", paddingBottom: "10px", textDecoration: "underline" }}>Get Direction</Typography>
                  </Box>
                  <Box style={{ width: "50%" }}>
                    <Typography style={{ fontSize: "17px", color: "#14161A", fontWeight: "bold", paddingBottom: "15px" }}>Clinic Contact Info</Typography>
                    <Typography style={{ color: "#0066FF", fontSize: "13px", paddingBottom: "10px" }}>+966-44400500</Typography>
                  </Box>
                </Box>
                <Box>
                  <Box style={{ display: "flex", justifyContent: "space-between", paddingTop: "30px" }}>
                    <Typography style={{ fontSize: "17px", color: "#14161A", fontWeight: "bold", paddingBottom: "15px" }}>Clinic Hours</Typography>
                    <Typography className={classes.expandIcon}>
                      <ExpandMoreIcon className={classes.expandIcon} />
                    </Typography>
                  </Box>
                  <Box style={{ display: "flex" }}>
                    <Typography style={{ fontSize: "12px", color: "#81CA55", fontWeight: "500", display: "flex" }}>
                      Open
                      <Typography>
                        <LensIcon style={{ fontSize: "7px", color: "#14161A", marginBottom: "5px", padding: "0 30px" }} />
                      </Typography>
                    </Typography>
                    <Box>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px" }}>Today,Tuesday</Typography>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px", paddingTop: "7px" }}>Wednesday</Typography>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px", paddingTop: "7px" }}>Thursday</Typography>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px", paddingTop: "7px" }}>Friday</Typography>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px", paddingTop: "7px" }}>Saturday</Typography>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px", paddingTop: "7px" }}>Sunday</Typography>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px", paddingTop: "7px" }}>Monday</Typography>
                    </Box>
                    <Typography>
                      <LensIcon style={{ fontSize: "7px", color: "#14161A", marginBottom: "5px", padding: "0 30px" }} />
                    </Typography>
                    <Box>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px" }}>8:30-20:00</Typography>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px", paddingTop: "7px" }}>8:30-20:00</Typography>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px", paddingTop: "7px" }}>8:30-20:00</Typography>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px", paddingTop: "7px" }}>8:30-20:00</Typography>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px", paddingTop: "7px" }}>8:30-20:00</Typography>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px", paddingTop: "7px" }}>8:30-20:00</Typography>
                      <Typography style={{ fontWeight: "bold", fontSize: "12px", paddingTop: "7px" }}>8:30-20:00</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
    </>
  );
};

export default Profile;
