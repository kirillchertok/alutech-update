import { Container } from '@/components/Layout/Container/Container';

import styles from './Partnership.module.scss';

export const Partnership = () => {
    return (
        <Container>
            <div className={styles.partnership}>
                <h1 className={styles.header}>
                    ПРОГРАММА ПОДДЕРЖКИ ПАРТНЕРОВ "АЛЮТЕХ" ПРИ СОВМЕСТНОМ УЧАСТИИ В ВЫСТАВКАХ
                </h1>
                <img
                    className={styles.image}
                    src='/partnership.jpg'
                    alt='partnership'
                />
            </div>
        </Container>
    );
};
