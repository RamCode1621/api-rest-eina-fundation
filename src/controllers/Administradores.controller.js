const ControllerAdministrador=[]
const pool=require('../database')
// const encryptPassword=require('../functions/bcrypt')


ControllerAdministrador.getAdministradores=async(req,res)=>{
    let query=`select id_administrador as Id, concat(apellidos," ",nombres) as Nombre, cedula as Cedula, telefono as Telefono, direccion as Direccion, correo as Correo, password as Password from Administradores;`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.status(404).json(error)
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
        res.status(404).json(error)
    })
}

ControllerAdministrador.createAdministrador=async(req,res)=>{
    let {nombres,apellidos,cedula,telefono,direccion,correo,password}=req.body
    // password=await encryptPassword(password)
    let query=`call eina_fundation.crearAdministrador('${nombres}', '${apellidos}', '${cedula}', '${telefono}', '${correo}', '${direccion}', '${password}');`

    pool.query(query)
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(error=>{
        res.status(400).json(error)
    })
}

ControllerAdministrador.updateAdministrador=async(req,res)=>{
    let {id,nombres,apellidos,cedula,telefono,direccion,correo, password}=req.body
    // password=await encryptPassword(password)
    let query=`call eina_fundation.editarAdministrador(${id},'${nombres}', '${apellidos}', '${cedula}', '${telefono}', '${correo}', '${direccion}', '${password}');`
    
    pool.query(query)
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(error=>{
        res.status(400).json(error)
    }) 
}


module.exports=ControllerAdministrador