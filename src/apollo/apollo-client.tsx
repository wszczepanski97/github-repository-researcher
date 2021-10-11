import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { Data, QueryVariables, repositoryQuery } from './query-types-apollo';

const GITHUB_OAUTH_TOKEN = '';
const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql' });
const authLink = setContext((_, { headers }) => ({ headers: { ...headers, authorization: GITHUB_OAUTH_TOKEN } }));
const client = new ApolloClient({ link: authLink.concat(httpLink), cache: new InMemoryCache() });

export const getRepositories = async ({ searchedPhrase, loadReposLimit, endCursor }: QueryVariables) => {
    return await client.query<Data, QueryVariables>({ query: repositoryQuery, variables: { searchedPhrase, loadReposLimit, endCursor } });
}
export default client;