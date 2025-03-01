const express = require("express");
const cors = require("cors");
const multer = require("multer");
const db = require("./model/database");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Serve images

// Storage for Images
const storage = multer.diskStorage({
    destination: "uploads/",
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// GET /products - Fetch all products
app.get("/products", (req, res) => {
    db.all("SELECT * FROM products", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// POST /products - Add a product (with image)
app.post("/products", upload.single("image"), (req, res) => {
    const { name, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;
    db.run("INSERT INTO products (name, price, image) VALUES (?, ?, ?)", [name, price, image], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, name, price, image });
    });
});

// GET /cart - Fetch all cart items
app.get("/cart", (req, res) => {
    db.all(`SELECT cart.id, products.name, products.price, products.image, cart.quantity
            FROM cart
            JOIN products ON cart.product_id = products.id`, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

// POST /cart - Add product to cart
app.post("/cart", (req, res) => {
    const { product_id, quantity } = req.body;
    db.run("INSERT INTO cart (product_id, quantity) VALUES (?, ?)", [product_id, quantity], function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ id: this.lastID, product_id, quantity });
    });
});

// DELETE /cart/:id - Remove from cart
app.delete("/cart/:id", (req, res) => {
    db.run("DELETE FROM cart WHERE id = ?", req.params.id, function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ deleted: this.changes });
    });
});

// POST /checkout - Clear cart
app.post("/checkout", (req, res) => {
    db.run("DELETE FROM cart", function (err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Checkout successful, cart cleared!" });
    });
});

// Start Server
app.listen(5000, () => console.log("Server running on port 5000"));
