import express from "express";
import * as path from "path";

const server = express();
const HTTP_PORT = process.env.PORT || 8080;

server.use(
  express.static("./public"),
);

server.get('/*', function(req, res) {   
  res.sendFile(path.join(__dirname, './public/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
});

server.listen(HTTP_PORT, () => {
  console.log(`Server is up on port ${HTTP_PORT}.`);
});;