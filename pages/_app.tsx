import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { ThemeProvider } from "@/components/these-provider";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <Component {...pageProps} />
      </ThemeProvider>
      <Analytics />
    </>
  );
}
