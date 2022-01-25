import Header from "./Header";
import Footer from "./Footer";

import Head from "next/head";

const Layout = ({ children, title, description, ogImage, url }) => {
  // website Url
  const pageUrl = "https://www.bunnyfreaks.com/";
  const ogImg = "/logo.png";
  return (
    <>
      <Head>
        <link rel="icon" href={ogImage ? ogImage : ogImg} />
        <link rel="apple-touch-icon" href={ogImage ? ogImage : ogImg} />
        <title>
          {title
            ? title
            : "Template - Next.js and Material-UI with Header and Footer"}
        </title>
        <meta
          name="description"
          key="description"
          content={
            description
              ? description
              : "This is a Template using Next.js and Material-UI with Header and Footer."
          }
        />
        <meta
          property="og:title"
          content={
            title
              ? title
              : "Template - Next.js and Material-UI with Header and Footer"
          }
          key="og:title"
        />
        <meta property="og:url" content={url ? url : pageUrl} key="og:url" />
        <meta property="og:site_name" content={url ? url : pageUrl} key="og:site_name" />
        <meta
          property="og:image"
          content={ogImage ? ogImage : ogImg}
          key="og:image"
        />
        <meta
          property="og:description"
          content={
            description
              ? description
              : "This is a Template using Next.js and Material-UI with Header and Footer."
          }
          key="og:description"
        />
        <meta
          property="twitter:title"
          content={
            title
              ? title
              : "Template - Next.js and Material-UI with Header and Footer"
          }
          key="twitter:title"
        />
        <meta property="twitter:url" content={url ? url : pageUrl} key="twitter:url" />
        <meta property="twitter:site_name" content={url ? url : pageUrl} key="twitter:site_name" />
        <meta
          property="twitter:image"
          content={ogImage ? ogImage : ogImg}
          key="twitter:image"
        />
        <meta
          property="twitter:description"
          content={
            description
              ? description
              : "This is a Template using Next.js and Material-UI with Header and Footer."
          }
          key="twitter:description"
        />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      <style jsx global>
        {`
          html,
          body {
            background: #5E2028 !important;
            overflow-x: hidden;
            padding: 0 !important;
          }
          #__next {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justifyContent-content: space-between;
          }
          main {
            flex: 1;
          }
        `}
      </style>
    </>
  );
};

export default Layout;
