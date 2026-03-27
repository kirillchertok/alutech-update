import styles from './Image.module.scss';

interface Props {
    src: string;
    alt: string;
}

export const Image = ({ src, alt }: Props) => {
    return (
        <img
            className={styles.image}
            src={src}
            alt={alt}
        />
    );
};
