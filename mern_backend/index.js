//server creation code
var express = require('express');
var app = express();
var path = require('path')
var mdb = require('mongoose')
var User = require("./models/users") //User same as in  var newUser = new User({})
const PORT = 3001;
const cors = require('cors');
const env=require('dotenv')
env.config()
app.use(express.json())//recogonise the file as json or else json can't destructure
app.use(cors())


mdb.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB Connection successful");
}).catch(() => {
    console.log("Check your connection string")
})


app.get('/', (req, res) => {
    res.send("Welcome to Backend server");//first triggered is shown in the output
});

app.get('/json', (req, res) => {
    res.json({
        server: "Welcome to Backend",
        url: "localhost",
        port: PORT
    });
});

app.get('/static1', (req, res) => {
    res.sendFile("C:/22ALR019/GEETHA (22ALR019)/mern_fullstack/mern_backend/static1.html")
})

app.get('/static2', (req, res) => {
    res.sendFile("C:/22ALR019/GEETHA (22ALR019)/mern_fullstack/mern_backend/static2.html")
})
app.get('/Static', (req, res) => {
    res.sendFile('C:/22ALR019/GEETHA (22ALR019)/mern_fullstack/index.html')
})

app.post('/user', (req, res) => {
    // console.log(req.body)
    //var{firstName,lastName,email,password}=req.body //destructure in backend is using {}
    //console.log(firstName,lastName,email,password)
    try {
        var newUser = new User(req.body)
        newUser.save()
        console.log("user added successfully")
        res.status(200).send("user added successfully")

    } catch (error) {
        console.log(error)
    }
})

app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    try {
        var newUser = new User({ firstName: firstName, lastName: lastName, email: email, password: password });
        var newUser = new User(req.body);
        newUser.save()
        console.log("user added successfully");
        res.status(200).send('User added successfully');
    } catch (error) {
        console.error(error);

    }
});

app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        console.log(existingUser);
        console.log(req.body);
        if (existingUser) {
            if (existingUser.password !== password) {
                res.json({ message: "Invalid credentials", isLoggedIn: false })
            }
            else {
                res.json({ message: "Login successfully", isLoggedIn: true })
            }
        }
        else {
            res.json({ message: "user not found", isLoggedIn: false })
        }
    } catch (error) {
        console.error(error);
    }
});

app.get('/getusers', async (req, res) => {
    try {
        var alluserRecords = await (User.find())
        res.json(alluserRecords);
        console.log("Can able to read records")
    } catch (error) {
        console.log("Cannot able to read the record")
    }
});

app.listen(PORT, () => {
    console.log(`Backend server started \n Url: http://localhost:${PORT}`)
})//kick start of server 