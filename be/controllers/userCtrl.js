const Users = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Payments = require('../models/paymentModel');

const userCtrl = {
    register: async(req, res) => {
        try {
            const { name, email } = req.body;

            // check email is already exist
            const user = await Users.findOne({ email });
            if (user)
                return res
                    .status(400)
                    .json({ msg: 'The email already exists.' });

            // Password Encryption
            const passwordHash = await bcrypt.hash(req.body.password, 10);
            const newUser = new Users({
                name,
                email,
                password: passwordHash,
            });

            // Save mongodb
            const saveUser = await newUser.save();

            // Then create jsonwebtoken to authentication
            const accesstoken = createAccessToken({ id: newUser._id });

            const { password, ...others } = saveUser._doc;
            res.json({...others, accesstoken });
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    login: async(req, res) => {
        try {
            const { email } = req.body;

            // check email is already exist
            const user = await Users.findOne({ email });
            if (!user)
                return res.status(400).json({ msg: 'User does not exist.' });

            // check password is correct
            const isMatch = await bcrypt.compare(
                req.body.password,
                user.password
            );
            if (!isMatch)
                return res.status(400).json({ msg: 'Incorrect password.' });

            // If login success , create access token and refresh token
            const accesstoken = createAccessToken({ id: user._id });

            const { password, ...others } = user._doc;
            res.json({...others, accesstoken });
        } catch (err) {
            return res.status(500).json({ msg: err.message });
        }
    },
    addCart: async(req, res) => {
        try {
            const user = await Users.findById(req.user.id);
            if (!user)
                return res.status(400).json({ msg: 'User does not exist.' });

            const newUser = await Users.findByIdAndUpdate(
                req.user.id, {
                    cart: req.body,
                }, { new: true }
            );

            return res.json(newUser.cart);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
    history: async(req, res) => {
        try {
            const paymentsHistory = await Payments.find({
                user_id: req.user.id,
            });

            res.json(paymentsHistory);
        } catch (error) {
            return res.status(500).json({ msg: error.message });
        }
    },
};

const createAccessToken = user => {
    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: '10h',
    });
};

module.exports = userCtrl;