import Database from "better-sqlite3";
const db = new Database("database.db");

db.exec(`
CREATE TABLE IF NOT EXISTS messages(
    name TEXT,
    message TEXT
)`);

const insertStatement = db.prepare(
  `INSERT INTO messages (name, message) VALUES(?,?)`
);
insertStatement.run("NICHOLAS", "youre the best");
insertStatement.run("Bishu", "Rest In Peace");
insertStatement.run("Squidward", "Stoned like my face");
