const {Router}=require('express')
const router=Router()

const {
    getCalificaciones,
    getCalificacion,
    createCalificacion,
    updateCalificacion
}=require('../controllers/Calificaciones.controller')

router.get('/api/v1/get/calificaciones',getCalificaciones)
router.get('/api/v1/get/calificaciones/:id',getCalificacion)
router.post('/api/v1/post/calificacion',createCalificacion)
router.put('/api/v1/put/calificacion',updateCalificacion)

module.exports=router