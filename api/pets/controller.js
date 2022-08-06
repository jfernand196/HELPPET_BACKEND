const {
  getAllPets,
  getPetById,
  createPet,
  updatePet,
  deletePet,
} = require("./service");

const mongoose = require("mongoose");

const FoundationModel = require("../foundations/model");

async function allPets(req, res) {
  const getAllPets_ = await getAllPets();
  res.status(200).json(getAllPets_);
}

async function getPetById_(req, res) {
  const id = req.params.id;
  const getPetById_ = await getPetById(id);
  res.status(200).json(getPetById_);
}

async function createPet_(req, res) {
    
  const { name, age, breed, color, weight, photo, idFoundation } = req.body;
  const findFoundation = await FoundationModel.Model.findById(idFoundation);
  
  
  const inputPet = {
    name: name,
    age: age,
    breed: breed,
    color: color,
    weight: weight,
    photo: photo,
    foundationId: idFoundation,
  };
  const createPet_ = await createPet(inputPet);
  console.log("createPet_", createPet_)
  findFoundation.pets.push(createPet_.id);
  console.log("findFoundation", findFoundation)
  await FoundationModel.Model.findByIdAndUpdate(idFoundation, findFoundation);
  res.status(201).json(createPet_);
}




async function updatePet_(req, res) {
  const id = req.params.id;
  const pet = req.body;
  const updatePet_ = await updatePet(id, pet);
  res.status(200).json(updatePet_);
}

async function deletePet_(req, res) {
  const id = req.params.id;
  const deletePet_ = await deletePet(id);
  res.status(200).json(deletePet);
}

module.exports = {
  allPets,
  getPetById_,
  createPet_,
  updatePet_,
  deletePet_,
};
