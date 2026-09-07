import "dotenv/config";
import express from "express";
import { DEFAULT_PORT } from "./constants";

const app = express();
const PORT = Number(process.env.PORT ?? DEFAULT_PORT);

app.use(express.json());

const server = app.listen(PORT);

server.on("listening", () => {
  const address = server.address();
  const port = address && typeof address === "object" ? address.port : PORT;
  console.log(`Portfolio API listening on port ${port}`);
});

server.on("error", (err: NodeJS.ErrnoException) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use by another process.`);
  } else {
    console.error(`Failed to start server: ${err.message}`);
  }
  process.exit(1);
});
