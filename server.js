require("dotenv").config();

// Database
const db = require("./config/database");
// create tables
const models = require("./models");
models.init();

const app = require("./app");

console.log("NODE_ENV: ", process.env.NODE_ENV);


// Swagger
if (process.env.NODE_ENV === 'development') {
  const swaggerUi = require('swagger-ui-express');
  const swaggerSpec = require('./swagger/swaggerSpec');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec.default));
}

// set port, listen for requests
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
