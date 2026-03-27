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
                        "В ритме инноваций: итоги участия «АЛЮТЕХ» на выставке MosBuild 2025 в
                        Москве"
                    </HeaderText>
                    <InfoText>
                        С 1 по 4 апреля Группа компаний «АЛЮТЕХ» принимала участие в 30‑й
                        Международной строительно-интерьерной выставке MosBuild — крупнейшем событии
                        в России и СНГ в своей отрасли, которое состоялось в Москве. В выставке
                        приняли участие 1 300 производителей и поставщиков из 20 стран. Мероприятие
                        посетили более 80 тысяч человек — абсолютный рекорд за всю историю
                        проведения MosBuild.
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/cis-ru/korporativnyy-klient/publikacii/novosti/v-ritme-innovatsiy-itogi-uchastiya-alutech-na-vystavke-mosbuild-2025-v-moskve/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        Инновации, комплексные решения, качество: «АЛЮТЕХ» представил фирменный
                        павильон на выставке KazBuild 2024
                    </HeaderText>
                    <InfoText>
                        В начале сентября в Алматы прошло крупное событие, которого с нетерпением
                        ждали профессионалы сферы строительства — 31-я Казахстанская Международная
                        строительная и интерьерная выставка KazBuild 2024. Крупнейшее в Казахстане
                        отраслевое мероприятие собрало 316 компаний из 26 стран, включая Германию,
                        Россию, Турцию, Индию, Испанию, Канаду и другие. Партнером выставки выступил
                        Китай. Уникальными посетителями KazBuild стали почти 8 тысяч специалистов.
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/by-ru/diler-rva/publikacii/novosti/alutech-predstavil-firmennyy-pavilon-na-vystavke-kazbuild-2/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        "Масштабно, эффектно, продуктивно: «АЛЮТЕХ» принял участие в выставке R+T
                        2024"
                    </HeaderText>
                    <InfoText>
                        Выставка R+T 2024, вернувшаяся после шестилетнего перерыва в offline-формат,
                        продемонстрировала внушительную статистику: одно из важнейших мероприятий в
                        сфере роллетных систем, ворот и солнцезащитных конструкций посетило более 60
                        тысяч профессионалов отрасли, а свои стенды представили 1020
                        компаний-производителей из 43 стран.
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/by-ru/arhitektor/publikacii/novosti/alutech-prinyal-uchastie-v-vystavke-r-t-2024/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        Симбиоз эстетики и практичности: экспозиция «АЛЮТЕХ» стала лучшей на
                        выставке «АРХ Москва»
                    </HeaderText>
                    <InfoText>
                        В конце мая в Гостином дворе состоялась XXIX Международная выставка-форум
                        архитектуры и дизайна «АРХ Москва» — одно из самых знаковых отраслевых
                        событий в России. Признанный авторитет выставки, из года в год собирающей
                        под одной крышей ве��ущих игроков рынка, был подтвержден и статистикой 2024
                        года: павильоны здесь представили 224 экспонента из 8 стран, мероприятие
                        посетили более 36 000 человек.
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/by-ru/arhitektor/publikacii/novosti/ekspozitsiya-alutech-stala-luchshey-na-vystavke-arkh-moskva/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        «АЛЮТЕХ» в «Движении»: Группа компаний приняла участие в главном форуме по
                        девелопменту и продажам недвижимости
                    </HeaderText>
                    <InfoText>
                        С 18 по 21 июня в живописном горном курорте «Роза Хутор» в Сочи прошел
                        пятый, юбилейный форум недвижимости «Движение». На четыре дня событие стало
                        центром притяжения для ведущих архитекторов, застройщиков и градостроителей,
                        предоставив уникальную платформу для обсуждения облика современных городов и
                        обмена новыми идеями. Мероприятие объединило 6000 участников, среди которых
                        были делегаты из стран СНГ, Турции, Индонезии и ОАЭ.
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/cis-ru/arhitektor/publikacii/novosti/alutech-v-dvizhenii/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        «АЛЮТЕХ» принял участие в выставке GlassBuild America 2023 в Атланте
                    </HeaderText>
                    <InfoText>
                        Масштабно, зрелищно, продуктивно. Именно так, с размахом, в начале ноября в
                        20-ый юбилейный раз в Атланте прошла выставка GlassBuild America. Во
                        Всемирном конгресс-центре Джорджии собрались крупнейшие производители
                        стекла, поставщики фасадных и оконно-дверных систем, оборудования и
                        программного обеспечения. Всего — около 500 экспозиций от
                        компаний-представителей строительной отрасли из 65 стран от Азии до Южной
                        Америки.
                    </InfoText>
                    <MoreInfo link='https://alutech.moscow/news/20296-alyutekh-prinyal-uchastie-v-vystavke-glassbuild-america-2023-v-atlante/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        Бренд с международным характером: «АЛЮТЕХ» принял участие в крупнейшей
                        строительной выставке BAU в Мюнхене
                    </HeaderText>
                    <InfoText>
                        Яркое, масштабное, захватывающее. Таким было возвращение Международной
                        строительной выставки BAU после четырехлетнего перерыва. Долгожданный форум
                        прошел с 17 по 22 апреля в Мюнхене (Германия). Инновационные технологии,
                        новаторские идеи и трендовые решения для архитектуры и строительства от 2260
                        экспонентов из 49 стран были представлены под крышей торгово-выставочного
                        центра Messe München. За 6 дней выставку посетило 190 000 человек.
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/global/ru/dealer/publications/video/alutech-at-the-largest-construction-trade-fair-bau-in-munich/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        "Группа компаний «АЛЮТЕХ» на Международной строительной выставке BATIMAT в
                        Париже — подводим итоги"
                    </HeaderText>
                    <InfoText>
                        4 дня. 1300 участников. 700 спикеров. 100 презентаций... С 3 по 6 октября
                        2022 года в Париже прошла Международная строительная выставка BATIMAT,
                        объединившая на площадке комплекса Paris Porte de Versailles крупнейших
                        игроков отрасли.
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/global/ru/dealer/publications/news/alutech-group-at-batimat-international-trade-show-in-paris/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        Более 1,5 тысячи человек посетили экспозицию «АЛЮТЕХ» на выставке BAU в
                        Мюнхене
                    </HeaderText>
                    <InfoText>
                        С 14 по 19 января в Мюнхене (Германия) прошел Международный строительный
                        форум BAU 2019. 2 250 участников из 45 стран представили свои самые успешные
                        решения и инновационные разработки в выставочном зале площадью 200 тыс. м².
                        Общее количество посетителей мероприятия превысило 250 тыс. человек из 150
                        государств. В лидерах по количеству гостей — страна-организатор Германия,
                        Австрия, Италия, Швейцария, Китай и Россия.
                    </InfoText>
                    <MoreInfo link='https://alutech.by/novosti-i-akcii/bolee-1-5-tysyachi-chelovek-posetili-ekspozitsiyu-alyutekh-na-vystavke-bau-v-myunkhene/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        Уверенный шаг за океан: Группа компаний «АЛЮТЕХ» приняла участие в
                        международной строительной выставке New York Build 2018
                    </HeaderText>
                    <InfoText>
                        19-20 марта в Нью-Йорке проходила международная строительная выставка New
                        York Build 2018. Группа компаний «АЛЮТЕХ» приняла участие в данном
                        мероприятии совместно со своим партнером — компанией Avrams Inc. (Нью-Йорк).
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/cis-ru/chastnyy-domovladelec/publikacii/novosti/vystavka-new-york-build-2018/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        Расширяя горизонты: Группа компаний «АЛЮТЕХ» приняла участие в международной
                        строительной выставке WorldBuild Tashkent 2018 в Узбекистане
                    </HeaderText>
                    <InfoText>
                        Группа компаний «АЛЮТЕХ» совместно со своим официальным партнером в
                        Узбекистане — компанией TIMCO — приняла участие в крупной строительной
                        выставке WorldBuild Tashkent 2018/UzBuild Tashkent. Экспонентами данного
                        масштабного мероприятия стали более 170 ведущих производителей строительных
                        и интерьерных материалов, инструментов и оборудования из 24 стран мира:
                        Австрии, Азербайджана, Бельгии, Великобритании, Германии, Дании, Индии,
                        Испании, США, ОАЭ, России и др.
                    </InfoText>
                    <MoreInfo link='https://alutech-group.com/ru-ru/chastnyy-domovladelec/publikacii/novosti/alutech-prinyala-uchastie-v-mezhdunarodnoy-stroitelnoy-vystavke-v-uzbekistane/' />
                </div>

                <div className={styles.block}>
                    <HeaderText>
                        Выставка R+T Stuttgart 2015: «АЛЮТЕХ» - один из пяти крупнейших участников
                    </HeaderText>
                    <InfoText>
                        С 24 по 28 февраля 2015 года в Штутгарте (Германия) собрались крупнейшие
                        производители роллетных, воротных и солнцезащитных систем Европы и мира. Как
                        стало известно, «АЛЮТЕХ» была единственным участником из СНГ. По
                        масштабности экспозиции компания вошла в топ-5 экспонентов.
                    </InfoText>
                    <MoreInfo link='https://alutech.by/novosti-i-akcii/vystavka-r-t-stuttgart-2015-alyutekh-odin-iz-pyati-krupneyshikh-uchastnikov/' />
                </div>
            </Info>
            <Image
                src='/results.jpg'
                alt='results'
            />
        </Container>
    );
};
