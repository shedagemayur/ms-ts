import http from "http";
import app from "./app";

const server = http.createServer(app);
const SERVER_PORT = process.env.SERVER_PORT || 3000;

server.listen(SERVER_PORT, () => {
    console.log(`Server is listening on port ${SERVER_PORT}`);
});