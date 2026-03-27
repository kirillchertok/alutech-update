import cn from 'classnames';
import type React from 'react';

import styles from './List.module.scss';

interface Props {
    textSize?: 'small' | 'large';
    children: React.ReactNode;
}

export const List = ({ textSize = 'small', children }: Props) => {
    return <ul className={cn(styles.list, styles[`list--${textSize}`])}>{children}</ul>;
};
