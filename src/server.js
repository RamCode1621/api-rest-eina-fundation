const { urlencoded } = require('express')
const express =require('express')
const morgan=require('morgan')
const cors=require('cors')
// const pool=require('./database')

const uri=process.env.URI_FRONT

// Initializations
const app=express() 


// Sttings
app.use(express.json())
app.use(express.urlencoded({extended:false})) 
app.use(morgan('dev'))   

// Middlewares

app.use(function(req, res, next){ 
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS,PATCH');
    res.header('Access-Control-Allow-Headers','Content-Type,Origin,Accept,X-Requested-With, Access-Control-Request-Method,Access-Control-Request-Headers,cedula,authorization,typeuser');
    next(); 
})

//  Routes 
app.use(require('./routes/Estudiantes.routes')) 
app.use(require('./routes/Profesores.routes'))
app.use(require('./routes/Administradores.routes'))
app.use(require('./routes/Cursos.routes'))
app.use(require('./routes/Materias.routes'))
app.use(require('./routes/Calificaciones.routes'))
app.use(require('./routes/Sesiones.routes'))

module.exports=app