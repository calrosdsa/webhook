import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux';
import store from '../context/store';
import   '../styles/App.css'
import { useEffect } from 'react';



export default function App({ Component, pageProps }: AppProps) {
  return( 
    <Provider store={store}>
  <Component {...pageProps} />
  </Provider>

  )
}
