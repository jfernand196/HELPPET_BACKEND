const { default: mongoose } = require('mongoose');
const {
    getAllFoundations,
    getFoundationById,
    createFoundation,
    updateFoundation,
    deleteFoundation
} = require('./service');

async function allFoundation(req, res) {
  
     const getAllFoundations_ = await getAllFoundations();
        res.status(200).json(getAllFoundations_);

}

async function getFoundationById_(req, res) {
    const id = req.params.id;
    const getFoundationById_ = await getFoundationById(id);
    res.status(200).json(getFoundationById_);
}

async function createFoundation_(req, res) {
    const {name} = req.body;
    console.log("req.user", req.user.id)
    const {id, email} = req.user;
    const input = {
        name: name,
        foundationId: id,
        // foundationId: mongoose.Types.ObjectId('62e72f66d45af1689a31ef81')
    }
    const createFoundation_ = await createFoundation(input);
    
    req.body.foundId = createFoundation_.id;
    console.log("req.body", req.body)
    res.status(201).json(createFoundation_);
}

async function updateFoundation_(req, res) {
    const id = req.body.idFoundation;
    const foundation = req.body;
    const updateFoundation_ = await updateFoundation(id, foundation);
    res.status(200).json(updateFoundation_);
}

async function deleteFoundation_(req, res) {
    const id = req.params.id;
    const deleteFoundation = await deleteFoundation(id);
    res.status(200).json(deleteFoundation);
}


module.exports = {
    allFoundation,
    getFoundationById_,
    createFoundation_,
    updateFoundation_,
    deleteFoundation_
}