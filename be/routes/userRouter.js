const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl');
const auth = require('../middleware/auth');

router.get('/history', auth, userCtrl.history);
router.post('/register', userCtrl.register);
router.post('/login', userCtrl.login);
router.put('/addcart', auth, userCtrl.addCart);

module.exports = router;