import axiosNormal from 'api/axiosNormal';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { addCart, userSelector } from 'store/reducers/userSlice';
import * as Yup from 'yup';

function Payment({ notice }) {
    const user = useSelector(userSelector);
    const dispatch = useDispatch();
    const formikCheckout = useFormik({
        initialValues: {
            name: '',
            phone: '',
            address: '',
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required')
                .min(3, 'Name must be at least 3 characters')
                .max(50, 'Name must be less than 50 characters'),
            phone: Yup.string()
                .required('Required')
                .matches(
                    /^(0?)(3[2-9]|5[6|8|9]|7[0|6-9]|8[0-6|8|9]|9[0-4|6-9])[0-9]{7}$/,
                    'Please enter a valid phone number'
                ),
            address: Yup.string().required('Required'),
        }),
        onSubmit: async (values) => {
            payment(values);
        },
    });
    const payment = async (info) => {
        try {
            await axiosNormal.post('/api/payment', info, {
                headers: { Authorization: user.accesstoken },
            });
            const cart = [];
            const apiRequest = 'product';
            dispatch(addCart({ user, cart, apiRequest }));
            notice();
        } catch (error) {
            alert(error.response.data.msg);
        }
    };
    return (
        <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'
        >
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel'>
                            Please fill in the information below
                        </h5>
                        <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                        ></button>
                    </div>
                    <div className='modal-body'>
                        <form onSubmit={formikCheckout.handleSubmit}>
                            <div className='mb-3'>
                                <label className='form-label'>Name</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='name'
                                    placeholder='Enter your name'
                                    value={formikCheckout.values.name}
                                    onChange={formikCheckout.handleChange}
                                />
                                {formikCheckout.errors.name && formikCheckout.touched.name && (
                                    <p className='text-danger'>{formikCheckout.errors.name} </p>
                                )}
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Phone Number</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='phone'
                                    placeholder='Enter your phone'
                                    value={formikCheckout.values.phone}
                                    onChange={formikCheckout.handleChange}
                                />
                                {formikCheckout.errors.phone && formikCheckout.touched.phone && (
                                    <p className='text-danger'>{formikCheckout.errors.phone}</p>
                                )}
                            </div>
                            <div className='mb-3'>
                                <label className='form-label'>Address</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    name='address'
                                    placeholder='Enter your address'
                                    value={formikCheckout.values.address}
                                    onChange={formikCheckout.handleChange}
                                />
                                {formikCheckout.errors.address &&
                                    formikCheckout.touched.address && (
                                        <p className='text-danger'>
                                            {formikCheckout.errors.address}
                                        </p>
                                    )}
                            </div>
                            <button
                                type='submit'
                                data-bs-dismiss='modal'
                                className='btn btn-success'
                            >
                                CHECK OUT
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Payment;
