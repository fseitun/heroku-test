const mongoose = require('mongoose');

const collaboratorSchema = new mongoose.Schema({
  // TODO category as enum or managed by the server?
  categoria: { type: String, trim: true, required: [true, 'Por favor ingrese la categoría'] },
  nombre: { type: String, trim: true, required: [true, 'Por favor ingrese su nombre'] },
  apellido: { type: String, trim: true, required: [true, 'Por favor ingrese su apellido'] },
  telefono: { type: String, trim: true, required: [true, 'Por favor ingrese su teléfono'] },
  correoElectronico: { type: String, trim: true, required: [true, 'Por favor ingrese su correo'] },
  redesSociales: { facebook: String, twitter: String, instagram: String, linkedin: String, page: String },
  descripcion: { type: String, trim: true },
  informacionAdicional: { type: String, trim: true },
  imagenes: { type: String },
  relacionConLaEscuela: {
    type: String,
    enum: ['Abuela/o', 'Alumno/a', 'Docente', 'Madre / Padre', 'Maestro/a', 'Tia/o', 'Personal no docente'],
  },
});

module.exports = mongoose.model('Collaborator', collaboratorSchema);
