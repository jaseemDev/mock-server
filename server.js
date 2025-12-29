const josnServer = require("json-server");
const server = josnServer.create();
const router = josnServer.router("db.json");
const middlewares = josnServer.defaults();
const port = 3000;
server.use(middlewares);
server.use(router);
server.listen(port, () => {
  console.log(`JSON Server is running at http://localhost:${port}`);
});
