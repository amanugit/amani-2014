import { Container, Grid, Rating, Typography } from "@mui/material";
import { FaReact, FaNodeJs, FaBootstrap } from "react-icons/fa";
import { DiMongodb, DiJqueryLogo, DiMaterializecss } from "react-icons/di";
import React from "react";
import { Box } from "@mui/system";
import { useContext } from "react";
import { Store } from "../utils/store";
function TeachStacks() {
  const { state, dispatch } = useContext(Store);
  const { darkMode } = state;
  return (
    <div id="Skills">
      <Container
        sx={{
          bgcolor: darkMode ? "#000" : "#f5f5f5",
          color: darkMode ? "#fff" : "#000",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
        maxWidth={false}
      >
        <Box sx={{ my: 2 }}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Tech Stacks
          </Typography>
          <Typography variant="body1" sx={{ textAlign: "center" }}>
            Here are a list of tools, libraries and platforms I have had
            precious experience on. I have rated my experience level out of five
          </Typography>
        </Box>
        <Grid container spacing={1}>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <FaReact size={70} style={{ margin: "10px 0" }}></FaReact>
            <Typography variant="h5" color="main" sx={{ textAlign: "center" }}>
              React
            </Typography>
            <Rating name="read-only" value={4} readOnly />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <svg
              height="55pt"
              viewBox=".5 -.2 1023 1024.1"
              width="55pt"
              xmlns="http://www.w3.org/2000/svg"
              style={{ margin: "10px 0" }}
            >
              <path d="m478.5.6c-2.2.2-9.2.9-15.5 1.4-145.3 13.1-281.4 91.5-367.6 212-48 67-78.7 143-90.3 223.5-4.1 28.1-4.6 36.4-4.6 74.5s.5 46.4 4.6 74.5c27.8 192.1 164.5 353.5 349.9 413.3 33.2 10.7 68.2 18 108 22.4 15.5 1.7 82.5 1.7 98 0 68.7-7.6 126.9-24.6 184.3-53.9 8.8-4.5 10.5-5.7 9.3-6.7-.8-.6-38.3-50.9-83.3-111.7l-81.8-110.5-102.5-151.7c-56.4-83.4-102.8-151.6-103.2-151.6-.4-.1-.8 67.3-1 149.6-.3 144.1-.4 149.9-2.2 153.3-2.6 4.9-4.6 6.9-8.8 9.1-3.2 1.6-6 1.9-21.1 1.9h-17.3l-4.6-2.9c-3-1.9-5.2-4.4-6.7-7.3l-2.1-4.5.2-200.5.3-200.6 3.1-3.9c1.6-2.1 5-4.8 7.4-6.1 4.1-2 5.7-2.2 23-2.2 20.4 0 23.8.8 29.1 6.6 1.5 1.6 57 85.2 123.4 185.9s157.2 238.2 201.8 305.7l81 122.7 4.1-2.7c36.3-23.6 74.7-57.2 105.1-92.2 64.7-74.3 106.4-164.9 120.4-261.5 4.1-28.1 4.6-36.4 4.6-74.5s-.5-46.4-4.6-74.5c-27.8-192.1-164.5-353.5-349.9-413.3-32.7-10.6-67.5-17.9-106.5-22.3-9.6-1-75.7-2.1-84-1.3zm209.4 309.4c4.8 2.4 8.7 7 10.1 11.8.8 2.6 1 58.2.8 183.5l-.3 179.8-31.7-48.6-31.8-48.6v-130.7c0-84.5.4-132 1-134.3 1.6-5.6 5.1-10 9.9-12.6 4.1-2.1 5.6-2.3 21.3-2.3 14.8 0 17.4.2 20.7 2z" />
              <path d="m784.3 945.1c-3.5 2.2-4.6 3.7-1.5 2 2.2-1.3 5.8-4 5.2-4.1-.3 0-2 1-3.7 2.1zm-6.9 4.5c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-5 3c-1.8 1.4-1.8 1.5.4.4 1.2-.6 2.2-1.3 2.2-1.5 0-.8-.5-.6-2.6 1.1zm-7.6 4c-3.8 2-3.6 2.8.2.9 1.7-.9 3-1.8 3-2 0-.7-.1-.6-3.2 1.1z" />
            </svg>
            <Typography variant="h5" color="main" sx={{ textAlign: "center" }}>
              Next Js
            </Typography>
            <Rating name="read-only" value={4} readOnly />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <FaNodeJs size={70} style={{ margin: "10px 0" }}></FaNodeJs>
            <Typography variant="h5" color="main" sx={{ textAlign: "center" }}>
              Node Js
            </Typography>
            <Rating name="read-only" value={4} readOnly />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <DiMongodb size={70} style={{ margin: "10px 0" }}></DiMongodb>
            <Typography variant="h5" color="main" sx={{ textAlign: "center" }}>
              Mongo DB
            </Typography>
            <Rating name="read-only" value={4} readOnly />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <FaBootstrap size={70} style={{ margin: "10px 0" }}></FaBootstrap>
            <Typography variant="h5" color="main" sx={{ textAlign: "center" }}>
              Bootstrap
            </Typography>
            <Rating name="read-only" value={4} readOnly />
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <DiMaterializecss
              size={70}
              style={{ margin: "10px 0" }}
            ></DiMaterializecss>
            <Typography variant="h5" color="main" sx={{ textAlign: "center" }}>
              MUI
            </Typography>
            <Rating name="read-only" value={4} readOnly />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default TeachStacks;
