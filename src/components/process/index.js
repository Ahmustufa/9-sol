import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import Heading from "../Title/Heading";
import { HiChevronDoubleRight, HiChevronDoubleLeft } from "react-icons/hi";
import {
  process1,
  process2,
  process3,
  process4,
  process5,
  process6,
} from "/public/index.js";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

const StyledDiv = styled.div`
  background-color: #fff;
  padding: 3% 10%;

  .dots-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // height: 160px;
    margin: 50px 10% 50px 10%;

    p {
      margin-bottom: 0;
      margin-left: -12px;
    }
  }

  .dot {
    border-radius: 50%;
    background-color: #fff;
    border: 2px solid #61045f;
    box-sizing: border-box;
    z-index: 1;
    cursor: pointer;
    transition: 0.3s ease;

    &:hover {
      background-color: #61045f;
    }
  }

  .moving-dot {
    position: absolute;
    border-radius: 50%;
    background-color: #61045f;
    transition: all 0.3s ease-in-out;
    z-index: 1;
    box-shadow: 0px 0px 15px #ed3c69;
  }

  .dots-background {
    width: 50px;
    background-color: transparent;
    height: 38px;
    border-right: 9px solid #fff;
    border-left: 9px solid #fff;
    margin: 0px 0px 0px -16px;
  }

  .image-col {
    img {
      width: 100%;
    }
  }

  .above-slider-div {
    padding: 0px 15% 0px 0px;
    h2 {
      margin-bottom: 24px;
      font-weight: 600;
    }
    p {
      color: #4e4e4e;
      line-height: 2.5;
    }
  }

  .solutions-heading {
    display: flex;
    justify-content: space-between;
  }

  .arrow-icon {
    color: #61045f;
    font-size: 24px;
    cursor: pointer;
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 991px) {
    .dots-container {
      p {
        margin-bottom: 0;
        margin-left: -12px;
        font-size: 14px;
      }
    }

    .above-slider-div {
      p {
        line-height: 2;
      }
    }
  }

  @media (max-width: 767px) {
    .row {
      text-align: center;
    }
    .above-slider-div {
      padding: 0px;
      h2 {
        font-size: 24px;
      }
      p {
        line-height: 1.8;
      }
    }

    .image-col {
      img {
        width: 250px;
      }
    }
  }

  @media (max-width: 600px) {
  }

  @media (max-width: 480px) {
  }
`;

const steps = [
  {
    title: "Ideation",
    heading: "Client Brain Storming/Ideation",
    para: `This is the preliminary activity where we pick client's brain for understanding their needs and wants separately. It is done to clarify the whole development process and establishes an agency/client stack holder expectation scenario. During the client brainstorming/Interview, a questionnaire is described and filled by the client for their idea in writing. NDA is also signed with the client for maintaining their idea confidentiality. `,
    image: process1,
  },
  {
    title: "Estimate",
    heading: "Scope of Work Estimate",
    para: `The SoW document is the basis of potential features that will be part of the actual application. The scope is defined in broader terms and then divided into main features with respect to the type of users i.e. Client app, Super Admin app etc. Each feature is defined in layman terms for its clarification at all levels. When Client is satisfied with the scope document, an agreement is signed for proceeding with the development of the App.`,
    image: process2,
  },
  {
    title: "Prototype",
    heading: "Design, Prototype and Documentation",
    para: (
      <>
        In this phase the designing of the prototype of the App is done along
        with supporting documentation:
        <ul style={{ lineHeight: 2, marginBottom: 0, paddingLeft: 20 }}>
          <li>Brand Design Guidelines</li>
          <li>Functional Specification </li>
          <li>Level of Efforts estimate in hours (LOEe) </li>
          <li>Technical Design Document</li>
          <li>Work-plan Milestones Delivery Schedule</li>
          <li>Software Test Plan document</li>
        </ul>
        With the outcome of this phase eForte and Client's expectations are
        matched for the outcome of the Development phase.
      </>
    ),
    image: process3,
  },
  {
    title: "Milestones",
    heading: "Milestones - Scrum Development",
    para: `During the software development phase of the App, the development is done with respect to the Workplan Milestone Delivery schedule. We work according to the Agile- Scrum methodology, being in connection with Client's Product Owner via eForte Project Manager for weekly/Bi-weekly meetings along with the Dev and Design team. We make use of Git repos and DTAP (Dev, Testing, Acceptance, Production) DevOps pipelines.`,
    image: process4,
  },
  {
    title: "Launch",
    heading: "Launch and Support",
    para: `After every milestone has been fully developed, tested and accepted by the client, the project goes into Production i.e. Live environment.`,
    image: process5,
  },
  {
    title: "Growth",
    heading: "Growth Continuation",
    para: `With the launch of the App, a support and maintenance agreement signed for keeping the App without any bugs and for the development of new features.`,
    image: process6,
  },
];

