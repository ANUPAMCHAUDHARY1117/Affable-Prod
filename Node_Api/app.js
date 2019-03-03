const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs')
const MongoClient = require('mongodb').MongoClient;
const app = express();
var url = "mongodb://localhost:27017/";

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static(__dirname +'../../dist'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

var data ;
var mongoData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    var myobj = mongoData;
    dbo.listCollections().toArray(function(err, result){
        console.log("RESUlt>>>>>>>>>>>>",result)
        if(result.length > 0){
            dbo.collection("users").drop(function(err, delOK) {
                if (err) throw err;
                if (delOK) console.log("Collection deleted");
              });
        }
    });
    dbo.collection("users").insertMany(myobj, function(err, res, callback) {
      if (err) throw err;
      console.log("Number of documents inserted: " + res.insertedCount);
      dbo.collection("users").find({}).toArray(function(err, result) {
        if (err) throw err;
        data = result;
        console.log(result);
        db.close();
      });
    });
});

app.listen('8080', function(err){
    if(err){
        console.log("Error starting the server");
        return;
    }
    console.log("Server started at Port 8080");
});

app.get('/', (req, res) => {
     res.sendFile(path.join(__dirname + '/index.html'));
})

app.get('/bio', function (req, res){
    var userData = data;
    var sendData = []
    var queryString  = req.query.username;
    console.log("IT has been hit");
    userData.map(function(data){
        if(data.username == queryString){
            sendData.push(data)
            res.send(sendData);
        }
    }) 
});
app.get('/sortdesc', function(req,res){
    var sortDesc = data;
    var sortedData = sortDesc.sort(function(a,b){
        return b.followerCount - a.followerCount;
    });
    res.send(sortedData);
});

app.get('/sortasc', function(req,res){
    console.log("SORTASC")
    var sortAsc = data;
    var sortedData = sortAsc.sort(function(a,b){
        return a.followerCount - b.followerCount;
    });
    res.send(sortedData);
});

app.get('/sortengasc', function(req, res){
    var sortEng = data;
    var sortedData = sortEng.sort(function(a,b){
        return a.followerCount*(a.stats.engagement.avgCommentsRatio + a.stats.engagement.avgLikesRatio) - b.followerCount*(b.stats.engagement.avgCommentsRatio + b.stats.engagement.avgLikesRatio);
    });
    res.send(sortedData);
});

app.get('/sortengdesc', function(req, res){
    var sortEng = data;
    var sortedData = sortEng.sort(function(a,b){
        return b.followerCount*(b.stats.engagement.avgCommentsRatio + b.stats.engagement.avgLikesRatio) - a.followerCount*(a.stats.engagement.avgCommentsRatio + a.stats.engagement.avgLikesRatio);
    });
    res.send(sortedData);
});