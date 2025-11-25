import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" data-layout="default" data-sidebar="one-col" data-glassmorphism="no" data-theme-color="primary">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://use.typekit.net/ntv5dnj.css"/>
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
