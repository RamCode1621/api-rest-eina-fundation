const {Router}=require('express')
const router=Router()

const {
    getCalificaciones,
    getCalificacion,
    createCalificacion,
    updateCalificacion
}=require('../controllers/Calificaciones.controller')

const validateToken = require('../middlewares/validateToke')
const verifyPermission = require('../middlewares/verifyPermission')

router.get('/api/v1/get/calificaciones',validateToken,verifyPermission,getCalificaciones)
router.get('/api/v1/get/calificaciones/:id',validateToken,verifyPermission,getCalificacion)
router.post('/api/v1/post/calificacion',validateToken,verifyPermission,createCalificacion)
router.put('/api/v1/put/calificacion',validateToken,verifyPermission,updateCalificacion)

module.exports=router