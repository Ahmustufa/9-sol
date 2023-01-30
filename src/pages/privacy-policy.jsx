import React from "react";
import Head from "next/head";
import styled from "styled-components";
import Link from "next/link";
import HeroSection from "@/components/heroSection";
import { privacyPolicyBanner } from "/public";
import Heading from "@/components/Title/Heading";
import { BsFillCaretRightFill } from "react-icons/bs";

const StyledDiv = styled.div`
  .gray-portion-div {
    background-color: #fff;
    padding: 120px 10% 40px 10%;
    p {
      font-size: 16px;
      color: rgb(69, 80, 98);
      margin-bottom: 30px;
    }
    h3 {
      color: rgb(69, 80, 98);
    }
    h1 {
      font-weight: 600;
      color: rgb(69, 80, 98);
    }
    ul {
      padding-left: 30px;
      margin-bottom: 30px;
    }
    li {
      font-size: 16px;
      color: rgb(69, 80, 98);
      font-weight: 300;
    }
  }

  @media (max-width: 767px) {
    .top-banner-text {
      text-align: center;
      h6 {
        padding: 0px 0px 4% 0px;
      }
    }
    .banner-image-col {
      justify-content: center;
    }
    .top-banner {
      background-color: #fff;
      img {
        width: 250px;
      }
    }
    .gray-portion-div {
      background-color: #f6f6f6;
      p {
        font-size: 16px;
      }
      h3 {
        font-size: 22px;
      }
      li {
        font-size: 16px;
      }
    }
  }
`;

