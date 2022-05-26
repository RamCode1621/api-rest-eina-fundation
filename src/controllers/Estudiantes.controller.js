const ControllerEstudiante=[]
const pool=require('../database')
 

ControllerEstudiante.getEstudiantes=async(req,res)=>{
    let query=`select id_estudiante as Id, concat(apellidos," ",nombres) as Nombre, cedula as Cedula, telefono as Telefono, direccion as Direccion, correo as Correo from Estudiantes;`

    // console.log(req.route.path)
    pool.query(query)
    .then(result=>{
        res.status(200).json(
            // {
            // info:req.headers.authorization.infoUser,
            result
        // }
        )
    })
    .catch(error=>{
        res.status(404).json(error)
    })
}

ControllerEstudiante.getEstudiante=async(req,res)=>{
    let id=req.params.id
    let query=`select id_estudiante as Id, concat(apellidos," ",nombres) as Nombre, cedula as Cedula, telefono as Telefono, direccion as Direccion, correo as Correo from Estudiantes where id_estudiante=${id};`

    pool.query(query)
    .then(result=>{
        res.status(200).json(result)
    })
    .catch(error=>{ 
        res.status(404).json(error)
    })
}

ControllerEstudiante.createEstudiante=async(req,res)=>{
    let {nombres,apellidos,cedula,telefono,direccion,correo}=req.body
    let query=`call eina_fundation.crearEstudiante('${nombres}', '${apellidos}', '${cedula}', '${telefono}', '${correo}', '${direccion}');`

    pool.query(query)
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(error=>{
        res.status(400).json(error)
    })
}

ControllerEstudiante.updateEstudiante=async(req,res)=>{
    let {id,nombres,apellidos,cedula,telefono,direccion,correo}=req.body
    let query=`call eina_fundation.editarEstudiante(${id},'${nombres}', '${apellidos}', '${cedula}', '${telefono}', '${correo}', '${direccion}');`
    
    pool.query(query)
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(error=>{
        res.status(400).json(error)
    }) 
} 


module.exports=ControllerEstudiante