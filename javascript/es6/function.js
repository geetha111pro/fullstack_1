arrowFun = (studentsDept)=>{
    console.log (studentsDept);
}
arrowFun (["AIML","CSE","IT"]);


arrowFun = (studentsDept)=>{
    return studentsDept[0]
}
console.log(arrowFun(["AIML","CSE","IT"]));