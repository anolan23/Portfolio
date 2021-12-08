import React, { useState, useMemo } from 'react';

import '../sass/_main.scss';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { ThemeContext } from '../context/theme';

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(true);
  const store = useMemo(() => [isDark, setIsDark], [isDark]);
  return (
    <ThemeContext.Provider value={store}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ThemeContext.Provider>
  );
}

export default MyApp;
