const express = require("express");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

const app = express();
const PORT = 3000;

app.use(express.json());

let items = [{ id: 1, name: "Item 1" }];

//CRUD
app.get("/items", (req, res) => {
  res.json(items);
});

app.post("/items", (req, res) => {
  const item = {
    id: items.length + 1,
    name: req.body.name,
  };

  items.push(item);
  res.status(201).send(item);
});

app.put("/items/:id", (req, res) => {
  const item = items.find((item) => item.id === parseInt(req.params.id));
  if (!item) return res.status(404).send("Item not found");

  item.name = req.body.name;
  res.send(item);
});

app.delete("/items/:id", (req, res) => {
  items = items.filter((item) => item.id !== parseInt(req.params.id));
  res.status(204).send();
});

//Swagger UI setup
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log("object");
});
