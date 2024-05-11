import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Products from '../pages/Products/Products';
import NotFound from '../pages/NotFound/NotFound'



const AppRoutes = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;