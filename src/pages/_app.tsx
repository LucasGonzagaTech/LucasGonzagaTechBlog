import type { AppProps } from "next/app";
import "../styles/global.css"
import { Inter } from 'next/font/google'
import {ApolloProvider} from '@apollo/client'
import { client } from "@/lib/apollo";

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }: AppProps) {
  return(
    <ApolloProvider
    client={client}>
      <main className={`${inter.variable} font-sans`}>
      <Component {...pageProps} />;
    </main>
    </ApolloProvider>
  )
}
