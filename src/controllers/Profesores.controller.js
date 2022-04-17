const ControllerProfesor=[]
const pool=require('../database')
const encryptPassword=require('../functions/bcrypt')


ControllerProfesor.getProfesores=async(req,res)=>{
    let query=`select id_profesor as Id, concat(apellidos," ",nombres) as Nombre, cedula as Cedula, telefono as Telefono, direccion as Direccion, titulacion as Titulo, correo as Correo, password as Password from Profesores;`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    })
}

ControllerProfesor.getProfesor=async(req,res)=>{
    let id=req.params.id
    let query=`select id_profesor as Id, concat(apellidos," ",nombres) as Nombre, cedula as Cedula, telefono as Telefono, direccion as Direccion, titulacion Titulo, correo as Correo, password as Password from Profesores where id_profesor=${id};`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{ 
        res.json(error)
    })
}

ControllerProfesor.createProfesor=async(req,res)=>{
    let {nombres,apellidos,cedula,telefono,direccion,correo,titulacion,password}=req.body
    // password=await encryptPassword(password)
    let query=`call eina_fundation.crearProfesor('${nombres}', '${apellidos}', '${cedula}', '${telefono}', '${correo}', '${direccion}', '${titulacion}', '${password}');`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    })
}

ControllerProfesor.updateProfesor=async(req,res)=>{
    let {id,nombres,apellidos,cedula,telefono,direccion,correo, titulacion, password}=req.body
    // password=await encryptPassword(password)
    let query=`call eina_fundation.editarProfesor(${id},'${nombres}', '${apellidos}', '${cedula}', '${telefono}', '${correo}', '${direccion}', '${titulacion}', '${password}');`
    
    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    }) 
}


module.exports=ControllerProfesor