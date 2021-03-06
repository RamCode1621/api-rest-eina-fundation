const jwt =require("jsonwebtoken")
// 54.152.168.242:3333
function validateToken(req, res, next){
    let token=req.headers.authorization

    if(token){
        jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
            if(err){
                // console.log("No tiene permisos")
                res.status(401).json({
                    message:'Token inválido'
                }) 
            }else{
                // console.log(decoded)
                next()
            }
        })
    }else{
        // console.log(req.headers)
        // console.log("No tiene permisos")
        res.status(401).json({
            message:'Token no proveído'
        })
    }
}

module.exports=validateToken