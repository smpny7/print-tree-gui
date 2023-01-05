import { Noto_Sans_JP, Roboto } from "@next/font/google";
import clsx from "clsx";
import type { AppProps } from "next/app";
import "remixicon/fonts/remixicon.css";
import "../../styles/globals.css";
import Header from "../components/Header";

const notoSansJP = Noto_Sans_JP({
  weight: ["300", "700"],
  subsets: ["japanese"],
  variable: "--font-noto-sans-jp",
});
const roboto = Roboto({
  weight: ["300", "700"],
  subsets: ["latin"],
  variable: "--font-roboto",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={clsx(notoSansJP.variable, roboto.variable)}>
      <Header />
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
