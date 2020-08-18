import Head from 'next/head';
import React from 'react';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <div className='hero'>
      <h1 className='title'>Bem-vindo ao SOU FITNESS</h1>
    </div>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 52px;
      }
      .title {
        text-align: center;
      }
    `}</style>
  </div>
);

export default Home;
