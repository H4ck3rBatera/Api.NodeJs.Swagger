const UserModel = require("../models/testModel");

module.exports = {
  async details(req, res) {
    res.json("details");
  },
  async index(req, res) {
    res.json("index");
  },
  async create(req, res) {
    res.json("create");
  },
  async delete(req, res) {
    res.json("delete");
  },
  async update(req, res) {
    res.json("update");
  },
};
