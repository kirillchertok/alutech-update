import { Container } from '@/components/Layout/Container/Container';
import { Image } from '@/components/Layout/Image/Image';
import { Info } from '@/components/Layout/Info/Info';
import { HeaderText } from '@/components/Shared/HeaderText/HeaderText';
import { InfoText } from '@/components/Shared/InfoText/InfoText';
import { MoreInfo } from '@/components/Shared/MoreInfo/MoreInfo';
import { Sidebar } from '@/components/Sidebar/Sidebar';

import styles from './Results.module.scss';

export const Results = () => {
    return (
        <Container>
            <Sidebar />
            <Info>
                <div className={styles.block}>
                    <HeaderText>
                        “В ритме инноваций: итоги участия «АЛЮТЕХ» на выставке MosBuild 2025
                        в Москве”
                    </HeaderText>
                    <InfoText>
                        С 1 по 4 апреля Группа компаний «АЛЮТЕХ» принимала участие
                        в 30‑й Международной строительно-интерьерной выставке MosBuild — крупнейшем
                        событии в России и СНГ в своей отрасли, которое состоялось в Москве.
                        В выставке приняли участие 1 300 производителей и поставщиков из 20 стран.
                        Мероприятие посетили более 80 тысяч человек — абсолютный рекорд за всю
                        историю проведения MosBuild.
                    </InfoText>
                    <MoreInfo />
                </div>
                <div className={styles.block}>
                    <HeaderText>
                        “Масштабно, эффектно, продуктивно: «АЛЮТЕХ» принял участие
                        в выставке R+T 2024”
                    </HeaderText>
                    <InfoText>
                        Выставка R+T 2024, вернувшаяся после шестилетнего перерыва в offline-формат,
                        продемонстрировала внушительную статистику: одно из важнейших мероприятий
                        в сфере роллетных систем, ворот и солнцезащитных конструкций посетило более
                        60 тысяч профессионалов отрасли, а свои стенды представили 1020
                        компаний-производителей из 43 стран.
                    </InfoText>
                    <MoreInfo />
                </div>
                <div className={styles.block}>
                    <HeaderText>
                        “Группа компаний «АЛЮТЕХ» на Международной строительной выставке BATIMAT в
                        Париже — подводим итоги”
                    </HeaderText>
                    <InfoText>
                        4 дня. 1300 участников. 700 спикеров. 100 презентаций... С 3 по 6 октября
                        2022 года в Париже прошла Международная строительная выставка BATIMAT,
                        объединившая на площадке комплекса Paris Porte de Versailles крупнейших
                        игроков отрасли.
                    </InfoText>
                    <MoreInfo />
                </div>
            </Info>
            <Image
                src='/results.jpg'
                alt='results'
            />
        </Container>
    );
};
