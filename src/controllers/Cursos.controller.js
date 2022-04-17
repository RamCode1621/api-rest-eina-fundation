const ControllerCurso=[]
const pool=require('../database')


ControllerCurso.getCursos=async(req,res)=>{
    let query=`select id_curso as Id, grado as Grado, paralelo as Paralelo from Cursos;`

    pool.query(query)
    .then(result=>{
        res.status(200).json(result)
    })
    .catch(error=>{
        res.status(404).json(error)
    })
}

ControllerCurso.getCurso=async(req,res)=>{
    let id=req.params.id
    let query=`select id_curso as Id, grado as Grado, paralelo as Paralelo from Cursos where id_curso=${id};`

    pool.query(query)
    .then(result=>{
        res.status(200).json(result)
    })
    .catch(error=>{ 
        res.status(404).json(error)
    })
}

ControllerCurso.createCurso=async(req,res)=>{
    let {grado, paralelo}=req.body
    let query=`call eina_fundation.crearCurso('${grado}', '${paralelo}');`

    pool.query(query)
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(error=>{
        res.status(400).json(error)
    })
}

ControllerCurso.updateCurso=async(req,res)=>{
    let {id, grado, paralelo}=req.body
    let query=`call eina_fundation.editarCurso('${grado}', '${paralelo}', ${id});`

    
    pool.query(query)
    .then(result=>{
        res.status(201).json(result)
    })
    .catch(error=>{
        res.status(400).json(error)
    }) 
} 


module.exports=ControllerCurso