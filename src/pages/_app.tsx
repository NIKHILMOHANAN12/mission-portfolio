import "@/styles/globals.css"; // Tailwind + global styles
import type { AppProps } from "next/app";
import { Manrope } from "next/font/google";
import Layout from "./layout/Layout";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <main className={`${manrope.variable} font-body`}>
    <Layout>
      <Component {...pageProps} />
      </Layout>
    // </main>
  );
}
