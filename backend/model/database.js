const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./shop.db", (err) => {
    if (err) console.error("Database connection failed:", err);
    else console.log("Connected to SQLite database.");
});

// Create tables if not exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        price REAL,
        image TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS cart (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        product_id INTEGER,
        quantity INTEGER,
        FOREIGN KEY(product_id) REFERENCES products(id)
    )`);
});

module.exports = db;
