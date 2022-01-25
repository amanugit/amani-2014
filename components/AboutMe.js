import { Container, Typography } from "@mui/material";
import { Store } from "../utils/store";
import { Box } from "@mui/system";
import React from "react";
import { useContext } from "react";
function AboutMe() {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  return (
    <div id="About">
      <Container
        maxWidth={false}
        sx={{
          bgcolor: darkMode ? "#000" : "#f06292",
          color: darkMode ? "#fff" : "#fff",
          py: 4,
        }}
      >
        <Box
          maxWidth={800}
          sx={{ m: "auto", textAlign: "center" }}
          color="primary"
        >
          <Typography variant="h4" color="main" sx={{ textAlign: "center" }}>
            About Me
          </Typography>
          <Typography variant="body1">
            I am a full stack Software Engineer with a passion to create
            marvelous software and programming solutions to different real life
            problems. I have an intuitive desire to learn new technologies and
            how they work in depth. I also have good communication skills and
            work well with other team members.
          </Typography>
        </Box>
      </Container>
    </div>
  );
}

export default AboutMe;
