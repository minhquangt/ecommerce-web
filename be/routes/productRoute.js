const router = require('express').Router();
const productCtrl = require('../controllers/productCtrl');
const auth = require('../middleware/auth');
const authAdmin = require('../middleware/authAdmin');

router.get('/favorite', productCtrl.getFavoriteProducts);
router.get('/', productCtrl.getAllProducts);
router.get('/:id', productCtrl.getOneProduct);
router.post('/filter', productCtrl.filterProduct);
router.post('/', auth, authAdmin, productCtrl.createProduct);
router.put('/:id', auth, authAdmin, productCtrl.updateProduct);
router.delete('/:id', auth, authAdmin, productCtrl.deleteProduct);

module.exports = router;