const http = require('http');

const server = http.createServer((req, res) => {

    const url = req.url;
    const method = req.method;
    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Create User</title><head>');
        res.write('<body><h1>Welcome! Please, put insert a username below</h1>');
        res.write('<label>Username:<form action="/create-user" method="POST"><input type="text" name="username"><button type="submit">Send</button></form></label></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/users' && method === 'POST') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>List</title><head>');
        res.write('<body><h1>Users</h1>');
        res.write('<ul><li>user 1</li><li>user 2</li><ul></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/create-user') {
        const body = [];
        req.on('data', chunk => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody.split('=')[1]);
        });
        res.statusCode = 302;
        res.setHeader('Loation', '/');
        res.end();
    }
});

server.listen(3000);