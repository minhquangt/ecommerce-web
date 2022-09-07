import './filterProduct.scss';

function FilterProduct({ product, redirectProductDetail }) {
    return (
        <div className='filter-product'>
            <div className='left'>
                <img
                    src={product.images}
                    alt={product.name}
                    onClick={() => redirectProductDetail(product)}
                />
            </div>
            <div className='right'>
                <p className='name' onClick={() => redirectProductDetail(product)}>
                    {product.name}
                </p>
                <p className='desc'>{product.description.substring(0, 50)}...</p>
                <p className='price'>{product.price}$</p>
            </div>
        </div>
    );
}

export default FilterProduct;
