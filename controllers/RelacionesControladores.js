const RelacionesModelos = require('../models/RelacionesModelos')

class RelacionesControladores{
    crear(datos){
        return new Promise((resolve,reject)=>{
            let promesa = RelacionesModelos.crear(datos)
            if(promesa){
                resolve(promesa)
            }else{
                reject(e)
            }
        })
       
    }
    profesores_materias(){
        return new Promise((resolve,reject)=>{
            let promesa = RelacionesModelos.profesores_materias()
            if(promesa){
                resolve(promesa)
            }else{
                reject(e)
            }
        })
    }
}
module.exports=new RelacionesControladores();