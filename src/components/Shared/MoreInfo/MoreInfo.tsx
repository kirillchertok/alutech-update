import { FaArrowRightLong } from 'react-icons/fa6';

import styles from './MoreInfo.module.scss';

interface Props {
    link: string;
}

export const MoreInfo = ({ link }: Props) => {
    return (
        <a
            href={link}
            className={styles.more_info}
        >
            Узнать больше
            <FaArrowRightLong />
        </a>
    );
};
