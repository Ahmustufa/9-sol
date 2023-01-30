import React from "react";
import dynamic from "next/dynamic";
import WebDevelopement from "@/components/webDevelopment";
// import ContactInfo from "../src/component/contactInfo";
import HeroSection from "@/components/heroSection";
// import Head from "next/head";
import { servicesBanner } from "/public";
// import LazyLoad from "react-lazyload";
import Heading from "@/components/Title/Heading";
import Pricing from "@/components/services/Pricing";
const ContactInfo = dynamic(() => import("../../components/contactinfo/index"));

const WebDevelopment = () => {
  return (
    <div>
      <HeroSection
        height="70vh"
        companySliderHide={true}
        type="image"
        background={servicesBanner}
      >
        <div>
          <Heading color="#fff" backgroundColor="#aa076b">
            Our Services
          </Heading>
        </div>
      </HeroSection>
      <WebDevelopement />
      <div
        style={{
          paddingBottom: "50px",
          background: "linear-gradient(55deg, black 15%, #273444 90%)",
        }}
      >
        <Pricing />
      </div>
      <ContactInfo
        heading1={`Get a custom quote tailored`}
        heading2={`for your web projects today!`}
      />
      <br />
    </div>
  );
};

export default WebDevelopment;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title:
          "Mobile App Development, Startup MVP and prototyping, Blockchain Development",
        description:
          "Services offered of Mobile App Development, Startup MVP and prototyping, Blockchain Development.",
        keywords:
          "Mobile App Development, Startup MVP and prototyping, Blockchain Development",
        publishTime: new Date().toISOString(),
        // image: `${process.env.eforte_blog_url}/uploads/eForte_icon.png`,
      },
    },
  };
}
