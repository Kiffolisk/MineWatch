/*

WARNING:
this code is shit LOL
if you wanna look through it make sure to have
somewhere to vomit because this sucks ass



i don't wanna fix it either cause im not even good at it LOL just
download this and run it

*/

var path = require('path');
var express = require('express');
var app = express();
var fs = require('fs');

var options = {
  root: __dirname,
  dotfiles: 'deny',
  headers: {
    'x-timestamp': Date.now(),
    'x-sent': true
  }
}

// thank you https://futurestud.io/
function nextInt(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}

// app.use(express.static(path.join(__dirname, 'site')));
app.use(express.static(path.join(__dirname, 'css')));
app.use(express.static(path.join(__dirname, 'counts')));
app.use(express.static(path.join(__dirname, 'assets')));
app.use(express.static(path.join(__dirname, '/')));

let headData = ""

fs.readFile('assets/head.html', function(err, data) {
  if (err){
    headData = "Error loading header data!";
  }else{
    headData = data;
  }
});

let guideData = ""

fs.readFile('assets/guideTranscript.txt', function(err, data) {
  if (err){
    guideData = "";
  }else{
    guideData = data;
    //console.log("set guide transcript to " + data)
  }
});

app.get('/assets/:name', function(req, res, next){
  var fileName = "/assets/" + req.params.name;
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      // console.log('Sent:', fileName)
    }
  })
});

app.get('/:name.html', function(req, res, next){
  res.redirect(req.params.name)
});

app.get('/index', function(req, res, next){
  var fileName = "site/index.html"
  /*res.sendFile("/assets/head.html", options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log("Adding header")
    }
  })*/
  console.log("-------------------------------\nGetting header")
  express.static(path.join(__dirname, fileName))
  fs.readFile(fileName, function(err, data) {
    if (err){
      res.send(err);
    }else{
      finalData = headData + data + "</body>";
      res.send(finalData);
    }
  });
});

app.get('/', function(req, res, next){
  res.redirect('index')
});

app.get('/req', function(req, res, next){
  var fileName = "site/api.html"
  /*res.sendFile("/assets/head.html", options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log("Adding header")
    }
  })*/
  console.log("-------------------------------\nGetting header")
  express.static(path.join(__dirname, fileName))
  fs.readFile(fileName, function(err, data) {
    if (err){
      res.send(err);
    }else{
      finalData = headData + data + "</body>";
      res.send(finalData);
    }
  });
});

app.get('/req/', function(req, res, next){
  var fileName = "site/api.html"
  /*res.sendFile("/assets/head.html", options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log("Adding header")
    }
  })*/
  console.log("-------------------------------\nGetting header")
  express.static(path.join(__dirname, fileName))
  fs.readFile(fileName, function(err, data) {
    if (err){
      res.send(err);
    }else{
      finalData = headData + data + "</body>";
      res.send(finalData);
    }
  });
});

app.get('/req/cameraCount', function(req, res, next){
  var fileName = "counts/cameras.txt"
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log("----\nSent camera count\n---")
    }
  })
});

app.get('/req/totalCameraCount', function(req, res, next){
  var fileName = "counts/total.txt"
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log("---\nSent total camera count")
    }
  })
});

app.get('/guide', function(req, res, next){
  var fileName = "site/guide.html"
  /*res.sendFile("/assets/head.html", options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log("Adding header")
    }
  })*/
  express.static(path.join(__dirname, fileName))
  fs.readFile(fileName, function(err, data) {
    if (err){
      res.send(err);
    }else{
      finalData = headData + data + "</body>";
      if (guideData == ""){
        guideData = "Failed to load guide transcript! This can be because your wifi's download speeds are low. Try connecting to a better network or try again. If that doesn't help either, it's probably a server problem and will be fixed soon.";
      }
      finalGuideData = ""
      splitData = guideData.toString().split("\n")
      for (i = 0; i < splitData.length; i++) {
        if (!splitData[i].startsWith("<") || !splitData[i].startsWith("\t<")){
          finalGuideData += "<p class=\"normalCenter\">" + splitData[i] + "</p>\n"
        }
      }
      finalData = finalData.replace("<!--guideTranscript-->", finalGuideData);
      res.send(finalData);
    }
  });
});

app.get('/cams', function(req, res, next){
  var fileName = "site/cameras.html"
  express.static(path.join(__dirname, fileName))
  fs.readFile(fileName, function(err, data) {
    if (err){
      res.send(err);
    }else{
      finalData = headData + data + "</body>";
      for (var i = 0; i < 4; i++){
        lol = "<div class=\"oCams\">"
        for (var j = 0; j < 3; j++){
          lol += "<table><tbody><tr><td><div class=\"camSpot\"><img class=\"literallyNothing\">" + "ID: " + nextInt(1,9999).toString() + "</div></td></tr></tbody></table>"
        }
        lol += "</div>";
        finalData = finalData.replace("<!--cameraLine-->", lol);
      }
      res.send(finalData);
    }
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT)
module.exports = app;