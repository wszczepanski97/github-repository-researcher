import { gql } from "@apollo/client";

// QUERY DATA TYPES
export interface Repository {
    id: string,
    name: string,
    url: string,
    owner: Owner,
}

type Owner = {
    login: string
}

type Edge = {
    node: Repository
}

type PageInfo = {
    endCursor: string
}

export interface Search {
    pageInfo: PageInfo,
    edges: Edge[],
    repositoryCount: number
}

export interface Data {
    search: Search
}

// QUERY VARIABLES TYPES

export interface QueryVariables { searchedPhrase: string; loadReposLimit: number, endCursor: string | null };

// GRAPHQL QUERYY
export const repositoryQuery = gql`
query getRepositories($searchedPhrase: String!, $loadReposLimit: Int, $endCursor: String) { 
  search(query:$searchedPhrase, first: $loadReposLimit, after: $endCursor, type:REPOSITORY) {
    pageInfo {
      endCursor
    } 
    edges { 
      node {
        ... on Repository {
          id
          name
          url
          owner {
            login
          }
        }  
      }
    }
    repositoryCount
  }
}
`;