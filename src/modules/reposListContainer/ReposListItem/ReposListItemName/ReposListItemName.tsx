import { Box } from '@chakra-ui/react';

export interface ReposListItemNameProps { name: string; url: string };

export const ReposListItemName = ({ name, url }: ReposListItemNameProps) => {
    return (
        <Box
            as="a"
            href={url}
            target='_blank'
            color='#979cb0'
            fontWeight='600'
            fontSize='20px'
            letterSpacing='0.64px'
            margin='0 auto'
        >
            {name}
        </Box>
    );
}