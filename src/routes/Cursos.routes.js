const {Router}=require('express')
const router=Router()

const {
    getCursos,
    getCurso,
    createCurso,
    updateCurso,
}=require('../controllers/Cursos.controller')

const validateToken = require('../middlewares/validateToke')
const verifyPermission = require('../middlewares/verifyPermission')

router.get('/api/v1/get/cursos',validateToken,verifyPermission,getCursos)
router.get('/api/v1/get/cursos/:id',validateToken,verifyPermission,getCurso)
router.post('/api/v1/post/curso',validateToken,verifyPermission,createCurso)
router.put('/api/v1/put/curso',validateToken,verifyPermission,updateCurso)

module.exports=router