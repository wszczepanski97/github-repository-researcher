import {
    Box,
    Heading,
    useColorModeValue,
} from '@chakra-ui/react';

export const ReposListContainerHeader = () => {
    const backgroundImage = useColorModeValue(
        `repeating-radial-gradient(circle at 15%, transparent 0%, transparent 10%, 
         rgba(54, 89, 219, .33) 10%, rgba(54, 89, 219, .33) 17%), linear-gradient(to right, #5b7cfa, #3659db)`,
        `repeating-radial-gradient(circle at 15%, transparent 0%, transparent 10%, 
         rgb(111 111 111 / 33%) 3%, rgb(97 88 88 / 33%) 33%), linear-gradient(to right, #464667, #4a4f63)`
    );
    return (
        <Box
            display='flex'
            height='100px'
            flexDirection='column'
            justifyContent='center'
            textAlign='center'
            backgroundImage={backgroundImage}
            color='#ffffff'
            position='relative'
            border-radius='12px 12px 0 0'
            overflow='hidden'
        >
            <Heading
                textTransform='uppercase'
                margin='0 auto'
                fontSize='32px'
                fontWeight='200'
                letterSpacing='4.5px'
                textAlign='center'
            >
                Repositories
            </Heading>
        </Box >
    );
}
