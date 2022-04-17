const {Router}=require('express')
const router=Router()

const {authentication}=require('../controllers/Auth.controller')

router.post('/api/v1/post/auth',authentication)
router.get('/api',(req,res)=>{
    res.send('Hola mundo')
})
module.exports=router