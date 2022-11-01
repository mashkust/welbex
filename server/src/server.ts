const http = require('http');
const db = require('./database');
const routing = require('./routing'); 

let server = new http.Server(function(req, res) {
  var jsonString = '';
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  req.on('data', (data) => {
      jsonString += data;
  });

  req.on('end', () => {
      routing.getTableData(req, res, jsonString);
  });
});
server.listen(8000, 'localhost');