/**
 * Component Starts Here
 */
const Process = ({ type, size }) => {
  const [value, setValue] = useState(0);

  const myref = useRef({ offsetWidth: 0, clientHeight: 0 });
  const movingDotRef = useRef({ clientWidth: 0 });

  let movingBreadth,
    horizontal = true;
  if (type === "horizontal") {
    movingBreadth =
      (myref.current?.offsetWidth - movingDotRef.current?.clientWidth) /
      (steps.length - 1);
    horizontal = true;
  }
  if (type === "vertical") {
    movingBreadth =
      (myref.current?.clientHeight - movingDotRef.current.clientWidth) /
      (steps.length - 1);
    horizontal = false;
  }

  return (
    <StyledDiv>
      <Fade direction="up" triggerOnce cascade duration={1300} damping={0.2}>
        <Heading>
          We work with a holistic approach that allows us to <br />
          deliver you quality – every single time!
        </Heading>
        <p style={{ textAlign: "center" }}>
          An intelligent website automates your business processes. That is why
          we have streamlined our processes to ensure giving our crafted
          websites that intelligence every time we work on a project.
        </p>
      </Fade>

      <Grid container>
        <Grid item xs={0} sx={{ display: { xs: "none", md: "block", lg: "block", xl: "block" }}} sm={12} md={12} lg={12} xl={12} >
          <div
            ref={myref}
            className="dots-container"
            style={{ flexDirection: horizontal ? "row" : "column" }}
          >
            {steps.map((step, index) => (
              <div
                key={index}
                style={{
                  width: size || 20,
                  height: size || 20,
                }}
                className="dot"
                onClick={() => {
                  setValue(index);
                }}
                id={index}
              >
                <div className="dots-background" />
                <p
                  style={{
                    color: value === index ? "#61045f" : "#969595",
                    fontWeight: value === index ? 600 : 500,
                    userSelect: "none",
                  }}
                >
                  {step.title}
                </p>
              </div>
            ))}

            <div
              ref={movingDotRef}
              className="moving-dot"
              style={{
                width: size || 20,
                height: size || 20,
                [horizontal ? "left" : "top"]: `${movingBreadth * value}px`,
              }}
            />
            {/* Line */}
            <div
              style={{
                position: "absolute",
                height: horizontal ? "2px" : "100%",
                width: horizontal ? "100%" : "2px",
                backgroundColor: "#2A2A2A",
                zIndex: 0,
              }}
            />
          </div>
        </Grid>

        <Grid item xs={12} mt={4} >
          <div className="solutions-heading  align-items-center">
            <HiChevronDoubleLeft
              className="arrow-icon"
              onClick={() => setValue((prev) => (prev > 0 ? prev - 1 : 0))}
            />
            <h3 style={{ color: "#61045f" }}>
              <b>{steps[value]?.title}</b>
            </h3>
            <HiChevronDoubleRight
              className="arrow-icon"
              onClick={() =>
                setValue((prev) =>
                  prev < steps.length - 1 ? prev + 1 : steps.length - 1
                )
              }
            />
          </div>
        </Grid>
      </Grid>

      <Grid
        container
        className="row"
        style={{ alignItems: "center", padding: "5% 2%" }}
      >
        {steps.map((item, index) => (
          <>
            {index == value && (
              <>
                <Grid item  xl={8} lg={8} md={8} sm={12} xs={12}>
                  <Fade triggerOnce duration={1300} damping={0.2}>
                    <div className="above-slider-div">
                      <h2 className="d-none d-sm-none d-md-block">
                        {steps[index].heading}
                      </h2>
                      <p>{steps[index].para}</p>
                    </div>
                  </Fade>
                </Grid>
                <Grid
                  item
                  
                  xl={4}
                  lg={4}
                  md={4}
                  sm={12}
                  xs={12}
                  className="image-col"
                >
                  <Zoom triggerOnce>
                    <img alt="process-img" src={steps[index].image} />
                  </Zoom>
                </Grid>
              </>
            )}
          </>
        ))}
      </Grid>
    </StyledDiv>
  );
};

Process.defaultProps = {
  type: "horizontal",
};

export default Process;
