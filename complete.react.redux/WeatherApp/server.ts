import express from "express";

const server = express();
const HTTP_PORT = process.env.PORT || 3000;

server.use(
  express.static("./public"),
  express.static("..")
);

server.listen(HTTP_PORT, () => {
  console.log(`Server is up on port ${HTTP_PORT}.`);
});