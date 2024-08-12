import http from "http";
import { app } from "./app";
const server = http.createServer(app);

// create server
server.listen(process.env.PORT, () => {
  console.log(`Server is connected with port ${process.env.PORT}`);
});
