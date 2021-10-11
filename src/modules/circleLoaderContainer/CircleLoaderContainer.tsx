import { Flex } from '@chakra-ui/react';
import { CircleLoader } from '../circleLoaderContainer/CircleLoader/CircleLoader';
import { CircleLoaderHeading } from './CircleLoaderHeading/CircleLoaderHeading';

interface CircleLoaderContainerProps { text: string; };

const CircleLoaderContainer = ({ text }: CircleLoaderContainerProps) => {
    return (
        <Flex height="90vh" flexDirection="column" alignItems="center" justifyContent="center">
            <Flex direction="column" height="25vh" justifyContent="space-between">
                <CircleLoader />
                <CircleLoaderHeading text={ text } />
            </Flex>
        </Flex>
    );
}

export default CircleLoaderContainer;
