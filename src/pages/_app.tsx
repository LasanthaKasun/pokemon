import type { AppProps } from "next/app";
import store from "../store/store";
import { Provider } from "react-redux";
import "@/styles/main.scss";
import "@/styles/button.scss";
import "@/styles/text_field.scss";
import "@/styles/main_nav.scss";
import "@/styles/loader.scss";
import "@/styles/spaces.scss";
import "@/styles/responsive.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
