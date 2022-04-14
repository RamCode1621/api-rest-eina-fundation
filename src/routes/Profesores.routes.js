const {Router}=require('express')
const router=Router()

const {
    getProfesores,
    getProfesor,
    createProfesor,
    updateProfesor,
}=require('../controllers/Profesores.controller')

router.get('/api/v1/get/profesores',getProfesores)
router.get('/api/v1/get/profesores/:id',getProfesor)
router.post('/api/v1/post/profesor',createProfesor)
router.put('/api/v1/put/profesor',updateProfesor)

module.exports=router