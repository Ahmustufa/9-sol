import React from "react";
import styled from "styled-components";
import Heading from "../Title/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  awardsAndRecognition1,
  awardsAndRecognition2,
  awardsAndRecognition3,
  awardsAndRecognition4,
  awardsAndRecognition5,
  awardsAndRecognition6,
  awardsAndRecognition7,
  awardsAndRecognition8,
  topRated1,
  topRated2,
  topRated3,
  topRated4,
  topRated5,
} from "/public/index.js";
import Image from "next/image";

const StyledDiv = styled.div`
  background-color: #fff;
  padding: 3% 10%;
  .col {
    height: 200px;
    padding: 0px 5%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      height: 150px;
      width: 150px;
    }
  }

  .slider-div {
    min-height: 200px;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    img {
      margin: auto;
      max-height: 180px;
      max-width: 175px;
    }
    .text-height {
      height: 220px;
      display: flex;
      align-items: center;
    }
  }

  @media (max-width: 1024px) {
  }

  @media (max-width: 991px) {
    .col {
      height: 150px;
      img {
        height: 100px;
      }
    }
  }

  @media (max-width: 767px) {
    .col {
      height: 100px;
      img {
        height: 50px;
      }
    }
  }

  @media (max-width: 600px) {
  }

  @media (max-width: 480px) {
  }
`;

const TopRatedProfessionals = (props) => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    pauseOnHover: false,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const awardsAndRecognitionArray = [
    {
      image: awardsAndRecognition1,
      para: `9Solutions was amongst the few companies to be awarded with the Best Logo Design Award 2008-2009 in the category of mascot logos. Our excellent designers proved their excellence in design industry.`,
    },
    {
      image: awardsAndRecognition2,
      para: `In 2011-2012, Jonathan Carson was awarded the best designer award in the category of illustrative logos; a complex category of logos where nothing but creativity survives.`,
    },
    {
      image: awardsAndRecognition3,
      para: `Designers society awards recognizes 9Solutions for successfully completing 8 years in this industry with 80% customer satisfaction.`,
    },
    {
      image: awardsAndRecognition4,
      para: `9Solutions was awarded by International Logo Branding Awards for consistently delivery value to customers with 80% satisfaction ratio.`,
    },
    {
      image: awardsAndRecognition5,
      para: `Our certified developers are equipped with the best skills to launch your busines online with on of its kind ecommerce store for you.`,
    },
    {
      image: awardsAndRecognition6,
      para: `9Solutions was awarded for best and one of its kind HTML 5 web design for the year 2012-2013. Our designers depicted creativity in the work created by them.`,
    },
    {
      image: awardsAndRecognition7,
      para: `The association of software awarded 9Solutions for in the category of web development and software integration in the year 2011-2012 for outstanding work.`,
    },
    {
      image: awardsAndRecognition8,
      para: `Honoured an recongized in the industry, our designers have the best industry experience, skills and technical competencies to overwhelm our clients with their work.`,
    },
  ];

  const topRatedProfessionalArray = [
    {
      image: topRated1,
    },
    {
      image: topRated2,
    },
    {
      image: topRated3,
    },
    {
      image: topRated4,
    },
    {
      image: topRated5,
    },
  ];

  return (
    <StyledDiv>
      <Heading display={props.headingDisplay} title={props.title}></Heading>
      <Slider autoplay={true} {...settings}>
        {props.type == "awardsAndRecognition"
          ? awardsAndRecognitionArray.map((data, index) => {
              return (
                <div className="slider-div" key={index}>
                  <div
                    style={{
                      backgroundColor: "#e9e9e9",
                      borderRadius: 4,
                      padding: 16,
                      margin: "0px 4px 0px 4px",
                      minHeight: 350,
                    }}
                  >
                    <img src={data.image} alt="img" />
                    <div style={{ display: "flex" }} className="text-height">
                      <p>{data.para}</p>
                    </div>
                  </div>
                </div>
              );
            })
          : topRatedProfessionalArray.map((data, index) => {
              return (
                <div className="slider-div" key={index}>
                  <img src={data.image} alt="img" />
                </div>
              );
            })}
      </Slider>
    </StyledDiv>
  );
};

export default TopRatedProfessionals;
