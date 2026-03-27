import { Container } from '@/components/Layout/Container/Container';
import { List } from '@/components/Shared/List/List';

import styles from './Partnership.module.scss';

export const Partnership = () => {
    return (
        <div className={styles.partnership}>
            <h1 className={styles.header}>
                ПРОГРАММА ПОДДЕРЖКИ ПАРТНЕРОВ "АЛЮТЕХ" ПРИ СОВМЕСТНОМ УЧАСТИИ В ВЫСТАВКАХ
            </h1>
            <img
                className={styles.image}
                src='/partnership.jpg'
                alt='partnership'
            />
            <p className={styles.info}>
                Предлагаем вашему вниманию программу поддержки партнеров при участии в выставках.
                Основная задача, которую решает данный совместный проект, заключается в повышении
                эффективности продвижения продукции «АЛЮТЕХ» на рынке посредством:
            </p>
            <List textSize='large'>
                <li>поддержания работы с уже существующими клиентами;</li>
                <li>установления контактов с новыми клиентами;</li>
                <li>выявления требований и отношения потребителей;</li>
                <li>
                    проведения наглядных презентаций продукции и знакомства с ее конкурентными
                    преимуществами;
                </li>
                <li>повышения узнаваемости бренда;</li>
                <li>обмена опытом с лидерами отрасли;</li>
                <li>демонстрации своих достижений.</li>
            </List>
            <p className={styles.after}>
                Для совместного участия в выставках мы предлагаем вам воспользоваться
                демонстрационным оборудованием, рекламно-информационными материалами, а также
                консультативной поддержкой специалистов «АЛЮТЕХ».
            </p>
            <p className={styles.after}>
                Более подробную информацию вы можете получить, ознакомившись с рекомендациями по
                совместному участию в выставках.
            </p>
            <p className={styles.after}>
                Скачать{' '}
                <a
                    href='https://alutech-group.com/content/partners/action/tab_1/Recommendation_partners_exhibitions.pdf'
                    className={styles.link}
                >
                    Брошюра «Рекомендации партнерам «Алютех» по совместному участию в выставках»
                </a>
            </p>
            <p className={styles.after}>Давайте развивать наш бизнес вместе!</p>
        </div>
    );
};
