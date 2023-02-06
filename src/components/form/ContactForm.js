import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import Text from "../Typography/Text";
import BlackButton from "../buttons/BlackButton";
import Snackbar from "@mui/material/Snackbar";
import CircularProgress from "@mui/material/CircularProgress";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import CancelIcon from "@mui/icons-material/Cancel";

const ContactForm = (props) => {
  const [initState, setInitState] = React.useState({
    loading: false,
    success: false,
    error: false,
  });
  const [toast, setToast] = React.useState({
    open: false,
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const handleClose = () => {
    setToast({
      ...toast,
      open: false,
    });
  };

  const onSubmit = async (data) => {
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
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        autoComplete="off"
        className="p-6 border-gray-dark rounded-xl"
      >
        <Stack spacing={1}>
          <span
            style={{
              marginLeft: "auto",
            }}
          >
            <CancelIcon style={{ fontSize: "35px" }} onClick={props.handleClose} />
          </span>
          <Text fontWeight="bold" fontSize={24} color={props.color}>
            {props.text}
          </Text>
          <Text fontWeight="bold" fontSize={20}>
            {props.subtext}
          </Text>
          {errors.fullName && (
            <p style={{ color: "red", fontSize: 12 }}>
              Name should be atleast 2 characters
            </p>
          )}
          <Controller
            name={"fullName"}
            control={control}
            rules={{
              required: true,
              minLength: 2,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                // InputProps={{
                //   startAdornment: <AiOutlineUser position="start" size={20} />,
                // }}
                placeholder="Full Name"
                onChange={onChange}
                value={value}
                label={"Name"}
              />
            )}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: 12 }}>Invalid email address.</p>
          )}
          <Controller
            name={"email"}
            rules={{
              required: true,
              minLength: 5,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            }}
            control={control}
            render={({ field: { onChange, value } }) => (
              <Input
                // InputProps={{
                //   startAdornment: <AiOutlineMail position="start" size={20} />,
                // }}
                placeholder="Email"
                onChange={onChange}
                value={value}
                label={"Email"}
              />
            )}
          />

          {errors.phone && (
            <p style={{ color: "red", fontSize: 12 }}>Invalid Phone number</p>
          )}
          <Controller
            name="phone"
            control={control}
            rules={{
              validate: (value) =>
                value ? isValidPhoneNumber(value) === true : false,
            }}
            render={({ field: { onChange, value } }) => (
              <PhoneField
                value={value}
                placeholder="Phone Number"
                onChange={onChange}
                defaultCountry="US"
              />
            )}
          />
          {errors.message && (
            <p style={{ color: "red", fontSize: 12 }}>
              Message should be atleast 2 characters
            </p>
          )}
          <Controller
            name={"message"}
            control={control}
            rules={{
              required: true,
              minLength: 2,
            }}
            render={({ field: { onChange, value } }) => (
              <Input
                id="standard-multiline-static"
                multiline
                required
                placeholder="Talk about your Project"
                onChange={onChange}
                value={value}
                rows={4}
                // label={"Name"}
              />
            )}
          />

          {!initState?.loading ? (
            <BlackButton
              onClick={handleSubmit(onSubmit)}
              style={{ fontWeight: "bold", fontSize: 16 }}
            >
              Submit
            </BlackButton>
          ) : (
            <div className="flex justify-center items-center w-full">
              <CircularProgress color="secondary" />
            </div>
          )}
        </Stack>
      </Div>
    </>
  );
};

export default ContactForm;
const Input = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border-color: grey !important;
  }
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #aa076b !important;
  }
`;

const Div = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const PhoneField = styled(PhoneInput)`
  .PhoneInputInput {
    /* padding: 20px; */
    /* margin: 0px; */
    &:focus {
      border-style: none;
    }
  }
  padding: 20px;
  border-radius: 5px;
  border: 1.2px solid grey;
`;
