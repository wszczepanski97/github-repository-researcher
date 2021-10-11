import { useState } from 'react';
import { Flex } from '@chakra-ui/react';
import { Header } from '../header/Header';
import { ReposListContainer } from '../reposListContainer/ReposListContainer';
import CircleLoaderContainer from '../circleLoaderContainer/CircleLoaderContainer';

const Home = () => {
  const [searchedRepository, setSearchedRepository] = useState('');
  return (
    <Flex direction="column">
      <Header searchedRepository={searchedRepository} onSearchedRepositoryChange={setSearchedRepository} />
      {searchedRepository.length > 2 ?
        <ReposListContainer searchedPhrase={searchedRepository} /> : 
        <CircleLoaderContainer text="Please fill in search bar in the top left corner"/>
      }
    </Flex>
  );
}

export default Home;
