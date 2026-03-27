import type React from 'react';

import styles from './Info.module.scss';

interface Props {
    children: React.ReactNode;
}

export const Info = ({ children }: Props) => {
    return <div className={styles.info}>{children}</div>;
};
