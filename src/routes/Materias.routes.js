const {Router}=require('express')
const router=Router()

const {
    getMaterias,
    getMateria,
    createMateria,
    updateMateria,
}=require('../controllers/Materias.controller')

const validateToken = require('../middlewares/validateToke')
const verifyPermission = require('../middlewares/verifyPermission')

router.get('/api/v1/get/materias',validateToken,verifyPermission,getMaterias)
router.get('/api/v1/get/materias/:id',validateToken,verifyPermission,getMateria)
router.post('/api/v1/post/materia',validateToken,verifyPermission,createMateria)
router.put('/api/v1/put/materia',validateToken,verifyPermission,updateMateria)

module.exports=router