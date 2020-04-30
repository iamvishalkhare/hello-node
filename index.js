const express = require('express');
// Express Initialize
const app = express();
app.get('/', function (req, res) {
res.send('Hello World! from Vishal');
});

app.listen(process.env.PORT || 8000,()=> {
console.log('listen port 8000');
});
