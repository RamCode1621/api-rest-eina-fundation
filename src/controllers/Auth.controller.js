const ControllerAuthentication=[]
const pool=require('../database')
const jwt=require('jsonwebtoken')
// const encryptPassword=require('../functions/bcrypt')

ControllerAuthentication.authentication=async(req,res)=>{
    const {cedula, password,typeCout}=req.body
 
    let data = await verifyIdentity(cedula,password,typeCout)

    if(!data){ 
        res.status(401).json({message:"Error: El usuario no existe o las credenciales son incorrectas"}) 
    }else if(data.error){
        res.status(401).json({message:data.error})
    }else if(data.error_server){
        res.status(500).json({message:data.error_server})
    }else{
        data={
            ...data,
            rol:typeCout 
        }
    
        const accessToken=await generateJWT({...data})
        res.json({
            infoUser:data,
            accessToken
        })
    }
}

const generateJWT=async(payload)=>{
    return jwt.sign(payload,process.env.JWT_SECRET,{expiresIn:`${process.env.JWT_EXPIRES_IN}`})
}

const verifyIdentity=async(cedule,password,typeCout)=>{
    return new Promise((resolve,reject)=>{
        let query=`call eina_fundation.verifyIdentity('${typeCout}','${cedule}','${password}');`

        if(typeCout=='administrador' || typeCout=='profesor'){
            try {
                pool.query(query)
                .then(result=>{
                    resolve(result[0][0])
                })
            } catch (error) {
                resolve({error:error})  
            }
        }else{
            resolve({error_server:"Error: Para parametro de consulta no valido"})
        }
    })
}

module.exports=ControllerAuthentication