require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

//Route
const userRoute = require('./routes/userRouter');
const productRoute = require('./routes/productRoute');
const paymentRoute = require('./routes/paymentRoute');
const emailRoute = require('./routes/emailRoute');

try {
    mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB');
} catch (error) {
    console.log(error);
}

const PORT = process.env.PORT || 5000;

//Route
app.use('/api/user', userRoute);
app.use('/api/product', productRoute);
app.use('/api/payment', paymentRoute);
app.use('/api/sendEmail', emailRoute);

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});