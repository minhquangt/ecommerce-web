import React, { useState } from 'react';
import './login.scss';
import Login from './Login';
import Register from './Register';

function Auth() {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <>
            <div id='login'>
                <i id='account' className='fa fa-users'></i>
                <div className='tabs'>
                    <h2
                        className={!isLogin ? 'tab active' : 'tab'}
                        onClick={() => setIsLogin(false)}
                    >
                        Register
                    </h2>
                    <h2 className={isLogin ? 'tab active' : 'tab'} onClick={() => setIsLogin(true)}>
                        Login
                    </h2>
                </div>
                {isLogin ? <Login /> : <Register />}
            </div>
        </>
    );
}

export default Auth;
