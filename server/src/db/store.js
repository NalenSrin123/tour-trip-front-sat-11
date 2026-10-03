const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "..", "..", "data", "db.json");


const DEFAULT_DB = {
  categories: [
    { id: 1, name: "Cultural" },
    { id: 2, name: "Adventure" },
  ],
  destinations: [
    { id: 1, name: "Siem Reap" },
    { id: 2, name: "Phnom Penh" },
  ],
  tours: [],
};

function ensureDbFile() {
  if (!fs.existsSync(DB_PATH)) {
    fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
    fs.writeFileSync(DB_PATH, JSON.stringify(DEFAULT_DB, null, 2));
  }
}

function readDb() {
  ensureDbFile();
  return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
}

function writeDb(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

function nextId(rows) {
  return rows.reduce((max, row) => Math.max(max, row.id), 0) + 1;
}

module.exports = { readDb, writeDb, nextId };