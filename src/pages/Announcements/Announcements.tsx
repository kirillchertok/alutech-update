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
                        "«АЛЮТЕХ» примет участие в Международной строительно-интерьерной выставке
                        MosBuild 2026 в Москве"
                    </HeaderText>
                    <InfoText>
                        С 31 марта по 3 апреля 2026 года в Москве (Россия) пройдет Международная
                        строительно-интерьерная выставка MosBuild, которая соберет в МВЦ «Крокус
                        Экспо» ведущих производителей строительных и отделочных материалов. В рамках
                        мероприятия ГК «АЛЮТЕХ» представит на двух стендах инновационные алюминиевые
                        профильные системы, комплексные решения для остекления, широкую линейку
                        ворот, перегрузочное оборудование и автоматику, а также более 60 новинок для
                        частной и коммерческой недвижимости.
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/exhibitions/mosbuild2026/#contacts' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        "Курс на MosBuild: «АЛЮТЕХ» готовится удивить на крупнейшей строительной
                        выставке России"
                    </HeaderText>
                    <InfoText>
                        С 1 по 4 апреля в выставочном центре «Крокус Экспо» в Москве пройдет 30-я
                        Международная строительно-интерьерная выставка MosBuild — крупнейшее
                        отраслевое событие в России, СНГ и Восточной Европе. Планируется, что в
                        мероприятии примут участие около 1300 компаний из более чем 20 стран мира.
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/cis-ru/korporativnyy-klient/publikacii/novosti/kurs-na-mosbuild-alutech-gotovitsya-udivit-na-krupneyshey-stroitelnoy-vystavke-rossii/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        "С заботой об экологии: «АЛЮТЕХ» представит двухуровневый стенд на выставке
                        R+T в Штутгарте"
                    </HeaderText>
                    <InfoText>
                        С 19 по 23 февраля в Штутгарте (Германия) состоится событие, которое с
                        нетерпением ждут профессионалы строительной сферы, — Международная выставка
                        роллетных, воротных систем и солнцезащитных конструкций R+T 2024. В ней
                        традиционно примет участие и Группа компаний «АЛЮТЕХ». С 2018 года, когда
                        выставка проводилась в последний раз, ассортимент бренда значительно
                        расширился, и «АЛЮТЕХ» снова готов удивлять...
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/by-ru/arhitektor/publikacii/novosti/alutech-predstavit-dvukhurovnevyy-stend-na-vystavke-r-t/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        Место встречи новаторов: «АЛЮТЕХ» приглашает на выставку BAU 2023 в Мюнхене
                    </HeaderText>
                    <InfoText>
                        С 17 по 22 апреля в Мюнхене (Германия) пройдет одно из самых долгожданных и
                        значимых для мировой строительной индустрии мероприятий — Международная
                        строительная выставка BAU 2023. Инновационные технологии, новаторские идеи и
                        трендовые решения для архитектуры и строительства от самых прогрессивных и
                        успешных компаний со всего мира будут представлены под крышей
                        торгово-выставочного центра Messe München.
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/by-ru/arhitektor/publikacii/novosti/alutech-priglashaet-na-vystavku-bau-2023-v-myunkhene/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        "«АЛЮТЕХ» примет участие в Международной строительной выставке BATIMAT в
                        Париже"
                    </HeaderText>
                    <InfoText>
                        С 3 по 6 октября 2022 года в Париже (Франция) пройдет Международная
                        строительная выставка BATIMAT, которая соберет под крышей комплекса Paris
                        Porte de Versailles крупнейших игроков отрасли. В рамках мероприятия будут
                        демонстрироваться современные материалы и системы для строительства,
                        инновационные архитектурные и дизайнерские решения.
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/global/ru/dealer/publications/news/alutech-on-batimat-international-construction-trade-show/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        Группа компаний «АЛЮТЕХ» во второй раз примет участие в выставке BAU
                    </HeaderText>
                    <InfoText>
                        С 14 по 19 января 2019 года в Мюнхене (Германия) пройдет одно из наиболее
                        значимых мероприятий мировой строительной индустрии — Международная
                        строительная выставка BAU 2019. В 19 залах общей площадью порядка 200 000 м²
                        будут демонстрироваться передовые архитектурные решения, материалы и системы
                        для внутренней отделки зданий, а также для использования в строительстве
                        жилой и коммерческой недвижимости.
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/global/ru/dealer/publications/news/alutech-group-of-companies-will-take-part-in-bau-2019-fair/' />
                </div>
            </Info>
            <Image
                src='/announcements.jpg'
                alt='announcements'
            />
        </Container>
    );
};
