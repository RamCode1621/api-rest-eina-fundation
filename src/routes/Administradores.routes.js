const {Router}=require('express')
const router=Router()

const {
    getAdministradores,
    getAdministrador,
    createAdministrador,
    updateAdministrador,
}=require('../controllers/Administradores.controller')

const validateToken = require('../middlewares/validateToke')
const verifyPermission = require('../middlewares/verifyPermission')

router.get('/api/v1/get/administradores',validateToken,verifyPermission,getAdministradores)
router.get('/api/v1/get/administradores/:id',validateToken,verifyPermission,getAdministrador)
router.post('/api/v1/post/administrador',validateToken,verifyPermission,createAdministrador)
router.put('/api/v1/put/administrador',validateToken,verifyPermission,updateAdministrador)

module.exports=router