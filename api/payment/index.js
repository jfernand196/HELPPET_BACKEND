const { Router } = require('express');
const { handlerPayment } = require('./controller');
const router = Router();


router.post('/', handlerPayment);


module.exports = router;