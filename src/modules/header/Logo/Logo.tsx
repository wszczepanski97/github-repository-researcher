import { Image, useColorModeValue } from '@chakra-ui/react';
import githubLightIcon from '../../../assets/github-light-icon.jpg';
import githubDarkIcon from '../../../assets/github-dark-icon.png';
export const Logo = () => {
    const logosrc = useColorModeValue(githubLightIcon.src, githubDarkIcon.src);
    return <Image src={logosrc} height="70px" width="70px" />;
}
