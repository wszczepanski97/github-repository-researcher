import {
    useColorModeValue,
    IconButton,
    IconButtonProps,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';

type ReposittorySearchButtonProps = Omit<IconButtonProps, 'aria-label'>

export const RepositorySearchButton = (props: ReposittorySearchButtonProps) => {
    const mode = useColorModeValue('light', 'dark');
    const colorIcon = useColorModeValue('#ffffff', '000000');
    return (
        <IconButton
            width='50px'
            height='50px'
            borderStyle='none'
            fontSize='20px'
            fontWeight='bold'
            cursor='pointer'
            borderRadius='50%'
            position='absolute'
            right='0px'
            backgroundColor='transparent'
            pointerEvents='painted'
            size='md'
            variant='ghost'
            _focus={{
                outline: 'none'
            }}
            color={colorIcon}
            marginLeft='2'
            icon={<FaSearch />}
            aria-label={mode}
            {...props}
        />
    );
}

