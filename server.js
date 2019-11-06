// const express = require('express');
// const path = require('path');
// const serveStatic = require('serve-static');
//
// let app = express();
// app.use(serveStatic(__dirname + "/dist"));
//
// const port = process.env.PORT || 5000;
// app.listen(port);
//
// console.log('server started '+ port);

const http = require('http')
const fs = require('fs')
const httpPort = 8000

http.createServer((req, res) => {
  fs.readFile('dist/index.html', 'utf-8', (err, content) => {
    if (err) {
      console.log('We cannot open "index.html" file.')
    }

    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8'
    })

    res.end(content)
  })
}).listen(httpPort, () => {
  console.log('Server listening on: http://localhost:%s', httpPort)
})
