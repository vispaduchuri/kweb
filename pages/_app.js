import React from "react";
import App from "next/app";
import "../sass/_app.scss";
import Head from "next/head";
import Header from "../components/Layout/NavBar";
import Footer from "../components/Layout/Footer";
class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Kukke Enterprise</title>
        </Head>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
    );
  }
}

export default MyApp;
