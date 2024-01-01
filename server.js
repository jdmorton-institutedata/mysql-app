require("dotenv").config();
const { handleInvalidJson, handleUnauthorized, handleNotFound, handleAllOtherErrors } = require("./errors/errorHandler");
const morganMiddleware = require("./logging/morganMiddleware");
// Database
const db = require("./config/database");
// create tables
const models = require("./models");
models.init();

const app = require("./app");
const Logger = require("./logging/logger");

// Swagger
if (process.env.NODE_ENV === 'development') {
  const swaggerUi = require('swagger-ui-express');
  const swaggerSpec = require('./swagger/swaggerSpec');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec.default));
}

app.use(morganMiddleware);

// // Routes
app.use("/api/users", require("./routes/userRoutes"));
// add post routes
app.use("/api/posts", require("./routes/postRoutes"));
// add comment routes
app.use("/api/comments", require("./routes/commentRoutes"));
// add like routes
app.use("/api/likes", require("./routes/likeRoutes"));

// Add error handler middleware functions to the pipeline
app.use(handleInvalidJson);
app.use(handleUnauthorized);
app.use(handleNotFound);
app.use(handleAllOtherErrors);

// set port, listen for requests
const PORT = process.env.PORT || 8081;

app.listen(PORT, () => {
  Logger.debug(`Server is running on port ${PORT}.`);
});
