function doQuery(connection,query, callback) {
    connection.query(query,(error,rows)=>{
        if(!error){
            callback(rows) 
            connection.end()
        }else{
            throw error
        }
    })
    
}


module.exports = doQuery