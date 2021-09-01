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
