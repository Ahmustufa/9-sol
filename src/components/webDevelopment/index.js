import React from "react";
import styled from "styled-components";
import { Grid } from "@mui/material";
import {
  webDevelopment1,
  webDevelopment2,
  webDevelopment3,
  webDevelopment4,
  webDevelopment5,
  webDevelopment6,
} from "/public";
import { Slide, Fade, Bounce, Zoom } from "react-awesome-reveal";
import Heading from "../Title/Heading";
const StyledDiv = styled.div`
  padding: 5% 5% 0px 5%;

  .main-div {
    padding: 0px 10%;
    .row {
      padding-top: 60px;
      padding-bottom: 60px;
      border-bottom: 1px solid darkgray;
      min-height: 400px;
      align-items: center;
      :last-child {
        border-bottom: 0px;
      }
    }

    .twoLineList li {
      width: 50%;
      float: left;
      font-weight: 400;
      margin-top: 6px;
      margin-bottom: 6px;
      // white-space: nowrap;
    }

    .request-a-quote {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 4px;
      background-color: #aa076b;
      color: #fff;
      width: 160px;
      border-radius: 4px;
      user-select: none;
      font-weight: 600;
      cursor: pointer;
    }
    .image-div {
      display: flex;
      justify-content: center;
      img {
        width: 450px;
        border-radius: 6px;
      }
    }
    .heading {
      display: flex;
      align-items: center;
    }
    .number-div {
      min-height: 40px;
      min-width: 40px;
      background-color: #aa076b;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 24px;
      user-select: none;
      margin-right: 12px;
    }
    .para {
      margin-top: 12px;
      line-height: 1.9;
      padding: 0px 4% 0px 0px;
    }
  }

  @media (max-width: 1300px) {
    .main-div {
      padding: 0px 5%;
      .para {
        padding: 0px 4% 0px 0px;
      }
    }
  }

  @media (max-width: 991px) {
    padding: 100px 5% 0px;
    .main-div {
      .para {
        padding: 0px 0px 0px 0px;
      }
      .image-div {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 350px;
        }
      }
      .heading {
        margin-top: 24px;
      }
      h3 {
        font-size: 20px;
        font-weight: 500;
      }
    }
  }

  @media (max-width: 576px) {
    .twoLineList li {
      width: 100%;
    }
  }
`;

const webDevelopmentArray = [
  {
    image: webDevelopment1,
    title: "Content Management System",
    para: "We create websites using CMS so that you can update your website whenever you want to without running after a professional. Get our specialized and professional services as we master in incorporating CMS in all kinds of websites including Drupal and WordPress.",
  },
  {
    image: webDevelopment2,
    title: "Store Development",
    para: "Without a smooth and user-friendly online store, you cannot run a successful ecommerce website. Our web developers are well-aware of the pre-requisites of e-stores and embed plug-ins that makes online shopping easier and fun.",
  },
  {
    image: webDevelopment3,
    title: "Shopping Cart Integration",
    para: "Every e-business wishes to offer a seamless experience to its visitors. But to have such an online store you need professional web developers who are experienced in the field. At eForte, you can find highly skilled web developers who specialize in designing customized Magneto and Open-cart plug-in. we ensure that your online shop is smooth and easy-to-navigate.",
  },
  {
    image: webDevelopment4,
    title: "Payment API Integration",
    para: "eForte specializes in making online shopping a safer and easier choice for the customers. We are experienced in combining POS, CRM, Inventory Management and Financial Management to ensure safe online money transactions. We revolutionize e-business with our new and innovative technology.",
  },
  {
    image: webDevelopment5,
    title: "Javascript, Jquery & Ajax Development",
    para: "Ajax, Jquery and Javascript are the world's leading models used in developing and designing websites. Web developers at eForte have a vast expertise of creating these models to create innovative and exquisite websites for clients worldwide. We may use any one or the combination of these models to produce efficient and functional websites that will make you stand out from the competition.",
  },
  {
    image: webDevelopment6,
    title: "Custom Code",
    para: "Customized plug-ins and applications are one of the most important tools for creating your online brand identity. Web developers at eForte know what it takes to design custom codes for your website, plug-ins and/or applications. Our custom coded websites are not only compatible with all types of browsers but also with all mobile platforms.",
  },
];

