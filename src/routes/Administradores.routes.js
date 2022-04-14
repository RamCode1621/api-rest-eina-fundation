const {Router}=require('express')
const router=Router()

const {
    getAdministradores,
    getAdministrador,
    createAdministrador,
    updateAdministrador,
}=require('../controllers/Administradores.controller')

router.get('/api/v1/get/administradores',getAdministradores)
router.get('/api/v1/get/administradores/:id',getAdministrador)
router.post('/api/v1/post/administrador',createAdministrador)
router.put('/api/v1/put/administrador',updateAdministrador)

module.exports=router