const whitelistProfesor =[
        `/api/v1/get/calificaciones`,
        `/api/v1/get/calificaciones/:id`,
        `/api/v1/put/calificacion`,
        `/api/v1/get/cursos`,
        `/api/v1/get/cursos/:id`,
        `/api/v1/get/estudiantes`,
        `/api/v1/get/estudiantes/:id`,
        `/api/v1/get/materias`,
        `/api/v1/get/materias/:id`
]



const verifyAccesToResource=(req)=>{
    
    if(whitelistProfesor.includes(req.route.path)){
        return true
    }else{
        return false
    }
}

function verifyPermission(req,res,next) {
    
    if(req.headers.authorization.infoUser.rol==='administrador'){   
       next() 
    }else if(req.headers.authorization.infoUser.rol==='profesor'){
        if(verifyAccesToResource(req)){
            next()
        }else{
            res.status(401).json({message:"Error: No tiene permisos para realizar esta acción"})
        }
    }else{
        res.status(500).json({message:"Error: No se reconoce el tipo de usuario"})
    }
}

module.exports = verifyPermission;