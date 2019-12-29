let express = require('express');
let cors = require('cors');
let bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const port = process.env.port || 3000;

let MongoClient = require('mongodb').MongoClient;
dbConfig = 'mongodb://localhost:27017/new_users';
var db;

MongoClient.connect(dbConfig, function (err, client) {
    if (err) throw err
    db =  client.db("new_users");

    app.listen(port, () => {
        console.log('Connected to port ' + port);
    });

    /* db.collection("user-info").deleteMany({firstname: "abc"}, (error) => {
        if(error) throw error;
        console.log("ABC records deleted");
    }) */
});


app.get("/get-user-info", (req, res) => {
        db.collection("user-info").find().toArray(function (err, result) {
            if (err) throw err
            res.send(JSON.stringify(result));
        });
});

app.post("/post-user-info", (req, res, next) => {
    //var User = req.body;
    db.collection("user-info").insertOne({firstname: req.body.firstname, lastname: req.body.lastname}, (error, response)=> {
        if(error) throw error;
        console.log("Document inserted");
    })
    res.send("Post Successful")
}, (error) => {
    return next(error)
});

app.use(function (err, req, res, next) {
    console.error(err.message); // Log error message in our server's console
    if (!err.statusCode) err.statusCode = 500; // If err has no specified error code, set error code to 'Internal Server Error (500)'
    res.status(err.statusCode).send(err.message); // All HTTP requests must have a response, so let's send back an error with its status code and message
});