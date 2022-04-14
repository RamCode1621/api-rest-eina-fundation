const {Router}=require('express')
const router=Router()

const {
    getCursos,
    getCurso,
    createCurso,
    updateCurso,
}=require('../controllers/Cursos.controller')

router.get('/api/v1/get/cursos',getCursos)
router.get('/api/v1/get/cursos/:id',getCurso)
router.post('/api/v1/post/curso',createCurso)
router.put('/api/v1/put/curso',updateCurso)

module.exports=router