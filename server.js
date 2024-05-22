import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('db/todos.json'); // Ensure this path is correct
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

server.listen(3000, () => {
  console.log("JSON Server is running");
});

export default server;