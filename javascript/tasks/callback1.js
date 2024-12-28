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
arrowFunc = (name,a) => {
    console.log(name)
    setTimeout (a,2000)
}

arrowFunc1 = () => {
    console.log("20")
}

arrowFunc("Geetha",arrowFunc1)
