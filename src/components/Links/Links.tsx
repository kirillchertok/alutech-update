import { FaRegEnvelope } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FiYoutube } from 'react-icons/fi';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';

import styles from './Links.module.scss';

export const Links = () => {
    return (
        <div className={styles.container}>
            <a
                href='https://www.instagram.com/alutech_official/'
                className={styles.link}
            >
                <FaInstagram size={30} />
            </a>
            <a
                href='https://www.youtube.com/@alutechinc/videos'
                className={styles.link}
            >
                <FiYoutube size={30} />
            </a>
            <a
                href='https://alutech-group.com/ru-ru/obratnaya-svyaz/'
                className={styles.link}
            >
                <FaRegEnvelope size={30} />
            </a>
            <a
                href='https://alutech-group.com/ru-ru/chastnyy-domovladelec/gde-kupit/poisk-dilera/'
                className={styles.link}
            >
                <IoMdCheckmarkCircleOutline size={30} />
            </a>
        </div>
    );
};
