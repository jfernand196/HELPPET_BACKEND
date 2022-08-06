const {Model} = require('./model');


function getAllPets() {
    return Model.find({}).populate({path: 'foundationId'})
}

function getPetById(id) {
    return Model.findById(id).populate({path: 'foundationId'});
}

function createPet(pet) {
    return Model.create(pet);
}

function updatePet(id, pet) {
    return Model.findByIdAndUpdate(id, pet);
}

function deletePet(id) {
    return Model.findByIdAndDelete(id);
}

module.exports = {
    getAllPets,
    getPetById,
    createPet,
    updatePet,
    deletePet
}