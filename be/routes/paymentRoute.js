const router = require('express').Router();
const paymentCtrl = require('../controllers/paymentCtrl');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

router.get('/', authAdmin, paymentCtrl.getPayments);
router.post('/', auth, paymentCtrl.createPayment);

module.exports = router;