// Import
import { ApolloClient, InMemoryCache } from "@apollo/client"

export const client = new ApolloClient({
    // Início do código
    // Consultas
    uri: process.env.NEXT_PUBLIC_API_URL,
    cache: new InMemoryCache()
})