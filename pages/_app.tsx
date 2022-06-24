import '../styles/globals.css';
import '@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
