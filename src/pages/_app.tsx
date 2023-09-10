import { store } from "@/store";
import "@/styles/globals.css";
import { Box } from "@mui/material";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";

const MainNoSSR = dynamic(() => import("@/components/MainNoSSR"), {
  ssr: false,
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MainNoSSR>
        <Component {...pageProps} />
      </MainNoSSR>
    </Provider>
  );
}
