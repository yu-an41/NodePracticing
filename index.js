const express = require('express');

// 建立web server物件
const app = express();

app.get('/', (req, res) => {
    res.send(`<h2>你好！</h2>`);
})

app.listen(3000, ()=> {
    console.log('server started');
});