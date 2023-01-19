import { Box, Stack, TextField } from "@mui/material";
import React from "react";
import Text from "../Typography/Text";
import styled from "styled-components";
const ContactForm = () => {
  return (
    <Div
      component="form"
      autoComplete="off"
      className="p-6 border-gray-dark rounded-xl"
    >
      <Stack spacing={3}>
        <Text fontWeight="bold" fontSize={32}>
          Chat with us to Avail <br /> 50% off
        </Text>
        <Input
          id="outlined-basic"
          label="Name"
          required
          variant="outlined"
          placeholder="Enter Your name"
        />
        <Input
          id="outlined-basic"
          label="Email"
          required
          variant="outlined"
          type="email"
          placeholder="Enter Your email"
        />
        <Input
          id="outlined-basic"
          label="Phone Number"
          required
          variant="outlined"
          type="tel"
          placeholder="Enter Your phone number"
        />
        <Input
          id="standard-multiline-static"
          multiline
          required
          placeholder="Talk about your Project"
          rows={4}
          variant="outlined"
        />
      </Stack>
    </Div>
  );
};

export default ContactForm;
const Input = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border-color: black !important;
  }
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #aa076b !important;
  }
`;

const Div = styled(Box)`
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`
