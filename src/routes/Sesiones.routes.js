const {Router}=require('express')
const router=Router()

const {authentication}=require('../controllers/Auth.controller')

router.post('/api/v1/post/auth',authentication)

module.exports=router