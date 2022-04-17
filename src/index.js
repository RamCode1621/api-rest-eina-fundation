require('dotenv').config('../')
const app=require('./server')

const port=process.env.PORT

app.listen(port,()=>{
    console.log(`Server on port ${port}`)
})