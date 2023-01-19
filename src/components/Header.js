import React from "react";
import { Grid, Typography } from "@mui/material";
import LinearButton from "./buttons/LinearButton";
import "@fontsource/poppins";
const Header = () => {
  return (
    <Grid
      container
      spacing={4}
      py={2}
      sx={{
        display: {
          xl: "block",
          md: "none",
          lg: "flex",
          sm: "none",
          xs: "none",
        },
      }}
      bgcolor="#eeeeee"
      color="black"
    >
      <Grid item xs={6}>
        <div className="logo"></div>
      </Grid>
      <Grid item xs={2} className="flex justify-end items-center">
        <a>+1-332-282-5382</a>
      </Grid>
      <Grid item xs={1} className="flex justify-end items-center">
        <Typography>Live Chat</Typography>
      </Grid>
      <Grid item xs={2} className="flex justify-start">
        <LinearButton>Get 50% Discount</LinearButton>
      </Grid>
    </Grid>
  );
};

export default Header;
