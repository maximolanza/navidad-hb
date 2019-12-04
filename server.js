const express = require('express');
const path = require('path');

const app = express();

app.listen(process.env.PORT || 8080);

  app.use(express.static(__dirname+'/dist/webcv'));
  app.get('/',function(req,res){
      res.sendFile(path.join(__dirname+'/dist/webcv/index.html'));
  });
  

  app.use('/*',function(req, res) {
    res.sendfile(__dirname + '../../dist/index.html');
});

/*
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '../../dist/navidadhb'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'../../dist/navidadhb/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);

*/