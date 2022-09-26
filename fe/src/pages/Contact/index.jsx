import axiosNormal from 'api/axiosNormal';
import axios from 'axios';
import Overlay from 'components/Overlay';
import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import './contact.scss';

function Contact() {
    const [loading, setLoading] = useState(false);
    const formikMess = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Required').min(4, 'Must be 4 characters or more'),
            email: Yup.string()
                .required('Required')
                .matches(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Please enter a valid email address'),
            message: Yup.string().required('Required').min(10, 'Must be 10 characters or more'),
        }),
        onSubmit: async (values, { resetForm }) => {
            setLoading(true);
            sendMessage(values);
            resetForm();
        },
    });

    const sendMessage = async (data) => {
        try {
            const res = await axiosNormal.post('/api/sendEmail', data);
            setLoading(false);
            alert(res.data.msg);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='contact'>
            <h1>CONTACT US</h1>
            <form onSubmit={formikMess.handleSubmit}>
                <input
                    type='text'
                    placeholder='Name'
                    name='name'
                    value={formikMess.values.name}
                    onChange={formikMess.handleChange}
                />
                {formikMess.errors.name && formikMess.touched.name && (
                    <p className='text-danger'> {formikMess.errors.name} </p>
                )}
                <input
                    type='text'
                    placeholder='Email'
                    name='email'
                    value={formikMess.values.email}
                    onChange={formikMess.handleChange}
                />
                {formikMess.errors.email && formikMess.touched.email && (
                    <p className='text-danger'> {formikMess.errors.email} </p>
                )}
                <textarea
                    cols='20'
                    rows='10'
                    placeholder='Message'
                    name='message'
                    value={formikMess.values.message}
                    onChange={formikMess.handleChange}
                ></textarea>
                {formikMess.errors.message && formikMess.touched.message && (
                    <p className='text-danger'> {formikMess.errors.message} </p>
                )}
                <button>SEND</button>
            </form>
            {loading && <Overlay />}
        </div>
    );
}

export default Contact;
