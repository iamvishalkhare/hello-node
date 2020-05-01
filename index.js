const express = require('express');
// Express Initialize
const app = express();
app.get('/', function (req, res) {
    res.send('Hello World! from Vishal v5');
});

app.listen(process.env.PORT || 8000, () => {
    console.log('listen port 8000');
});
