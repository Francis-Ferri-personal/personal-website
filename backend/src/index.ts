import Server from './server/server';

const port = 8080;
const server = Server.init(port);

server.start(() => {
const server = Server.init(port);
    console.log("Servidor corrriendo por el " + port);
})