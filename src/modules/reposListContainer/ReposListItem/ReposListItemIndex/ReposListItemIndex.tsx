import { Box } from '@chakra-ui/react';

export interface ReposListItemIndexProps { index: number; };

export const ReposListItemIndex = ({ index }: ReposListItemIndexProps) => {
    return (
        <Box
            as="span"
            display={{ base: "table", sm: "table", md: 'block' }}
            margin={{ base: "0 auto", sm: "0 auto", md: '0' }}
            width={{ base: "30px", sm: "30px", md: '46px' }}
            height={{ base: "30px", sm: "30px", md: '46px' }}
            borderRadius='50%'
            boxShadow='0px 0 0 8px #ebeef3, 0 0 0px 15px #f3f4f6'
            textAlign='center'
            color='#6579c5'
            fontWeight='700'
            fontSize={{ base: "20px", sm: "20px", md: '22px' }}
            lineHeight={{ base: "30px", sm: "30px", md: '46px' }}
            transform={{ base: "translateX(0px)", sm: "translateX(0px)", md: 'translateX(15px)' }}
            marginBottom={{ base: "15px", sm: "15px", md: '0px' }}
        >
            {index + 1}
        </Box>
    );
}