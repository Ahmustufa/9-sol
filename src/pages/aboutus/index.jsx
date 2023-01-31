import dynamic from "next/dynamic";
import HeroSection from "@/components/heroSection";
// import Head from "next/head";
import styled from "styled-components";
import { Fade, Bounce, Zoom } from "react-awesome-reveal";
const Process = dynamic(() => import("../../components/process/index"));

import {
  brand,
  aboutUsBanner,
  mission,
  vision,
  businessDashboard,
} from "/public";
// import Heading from "@/components/Title/Heading";
const StyledDiv = styled.div`
  .main-heading {
    color: #fff;
    font-weight: 700;
    // font-family: "Open Sans Condensed", sans-serif;
    font-size: 48px;
  }

  .main-heading::after {
    content: "";
    display: block;
    height: 6px;
    width: 40%;
    margin: 20px auto;
    background-color: #aa076b;
    border-radius: 4px;
  }

  .content-card-container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .content-card {
    background-color: #fff;
    top: -120px;
    position: relative;
    height: auto;
    width: 90%;
    border-radius: 45px;
    box-shadow: 0px 0px 15px -2px #888888;
    display: flex;
    align-items: center;
    flex-direction: column;

    .content-card-upper {
      padding: 5% 10%;
    }
  }

  .brand-assence-section {
    background-color: #f3f6fa;
    height: auto;
    width: 100%;
    padding: 5% 10%;
    border-radius: 0 0 45px 45px;
    // box-shadow: 0px -1px 4px -1px #c4c4c4;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 40px;
  }
  .card-heading {
    font-weight: bold;
    padding: 10px 0;
    text-align: center;
  }
  .para {
    font-size: 22px;
    font-weight: 500;
    width: 100%;
    text-align: center;
    color: #000;
  }

  @media (max-width: 1024px) {
    .para {
      width: 100% !important;
    }
  }

  @media (max-width: 554px) {
    .brand-assence-section {
      padding: 5% 6%;
    }
    h3 {
      font-size: 20px;
    }
    .para {
      font-size: 16px;
    }
    .content-card .content-card-upper {
      padding: 5% 6%;
    }
  }
`;

const AboutUs = () => {
  return (
    <>
      <StyledDiv>
        <HeroSection
          height={"70vh"}
          type="image"
          companySliderHide={true}
          background={aboutUsBanner}
          typeWriterContent="Polymath Team"
          subTitleContent={
            <h2 style={{ color: "#fff", fontSize: 20, fontWeight: 600 }}>
              driven by innovation
              <br />
              ....... providing only the best solutions for your ideas.
            </h2>
          }
        />

        <div className="content-card-container">
          <div className="content-card">
            <div className="content-card-upper">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Zoom triggerOnce>
                  <img
                    alt="business-dashboard"
                    src={businessDashboard}
                    width={"70px"}
                    style={{ marginTop: "5%", marginBottom: "2%" }}
                  />
                </Zoom>
              </div>
              <Fade triggerOnce direction="up" cascade damping={0.2}>
                <h3 className="card-heading">Business Description</h3>
                <br />
                <p className="para">
                  9solutions was established in 2013 as a software development
                  and technology solutions firm for it being the best way to
                  gain and share knowledge for transforming lives and making
                  progress.
                </p>
                <br />
                <p className="para">
                  The small initiative is now 40+ strong and during this time we
                  have not only mastered range of web software development
                  frameworks but we have become highly proficient in speaking
                  the language of business to accommodate our partners.
                </p>
                <br />
                <p className="para">
                  In the spirit of constant improvement, we have transformed
                  from Agile masters to Scrum experts. We are now able to give
                  back to community by sharing our knowledge and expertise.
                </p>
                <br />
                <p className="para">
                  We do have open space environment for our Scrum teams to
                  function properly but to keep their focus we have introduced a
                  system as simple as it is effective: Full focus, one Team, one
                  Client.
                </p>
                <br />
                <p className="para">
                  Our dedication to transparency, constant feedback, programming
                  excellence and innovative approach towards solving problems
                  and providing solutions has been recognized by our long-term
                  technology partners. We hope that you will soon join their
                  ranks and discover the sheer joy of working with 9solutions.
                </p>
                <br />
              </Fade>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Zoom triggerOnce>
                  <img
                    alt="vision"
                    src={vision}
                    width={"70px"}
                    style={{ marginTop: "8%", marginBottom: "2%" }}
                  />
                </Zoom>
              </div>
              <Fade triggerOnce direction="up" cascade damping={0.2}>
                <h3 className="card-heading">Vision Statement</h3>
                <p style={{ padding: "0px 20%" }} className="para">
                  Our vision is to be at the forefront in providing
                  technological solutions to ease apprehension in human life.
                </p>
              </Fade>
              <Zoom triggerOnce>
                <p
                  style={{ marginTop: "4%", fontWeight: 600 }}
                  className="para"
                >
                  To follow our vision, our mission statement is:
                </p>
              </Zoom>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Zoom triggerOnce>
                  <img
                    alt="mission"
                    src={mission}
                    width={"70px"}
                    style={{ marginTop: "12%", marginBottom: "2%" }}
                  />
                </Zoom>
              </div>
              <Fade triggerOnce direction="up" cascade damping={0.2}>
                <h3 className="card-heading">Mission Statement</h3>
                <p style={{ padding: "0px 20%" }} className="para">
                  We provide outstanding tech solutions and unparalleled service
                  that, combined, deliver premium value to our customers.
                </p>
              </Fade>
            </div>

            <div className="brand-assence-section">
              <Zoom triggerOnce cascade>
                <img
                  alt="brand"
                  src={brand}
                  width={"70px"}
                  style={{ marginBottom: "2%" }}
                />
                <h3 className="card-heading">
                  9solutions has following brand essence, attributes and values:
                </h3>
              </Zoom>

              <Fade triggerOnce cascade direction="up">
                <h3 className="card-heading">Brand Essence:</h3>
                <h3 className="">Inventor, Discoverer</h3>
              </Fade>

              <Fade triggerOnce cascade direction="up">
                <h3 className="card-heading mt-5">Attributes:</h3>
                <h3 className="text-center">
                  Relentless, Logical, Smart, Urban, Mature, Resourceful
                </h3>
              </Fade>

              <Zoom triggerOnce>
                <h3 className="card-heading mt-5">Company Values</h3>
              </Zoom>
            </div>
          </div>
        </div>
              <Process />
      </StyledDiv>
    </>
  );
};

export default AboutUs;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "A Complete Overview Of 9solutions",
        description:
          "All About 9solutions | Integrity | Client Satisfaction | Quality",
        keywords: "A Complete Overview Of 9solutions",
        publishTime: new Date().toISOString(),
      },
    },
  };
}
