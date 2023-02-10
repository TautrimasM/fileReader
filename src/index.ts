import express from "express";
import { getList, scanFiles } from "./helper";
const app = express();
const port = 3000;

let state = getList();

app.get("/list", (req, res) => {
  res.send(state);
});

app.get("/scan", (req, res) => {
  state = scanFiles();
  res.send("Files scanned.");
});

app.get("/download-state", (req, res) => {
  const fileName = "state.json";
  const fileType = "application/json";
  res.setHeader("Content-Type", fileType);
  res.setHeader("Content-disposition", "attachment; filename=" + fileName);
  res.send(state);
});

app.listen(port, () => {
  console.log(`FileReader is listening on port ${port}`);
});
