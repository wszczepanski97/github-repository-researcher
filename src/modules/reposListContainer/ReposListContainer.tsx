import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Repository } from "../../apollo/query-types-apollo";
import { getRepositories } from "../../apollo/apollo-client";
import { ReposListContainerHeader } from './ReposListContainerHeader/ReposListContainerHeader';
import { ReposInfiniteScroll } from './ReposInfiniteScroll/ReposInfiniteScroll';
import { ReposList } from './ReposList/ReposList';
import CircleLoaderContainer from '../circleLoaderContainer/CircleLoaderContainer';

interface ReposListContainerProps { searchedPhrase: string; }

const LOAD_REPOS_LIMIT = 20;

export const ReposListContainer = ({ searchedPhrase }: ReposListContainerProps) => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [repositoryLoaded, setRepositoryLoaded] = useState<boolean>(false);
  const [endCursor, setEndCursor] = useState<string | null>(null);
  const [numberOfRepos, setNumberOfRepos] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setRepositoryLoaded(false);
        const { data } = await getRepositories({ searchedPhrase, loadReposLimit: LOAD_REPOS_LIMIT, endCursor: null });
        if (!data) return;
        setRepositoryLoaded(true);
        setRepos(data.search.edges.map(edge => edge.node));
        setNumberOfRepos(data.search.repositoryCount);
        setEndCursor(data.search.pageInfo.endCursor);
      }
      catch (error) { }
    }
    fetchRepositories();
  }, [searchedPhrase]);

  useEffect(() => setHasMore(numberOfRepos > repos.length ? true : false), [repos]);

  const getMoreRepos = async () => {
    const { data } = await getRepositories({ searchedPhrase, loadReposLimit: LOAD_REPOS_LIMIT, endCursor });
    if (data) {
      setRepos((oldRepos) => [...oldRepos, ...data.search.edges.map(edge => edge.node)]);
      setEndCursor(data.search.pageInfo.endCursor);
    }
  };

  return (
    <Box as="div" >
      <ReposListContainerHeader />
      {repositoryLoaded ?
        <Flex id="scrolledReposList"
          height='100%'
          overflow='auto'
          css={{
            '> div:first-child': {
              width: '100%',
            },
            '&::-webkit-scrollbar': {
              width: '8px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              background: '#aaaaaa',
              borderRadius: '24px',
            },
          }}
        >
          <ReposInfiniteScroll
            dataLength={repos.length}
            nextReposFunc={getMoreRepos}
            hasMore={hasMore}
          >
            <ReposList repos={repos} />
          </ReposInfiniteScroll>
        </Flex> :
        <CircleLoaderContainer text="Wait for repositories" />
      }
    </Box>
  );

};
