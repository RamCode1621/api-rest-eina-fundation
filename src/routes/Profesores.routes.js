const {Router}=require('express')
const router=Router()

const {
    getProfesores,
    getProfesor,
    createProfesor,
    updateProfesor,
}=require('../controllers/Profesores.controller')

const validateToken = require('../middlewares/validateToke')
const verifyPermission = require('../middlewares/verifyPermission')

router.get('/api/v1/get/profesores',validateToken,verifyPermission,getProfesores)
router.get('/api/v1/get/profesores/:id',validateToken,verifyPermission,getProfesor) 
router.post('/api/v1/post/profesor',validateToken,verifyPermission,createProfesor)
router.put('/api/v1/put/profesor',validateToken,verifyPermission,updateProfesor)

module.exports=router