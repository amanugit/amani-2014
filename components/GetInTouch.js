import { Button, Container, Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import { Store } from "../utils/store";
import { useContext } from "react";

function GetInTouch() {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  const sendEmail = () => {
    window.open("mailto:support@example.com?subject=SendMail&body=Description");
  };
  return (
    <div id="Contact">
      <Container
        sx={{
          bgcolor: darkMode ? "#000" : "#f5f5f5",
          color: darkMode ? "#fff" : "#000",
          py: 3,
        }}
        maxWidth={false}
      >
        <Box sx={{ my: 2 }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Get In Touch
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            I am usually active on the mediums listed below. Use your preference
            to contact me.
          </Typography>
        </Box>
        <Box sx={{ width: 600, margin: "auto" }}>
          <Stack
            direction={{ xs: "column", sm: "column", md: "row", lg: "row" }}
            spacing={{ xs: 2, sm: 2, md: 4 }}
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Stack
              direction={{
                xs: "row",
                sm: "column",
                md: "column",
                lg: "column",
              }}
              spacing={{ xs: 2, sm: 2, md: 2, lg: 3 }}
            >
              <Button
                href="https://github.com/amanugit"
                target="_blank"
                startIcon={<FaGithub />}
                variant="contained"
                sx={{
                  bgcolor: "black",
                  color: "white",
                }}
              >
                Git Hub
              </Button>

              <Button
                href="https://twitter.com/Amani2021new"
                target="_blank"
                startIcon={<FaTwitter />}
                variant="contained"
                sx={{
                  bgcolor: "#1DA1F2",
                  color: "white",
                }}
              >
                Twitter
              </Button>

              <Button
                href="https://www.instagram.com/amanii2022/"
                target="_blank"
                startIcon={<FaInstagram />}
                variant="contained"
                sx={{
                  bgcolor: "#cd486b",
                  color: "white",
                }}
              >
                Instagram
              </Button>
            </Stack>
            <Box>
              <Typography variant="body1">
                Do you prefer an email ? Reach out at my address below
              </Typography>
              <Button variant="contained" sx={{ my: 1 }} onClick={sendEmail}>
                Compose
              </Button>
            </Box>
          </Stack>
        </Box>
      </Container>
    </div>
  );
}

export default GetInTouch;
