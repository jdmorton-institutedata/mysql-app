const express = require("express");
const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

require("dotenv").config();
require("./config/database");
require("./models");

// parse requests of content-type - application / json;
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {explorer: true}));

// add user routes
app.use("/users", require("./routes/userRoutes"));
// add post routes
app.use("/posts", require("./routes/postRoutes"));
// add comment routes
app.use("/comments", require("./routes/commentRoutes"));
// add like routes
app.use("/likes", require("./routes/likeRoutes"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my MongoDB application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
