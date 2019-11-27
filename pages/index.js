import React from "react";
import Head from "next/head";

const Home = () => (
  <div>
    <Head>
      <title>Team Extreme Playground</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="hero">
      <h1 className="title">Team Extreme Playground</h1>
      <p className="description">Alex, Karl, and Pete.</p>
    </div>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
        color: #006879;
      }
      .title,
      .description {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Home;
