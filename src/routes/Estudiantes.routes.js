const {Router}=require('express')
const router=Router()

const {
    getEstudiantes,
    getEstudiante,
    createEstudiante,
    updateEstudiante,
}=require('../controllers/Estudiantes.controller')

const validateToken = require('../middlewares/validateToke')
const verifyPermission = require('../middlewares/verifyPermission')

router.get('/api/v1/get/estudiantes',validateToken,verifyPermission,getEstudiantes)
router.get('/api/v1/get/estudiantes/:id',validateToken,verifyPermission,getEstudiante)
router.post('/api/v1/post/estudiante',validateToken,verifyPermission,createEstudiante)
router.put('/api/v1/put/estudiante',validateToken,verifyPermission,updateEstudiante)

module.exports=router