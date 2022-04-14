const ControllerCurso=[]
const pool=require('../database')


ControllerCurso.getCursos=async(req,res)=>{
    let query=`select id_curso as Id, grado as Grado, paralelo as Paralelo from Cursos;`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    })
}

ControllerCurso.getCurso=async(req,res)=>{
    let id=req.params.id
    let query=`select id_curso as Id, grado as Grado, paralelo as Paralelo from Cursos where id_curso=${id};`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{ 
        res.json(error)
    })
}

ControllerCurso.createCurso=async(req,res)=>{
    let {grado, paralelo}=req.body
    let query=`call eina_fundation.crearCurso('${grado}', '${paralelo}');`

    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    })
}

ControllerCurso.updateCurso=async(req,res)=>{
    let {id, grado, paralelo}=req.body
    let query=`call eina_fundation.editarCurso('${grado}', '${paralelo}', ${id});`

    
    pool.query(query)
    .then(result=>{
        res.json(result)
    })
    .catch(error=>{
        res.json(error)
    }) 
} 


module.exports=ControllerCurso