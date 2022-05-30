const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");
const randomId = require("nanoid");

const readFile = (path) => fs.readFileSync(path, "utf8");
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  const data = readFile("./data.json");
  res.send(data);
});

app.post("/", (req, res) => {
  const file = readFile("./data.json");
  const parsed = JSON.parse(file);
  parsed.push({ id: randomId.nanoid(), notified: false, ...req.body });
  fs.writeFileSync("./data.json", JSON.stringify(parsed));
  res.send("Successfully added event");
});

app.put("/:id", (req, res) => {
  const parsedJson = JSON.parse(readFile("./data.json"));
  const updatedData = req.body;
  console.log("req.body", req.body);
  const findIndex = parsedJson.findIndex((item) => {
    return item.id === req.params.id;
  });
  if (findIndex !== -1) {
    if (updatedData.title) {
      parsedJson[findIndex].title = updatedData.title;
    }
    if (updatedData.date) {
      parsedJson[findIndex].date = updatedData.date;
    }
    parsedJson[findIndex].completed = updatedData.completed;
    parsedJson[findIndex].notified = updatedData.notified;
    fs.writeFileSync("./data.json", JSON.stringify(parsedJson));
    res.json({ success: true });
  } else {
    res.status(404).json({
      success: false,
      error: "Cant update",
    });
  }
});
app.delete("/:id", (req, res) => {
  const parsedJson = JSON.parse(readFile("./data.json"));
  const findIndex = parsedJson.findIndex((item) => {
    return item.id === req.params.id;
  });

  if (findIndex >= 0) {
    parsedJson.splice(findIndex, 1);
    fs.writeFileSync("./data.json", JSON.stringify(parsedJson));
    res.json({ success: true });
  } else {
    res.status(404).json({ success: false, error: "Cant delete" });
  }
});

const todoReminder = () => {
  const file = readFile("./data.json");
  const parsedTodos = JSON.parse(file);
  let changed = false;
  const filteredData = parsedTodos.map((item) => {
    if (!item.notified) {
      const difference = Math.floor(Date.now() - new Date(item.date).getTime());
      if (difference > 0 && difference < 120000) {
        console.log(`Your time is up to 2 minutes`);
        item.notified = true;
        changed = true;
      }
    }
    return item;
  });
  if (changed) {
    fs.writeFileSync("./data.json", JSON.stringify(filteredData));
  }
};
app.listen(3000, () => {
  console.log("Start");
  setInterval(todoReminder, 60000);
});
