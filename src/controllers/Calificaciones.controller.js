const ControllerCalificacion=[]
const pool=require('../database')


ControllerCalificacion.getCalificaciones=async(req,res)=>{
    let query=`select * from view_all_calificaciones;`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    })
}

ControllerCalificacion.getCalificacion=async(req,res)=>{
    let id=req.params.id
    let query=`select * from view_all_calificaciones where Id=${id};`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{ 
        res.json(error)
    })
}

ControllerCalificacion.createCalificacion=async(req,res)=>{
    let {idEstudiante,idCurso,idProfesor,idMateria}=req.body
    let query=`call eina_fundation.crearCalificacion(${idEstudiante},${idCurso},${idProfesor},${idMateria});`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    })
}

ControllerCalificacion.updateCalificacion=async(req,res)=>{
    let {id, parametro, valorCalificacion,valorConducta}=req.body
    let query=`call eina_fundation.editarCalificacion(${id},'${parametro}',${valorCalificacion},'${valorConducta}');`

    
    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    }) 
} 


module.exports=ControllerCalificacion