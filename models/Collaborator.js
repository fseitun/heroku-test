const mongoose = require('mongoose');

const CollaboratorSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: [true, 'Por favor ingrese el nombre del colaborador'],
    maxlength: [100, 'El nombre del colaborador no puede tener más de 100 caracteres'],
  },
  phone: {
    type: Number,
    required: [true, 'Por favor ingrese el teléfono del colaborador'],
  },
});

module.exports = mongoose.model('Collaborator', CollaboratorSchema);
