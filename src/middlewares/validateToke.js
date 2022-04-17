import jwt from "jsonwebtoken"

function validateToken(req, res, next){
    const objectAuth=req.headers.authorization
    let auth=objectAuth.split(" ")
    auth=JSON.parse(objectAuth)
    req.headers.authorization=auth
   
    let token=auth.accessToken
    
    if(token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err){
                res.status(401).json({
                    message:'Token inválido'
                })
            }else{ 
                // req.decoded=decoded
                next()
            }
        })
    }else{
        res.status(401).json({
            message:'Token no proveído'
        })
    }
}

module.exports=validateToken