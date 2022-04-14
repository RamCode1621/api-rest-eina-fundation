const ControllerMateria=[]
const pool=require('../database')


ControllerMateria.getMaterias=async(req,res)=>{
    let query=`select id_materia as Id, nombre_materia as Materia from Materias;`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    })
}

ControllerMateria.getMateria=async(req,res)=>{
    let id=req.params.id
    let query=`select id_materia as Id, nombre_materia as Materia from Materias where id_materia=${id};`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{ 
        res.json(error)
    })
}

ControllerMateria.createMateria=async(req,res)=>{
    let {materia}=req.body
    let query=`call eina_fundation.crearMateria('${materia}');`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    })
}

ControllerMateria.updateMateria=async(req,res)=>{
    let {id, materia}=req.body
    let query=`call eina_fundation.editarMateria('${materia}', ${id});`


    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    }) 
} 


module.exports=ControllerMateria