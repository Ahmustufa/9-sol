import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";
import moment from "moment/moment";
import Link from "next/link";
import Text from "./Typography/Text";
import { RxDoubleArrowRight } from "react-icons/rx";
import Bounce from "./animation/Bounce";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import Ripple from "./animation/Ripple";
import { items } from "@/utils/navItems";
const FooterContent2Div = styled.div`
  background-color: #232a38;
  padding: 16px 4%;

  a {
    color: #9da4b1;
    text-decoration: none;
    &:hover {
      color: #fff;
    }
  }

  .first-col {
    display: flex;
    align-items: center;
    p {
      color: #9da4b1;
      margin: 0px;
    }
  }

  .second-col {
    display: flex;
    align-items: center;
    img {
      width: 200px;
      margin-right: 16px;
    }
    h4 {
      font-size: 20px;
      color: rgb(226, 226, 226);
      font-weight: 400;
      display: inline-block;
    }
  }

  @media (max-width: 767px) {
    .main-row {
      text-align: center;
    }
    .first-col {
      p {
        font-size: 14px;
      }
    }

    .second-col {
      margin-top: 32px;
      justify-content: center;
      img {
        width: 150px;
        margin-right: 16px;
      }
      h4 {
        font-size: 16px;
      }
    }
  }
`;
const Footer = () => {
  return (
    <FooterContent2Div>
      <Grid container mb={5}>
        <Grid
          item
          xl={4}
          lg={4}
          md={5}
          sm={8}
          xs={8}
          sx={{ display: { sm: { justifyContent: "center" } } }}
        >
          {/* <Box> */}
          <Link href="/">
            <Image
              src={require("/public/images/logo/Dark-9Sol.png")}
              width={300}
            />
          </Link>
          {/* </Box> */}
          <Stack spacing={2}>
            <div className="flex  items-center">
              <PhoneIcon sx={{ fontSize: "20px", color: "white" }} />
              <a className="text-white px-2" href="tel:+13478538850">
                (347) 853-8850
              </a>
            </div>
            <div className="flex items-center">
              <EmailIcon
                sx={{
                  fontSize: "20px",
                  color: "white",
                  xs: { fontSize: "12px" },
                }}
              />

              <a
                className="text-white px-2"
                href="mailto:management@9solutions.com"
                style={{ display: "block" }}
              >
                management@9solutions.com
              </a>
            </div>
          </Stack>
        </Grid>
        <Grid item xl={2} lg={2} md={3} sm={3} xs={6}>
          <Box display="flex">
            <Text variant="h6" className="text-white mb-2 text-center p-5">
              Menu
            </Text>
          </Box>
          <Stack spacing={2}>
            {items.map((item, index) => (
              <div
                style={{ display: "flex", alignItems: "center" }}
                key={index}
              >
                <Bounce style={{ paddingRight: "20px" }}>
                  <RxDoubleArrowRight color="white" />
                </Bounce>
                <Link href={item.to}>{item.title}</Link>
              </div>
            ))}
          </Stack>
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          md={4}
          sm={12}
          display="flex"
          alignItems="center"
        >
          <Text color="white" letterSpacing={2} textAlign="center" p={2}>
            At 9Solutiions, we&apos;re passionate about delivering innovative
            and high-quality web and mobile development solutions. Our team of
            expert developers works tirelessly to bring your vision to life and
            create products that stand out in the digital landscape.
          </Text>
        </Grid>
        <Grid
          item
          xl={2}
          lg={2}
          sx={{
            display: {
              xl: "flex",
              lg: "flex",
              md: "none",
              sm: "none",
              xs: "none",
            },
            justifyContent: "end",
          }}
        >
          <Ripple>
            <Image src={require("/public/images/mobile/VR.png")} height={290} />
          </Ripple>
        </Grid>
      </Grid>
      <Grid container className="main-row">
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12} className="first-col">
          <p>
            Copyright © {moment().format("YYYY")}
            <span style={{ fontWeight: 600 }}>
              <Link href="/" className="px-2">
                9solutions.co
              </Link>
            </span>
            | All rights reserved.
            <span style={{ fontWeight: 600 }} className="px-2">
              <Link href="/term-of-use">Terms and Conditions</Link>

              <Link href="/privacy-policy" className="px-2">
                Privacy Policy
              </Link>
            </span>
          </p>
        </Grid>
        <Grid item xl={2} lg={6} md={6} sm={12} xs={12} className="second-col">
          <a
            // href="https://www.2checkout.com/homepage/"
            target="_blank"
          >
            <img alt="2-checkout" src={"/images/paymentlogosvertical.png"} />{" "}
          </a>
        </Grid>
        <Grid item xl={2} lg={2} md={6} sm={12} xs={12} className="second-col">
          <a
            // href="//www.dmca.com/Protection/Status.aspx?ID=6244df18-9499-4810-aca9-fad933a24c48"
            title="DMCA.com Protection Status"
            class="dmca-badge"
            target="_blank"
          >
            {" "}
            <img
              style={{ width: 115 }}
              src="https://images.dmca.com/Badges/dmca_protected_sml_120m.png?ID=d4ee90ff-deaf-47d3-a628-7291ed33ec8f"
              alt="DMCA.com Protection Status"
            />
          </a>
        </Grid>
      </Grid>
    </FooterContent2Div>
  );
};

export default Footer;
