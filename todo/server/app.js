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
  parsed.push({ id: randomId.nanoid(), ...req.body });
  fs.writeFileSync("./data.json", JSON.stringify(parsed));
  res.send("Successfully added event");
});

app.put("/:id", (req, res) => {
  const parsedJson = JSON.parse(readFile("./data.json"));
  const updatedData = req.body;
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

app.listen(3000, () => {
  console.log("Start");
});
