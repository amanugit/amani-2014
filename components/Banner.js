import React from "react";
import { Avatar, Container, Stack, Typography } from "@mui/material";

import { Box } from "@mui/system";
import { FacebookSharp, LinkedIn } from "@mui/icons-material";
import { SiUpwork, SiFreelancer } from "react-icons/si";
function Banner() {
  return (
    <Container
      maxWidth={true}
      disableGutters={false}
      sx={{
        "::before": {
          content: "''",
          position: "absolute",
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          bgcolor: "#000",
          opacity: 0.6,
        },
        position: "relative",
        minHeight: "85vh",
        backgroundImage: "url('../imgs/zz.jpg')",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        position: "relative",
      }}
    >
      <Box
        mt={2}
        sx={{
          position: "absolute",
          top: "110px",
          left: "60px",
          maxWidth: 500,
          display: { xs: "none", md: "block" },
        }}
      >
        <Typography variant="h3" mb={3} sx={{ color: "yellow" }}>
          Hi, I Am Amanuel Ferede. A Full Stack Software Engineer
        </Typography>
        <Stack direction="row" spacing={2}>
          <a
            href="https://www.linkedin.com/in/amani2021/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              sx={{
                bgcolor: "white",
                color: "black",
                transition: "0.5s",

                ":hover": {
                  bgcolor: "#f06292",
                  color: "white",
                  transform: "scale(1.3)",
                },
              }}
            >
              <LinkedIn />
            </Avatar>
          </a>
          <a
            href="https://www.facebook.com/amanuel.amani.370"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              sx={{
                bgcolor: "white",
                color: "black",
                transition: "0.5s",

                ":hover": {
                  bgcolor: "#f06292",
                  color: "white",
                  transform: "scale(1.3)",
                },
              }}
            >
              <FacebookSharp />
            </Avatar>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01d7b91c08232c72de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              sx={{
                bgcolor: "white",
                color: "black",
                transition: "0.5s",

                ":hover": {
                  bgcolor: "#f06292",
                  color: "white",
                  transform: "scale(1.3)",
                },
              }}
            >
              <SiUpwork />
            </Avatar>
          </a>
          <a
            href="https://www.freelancer.com/u/amannew49"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              sx={{
                bgcolor: "white",
                color: "black",
                transition: "0.5s",

                ":hover": {
                  bgcolor: "#f06292",
                  color: "white",
                  transform: "scale(1.3)",
                },
              }}
            >
              <SiFreelancer />
            </Avatar>
          </a>
        </Stack>
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "130px",
          right: "30px",
          color: "white",
          maxWidth: "500px",
          display: {
            xs: "none",
            md: "block",
            lg: "block",
          },
        }}
      >
        <Typography variant="h4" sx={{ color: "yellow", fontWeight: "bolder", marginBottom: "25px"}}>
          &quot; Focus on progress not perfection. &quot; -Bill Phillips
        </Typography>
        <Typography variant="h5" sx={{ color: "white", fontWeight: "bolder", fontStyle: "italic" }}>
          &quot; I have learned how my own perfectionism can cripple me. &quot;
        </Typography>
        
      </Box>
      <Box
        sx={{
          position: "absolute",
          top: "130px",
          display: { xs: "block", md: "none" },
          padding: "20px",
          marginLeft: "5px",
        }}
      >
        {" "}
        <Typography variant="h4" mb={3} sx={{ color: "white" }}>
          Hi, I Am Amanuel Ferede. A Full Stack Software Engineer
        </Typography>
        <Stack direction="row" spacing={2} sx={{ marginLeft: "3px" }}>
          <a
            href="https://www.linkedin.com/in/amani2021/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              sx={{
                bgcolor: "white",
                color: "black",
                transition: "0.5s",

                ":hover": {
                  bgcolor: "#f06292",
                  color: "white",
                  transform: "scale(1.3)",
                },
              }}
            >
              <LinkedIn />
            </Avatar>
          </a>
          <a
            href="https://www.facebook.com/amanuel.amani.370"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              sx={{
                bgcolor: "white",
                color: "black",
                transition: "0.5s",

                ":hover": {
                  bgcolor: "#f06292",
                  color: "white",
                  transform: "scale(1.3)",
                },
              }}
            >
              <FacebookSharp />
            </Avatar>
          </a>
          <a
            href="https://www.upwork.com/freelancers/~01d7b91c08232c72de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              sx={{
                bgcolor: "white",
                color: "black",
                transition: "0.5s",

                ":hover": {
                  bgcolor: "#f06292",
                  color: "white",
                  transform: "scale(1.3)",
                },
              }}
            >
              <SiUpwork />
            </Avatar>
          </a>
          <a
            href="https://www.freelancer.com/u/amannew49"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Avatar
              sx={{
                bgcolor: "white",
                color: "black",
                transition: "0.5s",

                ":hover": {
                  bgcolor: "#f06292",
                  color: "white",
                  transform: "scale(1.3)",
                },
              }}
            >
              <SiFreelancer />
            </Avatar>
          </a>
        </Stack>
      </Box>
    </Container>
  );
}

export default Banner;
