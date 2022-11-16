const http=require('http');
const routes=require('./route1');

const server=http.createServer(routes);

server.listen(4000);