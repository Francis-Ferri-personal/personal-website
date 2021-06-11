import Server from './server/server';

// Start the server
const PORT = Number(process.env.PORT) || 8080;

const server = Server.init(PORT);

server.start(() => {
const server = Server.init(PORT);
    console.log("Servidor corrriendo por el " + PORT);
})