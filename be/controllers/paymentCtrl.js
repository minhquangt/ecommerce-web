const Payments = require('../models/paymentModel');
const Products = require('../models/productModel');
const Users = require('../models/userModel');

const paymentCtrl = {
    getPayments: async(req, res) => {
        try {
            const payments = await Payments.find();
            res.json(payments);
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    createPayment: async(req, res) => {
        try {
            const user = await Users.findById(req.user.id);
            if (!user)
                return res.status(400).json({ msg: 'User does not exist.' });

            const { name, phone, address } = req.body;

            const { _id, cart } = user;

            const newPayment = new Payments({
                user_id: _id,
                name,
                phone,
                address,
                cart,
            });

            cart.filter(item => {
                return sold(item._id, item.quantity, item.sold, item.amount);
            });
            console.log(cart);

            await newPayment.save();
            res.json({ msg: 'Payment Succes!' });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
};

const sold = async(id, quantity, oldSold, oldAmount) => {
    const prod = await Products.findOneAndUpdate({ _id: id }, {
        sold: quantity + oldSold,
        amount: oldAmount - quantity,
    }, { new: true });
    return prod;
};

module.exports = paymentCtrl;