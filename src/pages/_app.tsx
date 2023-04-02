import type { AppProps } from "next/app";
import store from "../store/store";
import { Provider } from "react-redux";
import AOS from "aos";
import "@/styles/main.scss";
import "@/styles/button.scss";
import "@/styles/text_field.scss";
import "@/styles/main_nav.scss";
import "@/styles/loader.scss";
import "@/styles/spaces.scss";
import "@/styles/responsive.scss";
import "@/styles/pokemon_card.scss";
import "@/styles/pokemon_model.scss";
import 'aos/dist/aos.css';
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}
