import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { paymentSelector } from 'store/reducers/paymentSlice';
import { formatNumber, totalOrder } from 'utils';
import './historyItemDetail.scss';

function HistoryItemDetail() {
    const param = useParams();
    const [historyItem, setHistoryItem] = useState();
    const payment = useSelector(paymentSelector);
    useEffect(() => {
        payment.history.forEach((item) => {
            if (item._id === param.id) {
                setHistoryItem(item);
            }
        });
    });
    return (
        <div className='container history-detail'>
            {historyItem ? (
                <>
                    <table className='table mb-5 info-customer'>
                        <thead>
                            <tr>
                                <th scope='col'>Name</th>
                                <th scope='col'>Phone</th>
                                <th scope='col'>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{historyItem.name}</td>
                                <td>{historyItem.phone}</td>
                                <td>{historyItem.address}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className='table info-order'>
                        <thead>
                            <tr>
                                <th scope='col'></th>
                                <th scope='col'>Name</th>
                                <th scope='col'>Quantity x Price</th>
                                <th scope='col'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {historyItem.cart.map((product) => (
                                <tr>
                                    <td>
                                        <img src={product.images} alt='' />
                                    </td>
                                    <td>{product.name}</td>
                                    <td>
                                        {product.quantity} x 
                                        <span className='currency'>€</span>
                                        {formatNumber(product.price)}
                                    </td>
                                    <td>
                                        <span className='currency'>€</span>
                                        {formatNumber(product.quantity * product.price)}
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colspan='2'></td>
                                <td>
                                    <h5>Total:</h5>
                                </td>
                                <td>
                                    <span className='currency'>€</span>
                                    {totalOrder(historyItem.cart)}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </>
            ) : null}
        </div>
    );
}

export default HistoryItemDetail;
