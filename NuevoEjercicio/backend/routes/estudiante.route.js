const EstudianteControllador = require('../controllers/estudiante.controllers')

const {verificarToken} = require('../middlewares/autentificacion.middleware')

const {verificarRol} = require('../middlewares/autorizacion.middleware')

module.exports = function (app) {
    app.get('/estudiantes',verificarToken, verificarRol('admin', 'visualizador'), EstudianteControllador.getAllEstudiantes);
    app.get('/estudiantes/:id',verificarToken, EstudianteControllador.getEstudianteById);
    app.post('/estudiantes', verificarToken, verificarRol('admin'), EstudianteControllador.createEstudiante);
    app.put('/estudiantes/:id', verificarToken, EstudianteControllador.updateEstudiante);
    app.delete('/estudiantes/:id', verificarToken, EstudianteControllador.deleteEstudiante)
}