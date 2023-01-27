import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Text from "../Typography/Text";
import styled from "styled-components";
import BlackButton from "../buttons/BlackButton";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import CircularProgress from "@mui/material/CircularProgress";

const ContactForm = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [initState, setInitState] = React.useState({
    loading: false,
    success: false,
    error: false,
  });
  const [toast, setToast] = React.useState({
    open: false,
  });

  const SlideTransition = (props) => {
    return <Slide {...props} direction="up" />;
  };
  const handleClose = () => {
    setToast({
      ...toast,
      open: false,
    });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async () => {
    setInitState({ ...initState, loading: true });
    fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (res.status === 200) {
          setInitState({ ...initState, loading: false, success: true });
          setToast({ ...toast, open: true });
          // console.log("Response succeeded > ", res);
          // setData(initialState);
          // <Alert severity="success">This is a success message!</Alert>
        } else {
          setLoading(false);
        }
      })
      .catch((err) => {
        console.log("err", err);
        setInitState({ ...initState, loading: false, error: true });
      });
  };

  return (
    <>
      <Snackbar
        open={toast.open}
        onClose={handleClose}
        style={{ backgroundColor: "green" }}
        autoHideDuration={6000}
        TransitionComponent={"Slide"}

        key={0}
      >
        {initState.success ? (
          <Alert
            onClose={handleClose}
            variant="filled"
            severity="success"
            sx={{ width: "100%" }}
          >
            Successfully sent!
          </Alert>
        ) : (
          <Alert variant="filled" severity="error">
          We cannot process your request at this time.
          </Alert>
        )}
      </Snackbar>
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
            name="fullName"
            id="outlined-basic"
            onChange={handleChange}
            label="Name"
            required
            variant="outlined"
            placeholder="Enter Your name"
          />
          <Input
            name="email"
            id="outlined-basic"
            label="Email"
            onChange={handleChange}
            required
            variant="outlined"
            type="email"
            placeholder="Enter Your email"
          />
          <Input
            name="phone"
            id="outlined-basic"
            label="Phone Number"
            onChange={handleChange}
            required
            variant="outlined"
            type="tel"
            placeholder="Enter Your phone number"
          />
          <Input
            name="message"
            onChange={handleChange}
            id="standard-multiline-static"
            multiline
            required
            placeholder="Talk about your Project"
            rows={4}
            variant="outlined"
          />

          {!initState?.loading ? (
            <BlackButton
              onClick={handleSubmit}
              style={{ fontWeight: "bold", fontSize: 16 }}
            >
              Submit
            </BlackButton>
          ) : (
            <div className="flex justify-center items-center w-full">
              <CircularProgress />
            </div>
          )}
          {/* <Button loading> Submit</Button> */}
        </Stack>
      </Div>
    </>
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
`;
