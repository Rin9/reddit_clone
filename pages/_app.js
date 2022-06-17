import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <div className="h-screen overflow-y-scroll">
        <Header />
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  );
}

export default MyApp;
