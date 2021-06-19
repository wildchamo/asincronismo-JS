const somethingWillHappend = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('todo bien pai');
        } else{
            reject('No se pudo : (');
        }
    })
};


somethingWillHappend ()
 .then(response=> console.log(response))
 .catch(err=>console.log(err))



const somethingWillHappend2 = () =>{
    return new Promise((resolve,reject)=>{
        if(true){
            setTimeout(()=>{
                resolve('true');
            },2000)
        }else{
            const error= new Error('paila');
            reject(error);
        }
    });
}

 somethingWillHappend2 ()
  .then(response=> console.log(response))
  .catch(err => console.error(err))



  //correr promesas al mismo tiempo, retornar un arreglo con los resultados
   
  Promise.all([somethingWillHappend(),somethingWillHappend2()])
    .then(response =>{
        console.log('array or results',response)
    })
    .catch(err =>{
        console.error(err);
    })