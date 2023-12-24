const express = require("express");
const app = express();
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUi = require('swagger-ui-express');

// const swaggerSpec = require('./swagger/swaggerSpec');

require("dotenv").config();
require("./config/database");
require("./models");

const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'My API',
      version: '1.0.0',
      description: 'A sample API for learning Swagger',
    },
    servers: [
      {
        url: 'http://localhost:8081',
      },
    ],
  },
  apis: ['./routes/*.js'],
};


const swaggerDocs = swaggerJSDoc(swaggerOptions);

console.log(swaggerDocs);

// parse requests of content-type - application / json;
app.use(express.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// add user routes
app.use("/users", require("./routes/userRoutes"));
// add post routes
app.use("/posts", require("./routes/postRoutes"));
// add comment routes
app.use("/comments", require("./routes/commentRoutes"));
// add like routes
app.use("/likes", require("./routes/likeRoutes"));

app.get("/", (req, res) => {
  res.json({ message: "Welcome to my Blog application." });
});
// set port, listen for requests
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
