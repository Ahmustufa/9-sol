import { Grid, Stack } from "@mui/material";
import React from "react";
import Text from "../Typography/Text";
import ContactForm from "../form/ContactForm";
import Image from "next/image";
import BlackButton from "@/components/buttons/BlackButton";
import { BsCheckCircleFill } from "react-icons/bs";
import { Typewriter } from "react-simple-typewriter";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import styled from "styled-components";
const Intro = () => {
  const handleType = (count) => {
    // console.log(count);
  };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`);
  };
  return (
    <Grid container p={3}>
      <Grid item xs={12} xl={6} lg={6} md={6} sm={12}>
        <Stack spacing={2} display="flex">
          <Grid container>
            <Grid
              item
              xs={2}
              sx={{
                display: {
                  md: "none",
                  xs: "none",
                  sm: "none",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            ></Grid>
            <Grid item xs={12} sm={12} xl={8} lg={8} md={10}>
              <Text fontSize={40} fontWeight="bold" className="break-words">
                Go Digital With Leading <br />
                <span style={{ color: "#aa076b" }}>
                  <Typewriter
                    words={["Logo", "Web", "Mobile"]}
                    loop={2}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    cursorColor="#aa076b"
                    deleteSpeed={50}
                    delaySpeed={1000}
                    onLoopDone={handleDone}
                    onType={handleType}
                  />
                </span>
                Design Company
              </Text>
            </Grid>
          </Grid>

          <Grid container>
            <Grid
              item
              xs={2}
              sx={{
                display: {
                  md: "none",
                  xs: "none",
                  sm: "none",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            ></Grid>
            <Grid
              item
              xs={12}
              sm={12}
              xl={8}
              lg={8}
              md={10}
              className="flex justify-center"
            >
              <Text fontSize={18} className="break-words">
                Making a mark in today&apos;s online world is a crucial element
                of marketing. Since the world has started to enjoy better
                results of digital marketing methods, traditional marketing
                methods are quickly losing popularity.
              </Text>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={2}
              sx={{
                display: {
                  md: "none",
                  xs: "none",
                  sm: "none",
                  lg: "flex",
                  xl: "flex",
                },
              }}
            ></Grid>
            <Grid
              item
              xs={12}
              xl={6}
              lg={6}
              md={8}
              sm={12}
              className="flex flex-col"
            >
              <Stack spacing={1}>
                <div className="flex items-center ">
                  <span className="pr-2">
                    <BsCheckCircleFill
                      style={{
                        fill: "#FFD700",
                        fontSize: "20px",
                      }}
                    />
                  </span>
                  <Text>Sleek Design</Text>
                </div>
                <div className="flex items-center">
                  <span className="pr-2">
                    <BsCheckCircleFill
                      style={{
                        fill: "#FFD700",
                        fontSize: "20px",
                      }}
                    />
                  </span>
                  <Text>Fastest Turnaround time</Text>
                </div>
                <div className="flex items-center">
                  <span className="pr-2">
                    <BsCheckCircleFill
                      style={{
                        fill: "#FFD700",
                        fontSize: "20px",
                      }}
                    />
                  </span>
                  <Text>SEO Optimized</Text>
                </div>
                <div className="flex items-center">
                  <span className="pr-2">
                    <BsCheckCircleFill
                      style={{
                        fill: "#FFD700",
                        fontSize: "20px",
                      }}
                    />
                  </span>
                  <Text>Fully Customized</Text>
                </div>
                <div className="pt-4">
                  <BlackButton>Get Your Web Design</BlackButton>
                </div>
              </Stack>
            </Grid>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={12}
              className=""
              sx={{
                justifyContent: "space-evenly",
                alignItems: "center",
                display: {
                  lg: "flex",
                  xl: "flex",
                  md: "none",
                  xs: "none",
                  sm: "none",
                },
              }}
            >
              <div>
                <Image
                  src={"/images/certifications/topRated2.png"}
                  width={100}
                  height={200}
                />
              </div>
              <div>
                <Image
                  src={"/images/certifications/topRated3.png"}
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <Image
                  src={"/images/certifications/topRated1.png"}
                  width={100}
                  height={200}
                />
              </div>
            </Grid>
          </Grid>
        </Stack>
      </Grid>
      <Grid
        item
        xs={6}
        sx={{
          justifyContent: "end",
          display: {
            xl: "flex",
            lg: "flex",
            md: "flex",
            sm: "none",
            xs: "none",
          },
        }}
      >
        {/* <ContactForm /> */}
        <Div>
          <Image
            className="image"
            src={require("/public/images/mobile/mobile3.webp")}
          />
          <Image
            className="image"
            src={require("/public/images/mobile/mobile1.webp")}
          />
        </Div>
      </Grid>
    </Grid>
  );
};

export default Intro;

const Div = styled.div`
  display: flex;
  /* justify-content: end; */
  width: fit-content;
  @media (max-width: 1186px) {
    .image {
      width: 250px;
    }
  }
  @media (max-width: 984px) {
    .image {
      width: 200px;
    }
  }
`;
