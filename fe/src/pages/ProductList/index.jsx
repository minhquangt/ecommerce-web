import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, productSelector } from '../../store/reducers/productSlice';
import ProductItem from '../ProductItem';
import './productList.scss';

function ProductList() {
    const products = useSelector(productSelector);
    const [visible, setVisible] = useState(3);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllProducts());
    }, [dispatch]);

    const showMoreItems = () => {
        setVisible((prevState) => prevState + 3);
    };

    return (
        <div className='products'>
            <div className='row'>
                <div className='col-3 intro'>
                    <h1>By Vilain</h1>
                    <p>
                        We provide professional men’s grooming products that give you a satisfying
                        styling performance time after time. By Vilain has revolutionized the hair
                        styling game with quality ingredients and consistently excellent
                        performance, and you’ll find our products all over the world: from London to
                        Singapore.
                    </p>
                    <p>
                        We’re proud of having customers in over 120 countries and for providing the
                        go-to products for professional salons worldwide.
                    </p>
                    <p>
                        Our range of professional hair products is formulated in collaboration
                        between our Danish R&D team and professional hairdressers – delivering the
                        high-caliber products that By Vilain is known for.
                    </p>
                </div>
                <div className='col-9 product-list'>
                    <div className='row'>
                        {products.all.slice(0, visible).map((product) => (
                            <div className='col-4' key={product._id}>
                                <ProductItem product={product} />
                            </div>
                        ))}
                    </div>
                    {visible >= products.all.length ? null : (
                        <div className='text-center'>
                            <button onClick={showMoreItems} className='mt-5 btn btn-outline-dark'>
                                Load more
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ProductList;
