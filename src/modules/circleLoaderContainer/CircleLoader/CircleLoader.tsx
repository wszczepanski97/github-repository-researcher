import styles from "./CircleLoader.module.css";
import { Flex, useColorModeValue} from '@chakra-ui/react';

export const CircleLoader = () => {
    const circleColor = useColorModeValue('#404041', '#4d4d4d');
    return (
        <Flex alignItems="center" justifyContent="center">
            <svg className={styles.loader} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 340 340">
                <circle cx="170" cy="170" r="160" stroke="#E2007C" className={styles['circle-1']}/>
                <circle cx="170" cy="170" r="135" stroke={circleColor} className={styles['circle-2']}/>
                <circle cx="170" cy="170" r="110" stroke="#E2007C" className={styles['circle-3']}/>
                <circle cx="170" cy="170" r="85" stroke={circleColor} className={styles['circle-4']} />
            </svg>
        </Flex>
    );
}
