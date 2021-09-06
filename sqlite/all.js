const sqlite3 = require("sqlite3").verbose();

// open the database
let db = new sqlite3.Database("./db/chinook.db");

let sql = `SELECT DISTINCT Name name FROM playlists
ORDER BY name`;

db.all(sql, [], (err, rows) => {
  if (err) {
    throw err;
  }
  rows.forEach((row) => {
    console.log(row.name);
  });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
  }
  console.log("Close the database connection.");
});
