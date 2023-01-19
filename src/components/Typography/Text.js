import React from "react";
import { Typography } from "@mui/material";
const Text = (props) => {
  return (
    <Typography {...props} fontFamily="Poppins, san-serif">
      {props.children}
    </Typography>
  );
};

export default Text;
