import { unwrapResult } from '@reduxjs/toolkit';
import Overlay from 'components/Overlay';
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { registerUser } from 'store/reducers/userSlice';
import * as Yup from 'yup';

function Register() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const formikRegister = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            confirmedPassword: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required').min(4, 'Must be 4 characters or more'),
            email: Yup.string()
                .required('Required')
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address'),
            password: Yup.string()
                .required('Required')
                .matches(
                    /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{4,15}$/,
                    'Password must be 4-15 characters and contain at least one letter, one number and a special character'
                ),
            confirmedPassword: Yup.string()
                .required('Required')
                .oneOf([Yup.ref('password'), null], 'Password must match'),
        }),
        onSubmit: async (values) => {
            setLoading(true);
            const resultAction = await dispatch(registerUser(values));
            const user = unwrapResult(resultAction);
            setLoading(false);
            if (user) {
                navigate('/');
            }
        },
    });

    return (
        <div id='registration-form'>
            <form onSubmit={formikRegister.handleSubmit}>
                <input
                    type='text'
                    id='name'
                    name='name'
                    placeholder='Enter your name'
                    value={formikRegister.values.name}
                    onChange={formikRegister.handleChange}
                />
                {formikRegister.errors.name && formikRegister.touched.name && (
                    <p className='text-danger'> {formikRegister.errors.name} </p>
                )}
                <input
                    type='text'
                    id='email'
                    name='email'
                    placeholder='Enter your email'
                    value={formikRegister.values.email}
                    onChange={formikRegister.handleChange}
                />
                {formikRegister.errors.email && formikRegister.touched.email && (
                    <p className='text-danger'> {formikRegister.errors.email} </p>
                )}
                <input
                    type='password'
                    id='password'
                    name='password'
                    value={formikRegister.values.password}
                    onChange={formikRegister.handleChange}
                    placeholder='Enter your password'
                />
                {formikRegister.errors.password && formikRegister.touched.password && (
                    <p className='text-danger'>{formikRegister.errors.password} </p>
                )}
                <input
                    type='password'
                    id='confirmedPassword'
                    name='confirmedPassword'
                    value={formikRegister.values.confirmedPassword}
                    onChange={formikRegister.handleChange}
                    placeholder='Confirm your password'
                />
                {formikRegister.errors.confirmedPassword &&
                    formikRegister.touched.confirmedPassword && (
                        <p className='text-danger'>{formikRegister.errors.confirmedPassword}</p>
                    )}
                <button type='submit' className='btn btn-outline-dark'>
                    Đăng ký
                </button>
            </form>
            {loading && <Overlay />}
        </div>
    );
}

export default Register;
