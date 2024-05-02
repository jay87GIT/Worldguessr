import "@/styles/globals.css";
import "@/styles/multiPlayerModal.css";

import { Analytics } from "@vercel/analytics/react"
import { GoogleAnalytics } from "nextjs-google-analytics";
import { useEffect } from "react";

import "./globals.css"
import {ThemeProvider as NextThemesProvider} from "@/components/themes/theme-provider";
export default function App({ Component, pageProps }) {
  useEffect(() => {
    console.log("App mounted - build 2");
  });
  return (
    <>
      <Analytics />
      <GoogleAnalytics trackPageViews gaMeasurementId="G-KFK0S0RXG5" />
        <NextThemesProvider
            attribute="class"
            defaultTheme="dark"

            disableTransitionOnChange
            >
            <Component {...pageProps} />
        </NextThemesProvider>
    </>
  );
}
