const { Router } = require('express');
const { allFoundation,
    getFoundationById_,
    createFoundation_,
    updateFoundation_,
    deleteFoundation_ } = require('./controller');

const {isAuthenticated} = require('../../middlewares/isAuthenticated');

const router = Router();


router.get('/', allFoundation);
router.get('/:id', getFoundationById_);
router.post('/create',isAuthenticated, createFoundation_);
router.put('/',isAuthenticated, updateFoundation_);
router.delete('/:id', deleteFoundation_);

module.exports = router;