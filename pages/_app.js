import React from "react";
import App from "next/app";

//import '../styles/globals.css'

// function MyApp ({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp
