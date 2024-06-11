// Import
import type { AppProps } from "next/app";

import { Inter } from 'next/font/google'
import { ApolloProvider } from '@apollo/client'
import { client } from "@/lib/apollo";

import "../styles/global.css"

// Definição da fonte de texto
const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter'
})

export default function App({ Component, pageProps }: AppProps) {
  // Início do código
  return (
    // Componente de consultas
    <ApolloProvider
      client={client}>

      {/* Uso das fontes */}
      <main className={`${inter.variable} font-sans`}>
        <Component {...pageProps} />;
      </main>
    </ApolloProvider>
  )
}
