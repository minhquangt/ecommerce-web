import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { closeMenu, menuSelector, toggleMenu } from 'store/reducers/menuSlice';
import { userSelector } from 'store/reducers/userSlice';
import logo from '../../assets/logo.png';
import { logoutUser } from '../../store/reducers/userSlice';
import NavbarResponsive from './NavbarResponsive';
import './navbar.scss';

function Navbar({ setIsDisplay }) {
    const user = useSelector(userSelector);
    const menu = useSelector(menuSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userLogout = () => {
        localStorage.removeItem('isLogin');
        dispatch(logoutUser());
        navigate('/');
    };

    const login = () => {
        return (
            <NavLink to='/auth'>
                <i className='fa-solid fa-user'></i>
                <span>Login & Register</span>
            </NavLink>
        );
    };
    const logout = () => {
        return (
            <>
                <NavLink to='/history'>
                    <i className='fa-solid fa-clock-rotate-left'></i>
                    <span>History</span>
                </NavLink>
                <button onClick={() => userLogout()} className='btn-logout'>
                    <i className='fa-solid fa-arrow-right-from-bracket'></i>
                    <span>Logout</span>
                </button>
                <NavLink to='/cart'>
                    <i className='fas fa-shopping-cart'></i>
                    <span>Cart - </span>
                    <span>{user.cart ? user.cart.length : 0}</span>
                </NavLink>
            </>
        );
    };

    return (
        <>
            <div className='navbar fixed-top'>
                <div className='left'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/product-list'>Products</NavLink>
                    <NavLink to='/about'>About us</NavLink>
                    <NavLink to='/contact'>Contact us</NavLink>
                </div>
                <div className='logo'>
                    <NavLink to='/' onClick={() => dispatch(closeMenu())}>
                        <img src={logo} alt='logo' />
                    </NavLink>
                </div>
                <div className='right'>
                    <div className='search' onClick={() => setIsDisplay(true)}>
                        <i className='fas fa-search'></i>
                        <span className='search-text'>Search</span>
                    </div>
                    {!user ? login() : logout()}
                </div>
                <i
                    className='fa-solid fa-bars menu'
                    onClick={() => {
                        dispatch(toggleMenu());
                    }}
                ></i>
            </div>
            {menu.isOpen && <NavbarResponsive />}
        </>
    );
}

export default Navbar;
