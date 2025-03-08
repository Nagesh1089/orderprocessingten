const express = require("express");
const {
  register,
  login,
  refreshToken,
} = require("../controllers/authController");

const router = express.Router();

console.log("✅ Auth Routes Loaded"); 

router.post("/register", register);
router.post("/login", login);
router.post("/refresh", refreshToken);
router.get("/test", (req, res) => {
  res.json({ message: "Auth routes working!" });
});

module.exports = router;
