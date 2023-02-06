import styled from "styled-components";
import { Grid } from "@mui/material";
import { useState } from "react";
import {
  HiChevronDoubleDown,
  HiChevronDoubleRight,
  HiChevronDoubleLeft,
} from "react-icons/hi";
import { Bounce } from "react-awesome-reveal";
import Heading from "../Title/Heading";

const solutions = [
  {
    title: "E-COMMERCE STORE",
    heading: "360 E-commerce Package",
    subHeading: `Our E-commerce package includes all; inventory and order management, customer 
    support, payment gateways and detailed reports.`,
    description: `A complete solution for your e-commerce needs, delivering responsive and SEO 
    optimized Web-store design which is attractive and intuitive to explore. E-commerce
    being a competitive domain, it can be over whelming to understand every aspect of 
    E-commerce website development. You need professionals who can help you scale 
    from a small store to a large high-volume business.`,
    list: [
      "Secure Customer login and portal",
      "Payment Integration",
      "Filtered Categories and Products",
      "On the go Discount Coupons creation",
      "Detailed Reports",
    ],
  },
  {
    title: "CMS Website",
    heading: "Developing Robust CMS Websites",
    subHeading: `Make your website do more with on-the-go Content Management System`,
    description: `With use of our CMS you get an edge in controlling the content of your website the 
    way you want when you want. With the use of latest in the technology landscape 
    9Solutions platform gives you the flexibility to edit, modify, change, delete and 
    update aspects of your website on the go. It gives more power to you in doing 
    business with ease.`,
    list: ["Strapi", "WordPress", "Joomla"],
  },
  {
    title: "Device Responsive Websites",
    heading: "Responsive Websites That Are Excellence-Driven",
    subHeading: `We help you combine responsiveness with the perfect amount of creativity to increase your business’s revenue
    `,
    description: `People in general tend to conduct 80% of their online activities through smart 
    phones or tabs. Since, these gadgets have varying dimensions and resolutions, a 
    fully responsive website will rescale itself to preserve the user experience and look 
    and feel across all devices with no irritating zooming, scrolling or resizing. An 
    optimized responsive design of your website will give you improved business 
    revenues due better customer experience.`,
    list: [
      "Eliminate friction",
      "Design for thumb",
      "Layouts fluid/adaptive",
      "Landscape orientation",
      "Responsive typography",
      "Conditional loading",
    ],
  },
  {
    title: "B2B Dashboards",
    heading: "B2B Web Portal Development",
    subHeading: `Business to Business Dashboard Websites that are reliable for commercial client 
    engagement`,
    description: `According to the needs of your business you might have to deal with other 
    businesses, B2B portals  allow you to manage your relationships with other 
    businesses i.e. distributors, partners, vendors and also customers through use of a 
    single platform. At 9Solutions, we know what it takes to develop astounding B2B 
    Web Portals that allows businesses to channel their services across the globe.`,
    list: [
      "Investment Portals",
      "Recruitment Portals",
      "Online food delivery",
      "Transport portals",
    ],
  },
  {
    title: "B2C Dashboards",
    heading:
      "We’re all about ornamenting business processes and delivering captivating user experience",
    subHeading: `Intelligently automating business processes and intuitive user experience are the basis 
    of our solutions`,
    description: `A business-to-consumer, or B2C, business model is one in which a company sells a service or 
    product directly to a consumer. We help you in improving your business measures by catering 
    to all the indispensable aspects of your Business to Customer websites like data and content 
    management, communications management and a lot more. Enquire about the services we 
    offer at 9Solutions in this domain and join the ranks of our happy clientele.`,
    list: [
      "Retail Websites",
      "Ecommerce Stores Travel Ticketing Portals",
      "Food Delivery",
      "Entertainment",
    ],
  },
];

