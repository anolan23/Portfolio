import React from 'react';

import '../sass/base.scss';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Navbar />
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