const additionalServicesArray = [
  {
    image: "/images/web-solutions/ws_image_1.png",
    slug: "mobile-app-development",
    title: "MOBILE APP DEVELOPMENT",
    subTitle: "360 App Development Package",
    heading:
      "Our App development package includes all; Requirement Analysis, Designing, Development, customer support, and detailed Documentation.",
    para: (
      <>
        A complete solution for your Mobile App development needs, delivering
        Native and Hybrid optimized App-store designs which are attractive and
        intuitive to explore. Mobile Apps market being a competitive domain, it
        can be over whelming to understand every aspect of Mobile apps
        development. You need professionals who can help you scale from idea
        encapsulation to design and delivery on app store.
        {/* <Timeline style={{ marginTop: 20 }}>
          <Timeline.Item>Requirement Analysis through a questionnaire</Timeline.Item>
          <Timeline.Item>
            Detailed Level of Efforts Estimate (for transparent costing)
          </Timeline.Item>
          <Timeline.Item>
            Prototype of App Design with Admin panel for KPI measurement{" "}
          </Timeline.Item>
          <Timeline.Item>
            Testing, Technical and milestone deliveries documents
          </Timeline.Item>
          <Timeline.Item>World class customer support</Timeline.Item>
        </Timeline> */}
      </>
    ),
  },
  {
    image: "/images/web-solutions/ws_image_2.png",
    slug: "b2c-dashboards",
    title: "B2C DASHBOARDS",
    subTitle: "Web Apps & Business to Customer Dashboards",
    heading:
      "Web only Apps with Business Dashboards give insights for KPIs and Users Management",
    para: (
      <>
        Your business may require customers to interact with Web only App with
        Admin dashboard for managing users and measuring KPIs. Our experience as
        solution provider has given us the edge in creating Web App dashboards
        for any business model with a clean practical interface. We create
        Business Dashboard apps that can generate clear visualizations of very
        complex data sets, empowering Manager to make better decisions faster.
        {/* <Timeline style={{ marginTop: 20 }}>
          <Timeline.Item> Automation of complex business processes</Timeline.Item>
          <Timeline.Item>Visual presentation of performance measures</Timeline.Item>
          <Timeline.Item>Ability to generate detailed reports</Timeline.Item>
          <Timeline.Item>Manage Users, Admins and process flows</Timeline.Item>
        </Timeline> */}
      </>
    ),
  },
  {
    image: "/images/web-solutions/ws_image_3.png",
    slug: "b2b-dashboards",
    title: "B2B DASHBOARDS",
    subTitle: "Business to Business Web Apps",
    heading:
      "Business to Business Dashboard Web Apps that are reliable for commercial client engagement",
    para: (
      <>
        According to the needs of your business you might have to deal with
        other businesses, B2B portals allow you to manage your relationships
        with other businesses i.e. distributors, partners, vendors and also
        customers through use of a single platform. At eForte, we know what it
        takes to develop astounding B2B Web Portals that allows businesses to
        channel their services across the globe.
        {/* <Timeline style={{ marginTop: 20 }}>
          <Timeline.Item>Investment Portals</Timeline.Item>
          <Timeline.Item>Recruitment Portals</Timeline.Item>
          <Timeline.Item>Online food delivery</Timeline.Item>
          <Timeline.Item>Transport portals</Timeline.Item>
        </Timeline> */}
      </>
    ),
  },
  {
    image: "/images/web-solutions/ws_image_4.png",
    slug: "startup-mvp-and-prototyping",
    title: "STARTUP MVP & PROTOTYPING",
    subTitle: "Startup MVP & Product Prototyping",
    heading:
      "Creating a 'Software as a Service' or SaaS product isn't an easy process.",
    para: (
      <>
        Some startups decide to go the MVP route directly, which means minimum
        viable product, to demonstrate the idea to potential customers and
        investors. But this is expensive, since it requires hiring an in-house
        team or software development company. The right solution is prototyping
        your product idea before an MVP the same way architects model a
        prototype before taking up a big construction project.
        {/* <Timeline style={{ marginTop: 20 }}>
          <Timeline.Item>SaaS Portals</Timeline.Item>
          <Timeline.Item>Business Process Automation</Timeline.Item>
          <Timeline.Item>B2B and B2C portals</Timeline.Item>
        </Timeline> */}
      </>
    ),
  },
  {
    image: "/images/web-solutions/ws_image_5.png",
    slug: "blockchain-development",
    title: "Blockchain Development",
    subTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    heading:
      "Creating a 'Software as a Service' or SaaS product isn't an easy process.",
    para: (
      <>
        Blockchain has already established itself as status quo for creating a
        distributed consensus in the digital online world. Companies around the
        globe are pursuing to adopt Blockchain to create innovative business
        models to overtake the competition. We can help you adopt to the
        blockchain technology as we have resources and talent to provide support
        in open source Blockchain related tools. eForte was awarded Entrepreneur
        of the year for the years 2017 and 2018 consecutively by IBM. Our
        proficiency and understanding of the technology pave the way for
        revolutionizing many industries:
        <div className="twoLineList">
          {/* <Timeline style={{ marginTop: 20 }}>
            <Timeline.Item>The Human Resources Industry</Timeline.Item>
            <Timeline.Item>The Legal Industry</Timeline.Item>
            <Timeline.Item>The Healthcare Industry</Timeline.Item>
            <Timeline.Item>The Real Estate Industry</Timeline.Item>
            <Timeline.Item>The Online Music Industry</Timeline.Item>
            <Timeline.Item>Crowdfunding</Timeline.Item>
            <Timeline.Item>Supply Chain Management</Timeline.Item>
            <Timeline.Item>Education and Academia</Timeline.Item>
            <Timeline.Item>Payments, Money transfers and Banking</Timeline.Item>
            <Timeline.Item>Car Leasing and Sales</Timeline.Item>
            <Timeline.Item>Cloud Storage</Timeline.Item>
            <Timeline.Item>Gift Cards and Loyalty Programs</Timeline.Item>
            <Timeline.Item>Gun Tracking</Timeline.Item>
            <Timeline.Item>Law Enforcement</Timeline.Item>
            <Timeline.Item>Business and Corporate Governance</Timeline.Item>
            <Timeline.Item>Credit Histories</Timeline.Item>
            <Timeline.Item>Pharmaceutical Industry</Timeline.Item>
          </Timeline> */}
        </div>
      </>
    ),
  },
];

