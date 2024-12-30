//synchronous callback

arrowFunc = (name,a) => {
    console.log(name)
    a()
}

arrowFunc1 = () => {
    console.log("20")
}

arrowFunc("Geetha",arrowFunc1)


//asynchronous callback
arrowFunc2 = (name,a) => {
    console.log(name)
    setTimeout (a,2000)
}

arrowFunc3 = () => {
    console.log("20")
}

arrowFunc2("Geetha",arrowFunc1)


async function funName4() {
    setTimeout(()=>{
        console.log("say");
    },5000);
    console.log(await "tell")
    
}
funName4()


arrowFunc5=async()=>{
    setTimeout(()=>{
        console.log("fine");

    },4000);
    console.log(await "how")
}
arrowFunc5()

funcName().then((a)=>{
    console.log(a);

})
