const http = require('http');;
const app2 = require('./search_api')

const port = process.env.port || 4000;
const server = http.createServer(app2);
server.listen(port);