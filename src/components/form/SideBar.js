import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import { Alert, Box, Button, Stack, TextField } from "@mui/material";
import Text from "../Typography/Text";
import BlackButton from "../buttons/BlackButton";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import CircularProgress from "@mui/material/CircularProgress";
import { useForm, Controller } from "react-hook-form";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { RiArrowRightSLine } from "react-icons/ri";
import { FiSend } from "react-icons/fi";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
} from "react-google-recaptcha-v3";
import { BiArrowFromTop } from "react-icons/bi";
import ContactForm from "./ContactForm";

const StyledSection = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.3s;
  text-decoration: none;
  z-index: 999;
  width: 350px;
  left: ${({ isSidebarOpen }) => (isSidebarOpen ? "0px" : "-350px")};

  .side-bar-div {
    padding: 20px 25px 20px 25px;
    background-color: #fff;
    font-size: 20px;
    border-radius: 0 5px 5px 0;
  }

  h2 {
    color: rgb(0, 37, 255);
    font-weight: 700;
    margin-bottom: 4px;
  }
  h4 {
    color: 2a2a2a;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
  }

  label {
    font-size: 12px;
    font-weight: 600;
    margin: 0px;
    user-select: none;
  }

  .arrow-div {
    position: absolute;
    left: 100%;
    cursor: pointer;
    background-color: #232a38;
    color: #fff;
    float: right;
    height: 350px;
    width: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
    font-weight: 600;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    margin: auto;
    top: 0;
    bottom: 0;
  }

  .overlay-div {
    height: 100vh;
    width: 100%;
    z-index: 500;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media (max-width: 450px) {
    .side-bar-div {
      max-height: 96vh;
      overflow: auto;
    }
    .arrow-div {
      width: 38px;
      font-size: 20px;
      font-weight: 600;
      height: 270px;
    }
  }
`;

const SideBar = () => {
  const myRef = useRef();
  const captchaRef = useRef(false);

  const [isSidebarOpen, toggleSidebar] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
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
  useEffect(() => {
    const abc = { contains: () => false };

    const checkClickOutside = (e) => {
      const element =
        document.getElementById("my_someting_list")?.parentElement
          ?.parentElement?.parentElement || abc;

      if (element.contains(e.target) || myRef?.current?.contains(e.target)) {
        // console.log("It contains element");
        toggleSidebar(true);
      } else {
        toggleSidebar(false);
      }
    };

    if (typeof window !== "undefined") {
      document.addEventListener("click", checkClickOutside);
    }
  }, [isSidebarOpen]);

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
      {/* Mask */}
      {isSidebarOpen ? (
        <div
          style={{
            height: "100vh",
            width: "100%",
            zIndex: 500,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            position: "fixed",
            top: 0,
            bottom: -0,
            left: 0,
            right: 0,
          }}
        />
      ) : null}

      <StyledSection isSidebarOpen={isSidebarOpen} ref={myRef}>
        <div className="side-bar-div">
          <h2>Request a Call Back</h2>
          <h4 style={{ color: "black" }}>
            We are here to guide you to success
          </h4>
          <Stack spacing={1}>
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
              <p style={{ color: "red", fontSize: 12 }}>
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
            <GoogleReCaptchaProvider
              reCaptchaKey={process.env.RCAPTCHA_SITE_KEY}
            >
              <GoogleReCaptcha />
            </GoogleReCaptchaProvider>
            {!initState?.loading ? (
              <BlackButton
                onClick={handleSubmit(onSubmit)}
                style={{ fontWeight: "bold", fontSize: 16 }}
              >
                Send Message
              </BlackButton>
            ) : (
              <div className="flex justify-center items-center w-full">
                <CircularProgress />
              </div>
            )}
          </Stack>

          <div>
            <div
              onClick={() => {
                toggleSidebar(true);
              }}
              className="arrow-div"
              style={{ visibility: isSidebarOpen ? "hidden" : "visible" }}
            >
              <div
                style={{
                  whiteSpace: "nowrap",
                  display: "flex",
                  alignItems: "center",
                  transform: "rotate(-90deg)",
                }}
              >
                {`REQUEST A CALLBACK`}{" "}
                <BiArrowFromTop style={{ marginLeft: 5 }} />
              </div>
            </div>
          </div>
        </div>
      </StyledSection>
    </>
  );
};

export default SideBar;

const Input = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border-color: black !important;
  }
  .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root.Mui-focused {
    color: #aa076b !important;
  }
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
  border: 1.2px solid black;
`;
