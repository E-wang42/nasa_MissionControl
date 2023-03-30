const log = console.log;
const PORT = process.env.PORT || 8000;
const app = require("./app");
const http = require("http");
const server = http.createServer(app);

server.listen(PORT, () => {
  log(`Listening on port ${PORT} 👀`);
});
