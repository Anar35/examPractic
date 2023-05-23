import { Box, Grid } from "@mui/material";
import React from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EastIcon from "@mui/icons-material/East";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import LanguageIcon from "@mui/icons-material/Language";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item lg={5} md={6} sm={6}>
              <h6>About Us</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore dolore magna aliqua.
              </p>
              <p style={{ paddingTop: "20px" }}>
                Copyright ©2023 All rights reserved | This template is made with{" "}
                <FavoriteBorderIcon
                  style={{ color: "#fab700", fontSize: "18px" }}
                />{" "}
                by{" "}
                <a href="" style={{ color: "#fab700", textDecoration: "none" }}>
                  Colorlib
                </a>
              </p>
            </Grid>
            <Grid item lg={5} md={6} sm={6}>
              <h6>Newsletter</h6>
              <p>Stay update with our latest</p>
              <form>
                <input type="email" placeholder="Enter Email" />
                <button>
                  <EastIcon />
                </button>
              </form>
            </Grid>
            <Grid item lg={2} md={6} sm={6}>
              <h6>Follow Us</h6>
              <p>Let us be social</p>
              <div className="socials">
                <a className="social" href="#">
                  <FacebookIcon style={{ fontSize: "18px" }} />
                </a>
                <a className="social" href="#">
                  <TwitterIcon style={{ fontSize: "18px" }} />
                </a>
                <a className="social" href="#">
                  <SportsBasketballIcon style={{ fontSize: "18px" }} />
                </a>
                <a className="social" href="#">
                  <LanguageIcon style={{ fontSize: "18px" }} />
                </a>
              </div>
            </Grid>
          </Grid>
        </Box>
      </div>
    </footer>
  );
};

export default Footer;
