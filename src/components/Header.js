import React from "react";
import { Grid, Typography } from "@mui/material";
import LinearButton from "./buttons/LinearButton";
import "@fontsource/poppins";
import Image from "next/image";
const Header = () => {
  return (
    <Grid
      container
      spacing={4}
      py={2}
      sx={{
        display: {
          xl: "flex",
          md: "none",
          lg: "flex",
          sm: "none",
          xs: "none",
        },
      }}
      bgcolor="#232A38"
      color="black"
    >
      <Grid item xs={6}>
        <div className="flex justify-center">
          <Image src={require('/public/images/logo/Dark-9Sol.png')} width={160} height={100}/>
        </div>
      </Grid>
      <Grid item xs={2} className="flex justify-end items-center">
        <a className="text-white" href="tel:+13322825382">+1-332-282-5382</a>
      </Grid>
      {/* <Grid item xs={1} className="flex justify-end items-center">
        <Typography className="text-white" >Live Chat</Typography>
      </Grid> */}
      <Grid item xs={2} className="flex justify-start">
        <LinearButton>Get 50% Discount</LinearButton>
      </Grid>
    </Grid>
  );
};

export default Header;
