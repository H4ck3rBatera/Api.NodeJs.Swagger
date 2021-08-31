const express = require("express");
const routes = express.Router();

const TestController = require("./controllers/testController");

routes.get("/api/tests/:id", TestController.details);
routes.get("/api/tests", TestController.index);
routes.post("/api/tests", TestController.create);
routes.delete("/api/tests/:id", TestController.delete);
routes.put('/api/tests',TestController.update);

module.exports = routes;