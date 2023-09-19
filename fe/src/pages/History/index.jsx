import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getHistory, paymentSelector } from 'store/reducers/paymentSlice';
import { userSelector } from 'store/reducers/userSlice';
import './history.scss';

function History() {
    const dispatch = useDispatch();
    const user = useSelector(userSelector);
    const payment = useSelector(paymentSelector);

    useEffect(() => {
        dispatch(getHistory(user));
    }, [dispatch]);
    return (
        <div className='container history'>
            <h1 className='text-center'>History</h1>
            {payment.history.length > 0 ? (
                <table className='table'>
                    <thead>
                        <tr>
                            <th scope='col'>#</th>
                            <th scope='col'>PaymentID</th>
                            <th scope='col'>Date of Purchase</th>
                            <th scope='col'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {payment.history.map((item, index) => (
                            <tr key={index}>
                                <th>{index + 1}</th>
                                <td>{item._id}</td>
                                <td>{item.createdAt.slice(0, 10)}</td>
                                <td>
                                    <Link to={`/history/${item._id}`}>View</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className='text-center' style={{ fontStyle: 'italic', marginTop: '20px' }}>
                    Your payment history is empty. Click the button below to make your purchase.
                </p>
            )}
        </div>
    );
}

export default History;
