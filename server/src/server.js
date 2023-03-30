const log = console.log;
const PORT = process.env.PORT || 8000;
const app = require("./app");
const http = require("http");
const server = http.createServer(app);
const { loadPlanetsData } = require("./models/planets.model");
const { start } = require("repl");

async function startServer() {
  await loadPlanetsData();

  server.listen(PORT, () => {
    log(`Listening on port ${PORT} 👀`);
  });
}

startServer();
