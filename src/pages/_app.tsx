import "@/styles/globals.css";
import { DM_Serif_Display } from "next/font/google";
import type { AppProps } from "next/app";

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={dmSerifDisplay.className}>
      <Component {...pageProps} />
    </main>
  );
}
