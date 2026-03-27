import { Announcements } from '@/pages/Announcements/Announcements';
import { Gallery } from '@/pages/Gallery/Gallery';
import { History } from '@/pages/History/History';
import { Partnership } from '@/pages/Partnership/Partnership';
import { Results } from '@/pages/Results/Results';
import { Virtual } from '@/pages/Virtual/Virtual';

export const ROUTES = [
    { path: '/', element: <Announcements />, label: 'Анонсы' },
    { path: '/history', element: <History />, label: 'История' },
    { path: '/results', element: <Results />, label: 'Итоги' },
    { path: '/gallery', element: <Gallery />, label: 'Галерея' },
    { path: '/partnership', element: <Partnership />, label: 'Программа партнерства' },
    { path: '/virtual', element: <Virtual />, label: 'Виртуальная выставка' },
];
