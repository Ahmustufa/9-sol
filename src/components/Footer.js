import React from "react";
import { Box, Grid, Stack } from "@mui/material";
import Image from "next/image";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import styled from "styled-components";
import moment from "moment/moment";
import Link from "next/link";


const FooterContent2Div = styled.div`
  background-color: #232a38;
  padding: 16px 8%;

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
    <Grid container>
      <Grid item xs={3}>
        <Box>
          <Image
            src={require("/public/images/logo/Dark-9Sol.png")}
            width={300}
          />
        </Box>
        <Stack spacing={2}>
          <div className="flex px-6 items-center">
            <AiOutlinePhone fontSize={30} color="white" />
            <a className="text-white px-2" href="tel:+13322825382">
              +1-332-282-5382
            </a>
          </div>
          <div className="flex px-6 items-center">
            <AiOutlineMail fontSize={30} color="white" />
            <a className="text-white px-2" href="mailto:hr@9solutions.com">
            hr@9solutions.com
            </a>
          </div>
        </Stack>
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
              <Link href="term_of_use">
               Terms and Conditions 
              </Link>
             
              <Link href="/privacy_policy" className="px-2">
                Privacy Policy 
              </Link>
            </span>
          </p>
        </Grid>
        <Grid item  xl={4} lg={6} md={6} sm={12} xs={12} className="second-col">
          <a href="https://www.2checkout.com/homepage/" target="_blank">
            <img alt="2-checkout" src={'/images/paymentlogosvertical.png'} />{" "}
          </a>
          <h4 style={{ margin: 0 }} >Secure Payments by 2checkout</h4>
        </Grid>
        <Grid item  xl={2} lg={2} md={6} sm={12} xs={12} className="second-col">
          <a
            href="//www.dmca.com/Protection/Status.aspx?ID=6244df18-9499-4810-aca9-fad933a24c48"
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
          </a>{" "}
          <script src="https://images.dmca.com/Badges/DMCABadgeHelper.min.js"> </script>
        </Grid>
      </Grid>
    </FooterContent2Div>
  );
};

export default Footer;
