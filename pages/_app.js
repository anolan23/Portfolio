import React, { useState, useMemo } from 'react';

import '../sass/base.scss';
import Navbar from '../components/Navbar';
import { ThemeContext } from '../context/theme';

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(false);
  const store = useMemo(() => [isDark, setIsDark], [isDark]);
  return (
    <ThemeContext.Provider value={store}>
      <Navbar />
      <Component {...pageProps} />
    </ThemeContext.Provider>
  );
}

export default MyApp;
