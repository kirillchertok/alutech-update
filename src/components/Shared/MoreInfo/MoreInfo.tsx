import { FaArrowRightLong } from 'react-icons/fa6';

import styles from './MoreInfo.module.scss';

export const MoreInfo = () => {
    return (
        <a
            href=''
            className={styles.more_info}
        >
            Узнать больше
            <FaArrowRightLong />
        </a>
    );
};
