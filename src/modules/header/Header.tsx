import { Flex, useColorModeValue } from '@chakra-ui/react';
import { ColorModeToggle } from './ColorModeToggle/ColorModeToggle';
import { RepositorySearch } from './RepositorySearch/RepositorySearch';
import { Logo } from './Logo/Logo';

export interface SearchProps {
  searchedRepository: string;
  onSearchedRepositoryChange: React.Dispatch<React.SetStateAction<string>>
}

export const Header = ({ searchedRepository, onSearchedRepositoryChange }: SearchProps) => {
  const bg = useColorModeValue('#ffffff', '#6d6d6d');
  return (
    <Flex
      height='10vh'
      flexDirection={{ base: "row-reverse", sm: "row-reverse", md: 'row' }}
      alignItems='center'
      justifyContent='space-between'
      backgroundColor='#ffffff'
      borderBottom='1px solid #E4E8F0'
      bg={bg}
      transition='all .5s ease-in-out'
    >
      <RepositorySearch searchedRepository={searchedRepository} onSearchedRepositoryChange={onSearchedRepositoryChange} />
      <Logo />
      <ColorModeToggle />
    </Flex>
  );
}
