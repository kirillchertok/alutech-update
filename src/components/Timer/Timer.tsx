import { useEffect, useState } from 'react';

import { TARGET_DATE } from '@/constants/timer';

import styles from './Timer.module.scss';

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

const calculateTimeLeft = (): TimeLeft => {
    const diff = TARGET_DATE.getTime() - Date.now();

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
};

const pluralize = (n: number, forms: [string, string, string]): string => {
    const abs = Math.abs(n) % 100;
    const lastDigit = abs % 10;

    if (abs > 10 && abs < 20) return forms[2];
    if (lastDigit > 1 && lastDigit < 5) return forms[1];
    if (lastDigit === 1) return forms[0];
    return forms[2];
};

export const Timer = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className={styles.container}>
            <span className={styles.header}>До ближайшей выставки</span>
            <div className={styles.time}>
                <div className={styles.time_unit}>
                    <span className={styles.amount}>{timeLeft.days}</span>
                    <span className={styles.measure}>
                        {pluralize(timeLeft.days, ['день', 'дня', 'дней'])}
                    </span>
                </div>
                <div className={styles.time_unit}>
                    <span className={styles.amount}>{timeLeft.hours}</span>
                    <span className={styles.measure}>
                        {pluralize(timeLeft.hours, ['час', 'часа', 'часов'])}
                    </span>
                </div>
                <div className={styles.time_unit}>
                    <span className={styles.amount}>{timeLeft.minutes}</span>
                    <span className={styles.measure}>
                        {pluralize(timeLeft.minutes, ['минута', 'минуты', 'минут'])}
                    </span>
                </div>
                <div className={styles.time_unit}>
                    <span className={styles.amount}>{timeLeft.seconds}</span>
                    <span className={styles.measure}>
                        {pluralize(timeLeft.seconds, ['секунда', 'секунды', 'секунд'])}
                    </span>
                </div>
            </div>
        </div>
    );
};
