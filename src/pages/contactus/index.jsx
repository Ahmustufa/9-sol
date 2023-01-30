import React from "react";
import HeroSection from "@/components/heroSection";
import Head from "next/head";
import styled from "styled-components";
import { Grid } from "@mui/material";
import Text from "@/components/Typography/Text";
import BlackButton from "@/components/buttons/BlackButton";
import Snackbar from "@mui/material/Snackbar";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
import ContactForm from "@/components/form/ContactForm";
const StyledSection = styled.div`
  .map-section {
    padding: 5% 5%;
  }

  label {
    position: relative;
    top: 10px;
    z-index: 2;
    font-size: 12px;
    background-color: rgb(255, 255, 255);
    left: 11px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    padding-left: 7px;
    padding-right: 7px;
    user-select: none;
    margin: 0px;
  }

  .usa-pakistan-div {
    height: 430px;
    .pakistan-div {
      float: right;
    }
    h4 {
      color: #2a2a2a;
      font-weight: 700;
    }
    a {
      color: #2a2a2a;
      font-weight: 600;
    }
    p {
      color: #2a2a2a;
      font-weight: 600;
    }
  }

  .behind-u {
    font-size: 300px;
    font-weight: 800;
    color: #f4f4f4;
    position: absolute;
    z-index: -1;
    top: 0;
    line-height: 0.5;
    left: -80px;
  }
  .behind-p {
    font-size: 300px;
    font-weight: 800;
    color: #f4f4f4;
    position: absolute;
    z-index: -1;
    top: 50px;
    line-height: 0.5;
    left: -80px;
  }
  .usa-div {
    position: absolute;
    z-index: 2;
  }
  .pakistan-div {
    float: right;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 2;
  }

  .img-section {
    padding: 5%;
    text-align: center;
    img {
      width: 500px;
    }
  }

  .hero-section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: -webkit-fill-available;
    width: -moz-available;
    height: 70vh;
    background-color: #232a38;
    img {
      width: 1000px;
    }
  }
  .support-heading {
    text-align: center;
    font-weight: bold;
    margin: 24px 0px 24px;
    line-height: 1.6em;
    font-size: 36px;
  }
  .highlight {
    color: #aa076b;
  }

  @media (max-width: 991px) {
    .hero-section {
      img {
        width: 600px;
      }
    }
  }

  @media (max-width: 767px) {
    .hero-section {
      img {
        width: 450px;
      }
    }
    .support-heading {
      font-size: 24px;
    }
    .usa-pakistan-div {
      margin-top: 6%;
      h4 {
        font-weight: 700;
        font-size: 20px;
      }
    }
  }

  @media (max-width: 550px) {
    .hero-section {
      img {
        width: 100%;
      }
    }
    .img-section {
      img {
        width: 350px;
      }
    }
  }

  @media (max-width: 450px) {
    .img-section {
      img {
        width: 275px;
      }
    }
  }
`;
const ContactUs = () => {
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
      <StyledSection>
        <section className="hero-section">
          <img
            style={{ marginTop: "8%" }}
            alt="support-staff"
            src="/images/contact-us-banner.png"
          />
          <h1
            style={{ fontSize: 24, color: "#fff" }}
            className="support-heading"
          >
            Have an inquiry or some{" "}
            <span className="highlight">feedback for us?</span> <br /> Fill out
            the form below to contact our team.
          </h1>
        </section>

        <section className="map-section">
          <h1
            style={{ marginBottom: 0 }}
            className="support-heading text-center"
          >
            {`We're always ready to discuss your project needs,`}
            <br />
            <span className="highlight">Get in touch with us.</span>
            <p
              style={{
                fontSize: 16,
                fontWeight: 400,
                margin: 0,
                marginBottom: -50,
              }}
            >
              Our project consultant will call you in the next 24 hours to
              discuss your project scope in detail.
            </p>
          </h1>
        </section>
        <ParentGrid container display="flex" justifyContent="center" mt={4} mb={12}>
          <Grid item xl={4} lg={5} md={6} sm={8} xs={10}>
            <Box
              onSubmit={handleSubmit(onSubmit)}
              component="form"
              autoComplete="off"
            >
              <Stack spacing={2}>
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
                      placeholder="Full Name"
                      onChange={onChange}
                      value={value}
                      label={"Name"}
                    />
                  )}
                />
                {errors.email && (
                  <p style={{ color: "red", padding: 0, fontSize: 12 }}>
                    Invalid email address.
                  </p>
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
                      placeholder="Email"
                      onChange={onChange}
                      value={value}
                      label={"Email"}
                    />
                  )}
                />

                {errors.phone && (
                  <p style={{ color: "red", fontSize: 12 }}>
                    Invalid Phone number
                  </p>
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
                    style={{
                      fontWeight: "bold",
                      fontSize: 16,
                      borderRadius: 30,
                    }}
                  >
                    Submit
                  </BlackButton>
                ) : (
                  <div className="flex justify-center items-center w-full">
                    <CircularProgress />
                  </div>
                )}
              </Stack>
            </Box>
          </Grid>
        </ParentGrid>
      </StyledSection>
    </>
  );
};

export default ContactUs;

const Input = styled(TextField)`
  /* width: 50%; */
  .MuiOutlinedInput-notchedOutline {
    border-color: grey !important;
  }
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #aa076b !important;
  }
`;

const ParentGrid = styled(Grid)``;

const PhoneField = styled(PhoneInput)`
  .PhoneInputInput {
    padding: 20px;
    /* margin: 0px; */
    &:focus {
      border-style: none;
    }
  }
  /* padding: 20px; */
  border-radius: 5px;
  border: 1px solid grey;
`;
