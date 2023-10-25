const express = require('express');
const MongoClient = require('mongodb').MongoClient;

const app = express();

app.use('/', express.static(__dirname+"/wwwroot"));

app.listen(8000);

app.get('/options', function(request, response){
    const url = 'mongodb://127.0.0.1:27017/';
    const mongoClient = new MongoClient(url);
    async function connectDB() {
        try { 
            await mongoClient.connect();
            const bcDatabase = mongoClient.db("BC");
            const optionsCollection = bcDatabase.collection("Options"); 
            const optionsArray = await optionsCollection.find().toArray();
            let resultJSON = { 
                "options" : optionsArray
            };
            response.setHeader('Content-Type', 'application/json');
            response.send(JSON.stringify(resultJSON));
        }
        catch (error) { console.error(error); }
    }
    
    connectDB();
});