// import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {DSProvider} from '@nypl/design-system-react-components'
export default function App({ Component, pageProps }: AppProps) {
  return ( 
    <DSProvider>
      <Component {...pageProps} />
    </DSProvider>
  )
}
