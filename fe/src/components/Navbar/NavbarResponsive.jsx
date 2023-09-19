import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { closeMenu, openSearch } from 'store/reducers/menuSlice';
import { logoutUser, userSelector } from 'store/reducers/userSlice';

const NavbarResponsive = () => {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCloseMenu = () => {
        dispatch(closeMenu());
    };
    const userLogout = () => {
        localStorage.removeItem('isLogin');
        dispatch(logoutUser());
        handleCloseMenu();
        navigate('/');
    };
    const login = () => {
        return (
            <NavLink to='/auth' onClick={handleCloseMenu}>
                <i className='fa-solid fa-user'></i>
                <span>Login & Register</span>
            </NavLink>
        );
    };
    const logout = () => {
        return (
            <>
                <NavLink to='/history' onClick={handleCloseMenu}>
                    <i className='fa-solid fa-clock-rotate-left'></i>
                    <span>History</span>
                </NavLink>
                <button onClick={() => userLogout()} className='btn-logout'>
                    <i className='fa-solid fa-arrow-right-from-bracket'></i>
                    <span>Logout</span>
                </button>
                <NavLink to='/cart' onClick={handleCloseMenu}>
                    <i className='fas fa-shopping-cart'></i>
                    <span>Cart - </span>
                    <span>{user.cart ? user.cart.length : 0}</span>
                </NavLink>
            </>
        );
    };
    const handleOpenSearch = () => {
        dispatch(openSearch());
        handleCloseMenu();
    };
    return (
        <div className='navbar-responsive'>
            <NavLink to='/' onClick={handleCloseMenu}>
                Home
            </NavLink>
            <NavLink to='/product-list' onClick={handleCloseMenu}>
                Products
            </NavLink>
            <NavLink to='/about' onClick={handleCloseMenu}>
                About us
            </NavLink>
            <NavLink to='/contact' onClick={handleCloseMenu}>
                Contact us
            </NavLink>
            <div className='search' onClick={handleOpenSearch}>
                <i className='fas fa-search'></i>
                <span className='search-text'>Search</span>
            </div>
            {!user ? login() : logout()}
        </div>
    );
};

export default NavbarResponsive;
