const {Model }= require('./model');


function getAllFoundations() {
    return Model.find({})
}

function getFoundationById(id) {
    return Model.findById(id).populate({path: 'pets'})
}

function createFoundation(foundation) {
    return Model.create(foundation);
}

function updateFoundation(id, foundation) {
    return Model.findByIdAndUpdate(id, foundation);
}

function deleteFoundation(id) {
    return Model.findByIdAndDelete(id);
}


module.exports = {
    getAllFoundations,
    getFoundationById,
    createFoundation,
    updateFoundation,
    deleteFoundation
};