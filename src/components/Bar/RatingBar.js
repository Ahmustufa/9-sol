import { Grid, Stack } from "@mui/material";
import React from "react";
import CountUp from "react-countup";
import Text from "../Typography/Text";

const RatingBar = () => {
  return (
    <Grid
      container
      my={5}
      sx={{display: {md: "none", xs: "none", sm: "none", lg: "flex", xl: "flex"}}}
      className="text-white p-5 font-bold bg-gradient-to-r from-darkMagenta via-magenta to-magenta focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80"
    >
      <Grid item xs={3} sx={{display: { md: "none", sm: "none", xs: "none", lg: "block", xl: "block"}}}>
        <Stack spacing={1} className="flex justify-center items-center">
          <CountUp
            end={1874}
            suffix="+"
            style={{ fontSize: "40px", fontWeight: "bold" }}
          />
          <Text fontSize={20}>Satisfied Clients</Text>
        </Stack>
      </Grid>
      <Grid item xs={3} sx={{display: { md: "none", sm: "none", xs: "none", lg: "block", xl: "block"}}}>
        <Stack spacing={1} className="flex justify-center items-center">
          <CountUp end={7} suffix="+" style={{ fontSize: "40px" }} />
          <Text fontSize={20}>Years Experience</Text>
        </Stack>
      </Grid>
      <Grid item xs={3} sx={{display: { md: "none", sm: "none", xs: "none", lg: "block", xl: "block"}}}>
        <Stack spacing={1} className="flex justify-center items-center">
          <CountUp end={9892} suffix="+" style={{ fontSize: "40px" }} />
          <Text fontSize={20}>Projects Completed</Text>
        </Stack>
      </Grid>
      <Grid item xs={3} sx={{display: { md: "none", sm: "none", xs: "none", lg: "block", xl: "block"}}}>
        <Stack spacing={1} className="flex justify-center items-center">
          <CountUp end={170} suffix="%" style={{ fontSize: "40px" }} />
          <Text fontSize={20}>Increase in ROI</Text>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default RatingBar;
