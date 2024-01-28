import { Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
const index = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage />} />
            </Routes>
        </>
    );
};

export default index;