const WebDevelopement = (props) => {
  return (
    <StyledDiv>
      <div className="main-div">
        {props.type == "webDevelopment" ? (
          <>
            <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
              <Heading title={"Our Expertise"} />
              <p style={{ textAlign: "center" }}>
                Our experts know what it takes to offer you an all-inclusive
                Apps designing and development services. Working with a company
                like eForte with a decade of experience entitles you to a
                diverse team of experts who are the connoisseurs of the software
                designing and development industry.
              </p>
            </Fade>
            {webDevelopmentArray.map((data, index) => {
              return (
                <Grid
                  container
                  key={index}
                  style={{
                    flexDirection: index % 2 == 0 ? "initial" : "row-reverse",
                  }}
                  className="row"
                  id={data.slug}
                >
                  <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                    <Zoom triggerOnce>
                      <div className="image-div">
                        <img src={data.image} alt="img" />
                      </div>
                    </Zoom>
                  </Grid>
                  <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                    <Fade triggerOnce direction="up" cascade>
                      <div className="heading">
                        {/* <div className="number-div">{index + 1}</div> */}
                        <h3 style={{ marginBottom: 0 }}>{data.title}</h3>
                      </div>
                      <p className="para">{data.para}</p>
                      {/* <div className="request-a-quote">GET A FREE QUOTE</div> */}
                    </Fade>
                  </Grid>
                </Grid>
              );
            })}
          </>
        ) : (
          <>
            <Fade direction="up" triggerOnce duration={1300} damping={0.2}>
              <Heading title={"Our Expertise"} />
              <p style={{ textAlign: "center" }}>
                Our experts know what it takes to offer you an all-inclusive
                Apps designing and development services. Working with a company
                like eForte with a decade of experience entitles you to a
                diverse team of experts who are the connoisseurs of the software
                designing and development industry.
              </p>
            </Fade>
            {additionalServicesArray.map((data, index) => {
              return (
                <Grid
                  container
                  key={index}
                  style={{
                    flexDirection: index % 2 == 0 ? "initial" : "row-reverse",
                  }}
                  className="row"
                  id={data.slug}
                >
                  <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                    <Zoom triggerOnce>
                      <div className="image-div">
                        <img
                          src={data.image}
                          alt="img"
                          style={{ width: index == 3 ? 450 : 450 }}
                        />
                      </div>
                    </Zoom>
                  </Grid>
                  <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
                    <Fade triggerOnce direction="up" cascade>
                      <div className="heading">
                        {/* <div className="number-div">{index + 1}</div> */}
                        <h3 style={{ marginBottom: 0 }}>{data.title}</h3>
                      </div>
                      <p className="para">{data.para}</p>
                      {/* <div className="request-a-quote">GET A FREE QUOTE</div> */}
                    </Fade>
                  </Grid>
                </Grid>
              );
            })}
          </>
        )}
      </div>
    </StyledDiv>
  );
};

export default WebDevelopement;
