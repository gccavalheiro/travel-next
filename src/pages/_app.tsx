import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/globals'

import 'swiper/css/bundle'
import 'remixicon/fonts/remixicon.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Travel - Explore as Praias mais Encantadoras do Mundo.</title>
        <meta
          name="description"
          content="Explore as Praias mais Encantadoras do Mundo."
        />
      </Head>

      <GlobalStyles />

      <Component {...pageProps} />
    </>
  )
}
export default MyApp
