const express = require('express');
const history = require('connect-history-api-fallback');

let app = express();
app.use(history()) //redirects calls to subpages to index.html - https://router.vuejs.org/guide/essentials/history-mode.html#native-node-js
app.use(express.static('src'));
app.get('/', (req, res) => {
    res.sendFile('src/index.html');
})

const port = process.env.PORT || 5000;
app.listen(port);

console.log('server started '+ port);
