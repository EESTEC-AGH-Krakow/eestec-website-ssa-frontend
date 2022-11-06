const express = require('express');

let app = express();
app.use(express.static('src'));

const port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);
