const collaborator = require('../models/collaborator');

async function createCollaborator(req, res) {
  const data = req.body;
  const newCollaborator = await collaborator.create(data);
  res.json({ newCollaborator });
}

async function getAllCollaborators(req, res) {
  const collaborators = await collaborator.find();
  res.json(collaborators);
}

async function getCollaboratorById(req, res) {
  const id = req.params.id;
  const foundCollaborator = await collaborator.findById(id);
  res.json({ foundCollaborator });
}

async function editCollaboratorById(req, res) {
  const id = req.params.id;
  const data = req.body;
  const updatedCollaborator = await collaborator.findByIdAndUpdate(id, data);
  res.json({ updatedCollaborator });
}

async function deleteCollaboratorById(req, res) {
  const id = req.params.id;
  const deletedCollaborator = await collaborator.findByIdAndDelete(id);
  res.json({ deletedCollaborator });
}

module.exports = { createCollaborator, getAllCollaborators, getCollaboratorById, editCollaboratorById, deleteCollaboratorById };
