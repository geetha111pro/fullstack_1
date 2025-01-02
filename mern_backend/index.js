//server creation code
var express = require('express')
var app = express()
const PORT = 3001;

app.get('/', (req, res) => {
    res.send("Welcome to Backend server");//first triggered is shown in the output
});

app.get('/', (req, res) => {
    res.json({
        server: "Welcome to Backend",
        url: "localhost",
        port: PORT
    });
});

app.get('/static1', (req,res)=>{
    res.sendFile("C:/22ALR019/GEETHA (22ALR019)/mern_fullstack/mern_backend/static1.html")
})

app.get('/static2', (req,res)=>{
    res.sendFile("C:/22ALR019/GEETHA (22ALR019)/mern_fullstack/mern_backend/static2.html")
})
app.get('/Static',(req,res)=>{
  res.sendFile('C:/22ALR019/GEETHA (22ALR019)/mern_fullstack/index.html')
})
app.listen(PORT,()=>{
    console.log(`Backend server started \n Url: http://localhost:${PORT}`)
})