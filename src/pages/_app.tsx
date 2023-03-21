import type {AppProps} from 'next/app';
import Head from 'next/head';
import '../global-styles.css';
import {wrapper} from '@/app/store';
import {SnackbarProvider} from 'notistack';
import useNotifier from '@/components/providers/NotificationProvider';
import {NextPage} from 'next';
import {ReactElement, ReactNode} from 'react';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (pageProps: AppProps, page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({Component, pageProps}: AppPropsWithLayout) => {
  useNotifier();

  const getLayout = Component.getLayout ?? ((pageProps, page) => page);

  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      hideIconVariant={false}
      autoHideDuration={3000}
      dense
      style={{
        fontSize: 17
      }}
    >
      {
        getLayout(pageProps,  <Component {...pageProps}/>)
      }
    </SnackbarProvider>
  </>;
};

export default wrapper.withRedux(App);


