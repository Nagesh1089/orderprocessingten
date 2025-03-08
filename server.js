require("dotenv").config();
const express = require("express");
const db = require("./config/db");
const redisClient = require("./config/redis");
const authRoutes = require("./routes/authRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/orders", orderRoutes);

console.log("✅ Registered Routes:");
console.log(app._router.stack.map((r) => (r.route ? r.route.path : undefined)));

app.listen(3000, () => console.log("Server running on port 3000"));
