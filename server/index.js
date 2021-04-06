const express = require("express");

const app = express();
const server = require("http").Server(app);

const PORT = 3560; 

app.use(express.static("./"));
server.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));