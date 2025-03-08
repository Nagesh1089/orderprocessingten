const express = require("express");
const { createOrder, getOrder } = require("../controllers/orderController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, createOrder);
router.get("/:id", authMiddleware, getOrder);

module.exports = router;
