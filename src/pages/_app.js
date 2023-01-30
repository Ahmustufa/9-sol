import "@/styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import SideBar from "@/components/form/SideBar";
export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />

        <title>{pageProps?.metaData?.title}</title>

        <link rel="icon" href="/favicon.svg" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1"
        />
        <meta name="locale" content="en_US" />
        <meta name="og:locale" content="en_US" />
        <meta property="og:image" content={pageProps?.metaData?.image} />
        <meta
          property="og:image:secure_url"
          content={pageProps?.metaData?.image}
        />
        <meta name="og:image" content={pageProps?.metaData?.image} />
        <meta name="og:type" content="Mobile and Web application development" />
        <meta name="url" content={`https://9solutions.co${router.asPath}`} />
        <meta name="og:url" content={`https://9solutions.co${router.asPath}`} />
        <meta name="og:title" content={pageProps?.metaData?.title} />
        <meta name="description" content={pageProps?.metaData?.description} />
        <meta
          name="og:description"
          content={pageProps?.metaData?.description}
        />
        <meta name="keywords" content={pageProps?.metaData?.keywords} />
        <meta name="og:site_name" content="9-solutions Technology" />
        <meta
          name="article:published_time"
          content={pageProps?.metaData?.publishTime}
        />

        {/* <script async src="build/react.js" /> */}
        <script async src="https://www.google.com/recaptcha/api.js" />
        {/* <script async src="build/index.js" /> */}
        <script
          type="text/javascript"
          src="https://2pay-js.2checkout.com/v1/2pay.js"
          async
        />
        <script
          // strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-0D4QW9HQDE`}
          async
        />
        <script
          // strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-0D4QW9HQDE', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `!function(q,e,v,n,t,s){if(q.qp) return; 
              n=q.qp=function(){
                n.qp?n.qp.apply(n,arguments):n.queue.push(arguments);
              }; 
              n.queue=[];
              t=document.createElement(e);
              t.async=!0;
              t.src=v; 
              s=document.getElementsByTagName(e)[0]; 
              s.parentNode.insertBefore(t,s);
            }
            (window, 'script', 'https://a.quora.com/qevents.js');
            qp('init', '9b8a8c9e206c4f698c5726ec04b13148');
            qp('track', 'ViewContent');`,
          }}
        ></script>
        <noscript>
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://q.quora.com/_/ad/9b8a8c9e206c4f698c5726ec04b13148/pixel?tag=ViewContent&noscript=1"
          />
        </noscript>
      </Head>
      <Layout>
        <SideBar/>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
