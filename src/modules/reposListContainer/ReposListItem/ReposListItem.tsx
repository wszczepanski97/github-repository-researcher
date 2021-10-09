import { Box, useColorModeValue } from '@chakra-ui/react';

interface ReposListItemProps {
    name: string;
    owner: string;
    index: number;
}

export const ReposListItem = ({ name, owner, index }: ReposListItemProps) => {
    const articlebg = useColorModeValue('#ffffff', '#545454');
    const dateColor = useColorModeValue('#6dccb2', '#6579c5');
    return (
        <Box
            display='grid'
            gridTemplateColumns={{ base: "", sm: "", md: '2fr 9fr 1fr' }}
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            padding={{ base: "", sm: "", md: '10px 20px 10px 10px' }}
            overflow='hidden'
            borderRadius='10px'
            boxShadow='0 5px 7px -1px rgba(51, 51, 51, 0.23)'
            cursor='pointer'
            transition='transform .25s cubic-bezier(.7,.98,.86,.98), box-shadow .25s cubic-bezier(.7,.98,.86,.98)'
            bg={articlebg}
            marginBottom='10px'
            _hover={{
                transform: { base: 'scale(1.05)', lg: 'scale(1.05)', xl: 'scale(1.1)' },
                boxShadow: '0 9px 47px 11px rgba(51, 51, 51, 0.18)',
                zIndex: 2,
            }}
        >
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
            <Box
                as="span"
                color='#979cb0'
                fontWeight='600'
                fontSize='20px'
                letterSpacing='0.64px'
                marginLeft='12px'
            >
                {name}
            </Box>
            <Box
                height='46px'
                lineHeight='46px'
            >
                <Box
                    as="span"
                    lineHeight='18px'
                    display='inline-block'
                    vertical-align='middle'
                    color={dateColor}
                    fontWeight='700'
                    fontSize='14px'
                    textAlign='right'
                >
                    {owner}
                </Box>
            </Box>
        </Box >
    );
}
