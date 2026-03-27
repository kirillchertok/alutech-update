import styles from './Header.module.scss';

export const Header = () => {
    return (
        <header className={styles.container}>
            <div className={styles.logo_nav_container}>
                <a
                    className={styles.logo}
                    href='/'
                >
                    <img
                        className={styles.logo__img}
                        src='/logo-black.svg'
                        alt='logo'
                    />
                </a>
                <div className={styles.nav}>
                    <a
                        href=''
                        className={`${styles.text} ${styles.link}`}
                    >
                        О группе компаний
                    </a>
                    <a
                        href=''
                        className={`${styles.text} ${styles.link}`}
                    >
                        Технологии и качество
                    </a>
                    <a
                        href=''
                        className={`${styles.text} ${styles.link}`}
                    >
                        Инженерно-технический центр
                    </a>
                    <a
                        href=''
                        className={`${styles.text} ${styles.link}`}
                    >
                        Карьера в "АЛЮТЕХ"
                    </a>
                    <a
                        href=''
                        className={`${styles.text} ${styles.link}`}
                    >
                        Контакты
                    </a>
                </div>
            </div>
            <span className={`${styles.text} ${styles.country}`}>БЕЛАРУСЬ</span>
        </header>
    );
};
