import { useColorModeValue, Input } from '@chakra-ui/react';
import { useCallback } from 'react';
import { SearchProps } from '../../Header';

export const RepositorySearchInput = ({ searchedRepository, onSearchedRepositoryChange }: SearchProps) => {
    const handleSearchChange = useCallback(event => onSearchedRepositoryChange(event.target.value), [onSearchedRepositoryChange]);
    const inputbg = useColorModeValue('#6dccb2', '#424242');
    return (
        <Input
            type='text'
            height='50px'
            width='50px'
            borderStyle='none'
            padding='10px'
            fontSize='18px'
            outline='none'
            borderRadius='25px'
            paddingRight='40px'
            color='#fff'
            letterSpacing='2px'
            fontWeight='100'
            bg={inputbg}
            transition='all .5s ease-in-out'
            position='static'
            display='inline-block'
            _focus={{
                borderRadius: '0px',
                bg: { inputbg },
                borderBottom: '1px solid rgba(255,255,255,.5)',
                transition: 'all 500ms cubic- bezier(0, 0.110, 0.35, 2)',
                _placeholder: {
                    opacity: '0',
                    transform: 'translate(70%)',
                    transition: 'all 2.4s ease-in-out'
                }
            }}
            _placeholder={{
                color: 'rgba(255,255,255,.5)',
                fontSize: '18px',
                letterSpacing: '2px',
                fontWeight: 100,
            }}
            placeholder='Find repo by title...'
            onChange={handleSearchChange}
            value={searchedRepository}
        />
    );
}

