import { useState } from 'react';
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';

import { Container } from '@/components/Layout/Container/Container';
import { HeaderText } from '@/components/Shared/HeaderText/HeaderText';
import { Sidebar } from '@/components/Sidebar/Sidebar';
import { GALLERY_IMAGES } from '@/constants/gallery';

import styles from './Galery.module.scss';

const PREVIEW_COUNT = 5;

export const Gallery = () => {
    const [selected, setSelected] = useState<{
        groupIndex: number;
        imageIndex: number;
    } | null>(null);

    const openModal = (groupIndex: number, imageIndex: number) => {
        setSelected({ groupIndex, imageIndex });
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelected(null);
        document.body.style.overflow = '';
    };

    const goPrev = () => {
        if (!selected) return;
        setSelected(prev => prev && { ...prev, imageIndex: prev.imageIndex - 1 });
    };

    const goNext = () => {
        if (!selected) return;
        setSelected(prev => prev && { ...prev, imageIndex: prev.imageIndex + 1 });
    };

    const currentGroup = selected !== null ? GALLERY_IMAGES[selected.groupIndex] : null;
    const currentImage =
        currentGroup && selected !== null ? currentGroup.images[selected.imageIndex] : null;
    const isFirst = selected !== null && selected.imageIndex === 0;
    const isLast =
        selected !== null &&
        currentGroup !== null &&
        selected.imageIndex === currentGroup.images.length - 1;

    return (
        <>
            <Container>
                <Sidebar />
                <div className={styles.gallery}>
                    {GALLERY_IMAGES.map((group, groupIndex) => (
                        <div
                            className={styles.block}
                            key={group.name}
                        >
                            <HeaderText>{group.header}</HeaderText>
                            <div className={styles.images}>
                                {group.images.slice(0, PREVIEW_COUNT).map((image, imageIndex) => (
                                    <img
                                        className={styles.image}
                                        key={image.src}
                                        src={image.src}
                                        alt={image.alt}
                                        onClick={() => openModal(groupIndex, imageIndex)}
                                    />
                                ))}
                                <div
                                    className={styles.next}
                                    onClick={() => openModal(groupIndex, 0)}
                                >
                                    <FaArrowRightLong />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            {selected !== null && currentImage && (
                <div
                    className={styles.selected}
                    onClick={closeModal}
                >
                    {!isFirst ? (
                        <div
                            className={styles.selected__buttons}
                            onClick={e => {
                                e.stopPropagation();
                                goPrev();
                            }}
                        >
                            <FaArrowLeftLong />
                        </div>
                    ) : (
                        <div className={styles.selected__placeholder} />
                    )}

                    <img
                        className={styles.selected__image}
                        src={currentImage.src}
                        alt={currentImage.alt}
                        onClick={e => e.stopPropagation()}
                    />

                    {!isLast ? (
                        <div
                            className={styles.selected__buttons}
                            onClick={e => {
                                e.stopPropagation();
                                goNext();
                            }}
                        >
                            <FaArrowRightLong />
                        </div>
                    ) : (
                        <div className={styles.selected__placeholder} />
                    )}
                </div>
            )}
        </>
    );
};
