import { Badge, Button, Container, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import styled from "styled-components";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Heading from "../Title/Heading";
import Text from "../Typography/Text";
import BlackButton from "../buttons/BlackButton";
import MultiSwitchWrapper from "../inputs/MultiSwitchWrapper";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { branding, ecom, logo, seo, web } from "../../utils/priceCards.js";
import { Fade } from "react-awesome-reveal";
import { getPackages } from "@/redux/slices/packageSlice";
import { useRouter } from "next/router";

const Pricing = (props) => {
  const [solution, setSolution] = useState("WEB PACKAGE");
  const packageData = useSelector((state) => state?.package?.data);
  // console.log("packageData",packageData );
  const { type } = props;
  const dispatch = useDispatch();
  const options = [
    { label: "Web", value: "WEB PACKAGE" },
    { label: "Ecommerce", value: "E-COMMERCE" },
    { label: "Logo", value: "LOGO DESIGN" },
    { label: "SEO", value: "SEARCH ENGINE OPTIMIZATION" },
    { label: "Branding", value: "BRANDING" },
  ];
  const solutionTypeChange = (type) => {
    setSolution(type);
  };
  const router = useRouter();
  const handleCheckout = (data) => {
    if (data._id) {
      console.log("id", data);
      // router.push(`/checkout/${id}`)
      router.push({
        pathname: `/checkout/${data._id}`,
        query: { data: JSON.stringify(data) },
        // state: data, 
      });
    }
  };
  useEffect(() => {
    dispatch(getPackages());
  }, []);
  return (
    <Grid container>
      <Grid item xs={12}>
        <Heading
          color="white"
          backgroundColor="white"
          title={
            <>
              Our packages are cost-effective and suit every business size and
              needs
              <br />
            </>
          }
        />
        <Grid container mt={6} mb={12}>
          <Grid item xs={12}>
            <MultiSwitchWrapper
              color="white"
              options={options}
              onChange={solutionTypeChange}
            />
          </Grid>
        </Grid>
        <Row
          container
          // gap={{ lg: 5, md: 3, sm: 2 }}
          // columnGap={3}
          columns={{ md: 7, lg: 12, sm: 5, xs: 8, xl: 12 }}
          // columnSpacing={3}
          // rowSpacing={3}
          spacing={4}
          columnGap={2}
          rowGap={5}
        >
          {packageData
            ? packageData
                .filter((item) => item.subtitle === solution)
                .map((val, index) => {
                  return (
                    <Cards
                      item
                      key={index}
                      xs={7}
                      xl={2.5}
                      lg={3.5}
                      md={3}
                      sm={3}
                      px={2}
                      className="rounded-lg"
                    >
                      <Fade>
                        <Stack spacing={2} mt={3} mb={1}>
                          <Text
                            color="white"
                            variant="h4"
                            textAlign="center"
                            fontWeight="bold"
                          >
                            {val.title}
                          </Text>
                          <Text color="white" variant="h6" textAlign="center">
                            {val.subtitle}
                          </Text>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              // alignItems: "end",
                            }}
                          >
                            <Text
                              color="white"
                              variant="h3"
                              px={2}
                              fontWeight="bold"
                            >
                              ${val.price}
                            </Text>
                            <Text color="white" py={3}>
                              <del>{val.oldPrice}</del>
                            </Text>
                          </div>
                        </Stack>
                      </Fade>
                      {/* <Stack spacing={2} mb={3}> */}
                      <Fade>
                        <ScrollBar>
                          <div
                            // className="styled-scrollbar"
                            style={{
                              minHeight: 200,
                              maxHeight: 200,
                              // scrollbarWidth: "thin"
                              // overflowY: "auto",
                            }}
                          >
                            {val.items.map((item) => {
                              return (
                                <Container maxWidth="lg">
                                  <Service>
                                    <CheckCircleIcon
                                      style={{
                                        fontSize: "20",
                                        color: "#5FB539",
                                      }}
                                    />
                                    <Text color="white" px={2}>
                                      {item}
                                    </Text>
                                  </Service>
                                </Container>
                              );
                            })}
                            {/* </Stack> */}
                          </div>
                        </ScrollBar>
                        {/* <Stack mb={3} style={{ width: "100%" }}> */}
                        <div
                          style={{ margin: "20px 0px" }}
                          className="px-2 flex justify-center"
                          // href="mailto:management@9solutions.com"
                        >
                          <BlackButton
                            style={{ width: "100%" }}
                            onClick={() => handleCheckout(val)}
                          >
                            Get Started
                          </BlackButton>
                        </div>
                        <Text
                          color="white"
                          style={{
                            margin: "20px 0px",
                            fontSize: 13,
                            fontWeight: "bold",
                          }}
                          className="text-center"
                        >
                          Expedited services*= $100
                        </Text>
                      </Fade>
                      {/* </Stack> */}
                    </Cards>
                  );
                })
            : ""}
        </Row>
      </Grid>
    </Grid>
  );
};
export default Pricing;
const Cards = styled(Grid)`
  /* background: rgba(255, 255, 255, 0.8); */
  background: transparent;
  /* opacity: 0.2px; */
  box-shadow: white 0px 2px 8px 0px;
  border: 0.5px solid white;
  transition: 0.5s ease;
  &:hover {
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
    transform-origin: right top;
    transform: perspective(1000px) rotateX(10deg) rotateY(-10deg) rotateZ(2deg);
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
    transform-origin: center top;
    transform: perspective(1000px) rotateX(10deg);
    box-shadow: -15px 15px 50px rgba(0, 0, 0, 0.3);
    transform-origin: left top;
    transform: perspective(1000px) rotateX(10deg) rotateY(10deg) rotateZ(-2deg);
    box-shadow: 15px 5px 50px rgba(0, 0, 0, 0.3);
    transform-origin: left center;
    transform: perspective(1000px) rotateY(-10deg);
    box-shadow: -15px 5px 50px rgba(0, 0, 0, 0.3);
    transform-origin: right center;
    transform: perspective(1000px) rotateY(10deg);
    /* box-shadow: 15px -15px 50px rgba(0, 0, 0, .3);
     transform-origin: right bottom;
     transform: perspective(1000px) rotateX(-10deg) rotateY(-10deg) rotateZ(-2deg);
     box-shadow: 0 -15px 50px rgba(0, 0, 0, .3);
    transform-origin: center bottom;
     transform: perspective(1000px) rotateX(-10deg);
     box-shadow: -15px -15px 50px rgba(0, 0, 0, .3);
     transform-origin: left bottom;
    transform: perspective(1000px) rotateX(-10deg) rotateY(10deg) rotateZ(2deg);  */
  }
`;
const Row = styled(Grid)`
  display: flex;
  /* align-items: center; */
  justify-content: center;
  @media (max-width: 594px) {
    margin-left: -18px !important;
  }
`;
const Service = styled.div`
  display: flex;
  /* align-items: center; */
  /* width: "50%"; */
  /* justify-content: center; */
`;

const ScrollBar = styled.div`
  overflow-y: scroll;
  border-radius: 10px;
  box-shadow: inset 0 0 3px grey;
  padding: 10px;
  &::-webkit-scrollbar {
    width: 6px;
    background-color: white;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(55deg, black 15%, #273444 90%);
    border-radius: 10px;
    /* width: 20px; */
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 3px grey;
    border-radius: 10px;
  }
`;
