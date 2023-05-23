import React, { useEffect } from "react";
import style from "./index.module.css";
import { useBlogsContext } from "../../context/BlogsContext";
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { getAllBlogs } from "../../Api/httpRequests";
import moment from "moment";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import DiamondIcon from "@mui/icons-material/Diamond";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const [blogs, setBlogs] = useBlogsContext();

  useEffect(() => {
    getAllBlogs().then((data) => setBlogs(data));
  }, [setBlogs]);
  return (
    <>
      <section id={style.hero}>
        <div className={style.heroMain}>
          <h6 className={style.h6}>Openning on 21st February, 2018</h6>
          <h1 className={style.h1}>Exhibition on Modern Era</h1>
          <p className={style.heroP}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim. sed do eiusmod tempor incididunt..
          </p>
          <button className={style.heroBtn}>Get Started</button>
        </div>
      </section>
      <section id={style.service}>
        <div className="container">
          <div style={{ textAlign: "center", padding: "0 15px 70px" }}>
            <h1 style={{ marginBottom: "10px", fontSize: "36px" }}>
              Our Offered Services
            </h1>
            <p
              style={{
                color: "#777777",
                marginBottom: "16px",
                fontSize: "14px",
              }}
            >
              Who are in extremely love with eco friendly system.
            </p>
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item lg={4} md={6}>
                <Card
                  sx={{ maxWidth: 345 }}
                  className={style.serviceCard}
                  style={{
                    boxShadow: "none",
                    borderRadius: "0",
                    transition: ".3s",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="..."
                    image="https://preview.colorlib.com/theme/security/img/s1.jpg"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="a"
                      href="#"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Basic & Common Repairs
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Computer users and programmers have become so accustomed
                      to using Windows, even for the changing capabilities and
                      the appearances of the graphical.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4} md={6}>
                <Card
                  sx={{ maxWidth: 345 }}
                  className={style.serviceCard}
                  style={{
                    boxShadow: "none",
                    borderRadius: "0",
                    transition: ".3s",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="..."
                    image="https://preview.colorlib.com/theme/security/img/s2.jpg"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="a"
                      href="#"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Brake Repairs & Services
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Computer users and programmers have become so accustomed
                      to using Windows, even for the changing capabilities and
                      the appearances of the graphical.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4} md={6}>
                <Card
                  className={style.serviceCard}
                  sx={{ maxWidth: 345 }}
                  style={{
                    boxShadow: "none",
                    borderRadius: "0",
                    transition: ".3s",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="..."
                    image="https://preview.colorlib.com/theme/security/img/s3.jpg"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="a"
                      href="#"
                      style={{ color: "black", textDecoration: "none" }}
                    >
                      Preventive Maintenance
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Computer users and programmers have become so accustomed
                      to using Windows, even for the changing capabilities and
                      the appearances of the graphical.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </section>
      <section id={style.feature}>
        <div className="container">
          <div style={{ textAlign: "center", padding: "0 15px 40px" }}>
            <h1 style={{ fontSize: "36px", marginBottom: "20px" }}>
              Some Features that Made us Unique
            </h1>
            <p
              style={{
                color: "#777777",
                marginBottom: "16px",
                fontSize: "14px",
              }}
            >
              Who are in extremely love with eco friendly system.
            </p>
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item lg={4} md={6}>
                <Card
                  className={style.featureCard}
                  sx={{ minWidth: 275 }}
                  style={{
                    boxShadow: "none",
                    borderRadius: "0",
                    transition: ".4s",
                  }}
                >
                  <CardContent style={{ padding: "0" }}>
                    <Typography
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "20px 0",
                        fontWeight: "600",
                      }}
                      variant="h6"
                      component="div"
                    >
                      <PermIdentityIcon
                        style={{ marginRight: "15px", fontSize: "25px" }}
                      />
                      Expert Technicians
                    </Typography>
                    <Typography
                      style={{ marginBottom: "16px" }}
                      color="text.secondary"
                    >
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4} md={6}>
                <Card
                  className={style.featureCard}
                  sx={{ minWidth: 275 }}
                  style={{
                    boxShadow: "none",
                    borderRadius: "0",
                    transition: ".4s",
                  }}
                >
                  <CardContent style={{ padding: "0" }}>
                    <Typography
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "20px 0",
                        fontWeight: "600",
                      }}
                      variant="h6"
                      component="div"
                    >
                      <NewspaperIcon
                        style={{ marginRight: "15px", fontSize: "25px" }}
                      />
                      Professional Service
                    </Typography>
                    <Typography
                      style={{ marginBottom: "16px" }}
                      color="text.secondary"
                    >
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4} md={6}>
                <Card
                  className={style.featureCard}
                  sx={{ minWidth: 275 }}
                  style={{
                    boxShadow: "none",
                    borderRadius: "0",
                    transition: ".4s",
                  }}
                >
                  <CardContent style={{ padding: "0" }}>
                    <Typography
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "20px 0",
                        fontWeight: "600",
                      }}
                      variant="h6"
                      component="div"
                    >
                      <LocalPhoneIcon
                        style={{ marginRight: "15px", fontSize: "25px" }}
                      />
                      Great Support
                    </Typography>
                    <Typography
                      style={{ marginBottom: "16px" }}
                      color="text.secondary"
                    >
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4} md={6}>
                <Card
                  className={style.featureCard}
                  sx={{ minWidth: 275 }}
                  style={{
                    boxShadow: "none",
                    borderRadius: "0",
                    transition: ".4s",
                  }}
                >
                  <CardContent style={{ padding: "0" }}>
                    <Typography
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "20px 0",
                        fontWeight: "600",
                      }}
                      variant="h6"
                      component="div"
                    >
                      <RocketLaunchIcon
                        style={{ marginRight: "15px", fontSize: "25px" }}
                      />
                      Technical Skills
                    </Typography>
                    <Typography
                      style={{ marginBottom: "16px" }}
                      color="text.secondary"
                    >
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4} md={6}>
                <Card
                  className={style.featureCard}
                  sx={{ minWidth: 275 }}
                  style={{
                    boxShadow: "none",
                    borderRadius: "0",
                    transition: ".4s",
                  }}
                >
                  <CardContent style={{ padding: "0" }}>
                    <Typography
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "20px 0",
                        fontWeight: "600",
                      }}
                      variant="h6"
                      component="div"
                    >
                      <DiamondIcon
                        style={{ marginRight: "15px", fontSize: "25px" }}
                      />
                      Highly Recomended
                    </Typography>
                    <Typography
                      style={{ marginBottom: "16px" }}
                      color="text.secondary"
                    >
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item lg={4} md={6}>
                <Card
                  className={style.featureCard}
                  sx={{ minWidth: 275 }}
                  style={{
                    boxShadow: "none",
                    borderRadius: "0",
                    transition: ".4s",
                  }}
                >
                  <CardContent style={{ padding: "0" }}>
                    <Typography
                      style={{
                        display: "flex",
                        alignItems: "center",
                        margin: "20px 0",
                        fontWeight: "600",
                      }}
                      variant="h6"
                      component="div"
                    >
                      <ChatBubbleOutlineIcon
                        style={{ marginRight: "15px", fontSize: "25px" }}
                      />
                      Positive Reviews
                    </Typography>
                    <Typography
                      style={{ marginBottom: "16px" }}
                      color="text.secondary"
                    >
                      Usage of the Internet is becoming more common due to rapid
                      advancement of technology and power.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </div>
      </section>
      <section id={style.facts}>
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className={style.count}>2536</h1>
              <p>Projects Completed</p>
            </div>
            <div className="col">
              <h1 className={style.count}>6784</h1>
              <p>Really Happy Clients</p>
            </div>
            <div className="col">
              <h1 className={style.count}>1059</h1>
              <p>Total Tasks Completed</p>
            </div>
            <div className="col">
              <h1 className={style.count}>2239</h1>
              <p>Cups of Coffee Taken</p>
            </div>
            <div className="col">
              <h1 className={style.count}>434</h1>
              <p>In House Professionals</p>
            </div>
          </div>
        </div>
      </section>
      <section id={style.gallery}>
        <div className="container">
          <div style={{ textAlign: "center", padding: "0 15px 70px" }}>
            <h1
              style={{
                marginBottom: "10px",
                fontSize: "36px",
                fontWeight: "700",
              }}
            >
              Latest From Our Gallery
            </h1>
            <p
              style={{
                color: "#777777",
                marginBottom: "16px",
                fontSize: "15px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
            </p>
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item lg={7} md={7}>
                <img
                  src="https://preview.colorlib.com/theme/security/img/g1.jpg"
                  alt="1"
                />
              </Grid>
              <Grid item lg={5} md={5}>
                <img
                  src="https://preview.colorlib.com/theme/security/img/g2.jpg"
                  alt="2"
                />
              </Grid>
              <Grid item lg={4} md={4}>
                <img
                  src="https://preview.colorlib.com/theme/security/img/g3.jpg"
                  alt="3"
                />
              </Grid>
              <Grid item lg={4} md={4}>
                <img
                  src="https://preview.colorlib.com/theme/security/img/g4.jpg"
                  alt="4"
                />
              </Grid>
              <Grid item lg={4} md={4}>
                <img
                  src="https://preview.colorlib.com/theme/security/img/g5.jpg"
                  alt="5"
                />
              </Grid>
              <Grid item lg={5} md={5}>
                <img
                  src="https://preview.colorlib.com/theme/security/img/g6.jpg"
                  alt="6"
                />
              </Grid>
              <Grid item lg={7} md={7}>
                <img
                  src="https://preview.colorlib.com/theme/security/img/g7.jpg"
                  alt="7"
                />
              </Grid>
            </Grid>
          </Box>
        </div>
      </section>
      <section id={style.blogs}>
        <div className="container">
          <div className={style.blogsTitle}>
            <h1
              style={{
                marginBottom: "10px",
                fontSize: "36px",
                fontWeight: "700",
              }}
            >
              Latest From Our Blog
            </h1>
            <p
              style={{
                marginBottom: "16px",
                color: "#777777",
                fontSize: "14px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et <br /> dolore magna aliqua.
            </p>
          </div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {blogs &&
                blogs.map((blog) => {
                  return (
                    <Grid key={blog._id} item lg={3}>
                      <Card
                        className={style.blogCard}
                        sx={{ maxWidth: 345 }}
                        style={{
                          boxShadow: "none",
                          backgroundColor: "#F9F9FF",
                          borderRadius: "0",
                        }}
                      >
                        <div style={{ overflow: "hidden" }}>
                          <CardMedia
                            component="img"
                            alt="..."
                            height="200"
                            image={blog.imageURL}
                          />
                        </div>
                        <CardContent style={{ padding: "0" }}>
                          <p className={style.blogDate}>
                            {moment(blog.date).format("LL")}
                          </p>
                          <Typography
                            style={{ transition: ".3s" }}
                            className={style.blogTitle}
                            gutterBottom
                            variant="h6"
                            component="a"
                            href="#"
                          >
                            {blog.title}
                          </Typography>
                          <Typography
                            style={{ margin: "16px 0" }}
                            variant="body2"
                            color="text.secondary"
                          >
                            {blog.desc}
                          </Typography>
                        </CardContent>
                        <CardActions
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginBottom: "16px",
                          }}
                        >
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <FavoriteBorderIcon
                              style={{ fontSize: "14px", marginRight: "5px" }}
                            />
                            {blog.likeCount} Likes
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <ChatBubbleOutlineIcon
                              style={{ fontSize: "14px", marginRight: "5px" }}
                            />
                            {blog.commentsCount} Comments
                          </Typography>
                        </CardActions>
                      </Card>
                    </Grid>
                  );
                })}
            </Grid>
          </Box>
        </div>
      </section>
    </>
  );
};

export default Home;
