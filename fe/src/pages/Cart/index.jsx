import Payment from 'components/Payment';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import { userSelector } from 'store/reducers/userSlice';
import { totalOrder } from 'utils';

import CartItem from '../CartItem';
import './cart.scss';

function Cart() {
    const user = useSelector(userSelector);

    const notice = () => {
        toast.success('Successful purchase. Thank you for trusting our purchase.', {
            position: 'top-center',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className='cart'>
            <ToastContainer />

            <h1>SHOPPING CART</h1>
            {user.cart?.length > 0 &&
                user.cart.map((item) => {
                    return <CartItem key={item._id} item={item} />;
                })}
            {user.cart?.length === 0 && <p>Your cart is currently empty.</p>}
            {user.cart?.length > 0 && (
                <div className='total-price text-center'>
                    <h5>SUBTOTAL</h5>
                    <p>
                        <span>€</span>
                        {totalOrder(user.cart)}
                    </p>
                    <button
                        type='button'
                        className='btn btn-primary'
                        data-bs-toggle='modal'
                        data-bs-target='#exampleModal'
                    >
                        PURCHASE
                    </button>
                </div>
            )}
            <Payment notice={notice} />
        </div>
    );
}

export default Cart;
