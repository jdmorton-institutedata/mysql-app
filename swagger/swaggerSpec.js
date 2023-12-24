const swaggerJSDoc = require("swagger-jsdoc");
// const swaggerDocument = require('./swagger.json');

const swaggerDocument = {
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
}



// {
//   swagger: "2.0",
//   openapi: "3.0.3",
//   info: {
//     title: "NodeJS Express MySql API",
//     version: "1.0.0",
//     description: "NodeJS Express MySql Blog API",
//     license: {
//       name: "MIT",
//       url: "https://choosealicense.com/licenses/mit/",
//     },
//     contact: {
//       name: "Dotnetdudes",
//       url: "https://dotnetdudes.com",
//       email: "john@dotnetdudes.com",
//     },
//   },
//   servers: [
//     {
//       url: "http://localhost:8081",
//       description: "Local server",
//     },
//   ],
//   tags: [
//     {
//       name: "Blog",
//       description: "API for blog posts",
//     },
//   ],
// };

const options = {
  definition: swaggerDocument,
  // Paths to files containing OpenAPI definitions
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

// console.log(swaggerSpec);

exports.default = swaggerSpec;
