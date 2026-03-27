import cn from 'classnames';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

import { ROUTES } from '@/constants/routes';

import styles from './Sidebar.module.scss';

export const Sidebar = () => {
    const { pathname } = useLocation();

    return (
        <div className={styles.container}>
            <div>
                <a
                    href=''
                    className={cn(styles.main_links, styles['main_links--not_active'])}
                >
                    Производственно-сбытовая сеть
                </a>
            </div>
            <div>
                <a
                    href=''
                    className={cn(styles.main_links, styles['main_links--not_active'])}
                >
                    Ассортимент
                </a>
            </div>
            <div>
                <a
                    href=''
                    className={cn(styles.main_links, styles['main_links--not_active'])}
                >
                    Качество
                </a>
            </div>
            <div>
                <a
                    href=''
                    className={cn(styles.main_links, styles['main_links--active'])}
                >
                    Выставки
                </a>
                <div className={styles.side_links}>
                    {ROUTES.map(({ path, label }) => {
                        const isActive = pathname === path;

                        return (
                            <a
                                key={path}
                                href={path}
                                className={cn(
                                    styles.side_link,
                                    isActive ? styles.side_link_active : styles.side_link_inactive
                                )}
                            >
                                {!isActive && (
                                    <FaArrowRightLong className={styles.side_link_arrow} />
                                )}
                                {label}
                            </a>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};
