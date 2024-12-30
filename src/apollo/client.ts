import {ApolloClient, createHttpLink, InMemoryCache} from '@apollo/client'
import {setContext} from '@apollo/client/link/context'

const url = process.env.REACT_APP_BLOG_BACKEND_DEVELOPMENT_URL

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