const PrivacyPolicy = () => {
  return (
    <>
      <StyledDiv>
        <HeroSection
          height="70vh"
          companySliderHide={true}
          type="image"
          background={privacyPolicyBanner}
        >
          <div>
            <Heading color="#fff" backgroundColor="#aa076b">
              Privacy Policy
            </Heading>
          </div>
        </HeroSection>
        <div className="gray-portion-div">
          <p>
            Privacy policy helps you and us both in keeping your information
            confidential. Our privacy policy will help in understanding the
            process we follow to maintain your privacy during and after the
            design process.
          </p>

          <h3>About the Privacy Policy</h3>
          <ul>
            <li>We maintain utmost secrecy of our clients.</li>
            <li>
              The information that we collect from our clients is only used to
              make our customer services more perfect.
            </li>
            <li>
              We acknowledge the importance the information that we receive from
              our clients. We make sure that this information is not used
              wrongly. We do not sell or rent information our clients provide us
              with. They put in their trust in us and ensure not to destroy that
              belief.
            </li>
            <li>
              This policy describes how the personal information of our client
              collected by us is used, for different purposes.
            </li>
            <li>
              It is within our policy that we describe the choices you can make
              about how we can collect and use your information.
            </li>
          </ul>

          <h3>{`Clients' Information`}</h3>
          <ul>
            <li>
              {`The information collected by our company includes the client's name, e-mail,
              mailing address, phone number and credit card number.`}
            </li>
            <li>
              We collect this information sporadically on different occasions by
              our client. These occasions ordering the job and saving the
              information with our company etc.
            </li>
            <li>
              We may also use the email addresses or mailing addresses which we
              receive through our mailing system such as our Contact Us Form for
              responding to comments, queries etc.
            </li>
            <li>
              {`9solutions maintains records of the items, which have interested our clients
              in the past, as well as the client's purchases online.`}
            </li>
          </ul>

          <h3>Newsletter</h3>
          <ul>
            <li>
              You might not want to receive our newsletter and promotional
              communications. In that case you can simply unsubscribe by
              following the instructions that comes with each newsletter or
              communication. You can also call us at
              <span style={{ fontWeight: 700 }}>
                {" "}
                <a href="tel:+16506819645"> +1(650)-681-9645 </a>
              </span>
              for further information in this regard.
            </li>
          </ul>

          <h3>3rd Party Sharing</h3>
          <ul>
            <li>
              We do not divulge any Personal information to the third parties.
            </li>
            <li>
              In no circumstances do we provide or sell personal information of
              our clients to the third parties.
            </li>
            <li>
              9solutions utilizes services of credit card processing companies
              to bill you for services. These companies never share, store, save
              or use exclusive information for any other purposes.
            </li>
          </ul>

          <h3>Personal Information</h3>
          <ul>
            <li>
              Information of clients at 9solutions.co is kept extremely secure
              during transmission by the use of the Secure Sockets Layer (SSL)
              Software which encrypts information that client puts in.
            </li>
            <li>
              9solutions follows generally accepted industry standards to
              protect the personal information that is being submitted by the
              client during transmission and once we receive it. However, since
              no method of transmission over the Internet, or method of
              electronic storage, is 100% secure, we despite using commercially
              acceptable means to protect your personal information cannot
              guarantee its absolute security.
            </li>
          </ul>

          <h3>Access of Registered Accounts</h3>
          <ul>
            <li>
              The client can access their registered accounts by signing in on
              our homepage.
            </li>
            <li>
              Once signed in, the client has access to their previous lists and
              information that they have submitted to the site.
            </li>
            <li>
              Users can update their information once they have logged in to
              their accounts by clicking My Account.
            </li>
          </ul>

          <h3 id="cookies_policy">
            Changing & Deleting / Unsubscribing Accounts
          </h3>
          <p>
            To cancel subscription and avoid future traffic of e-mails
            pertaining to any online order, you are advised to visit out to
            contact us on our 24 hour{" "}
            <Link href="/contact-us">customer support service.</Link>
          </p>

          <h3>Cookies and Their Use</h3>
          <ul>
            <li>
              {`Cookies, alphanumeric identifiers, facilitate our systems to recognize the
              clients' browsers and storage of items in their Shopping Carts during
              visits.`}
            </li>
            <li>
              To prevent the browser from accept new cookies, disable cookies
              and notify the user when a new cookie is received, Help portion of
              the toolbar on most browsers becomes most instrumental.
            </li>
            <li>
              Normally clients do not restrict cookies as they allow you to take
              full advantage of the top features at our site. Our study suggests
              that the clients leave cookies to be accepted.
            </li>
            <li>
              9solutions keeps track of your IP address to help diagnose
              problems with our server and to administer our Web site. Your IP
              address is also used to gather broad demographic information about
              you, such as your location and your Internet service provider.
            </li>
            <li>
              {`Client's collective information on how our users are utilizing the site may
              be gathered. This information might include details vis-à-vis traffic
              patterns through the site and search queries. No IP address/log file
              information is tied to Personally Identifiable Information (PII).`}
            </li>
            <li>
              Information regarding browser types, access times, URLs through
              which people visit our site and URLs viewed by visitors while on
              our site is not accessible third parties, except in combined form.
            </li>
          </ul>

          <h3>Notification of the Changes in Privacy Policy</h3>
          <ul>
            <li>
              In case of changing our privacy policy, we will post changes to
              the privacy statement, homepage, and other places we deem
              appropriate so that you are aware of what information we collect,
              how we use it, and under what circumstances, if any, we disclose
              it.
            </li>
            <li>
              9solutions reserves the right to modify this privacy statement at
              any point of time, without prior notice. Thus it is advised to
              review the privacy policy frequently. If we make material changes
              to this policy, we will notify you here, by email, or by means of
              a notice on our homepage.
            </li>
          </ul>

          <h3>Legal Disclaimer</h3>
          <p>
            We reserve the right to disclose your personally identifiable
            information as required by law and when we believe that disclosure
            is necessary to protect our rights and/or comply with a judicial
            proceeding, court order, or legal process served on our Web site.
          </p>

          <h3>Questions</h3>
          <p>
            If you have any queries or concerns check our Privacy Policy or use
            of your information, feel free to call us on our toll free number:{" "}
            <span style={{ fontWeight: 700 }}>
              <a href="tel:+16506819645">+1(650)-681-9645</a>
            </span>
            . You can email us or simple click on the live chat option available
            on our
            <Link href="/contact-us">contact us</Link>
            page.
          </p>
        </div>
      </StyledDiv>
    </>
  );
};

export default PrivacyPolicy;

export async function getServerSideProps(context) {
  return {
    props: {
      metaData: {
        title: "Privacy policy | 9solutions",
        description:
          "To know which types of data logs 9solutions keeps and how it uses them among other privacy-related issues, read this comprehensive privacy policy which covers every detail.",
        keywords: "Privacy policy | 9solutions",
        publishTime: new Date().toISOString(),
        // image: `${process.env.9solutions_blog_url}/uploads/9solutions_icon.png`,
      },
    },
  };
}
