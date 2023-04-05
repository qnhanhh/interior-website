import "@/styles/globals.css";
import { serifFont } from "@/utils/fonts";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={serifFont.className}>
      <Component {...pageProps} />
    </main>
  );
}
