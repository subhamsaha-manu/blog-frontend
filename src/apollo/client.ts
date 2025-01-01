import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'

const url = 'http://localhost:8080'

const httpLink = createHttpLink({
    uri: `${url}/graphql`,
})

const authLink = setContext((_, {headers}) => {
    const authToken = ""
    return {
        headers: {
            ...headers,
            authorization: authToken ? `Bearer ${authToken}` : '',
        },
    }
})

export const getClient = () => {
    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    })
}
