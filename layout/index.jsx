import React from "react";
import Header from "components/Header";
import Footer from "components/Footer";

import Head from "next/head";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>FazzPay</title>
        <meta
          name="description"
          content="Check out our latest e-wallet technology"
        />
      </Head>

      {/* Header */}
      <Header />

      {/* Content */}
      <main>{props.children}</main>

      {/* Footer */}
      <Footer />
    </>
  );
}
