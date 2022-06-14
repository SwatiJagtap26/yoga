import "./About.css";
import Advertise from "../Customs/advertise";
import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const About = () => {
  return (
    <div>
      <Advertise />
      <div className="about-main">
        <small className="about-head">Yoga Asanas</small>
        <h1>CONTROL YOUR BODY TO FREE YOUR SOUL</h1>
        <div className="about-box">
          <div className="aboutus-img"></div>
          <div>
            <div className="about-box-info">
              <h3>Body & Mind Balance</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className="about-box-info">
              <h3>Healthy Daily Life</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
            <div className="about-box-info">
              <h3>Improves your flexibility</h3>
              <p>
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Material UI using */}

      <div className="feedback-ad">
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="240"
              image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Maria Smantha
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="240"
              image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lisa Cudrow
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
            </CardActions>
          </Card>
        </div>
        <div>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="240"
              image="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                John Smith
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default About;
