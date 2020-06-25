import express from "express";

const server = express();
const HTTP_PORT = process.env.PORT || 8080;

server.use(
  express.static("./public"),
);

server.listen(HTTP_PORT, () => {
  console.log(`Server is up on port ${HTTP_PORT}.`);
});;