const router = require('express').Router();
const emailCtrl = require('../controllers/emailCtrl');

router.post('/', emailCtrl.sendEmail);

module.exports = router;