const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 4001;
const dbConnection = require("./dbConnection");

dbConnection();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

let cards = [
  {
    id: "1",
    name: "First",
    priority: 3,
    status: "todo",
  },
  {
    id: "2",
    name: "Second",
    priority: 1,
    status: "in progress",
  },
  {
    id: "3",
    name: "Third",
    priority: 4,
    status: "in review",
  },
  {
    id: "4",
    name: "Fourth",
    priority: 2,
    status: "done",
  },
];

app.get("/", (req, res) => {
  res.send("Hello world")
});

app.get("/cards", (req, res) => {
  res.send(cards);
});

app.delete("/cards/:cardId", (req, res) => {
  const cardId = req.params.cardId;
  cards = cards.filter((card) => card.id !== cardId);
  res.send(cards);
});

app.post("/cards", (req, res) => {
  const card = req.body;
  cards.push({
    id: Math.random().toString(),
    ...card,
  });
  res.send("Card has been created");
});

app.patch("/cards/:cardId", (req, res) => {
  const cardId = req.params.cardId;
  const card = req.body;
  cards = cards.map((el) => el.id === cardId ? ({...card, id: el.id}) : el);
  res.send("Card updated!");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// hkFgl5qEDNGMYFFF
// mongodb+srv://admin:<password>@kanban-server.xahkpwh.mongodb.net/
// mongodb+srv://admin:hkFgl5qEDNGMYFFF@kanban-server.xahkpwh.mongodb.net/
