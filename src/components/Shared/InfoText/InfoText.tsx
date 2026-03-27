import type React from 'react';

import styles from './InfoText.module.scss';

interface Props {
    children: React.ReactNode;
}

export const InfoText = ({ children }: Props) => {
    return <p className={styles.info}>{children}</p>;
};
