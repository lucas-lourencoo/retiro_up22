import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        const loader = document.getElementById('globalLoader');
        loader.style.transition = '.4s';
        if (loader) loader.style.opacity = '0';
      }
    }, 4500);
  }, []);

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Toaster
        toastOptions={{
          className: 'toastStyles',
          style: {
            fontSize: '1.8rem',
            fontFamily: 'Poppins, sans-serif',
          },
          error: {
            style: {
              background: 'var(--red-300)',
              color: 'var(--white)',
            },
            iconTheme: {
              primary: 'var(--white)',
              secondary: 'var(--red-300)',
            },
          },
        }}
      />
    </>
  );
}

export default MyApp;
