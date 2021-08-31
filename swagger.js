const swaggerAutogen = require("swagger-autogen")();

const outputFile = "./swagger_output.json";
const endpointsFiles = ["./src/routes"];

const doc = {
  info: {
    version: "1.0.0",
    title: "Api.NodeJs.Swagger",
    description: "Documentation | Api.NodeJs.Swagger",
  },
  host: "localhost:3000",
  basePath: "/",
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
};

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
  require("./server");
});
