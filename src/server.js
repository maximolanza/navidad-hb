const express = require('express');
const path = require('path');

const app = express();

app.listen(process.env.PORT || 8080);

  app.use(express.static(__dirname+'/dist/navidadhb'));
  app.get('/',function(req,res){
      res.sendFile(path.join(__dirname+'/dist/navidadhb/index.html'));
  });
  

  app.use('/*',function(req, res) {
    res.sendfile(__dirname + '../../dist/index.html');
});