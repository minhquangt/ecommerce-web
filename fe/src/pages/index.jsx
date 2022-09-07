import { useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { userSelector } from 'store/reducers/userSlice';
import About from './About';
import Auth from './Auth';
import Cart from './Cart';
import Contact from './Contact';
import History from './History';
import HistoryItemDetail from './HistoryItemDetail';
import Home from './Home';
import NotFound from './NotFound';
import ProductItemDetail from './ProductItemDetail';
import ProductList from './ProductList';

function Pages() {
    const user = useSelector(userSelector);
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/product-list' element={<ProductList />}></Route>
            <Route path='/product-list/:id' element={<ProductItemDetail />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            {user && (
                <>
                    <Route path='/cart' element={<Cart />}></Route>
                    <Route path='/history' element={<History />}></Route>
                    <Route path='/history/:id' element={<HistoryItemDetail />}></Route>
                </>
            )}
            <Route path='/auth' element={<Auth />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
    );
}

export default Pages;
