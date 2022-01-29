import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

import * as gtag from '../lib/gtag';
import '../sass/_main.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeContext } from '../context/theme';

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    //When the component is mounted, subscribe to router changes
    //and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  useEffect(() => {
    isDark
      ? document.body.classList.remove('light')
      : document.body.classList.remove('dark');
    isDark
      ? document.body.classList.add('dark')
      : document.body.classList.add('light');
  }, [isDark]);

  return (
    <ThemeContext.Provider value={[isDark, setIsDark]}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default MyApp;
