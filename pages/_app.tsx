import type { AppProps } from 'next/app';
import Layout from '../src/components/Layout/Layout';
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loader from '../src/components/Loader/Loader';
import '../styles/globals.scss';

const App = ({ Component, pageProps }: AppProps) => {

  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();

  useEffect((): void => {
    router.events.on("routeChangeStart", () => {
      setLoading(true);
    });
    router.events.on("routeChangeComplete", () => {
      setLoading(false);
    });
  }, []);

  return (
    <Layout>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </Layout>
  )
};

export default App;
