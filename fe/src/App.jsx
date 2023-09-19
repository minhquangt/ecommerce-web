import Search from 'components/Search';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import './App.scss';
import MainPages from './pages';

function App() {
    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar />
                <div className='content'>
                    <MainPages />
                </div>
                <Search />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
