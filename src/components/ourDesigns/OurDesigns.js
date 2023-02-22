import { useEffect, useState } from "react";
import styled from "styled-components";
import PreviewCard from "../cards/PreviewCard";
import { Box, Grid, Modal } from "@mui/material";
import Heading from "../Title/Heading";
import MultiSwitchWrapper from "../inputs/MultiSwitchWrapper";
import { useRouter } from "next/router";
import { Bounce, Slide, Fade, Zoom } from "react-awesome-reveal";
import { SwipeButton } from "../buttons";
import Image from "next/image";
import { options, designItems, allItems } from "../../utils/ourDesignItems";

const StyledSection = styled.section`
  text-align: center;
  margin-top: 64px;

  .section-heading {
    text-align: center;
    font-weight: bold;
    margin: 0px 0px 24px;
    line-height: 1.1em;
    font-size: 36px;
  }

  .sub-heading {
    font-size: 16px;
  }

  .products-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .right-seprator {
    display: flex;
    align-items: center;
    justify-content: center;
    pointer-events: none;
    user-select: none;
    border-right: 1px solid grey;
    margin: 8px 0px;
    :last-child {
      display: none !important;
    }
  }

  .product-names {
    transition: all 0.4s;
    line-height: 38px;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    display: flex;
    align-items: center;
    padding: 2px 8px;
    margin: 2px 8px;

    :hover {
      color: #050607 !important;
      background-color: #f3f3f4 !important;
    }
  }

  .load-more-btn {
    font-size: 16px;
    // padding: 14px 60px;
  }

  .sprite-image {
    background-repeat: no-repeat;
    display: block;
    width: 298px;
    height: 233px;
    display: inline-block;
    border: 1px solid rgba(0, 0, 0, 0.08);
    margin: 4px;
    transition: 0.2s;
    &:hover {
      box-shadow: 2px 2px 3px rgba(0, 0, 0, 0.05);
    }
  }

  @media only screen and (max-width: 992px) {
    .load-more-btn {
      font-size: 12px;
      // padding: 8px 32px;
    }
  }

  @media (max-width: 767px) {
    .section-heading {
      text-align: left;
      font-size: 18px;
    }
  }
`;

