import { unwrapResult } from '@reduxjs/toolkit';
import Overlay from 'components/Overlay';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginUser } from 'store/reducers/userSlice';
import * as Yup from 'yup';

function Login() {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const formikLogin = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values) => {
            setLoading(true);
            const resultAction = await dispatch(loginUser(values));
            const user = unwrapResult(resultAction);
            setLoading(false);
            if (user) {
                navigate('/');
            }
        },
    });
    return (
        <div id='login-form'>
            <form onSubmit={formikLogin.handleSubmit}>
                <input
                    type='text'
                    id='email'
                    name='email'
                    placeholder='Enter your email'
                    value={formikLogin.values.name}
                    onChange={formikLogin.handleChange}
                />
                <input
                    type='password'
                    id='password'
                    name='password'
                    placeholder='Enter your password'
                    value={formikLogin.values.password}
                    onChange={formikLogin.handleChange}
                />
                <button type='submit' className='btn btn-outline-dark'>
                    Login
                </button>
            </form>
            {loading && <Overlay />}
        </div>
    );
}

export default Login;
