import { Box, useColorModeValue } from '@chakra-ui/react';

export interface ReposListItemContainerProps { children: React.ReactNode };

export const ReposListItemContainer = ({ children }: ReposListItemContainerProps) => {
    const bg = useColorModeValue('#ffffff', '#545454');
    return (
        <Box
            display='grid'
            gridTemplateColumns={{ base: "", sm: "", md: '2fr 9fr 2fr' }}
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            padding={{ base: "", sm: "", md: '10px 20px 10px 10px' }}
            overflow='hidden'
            borderRadius='10px'
            boxShadow='0 5px 7px -1px rgba(51, 51, 51, 0.23)'
            className="animate__animated animate__pulse animate__delay-15s"
            cursor='pointer'
            bg={bg}
            margin='10px 20px'
            _hover={{
                transform: 'scale(1.05)',
                boxShadow: '0 9px 47px 11px rgba(51, 51, 51, 0.18)',
                zIndex: 2,
            }}
        >
            {children}
        </Box>
    );
}