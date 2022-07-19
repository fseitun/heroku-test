const Collaborator = require('../models/Collaborator');

async function createCollaborator(req, res) {
  const data = req.body;
  const collaborator = await Collaborator.create(data);
  res.json({ collaborator });
}

async function getAllCollaborators(req, res) {
  const collaborators = await Collaborator.find();
  res.json(collaborators);
}

async function getCollaboratorById(req, res) {
  const id = req.params.id;
  const collaborator = await Collaborator.findById(id);
  res.json({ collaborator });
}

async function editCollaboratorById(req, res) {
  const id = req.params.id;
  const data = req.body;
  const collaborator = await Collaborator.findByIdAndUpdate(id, data);
  res.json({ collaborator });
}

async function deleteCollaboratorById(req, res) {
  const id = req.params.id;
  const collaborator = await Collaborator.findByIdAndDelete(id);
  res.json({ collaborator });
}

module.exports = { createCollaborator, getAllCollaborators, getCollaboratorById, editCollaboratorById, deleteCollaboratorById };
