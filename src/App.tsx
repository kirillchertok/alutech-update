import './styles/global.scss';

import { Route, Routes } from 'react-router-dom';

import { Header } from './components/Header/Header';
import { Links } from './components/Links/Links';
import { Timer } from './components/Timer/Timer';
import { ROUTES } from './constants/routes';

function App() {
    return (
        <>
            <div id='main-field'>
                <Links />
                <Timer />
                <Header />
                <Routes>
                    {ROUTES.map(({ path, element }) => (
                        <Route
                            key={path}
                            path={path}
                            element={element}
                        />
                    ))}
                </Routes>
            </div>
        </>
    );
}

export default App;

