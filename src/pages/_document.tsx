import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html
      lang="en"
      data-layout="default"
      data-sidebar="one-col"
      data-glassmorphism="no"
      data-theme-color="primary"
    >
      <Head>
        {/* Fonts */}
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://use.typekit.net/ntv5dnj.css" />

        {/* Light mode favicon */}
        <link
          rel="icon"
          href="/Logos/short-logo-light.svg"
          media="(prefers-color-scheme: light)"
          sizes="any"
          type="image/svg+xml"
        />

        {/* Dark mode favicon */}
        <link
          rel="icon"
          href="/Logos/short-logo-dark.svg"
          media="(prefers-color-scheme: dark)"
          sizes="any"
          type="image/svg+xml"
        />

        {/* PNG fallback for older browsers */}
        <link rel="icon" href="/Logos/short-logo-light.png" sizes="32x32" />
      </Head>

      <body className="bg-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
