const mysql=require('mysql')
const {promisify}=require('util')

const pool=mysql.createPool({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE_SCHEMA
}) 

pool.getConnection((err,connection)=>{
    if(err){
        if(err.code==='PROTOCOL_CONNECTION_LOST'){
            console.error('Database connection was closed.')
        }
        if(err.code==='ECONNREFUSED'){
            console.error('Database connection was refused.')
        }
    }

    if(connection) connection.release()
    console.log('DB is connected')
    return
})  
 
pool.query=promisify(pool.query)

module.exports=pool