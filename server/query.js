import Database from "better-sqlite3";
const db = new Database("database.db");

//Retrieve all messages from table
const messages = db.prepare("SELECT * FROM messages").all();
console.log("messages", messages);

//retreieve message when it says NICHOLAS
const specificMessages = db
  .prepare("SELECT * FROM messages where name =?")
  .all("NICHOLAS");
console.log("specific messages", specificMessages);

//retrieve message when it says rest in peace
const specificWord = db
  .prepare("SELECT * FROM messages where message =?")
  .all("Rest In Peace");
console.log("specificWord", specificWord);
