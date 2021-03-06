import classes from "./Teams.module.scss";
import Typography from "@material-ui/core/Typography";
import SingleCard from "./SingleCard";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

const teamData = [
  {
    id: 1,
    name: "Ahsan Ullah",
    email: "ahsan452@g,gmail.com",
    position: "CEO",
    image: "/dealer/car2.jpeg",
  },
  {
    id: 2,
    name: "Ahsan Ullah",
    email: "ahsan452@g,gmail.com",
    position: "CEO",
    image: "/dealer/car2.jpeg",
  },
  {
    id: 3,
    name: "Ahsan Ullah",
    email: "ahsan452@g,gmail.com",
    position: "CEO",
    image: "/dealer/car2.jpeg",
  },
  {
    id: 4,
    name: "Ahsan Ullah",
    email: "ahsan452@g,gmail.com",
    position: "CEO",
    image: "/dealer/car2.jpeg",
  },
  {
    id: 5,
    name: "Ahsan Ullah",
    email: "ahsan452@g,gmail.com",
    position: "CEO",
    image: "/dealer/car2.jpeg",
  },
  {
    id: 6,
    name: "Ahsan Ullah",
    email: "ahsan452@g,gmail.com",
    position: "CEO",
    image: "/dealer/car2.jpeg",
  },
  {
    id: 7,
    name: "Ahsan Ullah",
    email: "ahsan452@g,gmail.com",
    position: "CEO",
    image: "/dealer/car2.jpeg",
  },
  {
    id: 8,
    name: "Ahsan Ullah",
    email: "ahsan452@g,gmail.com",
    position: "CEO",
    image: "/dealer/car2.jpeg",
  },
];

const Directors = () => {
  return (
    <div style={{ padding: "50px 0" }}>
      <Container>
        <Typography
          variant="h6"
          color="initial"
          style={{ fontSize: "28px", color: "#13488e", marginBottom: "15px" }}
        >
          Board of Directors
        </Typography>

        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
        >
          {teamData?.map((team, index) => (
            <Grid key={team.id} item md={3} lg={3} sm={6} xs={12}>
              <SingleCard data={team} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default Directors;
