
import { Route, Routes } from 'react-router-dom';
import Navi from './components/navi/Navi';
import NotFoundPage from './components/NotFoundPage';
import HomePage from './components/HomePage';

function RootComponent() {
    return (
        <div className="container">

            <Navi />

            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/products" element={<HomePage />} />
                <Route path="*" element={<NotFoundPage />} />

            </Routes>
        </div>
    );
}

export default RootComponent;
