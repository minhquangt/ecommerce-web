import Search from 'components/Search';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import './App.scss';
import MainPages from './pages';

function App() {
    const [isDisplay, setIsDisplay] = useState(false);
    return (
        <BrowserRouter>
            <div className='app'>
                <Navbar setIsDisplay={setIsDisplay} />
                <div className='content'>
                    <MainPages />
                </div>
                <Search isDisplay={isDisplay} setIsDisplay={setIsDisplay} />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
