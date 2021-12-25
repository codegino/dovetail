import {css, Global} from '@emotion/react';
import type {AppProps} from 'next/app';
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';

const App = ({Component, pageProps}: AppProps) => (
  <>
    <Global
      styles={css`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }

        :root {
          --color-primary: #230078;
          --color-background: #fefbf5;
          --color-background-dark: #fdf4e6;
        }

        div,
        a,
        p {
          color: var(--color-primary);
        }
      `}
    />
    <Header />
    <Component {...pageProps} />
    <Footer />
  </>
);

export default App;
