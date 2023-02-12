import { AppProps } from 'next/app';
import Head from 'next/head';
import Script from 'next/script';

import '../index.css';
import DefaultLayout from '../layouts/DefaultLayout';

let hi = 1;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Phineas Walton: developer, innovator, investor" />
        <link rel="apple-touch-icon" href="/logo192.png" />

        <link rel="manifest" href="/manifest.json" />

        <Script strategy="beforeInteractive" src={'/assets/scripts/delaunay.js'} />

        <title>Phineas Walton</title>
      </Head>
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </>
  );
}
