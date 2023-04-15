import "@/styles/globals.css";
import { store } from "@/store/store";
import { Provider } from "react-redux";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>AI Ultra</title>
        <link rel="icon" type="image/png" href="/logo512.png"></link>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <meta name="application-name" content="AI Ultra" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AI Ultra" />
        <meta
          name="description"
          content="Best Image Gallery App in the world"
        />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#2B5797" />
        <meta name="msapplication-tap-highlight" content="no" />
        <meta name="theme-color" content="#000000" />

        <link rel="apple-touch-icon" href="/logo196.png" />

        <link rel="icon" type="image/png" sizes="16x16" href="/logo16.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="mask-icon" href="/logo.svg" color="#5bbad5" />
        <link rel="shortcut icon" href="/favicon.ico" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:url" content="https://aiultra.vercel.app" />
        <meta name="twitter:title" content="AI Ultra" />
        <meta
          name="twitter:description"
          content="Best Image Gallery App in the world"
        />
        <meta
          name="twitter:image"
          content="https://aiultra.vercel.app/logo196.png"
        />
        <meta name="twitter:creator" content="Ajay Daniel Trevor" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="AI Ultra" />
        <meta
          property="og:description"
          content="Best Image Gallery App in the world"
        />
        <meta property="og:site_name" content="AI Ultra" />
        <meta property="og:url" content="https://aiultra.vercel.app" />
        <meta
          property="og:image"
          content="https://aiultra.vercel.app/logo512.png"
        />
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}
