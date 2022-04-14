const express =require('express')
const morgan=require('morgan')
// const pool=require('./database')
const uri=process.env.URI_FRONT

// Initializations
const app=express() 


// Sttings
app.use(express.json())
app.use(morgan('dev')) 

// Middlewares
app.use(function(req, res, next){
    res.header('Access-Control-Allow-Origin','127.0.0.1:8000');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
})

//  Routes
app.use(require('./routes/Estudiantes.routes')) 
app.use(require('./routes/Profesores.routes'))
app.use(require('./routes/Administradores.routes'))
app.use(require('./routes/Cursos.routes'))
app.use(require('./routes/Materias.routes'))
app.use(require('./routes/Calificaciones.routes'))

module.exports=app