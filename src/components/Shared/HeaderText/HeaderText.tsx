import type React from 'react';

import styles from './HeaderText.module.scss';

interface Props {
    children: React.ReactNode;
}

export const HeaderText = ({ children }: Props) => {
    return <p className={styles.header}>{children}</p>;
};
