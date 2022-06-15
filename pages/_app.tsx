import { NextPage } from 'next';
import { AppProps } from 'next/app';
import '../styles/globals.css'

type NextPageWhitLayout = NextPage & {
  getLayout?: ( page: JSX.Element ) => JSX.Element;
}

type AppPropsWhitLayout = AppProps & {
  Component: NextPageWhitLayout
}

function MyApp({ Component, pageProps }: AppPropsWhitLayout  ) {

  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
