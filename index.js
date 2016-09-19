const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('Hello dude');
});

app.listen(process.env.PORT || 8080);
