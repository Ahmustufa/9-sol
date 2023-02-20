import Head from "next/head";
import dynamic from "next/dynamic";

import RatingBar from "@/components/Bar/RatingBar";
import Pricing from "../components/services/Pricing";
import TopRatedProfessionals from "@/components/carousel/TopRatedProfessionals";
import WebSolutions from "@/components/WebSolutions/WebSolutions";
import Intro from "@/components/main/Intro";
import { Fade } from "react-awesome-reveal";
import OurDesigns from "@/components/ourDesigns/OurDesigns";
import PricingCards from "@/components/services/PricingCards";
const Process = dynamic(() => import("../components/process/index"));
const ContactInfo = dynamic(() => import("../components/contactinfo/index"));
// import { Alert } from "@mui/material";

const Home = () => {
  return (
    <>
   
      <Intro />
      <RatingBar />
      <WebSolutions />
      <OurDesigns />
      <TopRatedProfessionals
        backgroundColor="#eeeeee"
        title="Get top-rated and recognized professionals onboard!"
        slidesToShow={4}
        slidesToScroll={1}
      />
      <div
        style={{
          paddingBottom: "50px",
          background: "linear-gradient(55deg, black 15%, #273444 90%)",
        }}
      >
      <PricingCards/>
        {/* <Pricing /> */}
      </div>
      <Process />
      <ContactInfo />
    </>
  );
};
export default Home;
export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title:
          "Custom Mobile App Development Agency &amp; Mobile Application Design Services in USA | Mobile Application Development Company",
        description:
          "9solutions is a mobile app and software development company elevating local businesses through top-notch strategy and design.",
        keywords:
          "Custom Mobile App Development Agency &amp; Mobile Application Design Services in USA | Mobile Application Development Company",
        publishTime: new Date().toISOString(),
        // image: `${process.env.9solutions_blog_url}/uploads/9solutions_icon.png`,
      },
    },
  };
}
