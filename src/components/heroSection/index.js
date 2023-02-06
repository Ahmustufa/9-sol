// import { Row, Col } from "antd";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { SwipeButton } from "../buttons";
import Slider from "react-slick";
// import { BotTypeWriter } from "../botTypeWriter";
import { Fade } from "react-awesome-reveal";
import { Typewriter } from "react-simple-typewriter";

const StyledSection = styled.section`
  .hero-section {
    min-height: 400px;
    /* height: auto; */

    /* display: flex;
    align-items: center;
    flex-direction: column;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    position: relative;
    overflow: hidden;
    text-align: center;
     padding: 0 10%; */
  }

  .overlay {
    min-height: 400px;
    /* height: auto; */
    background: rgba(0, 0, 0, 0.55);
    position: absolute;
    width: 100%;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
  }

  .hero-content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    color: #fff;
    text-align: center;
    padding: 0px 10%;

    .main-heading {
      color: #fff;
      font-weight: 700;
      font-size: 48px;
    }

    .main-heading::after {
      content: "";
      display: block;
      height: 6px;
      width: 25%;
      margin: 20px auto;
      background-color: #aa076b;
      border-radius: 4px;
    }

    .sub-heading {
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      margin: auto;
    }
  }

  .brand-logos {
    border-top: 1px solid gray;
    color: #fff;
    padding: 20px 4%;
    width: 100%;
    margin-top: -100px;

    .brand-images-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
  }
  .slick-track {
    display: flex;
    align-items: center;
  }

  @media (max-width: 540px) {
    .main-heading {
      font-size: 36px !important;
    }
    .sub-heading {
      width: 90% !important;
    }
  }
`;

const HeroSection = (props) => {
  const { background, type, children, companySliderHide } = props;
  let settings_3 = {
    autoplay: true,
    dots: false,
    infinite: true,
    speed: 1000,
    pauseOnHover: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 1500,
    arrows: false,
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
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const handleType = (count) => {
    // console.log(count);
  };

  const handleDone = () => {
    // console.log(`Done after 5 loops!`);
  };

  return (
    <StyledSection>
      <img
        className="hero-section"
        alt={props.alt ? props.alt : "background-image"}
        style={{ height: props.height, width: "100%", objectFit: "cover" }}
        src={background}
      />
      <div style={{ height: props.height }} className="overlay">
        <div className="hero-content">
          {children ? (
            children
          ) : (
            <div>
              <h1 className="main-heading">
                <Typewriter
                  words={[
                    "We're Your One-Stop Solution for Efficient Apps Development",
                  ]}
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
                {/* <BotTypeWriter
                  content={
                    props.typeWriterContent
                      ? props.typeWriterContent
                      : "We're Your One-Stop Solution for Efficient Apps Development"
                  }
                /> */}
              </h1>
              <Fade direction="down" delay={3000} triggerOnce>
                <h2 className="sub-heading px-lg-5">
                  {props.subTitleContent ? (
                    props.subTitleContent
                  ) : (
                    <>
                      Searching for guaranteed ways to develop your business App
                      idea?
                      <br /> Getting yourself a professional team work by the
                      experts at 9solutions is what you need.
                    </>
                  )}
                </h2>
              </Fade>
            </div>
          )}
        </div>
        {companySliderHide ? null : (
          <div className="brand-logos">
            <Grid container className="col-lg-12 col-12 mx-auto" spacing={2}>
              <Grid item xs={12}>
                <div>
                  <Slider {...settings_3}>
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                      <div key={index}>
                        <img
                          layout="fill"
                          objectFit="contain"
                          src={`/images/Trusted_Brands_${item}.png`}
                          alt={`Trusted_Brands_${item}`}
                          key={item}
                          className="brand-image m-auto"
                          height={item >= 3 && item <= 6 ? 48 : 24}
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </Grid>
            </Grid>
          </div>
        )}
      </div>
    </StyledSection>
  );
};

export default HeroSection;
