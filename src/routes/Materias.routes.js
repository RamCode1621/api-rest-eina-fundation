const {Router}=require('express')
const router=Router()

const {
    getMaterias,
    getMateria,
    createMateria,
    updateMateria,
}=require('../controllers/Materias.controller')

router.get('/api/v1/get/materias',getMaterias)
router.get('/api/v1/get/materias/:id',getMateria)
router.post('/api/v1/post/materia',createMateria)
router.put('/api/v1/put/materia',updateMateria)

module.exports=router