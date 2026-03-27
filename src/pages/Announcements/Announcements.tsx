import { Container } from '@/components/Layout/Container/Container';
import { Image } from '@/components/Layout/Image/Image';
import { Info } from '@/components/Layout/Info/Info';
import { HeaderText } from '@/components/Shared/HeaderText/HeaderText';
import { InfoText } from '@/components/Shared/InfoText/InfoText';
import { MoreInfo } from '@/components/Shared/MoreInfo/MoreInfo';
import { Sidebar } from '@/components/Sidebar/Sidebar';

import styles from './Announcements.module.scss';

export const Announcements = () => {
    return (
        <Container>
            <Sidebar />
            <Info>
                <div className={styles.block}>
                    <HeaderText>
                        “Курс на MosBuild: «АЛЮТЕХ» готовится удивить на крупнейшей строительной
                        выставке России”
                    </HeaderText>
                    <InfoText>
                        С 1 по 4 апреля в выставочном центре «Крокус Экспо» в Москве пройдет 30-я
                        Международная строительно-интерьерная выставка MosBuild — крупнейшее
                        отраслевое событие в России, СНГ и Восточной Европе. Планируется, что в
                        мероприятии примут участие около 1300 компаний из более чем 20 стран мира.
                    </InfoText>
                    <MoreInfo />
                </div>
                <div className={styles.block}>
                    <HeaderText>
                        “С заботой об экологии: «АЛЮТЕХ» представит двухуровневый стенд на выставке
                        R+T в Штутгарте”
                    </HeaderText>
                    <InfoText>
                        С 19 по 23 февраля в Штутгарте (Германия) состоится событие, которое
                        с нетерпением ждут профессионалы строительной сферы, — Международная
                        выставка роллетных, воротных систем и солнцезащитных конструкций R+T 2024.
                        В ней традиционно примет участие и Группа компаний «АЛЮТЕХ». С 2018 года,
                        когда выставка проводилась в последний раз, ассортимент бренда значительно
                        расширился, и «АЛЮТЕХ» снова готов удивлять...
                    </InfoText>
                    <MoreInfo />
                </div>
                <div className={styles.block}>
                    <HeaderText>
                        “«АЛЮТЕХ» примет участие в Международной строительной выставке BATIMAT в
                        Париже”
                    </HeaderText>
                    <InfoText>
                        С 3 по 6 октября 2022 года в Париже (Франция) пройдет Международная
                        строительная выставка BATIMAT, которая соберет под крышей комплекса Paris
                        Porte de Versailles крупнейших игроков отрасли. В рамках мероприятия будут
                        демонстрироваться современные материалы и системы для строительства,
                        инновационные архитектурные и дизайнерские решения.
                    </InfoText>
                    <MoreInfo />
                </div>
            </Info>
            <Image
                src='/announcements.jpg'
                alt='announcements'
            />
        </Container>
    );
};
