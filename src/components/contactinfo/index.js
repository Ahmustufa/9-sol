import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import Heading from "../Title/Heading";
import { tollFreeImg, requestCallImg, liveChatImg } from "/public";
import { Fade, Bounce } from "react-awesome-reveal";

const StyledDiv = styled.div`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : "#fff"};
  padding: 3% 10%;

  .row {
    padding: 0px 15%;
    .col {
      display: flex;
      justify-content: center;
    }
  }

  h1 {
    text-align: center;
    font-weight: bold;
    margin: 0px 0px 24px;
    line-height: 1.1em;
    font-size: 36px;
  }
  p {
    text-align: center;
    padding: 0px 5%;
  }
  a {
    color: #2a2a2a;
    font-size: 24px;
    font-weight: 700;
    text-decoration: none;
  }

  @media (max-width: 1024px) {
    .row {
      padding: 0px 5%;
    }
  }

  @media (max-width: 896px) {
    .h-text {
      font-size: 20px;
    }
  }
  @media (max-width: 738px) {
    .h-text {
      font-size: 14px;
    }
  }

  @media (max-width: 767px) {
    padding: 5% 10%;
    h1 {
      font-size: 24px;
    }
    p {
      text-align: left;
    }
    .row {
      display: flex;
      .col {
        margin-bottom: 12px;
        justify-content: start;
      }
    }
  }

  @media (max-width: 480px) {
  }
`;

const ContactInfo = (props) => {
  return (
    <StyledDiv backgroundColor={props.backgroundColor}>
      <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
        <h1>
          <Heading>
            Got a unique idea that you want developed
            <br />
            or Addition to your existing App?
            <br />
            Get in touch with us today for Expert discussion!
          </Heading>
        </h1>
        <p style={{ marginBottom: 50 }}>
          We are available round-the-clock, ensuring that none of your queries are left
          unanswered. <br />
          Give us a call today and we'll assist you in turning your idea into a ravishing
          reality.
        </p>
      </Fade>
      <Grid container className="row">
        <Grid item  xs={6} className="col">
          <Bounce triggerOnce duration={1300}>
            <img alt="toll-free" src={tollFreeImg} style={{ height: 50, width: 50 }} />
          </Bounce>
          <div style={{ padding: "0px 12px" }}>
            <Fade triggerOnce cascade>
              <h6>Toll Free</h6>
              <h6>
                <a href="tel:+16506819645" className="h-text">+1 (650) 681-9645</a>
              </h6>
            </Fade>
          </div>
        </Grid>

        <Grid item xs={6} className="col">
          <Bounce triggerOnce duration={1300}>
            <img
              alt="request-calling"
              src={requestCallImg}
              style={{ height: 50, width: 50 }}
            />
          </Bounce>
          <div style={{ padding: "0px 12px" }}>
            <Fade triggerOnce cascade>
              <h6>Request</h6>
              <h5>
                <a href="tel:+16506819645" className="h-text">Call Back</a>
              </h5>
            </Fade>
          </div>
        </Grid>

        {/* <Grid xs={4} className="col">
          <Bounce triggerOnce duration={1300}>
            <a href="javascript:void(Tawk_API.toggle())">
              <img
                alt="live-chatting"
                src={liveChatImg}
                style={{ height: 50, width: 50 }}
              />
            </a>
          </Bounce>
          <div style={{ padding: "0px 12px" }}>
            <Fade triggerOnce cascade>
              <h6>Start a</h6>
              <h5>
                <a href="javascript:void(Tawk_API.toggle())">Live Chat</a>
              </h5>
            </Fade>
          </div>
        </Grid> */}
      </Grid>
    </StyledDiv>
  );
};

export default ContactInfo;
