import { Avatar, Container, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  return (
    <Container sx={{ py: 3 }}>
      <Grid spacing={5} container>
        <Grid item xs={12} sm={12} md={4}>
          <Stack direction="row" spacing={2}>
            <Avatar
              sx={{ width: 100, height: 100 }}
              src="../imgs/mott.jpg"
            ></Avatar>
            <Box>
              <Typography variant="h4">Amanuel Ferede</Typography>
              <Typography variant="body1">
                Full Stack Software Engineer
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography variant="body1">
            Site made with Next.Js and MUi, hosted on Vercel, full source code
            availble on <a href="https://github.com/amanugit/amani-2014" rel="noopener noreferrer" style={{ fontWeight: 'bolder' }}>github</a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Stack direction="row" spacing={2}>
            <a
              href="https://www.facebook.com/Zamanuel2015"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar sx={{ bgcolor: "#e91e63", color: "#fff" }}>
                <FaFacebook></FaFacebook>
              </Avatar>
            </a>
            <a
              href="https://www.instagram.com/amanii2022/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar sx={{ bgcolor: "#e91e63", color: "#fff" }}>
                <FaInstagram></FaInstagram>
              </Avatar>
            </a>
            <a
              href="https://twitter.com/Amani2021new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar sx={{ bgcolor: "#e91e63", color: "#fff" }}>
                <FaTwitter></FaTwitter>
              </Avatar>
            </a>
            <a
              href="https://www.linkedin.com/in/amani2021/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Avatar sx={{ bgcolor: "#e91e63", color: "#fff" }}>
                <FaLinkedin></FaLinkedin>
              </Avatar>
            </a>
            <a href="https://github.com/amanugit"
              target="_blank"
              rel="noopener noreferrer">
              <Avatar sx={{ bgcolor: "#e91e63", color: "#fff" }}>
                <FaGithub></FaGithub>
              </Avatar>
            </a>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
