import { Box } from '@chakra-ui/react';
import { SearchProps } from '../Header';
import { RepositorySearchButton } from './RepositorySearchButton/RepositorySearchButton';
import { RepositorySearchInput } from './RepositorySearchInput/RepositorySearchInput';

export const RepositorySearch = ({ searchedRepository, onSearchedRepositoryChange }: SearchProps) => {
    return (
        <Box
            width='fit-content'
            height='fit-content'
            position='relative'
            margin='0 10px'
            transition='all .5s ease-in-out'
        >
            <RepositorySearchButton />
            <RepositorySearchInput searchedRepository={searchedRepository} onSearchedRepositoryChange={onSearchedRepositoryChange} />
        </Box>
    );
}
