import FilterProduct from 'components/FIlterProduct';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterProducts, productSelector } from 'store/reducers/productSlice';
import './search.scss';

function Search({ isDisplay, setIsDisplay }) {
    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();
    const products = useSelector(productSelector);

    const search = async (e) => {
        setSearchTerm(e.target.value);
        dispatch(filterProducts(e.target.value));
    };

    const navigate = useNavigate();
    const redirectProductDetail = (product) => {
        setIsDisplay(false);
        navigate(`/product-list/${product._id}`);
    };

    return (
        <div className='search-component'>
            <div
                className={isDisplay ? 'overlay-modal' : 'overlay-modal hide'}
                onClick={() => setIsDisplay(false)}
            ></div>
            <div className={isDisplay ? 'search-modal go-on' : 'search-modal go-out'}>
                <div className='title'>
                    <p>Search</p>
                    <i className='fa-solid fa-xmark' onClick={() => setIsDisplay(false)}></i>
                </div>
                <p className='text-center endow'>
                    Spend €75,00 more and get a free By Vilain Skincare Solution 2-Pack!
                </p>
                <form className='input-icons'>
                    <i className='fa-solid fa-magnifying-glass icon'></i>
                    <input
                        type='search'
                        placeholder='Search our store...'
                        className='input-field'
                        value={searchTerm}
                        onChange={(e) => search(e)}
                    />
                </form>
                <div className='result-search'>
                    {searchTerm &&
                        products?.filter.length > 0 &&
                        products?.filter?.map((product) => (
                            <FilterProduct
                                key={product._id}
                                product={product}
                                redirectProductDetail={redirectProductDetail}
                            />
                        ))}
                    {searchTerm && products?.filter.length === 0 && (
                        <p className='notfound'>
                            Your search for "{searchTerm}" did not yield any results.
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Search;
