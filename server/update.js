import Database from "better-sqlite3";
const db = new Database("database.db");

//update the name where Nicholas was to Nikolai
const updateName = db.prepare(
  `UPDATE messages
    SET name =?
    WHERE name =?`
);

updateName.run("Nikolai", "NICHOLAS");

//update the message where message was Rest In Peace to Rest In Pepporoni
const updateMessage = db.prepare(
  `UPDATE messages
    SET message =?
    WHERE message =?`
);

updateMessage.run("Rest in pepporoni", "Rest In Peace");

console.log("new updated name and message");
