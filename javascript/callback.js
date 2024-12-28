databaseSharing=()=>{
    console.log("database stored successfully");
}

function submitform(formMsg,dbs){
    dbs();
    console.log(formMsg);
}

submitform("form submitted successfully",databaseSharing)

                             