const jsonServer=require("json-server");
const server=jsonServer.create();
const router=jsonServer.router("./data/db.json");
const middlewares=jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(8000);

module.exports = server