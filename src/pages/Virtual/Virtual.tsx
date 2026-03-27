import { FaArrowRightLong } from 'react-icons/fa6';

import { Container } from '@/components/Layout/Container/Container';
import { Sidebar } from '@/components/Sidebar/Sidebar';

import styles from './Virtual.module.scss';

export const Virtual = () => {
    return (
        <Container>
            <Sidebar />
            <div className={styles.virtual}>
                <div className={styles.buttons}>
                    <div className={styles.button}>
                        <img
                            className={styles.button__image}
                            src='/photo.png'
                            alt='photo'
                        />
                        <p className={styles.button__header}>Посетить выставку</p>
                        <FaArrowRightLong className={styles.button__arrow} />
                    </div>
                    <div className={styles.button}>
                        <img
                            className={styles.button__image}
                            src='/cart.png'
                            alt='cart'
                        />
                        <p className={styles.button__header}>Интернет магазин</p>
                        <FaArrowRightLong className={styles.button__arrow} />
                    </div>
                    <div className={styles.button}>
                        <img
                            className={styles.button__image}
                            src='/phone.png'
                            alt='phone'
                        />
                        <p className={styles.button__header}>Оставить контактные данные</p>
                        <FaArrowRightLong className={styles.button__arrow} />
                    </div>
                </div>
            </div>
        </Container>
    );
};
