import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import wmn from "../public/imgs/wmn.jpg";
import admin from "../public/imgs/admin.jpg";
import md from "../public/imgs/md.jpg";
import me from "../public/imgs/mot.jpg";
import na from "../public/imgs/na.jpg";
import z from "../public/imgs/z.jpg";
import bl from "../public/imgs/bl.jpg";
import br from "../public/imgs/br.jpg";

import dv from "../public/imgs/dv.jpg";

import { Box } from "@mui/system";
import Image from "next/image";
function Works() {
  return (
    <div id="Works">
      <Container
        sx={{
          bgcolor: "Background.paper",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <Box sx={{ my: 2 }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Works
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            These are some of the projects I have worked and participated on up
            until now.
          </Typography>
        </Box>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Portifolio
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  obgcolor: "#000",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <Image
                src={me}
                sizes="100vw"
                layout="responsive"
                objectFit="cover"
                alt="pr"
              ></Image>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  My Portifolio
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                  Technologies used: NextJs, Materialize Ui.
                </Typography>
                <Button
                  href="#"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <Typography
                variant="h5"
                sx={{ my: 2, fontWeight: 700, textAlign: "center" }}
              >
                My first React Project
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",

                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },
                "::after": {
                  position: "absolute",
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: "#000",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <Image
                src={wmn}
                sizes="100vw"
                layout="responsive"
                objectFit="cover"
                alt="wmn"
              ></Image>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  My First React Project
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                Technologies used: MERN STACK: MongoDb, ExpressJs,
                  ReactJs and NodeJs. 
                </Typography>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  href="https://wmn-fashion-shopping.herokuapp.com/women"
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box>
              <Typography
                variant="h5"
                sx={{ my: 2, fontWeight: 700, textAlign: "center" }}
              >
                Simple admin dashboard for my first react project
              </Typography>
            </Box>
            <Box
              sx={{
                position: "relative",

                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },
                "::after": {
                  position: "absolute",
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  bgcolor: "#000",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <Image
                src={admin}
                sizes="100vw"
                layout="responsive"
                objectFit="cover"
                alt="admin"
              ></Image>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Simple admin dashboard for my simple react project
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                Technologies used: MERN STACK: MongoDb, ExpressJs,
                  ReactJs and NodeJs.
                </Typography>
                <Button
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  href="https://wmn-fashion-shopping.herokuapp.com/admin/"
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Medico
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#000",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <Image
                src={md}
                sizes="100vw"
                layout="responsive"
                objectFit="cover"
                alt="md"
              ></Image>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Medico
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                Technologies used: html, css, jquery and bootstrap and other libraries
                </Typography>
                <Button
                  href="https://medicioo.herokuapp.com/"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
          
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Next Amazona
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#000",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <Image
                src={z}
                sizes="100vw"
                layout="responsive"
                objectFit="cover"
                alt="z"
              ></Image>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Next Amanzona
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                Technologies used: Next, express, node, and mui for design
                </Typography>
                <Button
                  href="https://amani-next-amazona.vercel.app/"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Natours
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#000",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <Image
                src={na}
                sizes="100vw"
                layout="responsive"
                objectFit="cover"
                alt="na"
              ></Image>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Natours
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                Technologies used: html, css, flexbox, grid.
                </Typography>
                <Button
                  href="https://amani-natours.herokuapp.com/index.html"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Simple Blog
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#000",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <Image
                src={bl}
                sizes="100vw"
                layout="responsive"
                objectFit="cover"
                alt="bl"
              ></Image>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Simple Blog
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                Technologies used: Next, React, Graphql, Twindcss
                </Typography>
                <Button
                  href="https://blog-amany.herokuapp.com/"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Beatch Resort
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#000",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <Image
                src={br}
                sizes="100vw"
                layout="responsive"
                objectFit="cover"
                alt="br"
              ></Image>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Beach Resort
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                Technologies used: React, Context API, styled components
                </Typography>
                <Button
                  href="https://aman-real-state.herokuapp.com/"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography
              variant="h5"
              sx={{ mb: 2, fontWeight: 700, textAlign: "center" }}
            >
              Div Connector
            </Typography>
            <Box
              sx={{
                position: "relative",
                overflow: "hidden",
                ":hover": {
                  "& .upCard": {
                    bottom: 0,
                  },
                  "::after": {
                    display: "block",
                  },
                },

                "::after": {
                  display: "none",
                  transition: "0.2ms all easin-in-out",
                  content: "''",
                  position: "absolute",
                  top: "0",
                  bottom: "0",
                  left: "0",
                  right: "0",
                  bgcolor: "black",
                  bgcolor: "#000",
                  opacity: "0.7",
                  zIndex: 1,
                },
              }}
            >
              <Image
                src={dv}
                sizes="100vw"
                layout="responsive"
                objectFit="cover"
                alt="dv"
              ></Image>

              <Box
                className="upCard"
                sx={{
                  position: "absolute",
                  bottom: "-100%",
                  left: "0",
                  right: "0",
                  p: 2,
                  color: "white",
                  fontWeight: 700,
                  bgcolor: "white",
                  color: "black",
                  transition: "0.5s",
                  textAlign: "center",
                  zIndex: 2,
                }}
              >
                <Typography variant="h5" sx={{ textAlign: "center" }}>
                  Div Connector
                </Typography>
                <Typography variant="body1" sx={{ textAlign: "center" }}>
                Technologies used: React, Redux, React bootstrap, node and express
                </Typography>
                <Button
                  href="https://amani-dev-con.herokuapp.com/"
                  color="secondary"
                  variant="contained"
                  sx={{ my: 2 }}
                  target="_blank"
                >
                  View the project
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Works;
