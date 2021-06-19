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