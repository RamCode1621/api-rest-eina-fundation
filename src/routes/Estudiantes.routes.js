const {Router}=require('express')
const router=Router()

const {
    getEstudiantes,
    getEstudiante,
    createEstudiante,
    updateEstudiante,
}=require('../controllers/Estudiantes.controller')

router.get('/api/v1/get/estudiantes',getEstudiantes)
router.get('/api/v1/get/estudiantes/:id',getEstudiante)
router.post('/api/v1/post/estudiante',createEstudiante)
router.put('/api/v1/put/estudiante',updateEstudiante)

module.exports=router