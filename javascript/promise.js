//location finder -> sync

//Promise { 'train arrived' }
function locationfinder(){
    let train = 7;
    return new Promise((resolve,reject)=>{
        if (train == 7){
            resolve ("train arrived")
        }
        else{
            reject("not arrived")
        }
    });

}
console.log( locationfinder())


//Promise { <pending> }
//train arrived
function locationfinder(){
    let train = 7;
    return new Promise((resolve,reject)=>{
        if (train == 7){
            resolve ("train arrived")
        }
        else{
            reject("not arrived")
        }
    });

}
console.log( locationfinder().then((resolveMsg)=>{
    console.log(resolveMsg)
})
)

//error
function locationfinder(){
    let train = 0;
    return new Promise((resolve,reject)=>{
        if (train == 7){
            resolve ("train arrived")
        }
        else{
            reject("not arrived")
        }
    });

}
console.log( locationfinder())
