import { Heading, keyframes } from '@chakra-ui/react';

export interface CircleLoaderHeadingProps { text: string; };

const shine = keyframes`
0% { background-position: 0 }
100% { background-position: 1080px }
`;

export const CircleLoaderHeading = ({ text }: CircleLoaderHeadingProps) => { 
    const shineAnimation = `${ shine } 5s infinite linear`;
    return <Heading
        textTransform='uppercase'
        margin='0 auto'
        fontSize='32px'
        fontWeight='200'
        letterSpacing='4.5px'
        textAlign='center'
        background='linear-gradient(to right, #4d4d4d 0, white 10%, #4d4d4d 20%)'
        backgroundPosition='0'
        backgroundClip='text'
        animation={ shineAnimation } 
        css={ { 
            animationFillMode: 'forwards',
            WebkitTextFillColor: 'transparent',
            textSizeAdjust: 'none',
            WebkitFontSmoothing:'antialiased'
         }  } 
    >
        {text}
    </Heading >;

}