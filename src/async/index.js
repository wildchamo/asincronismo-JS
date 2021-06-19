
const doSomethingASync =  () =>{
    return new Promise ((resolve,reject)=>{
        (true)
        ? setTimeout(()=> resolve ('doSomething async'),3000)
        : reject(new Error('Test error'))
    });
}


const doSomething =  async () => {
    const something = await doSomethingASync();
    console.log(something);
}

console.log('before1');
doSomething();
console.log('after1');

const anotherFunction = async () =>{
    try{
        const something= await doSomethingASync(); 
        console.log(something)
    } catch(error){
        console.error(error)
    }
} 

console.log('before');
anotherFunction();
console.log('after');
