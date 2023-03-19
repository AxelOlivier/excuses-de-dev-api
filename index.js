const http = require('http');
const express = require('express');
const cors = require('cors');
const index = require('./routes');


const app = express();
app.use(cors());
app.use(express.json());
app.use("/",index);


const PORT = 8080;
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Excuse-de-Dev listening on port ${PORT}!`);
});
