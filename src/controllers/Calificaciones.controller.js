const ControllerCalificacion=[]
const pool=require('../database')


ControllerCalificacion.getCalificaciones=async(req,res)=>{
    console.log(req.headers)
    // try {
        let query
        let {cedula, typeuser} =req.headers

        if(cedula){
            if(typeuser==='administrador'){
                query=`select * from view_all_calificaciones`;  
            }else{
                query=`select * from view_all_calificaciones where CedulaProfesor=${cedula} and Habilitado=true;`
            }
        }else{
            res.json({message:'No se ha enviado la cedula o no es valida.'})
        }

        pool.query(query) 
        .then(result=>{ 
            res.status(200).json(result)
        })
        .catch(error=>{
            res.status(404).json(error)
        })
    // } catch (error) {
    //     res.status(500).json(error)
    // }
}

ControllerCalificacion.getCalificacion=async(req,res)=>{
    let id=req.params.id
    let query=`select * from view_all_calificaciones where Id=${id};`

    pool.query(query)
    .then(result=>{
        res.status(200).json(result)
    })
    .catch(error=>{ 
        res.status(404).json(error)
    })
}

ControllerCalificacion.createCalificacion=async(req,res)=>{
    let {idEstudiante,idCurso,idProfesor,idMateria}=req.body
    let query=`call eina_fundation.crearCalificacion(${idEstudiante},${idCurso},${idProfesor},${idMateria});`

    pool.query(query)
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(error=>{
        res.status(400).json(error)
    })
}

ControllerCalificacion.updateCalificacion=async(req,res)=>{
    let {id, parametro, valorCalificacion,valorConducta}=req.body
    let query=`call eina_fundation.editarCalificacion(${id},'${parametro}',${valorCalificacion},'${valorConducta}');`
    console.log(req.body)
    pool.query(query)
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(error=>{
        res.status(400).json(error)
    }) 
} 


module.exports=ControllerCalificacion