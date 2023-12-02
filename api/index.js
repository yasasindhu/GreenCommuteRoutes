const jsonServer=require("json-server");
const server=jsonServer.create();
const router=jsonServer.router("./data/db.json");
const middlewares=jsonServer.defaults();
const port="https://sindhu-green-commute-routes.vercel.app/api";

server.use(middlewares);
server.use(router);

server.listen(port);