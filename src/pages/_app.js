import "@/styles/globals.css";
import Head from "next/head";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import SideBar from "@/components/form/SideBar";
import { Provider } from "react-redux";
import { store } from "@/redux/store.js";
import React, { useEffect } from "react";
import HashLoader from "@/components/loader/HashLoader";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/Nprogress.css";

NProgress.configure({ showSpinner: false });

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    Router.events.on("routeChangeStart", () => NProgress.start());
    Router.events.on("routeChangeComplete", () => NProgress.done());
    Router.events.on("routeChangeError", () => NProgress.done());
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="Content-Type" content="text/html; charSet=utf-8" />

        <title>{pageProps?.metaData?.title}</title>

        <link rel="icon" href="/favicon1.png" />
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
        {/* Start of Tawk.to Script */}
        {/* <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `
  var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/63e0a292c2f1ac1e20319d07/1goinm3a7';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();`,
          }}
        /> */}
        {/* End of Tawk.to Script */}
        {/* <script async src="build/react.js" /> */}
        <script async src="https://www.google.com/recaptcha/api.js" />
        {/* <script async src="build/index.js" /> */}
        {/* <script
          type="text/javascript"
          src="https://2pay-js.2checkout.com/v1/2pay.js"
          async
        /> */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-MDE9VVJHKV"
        />
        <script
          // strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
        gtag('config', 'G-MDE9VVJHKV')
          `,
          }}
        />
        {/* <script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments)}
  gtag('js', new Date());

  gtag('config', 'G-MDE9VVJHKV');
</script> */}
        {/* <script
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
        ></script> */}
        {/* <noscript>
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://q.quora.com/_/ad/9b8a8c9e206c4f698c5726ec04b13148/pixel?tag=ViewContent&noscript=1"
          />
        </noscript> */}
      </Head>

      <Provider store={store}>
        <Layout>
          <SideBar />
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
}
