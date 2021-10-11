import { Box, useColorModeValue } from '@chakra-ui/react';
import { Repository } from '../../../apollo/query-types-apollo';
import { ReposListItem } from '../ReposListItem/ReposListItem';

interface ReposListProps {
    repos: Repository[]
}

export const ReposList = ({ repos }: ReposListProps) => {
    const listbg = useColorModeValue('#ffffff', '#6d6d6d');
    return (
        <Box
            bg={listbg}
            borderRadius='0 0 12px 12px'
            padding='15px 30px'
            display='grid'
            row-gap='8px'
            border-bottom='1px solid #E4E8F0'
        >
            {repos.map((data, index) => <ReposListItem key={data.id} name={data.name} url={data.url} owner={data.owner.login} index={index} />)}
        </Box>
    );
}
