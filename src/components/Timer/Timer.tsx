import styles from './Timer.module.scss';

export const Timer = () => {
    return (
        <div className={styles.container}>
            <span className={styles.header}>До ближайшей выставки</span>
            <div className={styles.time}>
                <div className={styles.time_unit}>
                    <span className={styles.amount}>8</span>
                    <span className={styles.measure}>дней</span>
                </div>
                <div className={styles.time_unit}>
                    <span className={styles.amount}>7</span>
                    <span className={styles.measure}>часов</span>
                </div>
                <div className={styles.time_unit}>
                    <span className={styles.amount}>6</span>
                    <span className={styles.measure}>минут</span>
                </div>
                <div className={styles.time_unit}>
                    <span className={styles.amount}>5</span>
                    <span className={styles.measure}>секунд</span>
                </div>
            </div>
        </div>
    );
};
