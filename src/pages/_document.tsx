// Import
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  // Início do código
  return (
    <Html lang="pt-br">

      {/* Componente Head */}
      <Head />

      {/* Definição do body */}
      <body className="bg-purple">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
