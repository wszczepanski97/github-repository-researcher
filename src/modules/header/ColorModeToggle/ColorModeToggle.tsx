import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

type ColorModeSwitcherProps = Omit<IconButtonProps, 'aria-label'>

export const ColorModeToggle = (props: ColorModeSwitcherProps) => {
  const { toggleColorMode } = useColorMode();
  const mode = useColorModeValue('light', 'dark');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size='lg'
      fontSize='30px'
      variant='ghost'
      color='#000000'
      marginLeft='2'
      _focus={{
        outline: 'none'
      }}
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={mode}
      {...props}
    />
  );
}
