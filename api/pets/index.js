const { Router} = require('express');
const {allPets,
    getPetById_,
    createPet_,
    updatePet_,
    deletePet_ } = require('./controller');
const {isAuthenticated} = require('../../middlewares/isAuthenticated');

const router = Router();

router.get('/', allPets);
router.get('/:id', getPetById_);
router.post('/create',isAuthenticated, createPet_);
router.put('/:id', updatePet_);
router.delete('/:id', deletePet_);


module.exports = router;