const OurDesigns = (props) => {
  const { type, setPortfolioType } = props;
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState([0, 1, 2, 3, 4, 5]);
  const [logoItemsIndex, setLogoItemsIndex] = useState(0);
  const [modalState, setModalState] = useState({ visible: false, imgSrc: "" });

  const loadMore = () => {
    let loadArray = page;
    for (let i = 1; i <= 3; i++) {
      loadArray.push(loadArray[loadArray.length - 1] + 1);
    }
    setPage([...loadArray]);
  };

  useEffect(() => {
    setPage([0, 1, 2, 3, 4, 5]);
  }, [type]);

  const closeModal = () => {
    setModalState({ ...modalState, visible: false });
  };

  const showModal = (imgSrc) => {
    setModalState({ visible: true, imgSrc });
  };

  const portfolioTypeChange = (type) => {
    setPortfolioType(type);
  };
  const router = useRouter();
  return (
    <>
      <StyledSection className="container-fluid">
        <Fade direction="up" duration={1300} triggerOnce cascade damping={0.2}>
          <Heading
            title={
              <span>
                We take every client as an opportunity to change the world for
                the better.
                <br /> You are the best and you get the BEST !
              </span>
            }
          />

          <h2 className="sub-heading my-4">
            Have a look at some of our works which are testament of our happy
            clientele.
          </h2>
        </Fade>

        {router.pathname === "/portfolio" ? (
          <div className="container mt-5 mb-3">
            <MultiSwitchWrapper
              options={options}
              onChange={portfolioTypeChange}
            />
          </div>
        ) : null}

        <div className="products-wrapper ">
          {/**
           * Options for logo items
           */}
          {type === "logo" &&
            designItems.map((item, index) => (
              <>
                <h5
                  key={index}
                  className="product-names"
                  style={{
                    color: category === item.label ? "#aa076b" : "#898989",
                    backgroundColor:
                      category === item.label ? "#F3F3F4" : "#fff",
                    borderRadius: category === item.label ? 6 : 6,
                    fontWeight: category === item.label ? 700 : 500,
                  }}
                  onClick={() => {
                    setCategory(item.label);
                    setLogoItemsIndex(index);
                    setPage([0, 1, 2, 3, 4, 5]);
                  }}
                >
                  {item.label}
                </h5>
                <div className="right-seprator" />
              </>
            ))}
        </div>

        <div className="design-cards-wrapper  my-5">
          {
            /**
             * Portfolio items for web
             */
            type === "web" && (
              <Grid container alignItems="center" justifyContent="start">
                {page.map((item) => (
                  <Grid item key={item} xl={4} lg={4} md={4} sm={6} xs={12}>
                    <Zoom cascade duration={200}>
                      <PreviewCard
                        image={`/images/web_design/${item + 1}.jpg`}
                      />
                    </Zoom>
                  </Grid>
                ))}
              </Grid>
            )
          }

          {
            /**
             * Portfolio items for E-COMMERCE
             */
            type === "ecommerce" && (
              <Grid container alignItems="center" justifyContent="start">
                {page.map((item) => {
                  return (
                    <Grid item key={item} xl={4} lg={4} md={4} sm={6} xs={12}>
                      <Zoom cascade duration={200}>
                        <PreviewCard
                          image={`/images/ecomerce_website_development/ecommerce_website_development_${
                            item + 1
                          }.png`}
                        />
                      </Zoom>
                    </Grid>
                  );
                })}
              </Grid>
            )
          }

          {
            /**
             * Portfolio items for logo
             */
            type === "logo" && (
              <Grid container justifyContent="center" alignItems="center">
                {page.map((item) => {
                  const num = Math.floor(item / 4);
                  const top = num * 298 + "px";
                  const left = (item % 4) * 233 + "px";
                  return (
                    <Grid item>
                      <Zoom cascade duration={200}>
                        <div
                          className="sprite-image"
                          style={{
                            backgroundImage: `url(${designItems[logoItemsIndex].value})`,
                            backgroundPosition: `-${top} -${left}`,
                          }}
                        />
                      </Zoom>
                    </Grid>
                  );
                })}
              </Grid>
            )
          }

          {
            /**
             * Portfolio items for brouchure
             */
            type === "brochure" && (
              <Grid container justifyContent="center" alignItems="center">
                {page.map((item) => {
                  const num = Math.floor(item / 4);
                  const top = num * 234 + "px";
                  const left = (item % 4) * 298.5 + "px";
                  return (
                    <Grid item key={item}>
                      <Zoom cascade duration={200}>
                        <div
                          className="sprite-image"
                          style={{
                            backgroundImage: `url(/images/brochuer/spritesheet.jpg)`,
                            backgroundPosition: `-${left} -${top}`,
                            cursor: "pointer",
                          }}
                          onClick={() =>
                            showModal(
                              `/images/brochuer/popups/popup_${item + 1}.jpg`
                            )
                          }
                        />
                      </Zoom>
                    </Grid>
                  );
                })}
              </Grid>
            )
          }

          {
            /**
             * Portfolio items for stationery
             */
            type === "stationery" && (
              <Grid justifyContent="center" alignItems="center">
                {page.map((item) => {
                  const num = Math.floor(item / 4);
                  const top = num * 234 + "px";
                  const left = (item % 4) * 299.2 + "px";
                  return (
                    <Grid item key={item}>
                      <Zoom cascade duration={200}>
                        <div
                          className="sprite-image"
                          style={{
                            backgroundImage: `url(/images/stationery_mockups/spritesheet.jpg)`,
                            // backgroundImage: `url(/images/stationery/spritesheet.jpg)`,
                            backgroundPosition: `-${left} -${top}`,
                            cursor: "pointer",
                          }}
                          onClick={() => {
                            showModal(
                              `/images/stationery_mockups/popups/stationery_mockups_${
                                item + 1
                              }.jpg`
                            );
                          }}
                        />
                      </Zoom>
                    </Grid>
                  );
                })}
              </Grid>
            )
          }

          {
            /**
             * Portfolio items for promo items
             */
            type === "promo" && (
              <Grid container justifyContent="center" alignItems="center">
                {page.map((item) => {
                  const num = Math.floor(item / 3);
                  const top = num * 298 + "px";
                  const left = (item % 3) * 233 + "px";
                  return (
                    <Grid item>
                      <Zoom cascade duration={200}>
                        <div
                          className="sprite-image"
                          style={{
                            backgroundImage: `url(/images/promo_items/spritesheet.jpg)`,
                            backgroundPosition: `-${top} -${left}`,
                          }}
                        />
                      </Zoom>
                    </Grid>
                  );
                })}
              </Grid>
            )
          }

          {
            /**
             * All Items
             */
            type === "all" && (
              <Grid container justifyContent="center" alignItems="center">
                {page.map((item) => {
                  const { left, top, type, imageSrc, modalSrc } =
                    allItems[item];

                  if (type === 1 || type === 3) {
                    return (
                      <Grid item>
                        <Zoom cascade duration={200}>
                          <div
                            className="sprite-image"
                            style={{
                              backgroundImage: `url(${imageSrc})`,
                              backgroundPosition: `-${top} -${left}`,
                              cursor: type === 3 ? "pointer" : "auto",
                            }}
                            onClick={() => {
                              if (type === 3) {
                                showModal(modalSrc);
                              }
                            }}
                          />
                        </Zoom>
                      </Grid>
                    );
                  }

                  if (type === 2) {
                    return (
                      <Grid item key={item} xl={4} lg={4} md={4} sm={6} xs={12}>
                        <Zoom cascade duration={200}>
                          <PreviewCard image={imageSrc} />
                        </Zoom>
                      </Grid>
                    );
                  }
                })}
              </Grid>
            )
          }

          {page.length <
          (type == "stationery" || type == "promo" || type == "ecommerce"
            ? 12
            : type === "all"
            ? 13
            : 15) ? (
            <SwipeButton className="load-more-btn mt-5" onClick={loadMore}>
              Load More &nbsp; ↓
            </SwipeButton>
          ) : null}
        </div>
      </StyledSection>
    </>
  );
};

OurDesigns.defaultProps = {
  type: "all",
  setPortfolioType: () => {},
};

export default OurDesigns;
