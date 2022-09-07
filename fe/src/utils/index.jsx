export const formatNumber = num => {
    return (num + '').replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
};

export const totalOrder = order => {
    return formatNumber(
        order.reduce((item1, item2) => {
            return item1 + item2.quantity * item2.price;
        }, 0)
    );
};
