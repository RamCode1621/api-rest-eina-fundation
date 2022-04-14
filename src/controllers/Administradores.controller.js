const ControllerAdministrador=[]
const pool=require('../database')


ControllerAdministrador.getAdministradores=async(req,res)=>{
    let query=`select id_administrador as Id, concat(apellidos," ",nombres) as Nombre, cedula as Cedula, telefono as Telefono, direccion as Direccion, correo as Correo, password as Password from Administradores;`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    })
}

ControllerAdministrador.getAdministrador=async(req,res)=>{
    let id=req.params.id
    let query=`select id_administrador as Id, concat(apellidos," ",nombres) as Nombre, cedula as Cedula, telefono as Telefono, direccion as Direccion, correo as Correo, password as Password from Administradores where id_administrador=${id};`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{ 
        res.json(error)
    })
}

ControllerAdministrador.createAdministrador=async(req,res)=>{
    let {nombres,apellidos,cedula,telefono,direccion,correo,password}=req.body
    let query=`call eina_fundation.crearAdministrador('${nombres}', '${apellidos}', '${cedula}', '${telefono}', '${correo}', '${direccion}', '${password}');`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    })
}

ControllerAdministrador.updateAdministrador=async(req,res)=>{
    let {id,nombres,apellidos,cedula,telefono,direccion,correo, password}=req.body
    let query=`call eina_fundation.editarAdministrador(${id},'${nombres}', '${apellidos}', '${cedula}', '${telefono}', '${correo}', '${direccion}', '${password}');`
    
    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    }) 
}


module.exports=ControllerAdministrador