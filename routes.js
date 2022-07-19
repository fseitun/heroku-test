const express = require('express');
const router = express.Router();
const {
  createCollaborator,
  getAllCollaborators,
  getCollaboratorById,
  editCollaboratorById,
  deleteCollaboratorById,
} = require('./controllers/collaborator');

router.post('/collaborators', createCollaborator);
router.get('/collaborators', getAllCollaborators);
router.get('/collaborators/:id', getCollaboratorById);
router.put('/collaborators/:id', editCollaboratorById);
router.delete('/collaborators/:id', deleteCollaboratorById);

module.exports = router;
