import React from "react";
import { Grid, Typography } from "@mui/material";
import LinearButton from "./buttons/LinearButton";
import "@fontsource/poppins";
import Image from "next/image";
import Link from "next/link";
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
          <Link href="/">
            <Image
              src={require("/public/images/logo/Dark-9Sol.png")}
              width={160}
              height={100}
            />
          </Link>
        </div>
      </Grid>
      <Grid item xs={2} className="flex justify-end items-center">
        <Image
          src={require("/public/images/US-Flag-icon.png")}
          width={45}
          height={100}
        />
        <a className="text-white px-4" href="tel:+16506819645">
          +1-(650) 681-9645
        </a>
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
