import Search from 'components/Search';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Footer from 'components/Footer';
import Navbar from 'components/Navbar';
import './App.css';
import MainPages from './pages';

function App() {
    const [isDisplay, setIsDisplay] = useState(false);
    return (
        <BrowserRouter>
            <Navbar setIsDisplay={setIsDisplay} />
            <div className="content">
                <MainPages />
            </div>
            <Search isDisplay={isDisplay} setIsDisplay={setIsDisplay} />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
