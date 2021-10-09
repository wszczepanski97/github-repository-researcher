import { useState } from 'react';
import { Flex, useColorModeValue } from '@chakra-ui/react';
import { Header } from '../header/Header';
import { ReposListContainer } from '../reposListContainer/ReposListContainer';

const Home = () => {
  const [searchedRepository, setSearchedRepository] = useState('');
  const bg = useColorModeValue("#ffffff", "#424242");
  return (
    <Flex direction="column">
      <Header searchedRepository={searchedRepository} onSearchedRepositoryChange={setSearchedRepository} />
      <ReposListContainer searchedPhrase={searchedRepository} />
    </Flex>
  );
}

export default Home;
