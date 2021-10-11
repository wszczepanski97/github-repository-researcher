import { Box, useColorModeValue } from '@chakra-ui/react';

export interface ReposListItemOwnerProps { owner: string; };

export const ReposListItemOwner = ({ owner }: ReposListItemOwnerProps) => {
    const dateColor = useColorModeValue('#6dccb2', '#6579c5');
    return (
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
    );
}