const StyledSection = styled.section`
  .arrow-icon {
    color: #aa076b;
    font-size: 24px;
    cursor: pointer;
  }

  .solutions-heading {
    display: flex;
    justify-content: space-between;
  }

  .solution-option h5 {
    transition: 0.3s;
    color: #808080;
    padding: 8px 24px;
    border-bottom: 2px solid #dcdcdc;
    position: relative;
    cursor: pointer;
    :after {
      content: "";
      height: 28px;
      width: 2px;
      background-color: #dcdcdc;
      position: absolute;
      right: -8px;
    }
  }

  .solution-option:last-child h5:after {
    display: none;
  }

  .solution-description {
    color: dimgray;
    line-height: 2;
    font-weight: 400;
  }

  .solution-sub-title {
    color: #050607;
    line-height: 1.8;
    font-weight: 600;
  }

  .twoLineList ul {
    color: dimgray;
    padding: 5px 18px;
    margin: 0;
    padding: 0px 20px;
  }

  .twoLineList li {
    width: 50%;
    float: left;
    font-weight: 400;
    margin-top: 6px;
    margin-bottom: 6px;
    white-space: nowrap;
  }

  @media (max-width: 576px) {
    .twoLineList li {
      width: 100%;
    }
  }
  @media (max-width: 1522px) {
    .twoLineList li {
      width: 100%;
    }
  }
  @media (max-width: 762px) {
    .twoLineList li {
      width: 100%;
    }
  }

  @media (max-width: 1200px) {
    .solution-option {
      h5 {
        font-size: 15px;
      }
    }
  }
`;

const WebSolutions = () => {
  const [solution, setSolution] = useState(0);
  return (
    <StyledSection className="container mx-auto text-center">
      <Heading
        title={
          <>
            From E-Commerce Stores to Remarkable Business Websites
            <br />
            We Do it All!
          </>
        }
      />
      <p className="md:text-center text-left">
        Our experts know what it takes to offer you an all-inclusive website
        designing and development services. Working with a website design and
        development company like logi logos entitles you to a diverse team of
        experts who are the connoisseurs of the web designing and development
        industry.
      </p>

      <div className="mt-5">
        <Grid container>
          <Grid
            item
            lg={12}
            xl={12}
            sx={{
              display: {
                md: "none",
                sm: "none",
                xs: "none",
                lg: "block",
                xl: "block",
              },
            }}
          >
            <div className="solutions-heading">
              {solutions.map((item, index) => (
                <div key={index} className="solution-option">
                  <h5
                    onClick={() => setSolution(index)}
                    style={{
                      color: index == solution ? "#aa076b" : "#808080",
                      borderColor: index == solution ? "#aa076b" : "#dcdcdc",
                    }}
                  >
                    {item.title}
                  </h5>

                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {index == solution && (
                      <Bounce>
                        <HiChevronDoubleDown className="arrow-icon" />
                      </Bounce>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Grid>

          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            justifyContent="center"
            sx={{
              display: {
                md: "flex",
                sm: "flex",
                xs: "flex",
                lg: "none",
                xl: "none",
              },
            }}
          >
            <div className="solutions-heading flex items-center">
              <HiChevronDoubleLeft
                style={{ opacity: solution == 0 ? 0.3 : 1 }}
                className="arrow-icon"
                onClick={() => setSolution((prev) => (prev > 0 ? prev - 1 : 0))}
              />
              <h3 style={{ color: "#aa076b" }}>
                <b>{solutions[solution]?.title}</b>
              </h3>
              <HiChevronDoubleRight
                style={{ opacity: solutions.length - 1 == solution ? 0.3 : 1 }}
                className="arrow-icon"
                onClick={() =>
                  setSolution((prev) =>
                    prev < solutions.length - 1
                      ? prev + 1
                      : solutions.length - 1
                  )
                }
              />
            </div>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid
          container
          className="text-left"
          display="flex"
          justifyContent="space-between"
        >
          <Grid
            item
            xl={6}
            lg={6}
            md={12}
            sm={12}
            xs={12}
            style={{ padding: "0px 2% 0px 0px" }}
          >
            <h3 className="solution-title">
              <b>{solutions[solution].heading}</b>
            </h3>
            <h5 className="solution-sub-title my-4">
              {solutions[solution].subHeading}
            </h5>
            <p className="solution-description">
              {solutions[solution].description}
            </p>
            <div className="twoLineList">
              <ul style={{ listStyle: "outside" }}>
                {solutions[solution].list.map((listItem) => (
                  <li>{`${listItem}`}</li>
                ))}
              </ul>
            </div>
          </Grid>

          <Grid
            item
            xl={5.5}
            lg={5.5}
            md={12}
            sm={12}
            xs={12}
            className="text-center mx-auto"
          >
            <img
              alt="web-solution"
              src={`/images/web-solutions/ws_image_${solution + 1}.png`}
              style={{ borderRadius: 8 }}
              className="img-fluid"
            />
          </Grid>
        </Grid>
      </div>
    </StyledSection>
  );
};

export default WebSolutions;
