const http = require('http');
const fs = require('fs').promises;

const server = http.createServer(async (req, res) => {
    // 如果callback裡面什麼都沒有會一直處於pending直到time-out

    await fs.writeFile(__dirname + '/headers.txt', JSON.stringify(req.headers));
    
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`<h2>${req.url}</h2>`);
    

});

server.listen(3000);