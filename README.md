# Api.NodeJs.Swagger
NodeJs + Swagger

## package.json
```json
"scripts": {
    "swagger-autogen": "node swagger.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "swagger-ui-express": "^4.1.6"
  },
  "devDependencies": {
    "swagger-autogen": "^2.11.2"
  }
```

## Dependencies | Swagger
```shell
npm install --save-dev swagger-autogen
npm install swagger-ui-express

npm run swagger-autogen
```

## testController.js
```javascript
module.exports = {
  async details(req, res) {
    const { id } = req.params;
    res.json(id);
  },
  async index(req, res) {
    res.json("index");
  },
  async create(req, res) {
    const { name, email, password } = req.body;
    res.json({ name, email, password });
  },
  async delete(req, res) {
    const { id } = req.params;
    res.json(id);
  },
  async update(req, res) {
    const { id, name, email, password } = req.body;
    res.json({ id, name, email, password });
  },
};
```

## routes.js
```javascript
const express = require("express");
const routes = express.Router();

const TestController = require("./controllers/testController");

routes.get("/api/tests/:id", TestController.details);
routes.get("/api/tests", TestController.index);
routes.post("/api/tests", TestController.create);
routes.delete("/api/tests/:id", TestController.delete);
routes.put("/api/tests", TestController.update);

module.exports = routes;
```

## server.js
```javascript
const express = require("express");
const routes = require("./src/routes");

const app = express();
const port = 3000;

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");
app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());
app.use(routes);

app.listen(port, function () {
  console.log(`Server runing on port ${port}`);
});
```

## swagger.js
```javascript
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
```
